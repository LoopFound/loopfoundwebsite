type RequestLike = { method?: string; headers: Record<string, string | string[] | undefined>; body?: unknown };
type ResponseLike = { setHeader: (name: string, value: string) => void; status: (code: number) => Pick<ResponseLike, "json">; json: (body: unknown) => void };

const requests = new Map<string, number[]>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;

const getHeader = (headers: RequestLike["headers"], name: string) => {
  const value = headers[name];
  return Array.isArray(value) ? value[0] : value;
};

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);

export default async function handler(request: RequestLike, response: ResponseLike) {
  response.setHeader("Cache-Control", "no-store");

  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  const origin = getHeader(request.headers, "origin");
  const host = getHeader(request.headers, "host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        response.status(403).json({ error: "Request origin is not allowed." });
        return;
      }
    } catch {
      response.status(403).json({ error: "Request origin is not allowed." });
      return;
    }
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

  const ip = getHeader(request.headers, "x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (requests.get(ip) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    response.status(429).json({ error: "Please wait before sending another message." });
    return;
  }
  requests.set(ip, [...recent, now]);

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
