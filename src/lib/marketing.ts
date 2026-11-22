import { canTrack, readChoice } from "@/lib/consent";
import { campaignSlug, eventProperties, explicitConsentAllows, publicPagePath, sourceName, type MarketingEvent } from "@/lib/marketing-rules";

export const TRACKING_CONFIG = {
  // GA4 uses gtag/js with a G- ID, not the GTM container endpoint.
  measurementId: "G-VEJ92D45PT",
  gtmId: import.meta.env.VITE_GTM_CONTAINER_ID || "",
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID || "",
  linkedinPartnerId: import.meta.env.VITE_LINKEDIN_PARTNER_ID || "",
};

type MarketingWindow = Window & { gtag?: (...args: unknown[]) => void; dataLayer?: unknown[] };
export function measurementWindow() { return window as MarketingWindow; }
export function privacySignal() { return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true; }
export async function analyticsAllowed() {
  return explicitConsentAllows(readChoice("analytics"), privacySignal()) && await canTrack("analytics");
}
export async function trackMarketing(event: MarketingEvent, properties: Record<string, unknown> = {}) {
  if (!await analyticsAllowed()) return;
  const data = eventProperties({ page_path: window.location.pathname, ...properties });
  const win = measurementWindow();
  if (/^GTM-[A-Z0-9]+$/.test(TRACKING_CONFIG.gtmId)) win.dataLayer?.push({ event, ...data });
  else if (/^G-[A-Z0-9]+$/.test(TRACKING_CONFIG.measurementId)) win.gtag?.("event", event, { ...data, page_location: `https://www.glasseruae.com${data['page_path'] || "/"}`, page_referrer: "" });
}

export function serviceKey(path: string) {
  if (!/(glass|aluminium|skylight)/.test(path) || path.startsWith("/blog/") || path.startsWith("/projects/")) return "";
  return path.split("/").filter(Boolean).pop()?.replace(/[^a-z-]/g, "") || "";
}

const ATTRIBUTION_KEY = "glasser_visit_attribution";
export function captureAttribution() {
  if (!explicitConsentAllows(readChoice("analytics"), privacySignal())) return;
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;
    const query = new URLSearchParams(location.search);
    let source = query.get("utm_source") || "";
    if (!source && document.referrer) {
      const host = new URL(document.referrer).hostname;
      if (host !== location.hostname) source = host.includes("facebook") ? "facebook" : host.includes("linkedin") ? "linkedin" : host.includes("google") ? "google" : "referral";
    }
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify({
      traffic_source: source ? sourceName(source) : "direct",
      traffic_medium: campaignSlug(query.get("utm_medium") || ""),
      campaign: campaignSlug(query.get("utm_campaign") || ""),
      landing_page: publicPagePath(location.pathname),
    }));
  } catch { /* Attribution is optional; enquiry saving must still work. */ }
}
export function clearAttribution() { try { sessionStorage.removeItem(ATTRIBUTION_KEY); } catch { /* no storage */ } }
export function enquiryAttribution() {
  const fallback = { landing_page: publicPagePath(location.pathname), submitted_page: publicPagePath(location.pathname) };
  if (!explicitConsentAllows(readChoice("analytics"), privacySignal())) return fallback;
  try {
    const saved = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) || "null");
    if (!saved) return fallback;
    return { ...fallback, landing_page: publicPagePath(String(saved.landing_page || "/")), traffic_source: sourceName(String(saved.traffic_source || "direct")), traffic_medium: campaignSlug(String(saved.traffic_medium || "")), campaign: campaignSlug(String(saved.campaign || "")) };
  } catch { return fallback; }
}