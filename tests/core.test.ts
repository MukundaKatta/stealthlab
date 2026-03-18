import { describe, it, expect } from "vitest";
import { Stealthlab } from "../src/core.js";
describe("Stealthlab", () => {
  it("init", () => { expect(new Stealthlab().getStats().ops).toBe(0); });
  it("op", async () => { const c = new Stealthlab(); await c.search(); expect(c.getStats().ops).toBe(1); });
  it("reset", async () => { const c = new Stealthlab(); await c.search(); c.reset(); expect(c.getStats().ops).toBe(0); });
});
