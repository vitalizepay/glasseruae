# UAE interior fit-out lead generation upgrade

## Audit findings — 21 November 2026

**Already working**
- Existing premium site, service pages, project galleries, interior-design coordination guide and AI Project Advisor; retain them rather than rebuild.
- Preview home, office partitions and contact pages return 200. The live contact page also returns 200 with the correct visible WhatsApp links and www canonical. A correct visible link does not verify the published form submission path.
- The main contact form saves to `glass_enquiries` and prepares a WhatsApp handoff. Existing insert policy bounds name, phone, location and details; anonymous visitors have no read policy.
- Google Analytics browser-tracking connection is now linked. Search Console is already linked.
- The refreshed foundations scan passes its nine checks. This is not proof of Google indexing or ranking.

**Sales and measurement gaps**
- Shared service/location quote forms only open WhatsApp, store nothing and show a promise of follow-up even if the visitor never sends the message. This is the first conversion fix.
- Stored leads lack separate service, company, email, project type, campaign, landing-page and follow-up-status fields.
- Analytics initialisation exists in both the root and homepage source. The browser showed one external script, but duplicated configuration remains a risk. No custom conversion events or consent controls were found.
- No owner dashboard, marketing tag settings, Meta Pixel, LinkedIn Insight Tag or GTM container was found in the inspected source.
- Search Console reports no verified property covering the primary domain; search clicks and indexing remain unknown.
- `notify.glasseruae.com` is still verifying. No owner-notification templates or sends were found; emails are not ready to promise.
- The office-partition page contains project quantities, turnaround, acoustic, approval and fire-rating claims requiring supporting evidence. Remove unsupported specifics rather than invent replacements.

**Interior-market direction**
- Prioritise interior fit-out contractors, design studios and commercial property owners needing office partitions, glass doors, mirrors and shopfront packages; keep residential enquiries available.
- UAE Semrush comparison reports approximately 20 monthly searches for “office glass partition dubai” and 30 for “glass and aluminium works dubai”. Demand for the two contractor-specific phrases checked is unknown. These are estimates, not site visits or ranking guarantees.
- Improve the existing office-partition page and interior-design guide first; do not create duplicate broad blogs or near-identical city pages.

## Priority 1 — Capture qualified enquiries reliably

1. Reuse the existing enquiry flow for every service/location quote form: validate, save, then offer the correct WhatsApp handoff with a visible fallback link.
2. Keep name and phone required; add concise optional company/email/project-type/scope fields. Preserve the existing referral question and service/location defaults.
3. Store service and campaign attribution separately, with safe bounded values and no customer details in analytics. Direct WhatsApp clicks remain clicks, not confirmed leads.
4. Replace unsupported response-time, price, performance and project claims with accurate scope-led wording. Keep approved real project imagery and clearly labelled references.
5. Add service-specific WhatsApp messages and clear quotation actions while retaining the official number and existing floating/mobile contact controls.

## Priority 2 — Consent and conversion measurement

1. Replace the two analytics initialisation locations with one consent-aware integration using the connected Measurement ID. Do not install a second GA4 property.
2. Add accept/reject choices and a persistent way to change analytics/advertising preferences. Load non-essential tracking only after the relevant consent.
3. Track route page views, service/contact views, WhatsApp/phone/email clicks, form start/submit/success/error, gallery engagement and scroll milestones. Track brochure downloads only if a real brochure exists.
4. Use an allowlisted event contract: never send names, phone numbers, emails, messages, WhatsApp prefilled text or raw query strings. Record saved enquiries separately from attempted submissions.
5. Prepare optional GTM, Meta Pixel and LinkedIn Insight configuration. Prefer GTM ownership of configured marketing tags; prevent duplicate tags if switching from direct tracking. No remarketing activation or customer uploads without approval.

## Priority 3 — Interior-focused search growth

1. Strengthen existing office-partition and interior-design pages with procurement questions, drawing/BOQ requirements, technical coordination and relevant service/project links.
2. Audit every public content route for unique title, description, canonical and social tags, including valid sharing-image URLs. Keep hidden pages out of discovery.
3. Verify Search Console coverage, then use actual query/page data to prioritise further content. No promises of rankings or additional traffic.
4. Review image weight, loading priority, mobile accessibility and broken links. Preserve the homepage video fallback and current brand.

## Priority 4 — Private lead management and honest reporting

1. Reuse Lovable Cloud. Add protected owner access and a private lead list with New, Contacted, Qualified, Quotation Sent, Follow-up, Won and Lost statuses; deny public reads and updates.
2. Show actual saved enquiries by service/source and follow-up status. Distinguish self-reported referral sources from campaign attribution.
3. The connected GA4 method sends browser events but cannot read reports. Request an Analytics reporting connection only if available; otherwise show reporting as unconnected, not zero.
4. Show visitors, click metrics and conversions only from accessible real reporting sources. Do not combine unrelated visitors and leads into a fabricated conversion rate.
5. Once email verification succeeds, add and test a fixed owner notification to `sales@glasseruae.com` after saving. Keep enquiries accessible in the owner area even if email fails.

## Priority 5 — Optional market intelligence

- Apify is available but not linked. First propose a small permitted public-business research workflow and its cost; only connect/run it if approved. No contact harvesting, login bypass or paid actor runs now.
- LinkedIn is available but not linked. Prepare useful B2B sharing copy for existing interior content; connect only when implementing an approved account feature. Do not post automatically.
- Keep the existing English tap-to-chat Facebook plan and AED 3/day preference separate. No campaign launch, budget increase or spending is authorised by this website plan.

## External setup checklist

- **Search Console:** authorise and verify a property covering `https://www.glasseruae.com`; the current connection alone is insufficient.
- **Email:** finish the records shown in More → Emails for `notify.glasseruae.com`; verification may take up to 72 hours. Verification alone does not wire notifications.
- **Optional tracking:** supply/select a GTM container, Meta Pixel and LinkedIn Insight partner ID only for tools you intend to activate; leave unavailable integrations off.
- **Reporting:** browser tracking is connected; GA4 report-reading access is a separate requirement.
- **Business evidence:** confirm address/hours and supply evidence for any specific performance, certification, warranty or completed-project claims retained.
- **Paid actions:** separate explicit approval is required before ads, actor runs or other service spending.

## Technical approach

- Keep TanStack Start, existing layout/design tokens, service routes and browser-safe content modules.
- Extend the existing enquiry module and table with bounded validation, column-scoped grants and protected owner policies; share form behaviour rather than duplicate it.
- Put external reporting and email calls behind authenticated server functions; keep connector credentials server-side. Public tracking identifiers may be used in the browser.
- Use one browser-safe consent/event module and one root-level tracking coordinator. Preserve existing authentication middleware and generated integration files.
- Owner access must come from protected role records, never editable user metadata; do not make a public submissions dashboard.

## Validation and delivery

- Test concrete consent rules, no-personal-data event payloads, correct WhatsApp number, attribution, lead status permissions and validation limits.
- Submit a labelled test through both main and service forms; confirm rows read back in the authorised owner view, exercise WhatsApp fallback, then delete only test rows by ID.
- Verify desktop/mobile layouts, route events, no tracking before consent and no duplicate page views after navigation.
- Test owner notification delivery only after verification and wiring; state any remaining delivery/reporting blockers accurately.
- Publish only after preview checks and approval; saved code and connected services alone do not make the upgrade live.

**Not done yet:** no website functionality changed in this audit, no new tracking activated, no enquiries submitted, no ads launched, no posts sent and no Apify runs started.