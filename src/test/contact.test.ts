import { describe, expect, it } from "vitest";
import handler from "../../api/contact";

const run = async (body: unknown, method = "POST") => {
  let statusCode = 0;
  let payload: unknown;
  const headers: Record<string, string> = {};
  await handler(
    { method, headers: { host: "localhost" }, body },
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

  it("allows only POST", async () => {
    const result = await run({}, "GET");
    expect(result.statusCode).toBe(405);
    expect(result.headers.Allow).toBe("POST");
  });
});
