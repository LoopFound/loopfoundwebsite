type RequestLike = { method?: string; headers: Record<string, string | string[] | undefined>; body?: unknown };
type ResponseLike = { setHeader: (name: string, value: string) => void; status: (code: number) => Pick<ResponseLike, "json">; json: (body: unknown) => void };

const requests = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const getHeader = (headers: RequestLike["headers"], name: string) => {
  const value = headers[name];
  return Array.isArray(value) ? value[0] : value;
};

// Vercel overwrites x-real-ip / x-vercel-forwarded-for with the true client IP;
// x-forwarded-for can carry client-supplied values, so it is only a last resort.
const getClientIp = (headers: RequestLike["headers"]) =>
  getHeader(headers, "x-real-ip") ??
  getHeader(headers, "x-vercel-forwarded-for")?.split(",")[0]?.trim() ??
  getHeader(headers, "x-forwarded-for")?.split(",").pop()?.trim() ??
  "unknown";

const localLimited = (ip: string) => {
  const now = Date.now();
  const recent = (requests.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  requests.set(ip, [...recent, now]);
  return false;
};

// Shared limit across serverless instances via Upstash Redis REST when configured;
// falls back to the per-instance map if it is unset or unreachable.
const isRateLimited = async (ip: string) => {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return localLimited(ip);
  try {
    const key = `contact:${ip}`;
    const result = await fetch(`${url}/pipeline`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify([["INCR", key], ["EXPIRE", key, String(WINDOW_MS / 1000), "NX"]]),
    });
    if (!result.ok) return localLimited(ip);
    const [count] = (await result.json()) as Array<{ result?: number }>;
    return typeof count?.result === "number" ? count.result > MAX_REQUESTS : localLimited(ip);
  } catch {
    return localLimited(ip);
  }
};

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

export default async function handler(request: RequestLike, response: ResponseLike) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  // Browsers always send Origin (or at least Referer) on a cross-site or fetch POST,
  // so a request carrying neither is not a legitimate form submission and is rejected.
  const host = getHeader(request.headers, "host");
  const source = getHeader(request.headers, "origin") ?? getHeader(request.headers, "referer");
  let sourceHost: string | undefined;
  try {
    sourceHost = source ? new URL(source).host : undefined;
  } catch {
    sourceHost = undefined;
  }
  if (!host || !sourceHost || sourceHost !== host) {
    response.status(403).json({ error: "Request origin is not allowed." });
    return;
  }

  const body = request.body as Record<string, unknown> | undefined;
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  const website = typeof body?.website === "string" ? body.website.trim() : "";

  if (website) {
    response.status(200).json({ ok: true });
    return;
  }

  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 2000) {
    response.status(400).json({ error: "Please check your contact details and try again." });
    return;
  }

  if (await isRateLimited(getClientIp(request.headers))) {
    response.status(429).json({ error: "Please wait before sending another message." });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    response.status(503).json({ error: "Contact is temporarily unavailable. Please email teamloopfound@gmail.com." });
    return;
  }

  const delivery = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`,
      html: `<h2>Website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}<br /><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    }),
  });

  if (!delivery.ok) {
    response.status(502).json({ error: "We could not send your message. Please email teamloopfound@gmail.com." });
    return;
  }

  response.status(200).json({ ok: true });
}
