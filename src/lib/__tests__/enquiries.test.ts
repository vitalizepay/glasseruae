import { describe, expect, it } from "vitest";
import { enquiryInsert, enquirySchema, enquiryWhatsAppUrl } from "../enquiries";

const input = { full_name: "Test enquiry", phone: "+971500000000", service_needed: "Office Glass Partitions", project_location: "Dubai", project_details: "Glass & aluminium for a fit-out", referral_source: "Facebook" as const };
describe("enquiry handoff and source", () => {
  it("hands off to the company's current WhatsApp number", () => {
    const url = new URL(enquiryWhatsAppUrl(input));
    expect(url.hostname).toBe("wa.me");
    expect(url.pathname).toBe("/971568400838");
    expect(url.searchParams.get("text")).toContain("Glass & aluminium for a fit-out");
  });
  it("stores the Facebook answer with the enquiry", () => {
    expect(enquiryInsert(input).referral_source).toBe("Facebook");
  });
  it("stores each supported source without accepting arbitrary answers", () => {
    expect(enquiryInsert({ ...input, referral_source: "LinkedIn" }).referral_source).toBe("LinkedIn");
    expect(enquirySchema.safeParse({ ...input, referral_source: "unrecognised" }).success).toBe(false);
  });
});