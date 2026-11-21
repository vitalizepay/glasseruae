# Growth upgrade: implementation and checks

## Implemented
- Shared main, service and location forms save to `glass_enquiries` before the official WhatsApp handoff.
- Optional commercial fields, separate referral/campaign attribution, bounded validation and owner-only follow-up.
- Google and Lovable sign-in without profile fields; no permanent account has owner access yet.
- One consent-gated GA4 loader with allowlisted events; no Meta/LinkedIn tag, paid research or advertising activation.
- Office-partition copy aimed at design studios and fit-out contractors; corrected glass-services contact links and removed hidden keyword text.
- Search/social metadata inspected; shared location metadata and bundled-image handling corrected.

## Observed in preview
- Two test forms saved successfully, and their exact IDs and source/commercial fields read back from storage.
- Temporary authorised owner read the test lead, changed status to Qualified, saved notes, refreshed and read them back.
- Signed-out access redirected to `/auth`; signed-in access without the owner role was denied.
- WhatsApp navigation used `https://wa.me/971568400838`; test navigation was intercepted, so no message was sent.
- No Google tag request before consent; one GA4 script after acceptance; withdrawal set its disable flag, removed known GA cookies and blocked a subsequent optional event.
- A real form focus emitted quote_form_start to the browser tag dispatcher; provider receipt/attribution has not been verified.
- Contact and owner mobile views had no horizontal overflow; exercised checks reported no page runtime errors.
- Enquiry/privacy unit suites passed 13 tests. Latest successful page build was checked after fixing a JSX closing-tag error.
- Temporary role and the three test enquiries were removed by exact IDs, leaving real enquiries untouched.

## Required external actions and boundaries
- Owner email remains an open question; assign access only after the owner confirms it and that account signs in.
- Email sender verification is pending; no notification send is wired or promised. Leads are available in More → Database → glass_enquiries and, after access is granted, the private workspace.
- Verify Search Console coverage for the primary www domain; no indexing or ranking guarantee.
- GA4 browser tracking does not grant reporting access; dashboard visitor/click/conversion reports remain unconnected, not fabricated zeroes.
- Further project/performance/warranty claims need owner evidence before endorsement.
- Optional GTM, Meta and LinkedIn require separate identifiers, consent review and authorisation before activation; Apify remains unused.
- Website edits remain preview-only until approved publication; no money was spent and no ads or social posts were launched.