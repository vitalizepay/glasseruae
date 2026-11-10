import { describe, it, expect } from "vitest";
import { validateAdvisorInput } from "../catalogue";
const base = { propertyType: "Villa", emirate: "Dubai", timeline: "Just planning" };
describe("advisor input", () => {
  it("rejects descriptions under 20 characters", () => expect(validateAdvisorInput({ ...base, description: "short" })).not.toBeNull());
  it("rejects descriptions over 2000 characters", () => expect(validateAdvisorInput({ ...base, description: "a".repeat(2001) })).not.toBeNull());
  it("accepts a normal description", () => expect(validateAdvisorInput({ ...base, description: "Replace villa garden sliding doors" })).toBeNull());
});
