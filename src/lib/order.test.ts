import { describe, expect, it } from "vitest";
import { buildOrderMessage } from "./order";
import { waLink } from "@/content/shop";

describe("buildOrderMessage", () => {
  it("lists items with quantities in English", () => {
    const msg = buildOrderMessage("en", [
      { itemId: "atta", qty: "10 kg" },
      { itemId: "sugar", qty: "" },
    ]);
    expect(msg).toBe("Assalam o Alaikum! I'd like to order:\n1. Wheat flour (atta) — 10 kg\n2. Sugar");
  });

  it("writes Urdu item names and adds name, address and extra notes", () => {
    const msg = buildOrderMessage("ur", [{ itemId: "tea", qty: "1 پیکٹ" }], {
      name: " Ali ",
      address: "Station Road",
      extra: "انڈے 12",
    });
    expect(msg).toContain("1. پتی (چائے) — 1 پیکٹ");
    expect(msg).toContain("\n\nمزید: انڈے 12\nنام: Ali\nپتہ: Station Road");
  });

  it("ignores unknown item ids", () => {
    expect(buildOrderMessage("en", [{ itemId: "nope", qty: "1" }])).toBe("Assalam o Alaikum! I'd like to order:");
  });
});

describe("waLink", () => {
  it("encodes the message for wa.me", () => {
    expect(waLink("a b\nc")).toMatch(/^https:\/\/wa\.me\/\d+\?text=a%20b%0Ac$/);
  });
});
