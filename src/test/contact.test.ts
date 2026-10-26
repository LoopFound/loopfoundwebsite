import { describe, expect, it } from "vitest";
import handler from "../../api/contact";

const run = async (body: unknown, method = "POST", extraHeaders: Record<string, string> = { origin: "https://localhost" }) => {
  let statusCode = 0;
  let payload: unknown;
  const headers: Record<string, string> = {};
  await handler(
    { method, headers: { host: "localhost", ...extraHeaders }, body },
    {
      setHeader: (name, value) => { headers[name] = value; },
      status: (code) => { statusCode = code; return { json: (bodyValue) => { payload = bodyValue; } }; },
      json: (bodyValue) => { payload = bodyValue; },
    },
  );
  return { statusCode, payload, headers };
};

describe("contact endpoint", () => {
  it("rejects invalid input before delivery", async () => {
    const result = await run({ name: "A", email: "not-an-email", message: "short" });
    expect(result.statusCode).toBe(400);
    expect(result.headers["Cache-Control"]).toBe("no-store");
  });

  it("silently accepts honeypot submissions without sending", async () => {
    const result = await run({ name: "Valid Name", email: "hello@example.com", message: "A valid enough project message.", website: "bot" });
    expect(result.statusCode).toBe(200);
    expect(result.payload).toEqual({ ok: true });
  });

  it("rejects cross-origin requests", async () => {
    const result = await run({}, "POST", { origin: "https://evil.example" });
    expect(result.statusCode).toBe(403);
  });

  it("rejects requests with neither Origin nor Referer", async () => {
    const result = await run({ name: "Valid Name", email: "hello@example.com", message: "A valid enough project message." }, "POST", {});
    expect(result.statusCode).toBe(403);
  });

  it("falls back to Referer when Origin is absent", async () => {
    const result = await run({ name: "A", email: "bad", message: "short" }, "POST", { referer: "https://localhost/contact" });
    expect(result.statusCode).toBe(400);
  });

  it("allows only POST", async () => {
    const result = await run({}, "GET");
    expect(result.statusCode).toBe(405);
    expect(result.headers.Allow).toBe("POST");
  });
});
