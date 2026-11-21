import { describe, expect, it } from "vitest";
import { campaignSlug, eventProperties, explicitConsentAllows, publicPagePath } from "../marketing-rules";

describe("privacy-conscious measurement rules", () => {
  it("blocks optional analytics until explicit consent", () => {
    expect(explicitConsentAllows(null, false)).toBe(false);
    expect(explicitConsentAllows("denied", false)).toBe(false);
    expect(explicitConsentAllows("granted", false)).toBe(true);
  });
  it("lets Global Privacy Control override an earlier grant", () => {
    expect(explicitConsentAllows("granted", true)).toBe(false);
  });
  it("drops names, phones, emails, form contents and raw query strings", () => {
    expect(eventProperties({ page_path: "/contact?email=secret@example.com", full_name: "Private Name", phone: "+971500000000", email: "secret@example.com", project_details: "Confidential scope", whatsapp_url: "https://wa.me/971568400838?text=Secret", form_type: "main" })).toEqual({ page_path: "/contact", form_type: "main" });
  });
  it("does not send private dashboard paths or numerical contact-like campaign identifiers", () => {
    expect(publicPagePath("/owner")).toBe("/");
    expect(campaignSlug("test@example.com")).toBe("");
    expect(campaignSlug("phone971568400838")).toBe("");
    expect(campaignSlug("office_fitout_2026")).toBe("office_fitout_2026");
  });
  it("limits scroll events to the agreed four milestones", () => {
    expect(eventProperties({ percent_scrolled: 10 })).toEqual({});
    expect(eventProperties({ percent_scrolled: 75 })).toEqual({ percent_scrolled: 75 });
  });
});