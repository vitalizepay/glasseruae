import { describe, expect, it } from "vitest";
import { enquiryInsert, enquirySchema, enquiryWhatsAppUrl, leadUpdateSchema, LEAD_STATUSES } from "../enquiries";

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
  it("keeps company, service and optional commercial scope as separate stored fields", () => {
    const saved = enquiryInsert({ ...input, company_name: "Example Fit-out", project_type: "Contractor", project_scope: "400 m² office", email: "test@example.com" });
    expect(saved.company_name).toBe("Example Fit-out");
    expect(saved.service_needed).toBe("Office Glass Partitions");
    expect(saved.project_type).toBe("Contractor");
    expect(saved.project_scope).toBe("400 m² office");
  });
  it("never lets a public enquiry set its lead status or owner fields", () => {
    expect(enquirySchema.safeParse({ ...input, status: "Won" }).success).toBe(false);
    expect(enquirySchema.safeParse({ ...input, owner_notes: "private" }).success).toBe(false);
  });
  it("keeps attribution and originating pages with the enquiry", () => {
    const saved = enquiryInsert({ ...input, traffic_source: "facebook", campaign: "office_fitout", landing_page: "/office-glass-partition-dubai", submitted_page: "/contact" });
    expect(saved.traffic_source).toBe("facebook");
    expect(saved.campaign).toBe("office_fitout");
    expect(saved.landing_page).toBe("/office-glass-partition-dubai");
    expect(saved.submitted_page).toBe("/contact");
  });
  it("retains all seven requested follow-up statuses", () => {
    expect(LEAD_STATUSES).toEqual(["New", "Contacted", "Qualified", "Quotation Sent", "Follow-up", "Won", "Lost"]);
    expect(leadUpdateSchema.safeParse({ id: "f9e7aabe-16c8-479c-83b6-78fe81b3983e", status: "Paid", owner_notes: "", follow_up_at: null }).success).toBe(false);
  });
  it("validates optional email and public input size limits", () => {
    expect(enquirySchema.safeParse({ ...input, email: "invalid" }).success).toBe(false);
    expect(enquirySchema.safeParse({ ...input, full_name: "a".repeat(121) }).success).toBe(false);
    expect(enquirySchema.safeParse({ ...input, project_details: "a".repeat(1501) }).success).toBe(false);
  });
});