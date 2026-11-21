export const MARKETING_EVENTS = ["page_view", "service_page_view", "whatsapp_click", "phone_click", "email_click", "quote_form_start", "quote_form_submit", "quote_form_success", "quote_form_error", "project_gallery_view", "contact_page_view", "scroll_depth", "brochure_download"] as const;
export type MarketingEvent = typeof MARKETING_EVENTS[number];
export const SAFE_SOURCES = ["facebook", "linkedin", "google", "instagram", "bing", "direct", "referral", "other"] as const;

export function publicPagePath(value: string) {
  const path = value.split(/[?#]/)[0] || "/";
  if (!/^\/[a-zA-Z0-9/_-]{0,199}$/.test(path) || /^\/(auth|owner|admin|api|lovable|tamilfd|tamilfoodmenu)(\/|$)/.test(path)) return "/";
  return path;
}

export function campaignSlug(value: string) {
  return /^[a-zA-Z][a-zA-Z0-9_-]{0,79}$/.test(value) && !/\d{7}/.test(value) ? value : "";
}

export function sourceName(value: string) {
  const lower = value.toLowerCase();
  return SAFE_SOURCES.find(source => source === lower) || "other";
}

/** Only known, non-personal dimensions can cross into measurement providers. */
export function eventProperties(input: Record<string, unknown>) {
  const output: Record<string, string | number> = {};
  if (typeof input['page_path'] === "string") output['page_path'] = publicPagePath(input['page_path']);
  if (typeof input['service_name'] === "string" && /^[a-z_-]{1,60}$/.test(input['service_name'])) output['service_name'] = input['service_name'];
  if ([25, 50, 75, 100].includes(Number(input['percent_scrolled']))) output['percent_scrolled'] = Number(input['percent_scrolled']);
  if (["main", "service"].includes(String(input['form_type']))) output['form_type'] = String(input['form_type']);
  if (["validation", "save"].includes(String(input['error_type']))) output['error_type'] = String(input['error_type']);
  return output;
}

export function explicitConsentAllows(choice: string | null, globalPrivacyControl: boolean) {
  return choice === "granted" && !globalPrivacyControl;
}