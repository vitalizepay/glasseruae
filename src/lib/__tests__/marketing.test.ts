import { describe, expect, it } from "vitest";
import { TRACKING_CONFIG } from "../marketing";

describe("requested Google Analytics destination", () => {
  it("uses the supplied GA4 property for existing consent-aware events", () => {
    expect(TRACKING_CONFIG.measurementId).toBe("G-VEJ92D45PT");
  });
});