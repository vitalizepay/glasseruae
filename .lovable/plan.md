## Goal
Transform glasseruae.com into a Dubai-local SEO powerhouse while preserving the existing premium design, branding, colors, typography, and all current pages.

## Scope Summary
- ~28 new SEO landing pages (10 service, 8 location, 4 project, 1 areas-we-serve, blog templates + 5 new posts)
- Technical SEO hardening (canonical, sitemap, robots, OG/Twitter, schemas)
- Homepage SEO enrichment (keyword sections, FAQ already present, service-area block, internal links)
- Sticky CTA + quote form component on service pages
- Internal linking system (blog→service→project→contact)

## Page Structure (new routes)

```text
Service SEO landings (/[slug])
  /glass-partition-dubai
  /office-glass-partition-dubai
  /aluminium-works-dubai
  /aluminium-fabrication-dubai
  /shower-glass-dubai
  /glass-shopfront-dubai
  /glass-railing-dubai
  /glass-facade-dubai
  /glass-door-installation-dubai
  /skylight-installation-dubai

Location pages
  /glass-partition-al-qusais
  /glass-partition-al-nahda
  /glass-partition-deira
  /glass-partition-business-bay
  /glass-partition-dubai-marina
  /glass-partition-jvc
  /glass-partition-sharjah
  /glass-partition-ajman

Project pages
  /projects/office-glass-partition-al-qusais
  /projects/shower-glass-installation-jvc
  /projects/aluminium-shopfront-sharjah
  /projects/glass-railing-dubai-marina

Coverage page
  /areas-we-serve

Blog additions
  /blog/best-glass-partition-company-dubai
  /blog/office-glass-partition-cost-dubai
  /blog/shower-glass-installation-guide-dubai
  /blog/glass-shopfront-installation-guide
  /blog/aluminium-fabrication-services-dubai
```

## Shared Components (built once, reused)
- `SeoServicePage` — long-form (1500+ words via structured content blocks) with hero, benefits, process, gallery, FAQ, related projects, service areas, CTA, sticky CTA bar, quote form, JSON-LD (Service + FAQ + Breadcrumb).
- `LocationPage` — local content blocks (landmarks, neighborhood notes, local FAQ, map embed via OSM iframe, CTA), JSON-LD (LocalBusiness + Service + Breadcrumb).
- `ProjectPage` — overview, location, scope, materials, gallery, challenge/solution/result, testimonial, CTA, JSON-LD (CreativeWork/Project + Breadcrumb).
- `StickyCTA` — fixed bottom bar (Quote / Call / WhatsApp) on service & location pages.
- `QuoteForm` — name, phone, email, service, location, message; mailto/whatsapp fallback (no backend changes).
- `Breadcrumbs` — visual + BreadcrumbList JSON-LD.

## Technical SEO
- Canonical strategy: leaf-only `<link rel="canonical">` in each route's `head()`. Verify `__root.tsx` has no canonical (it doesn't). One canonical per page.
- `public/sitemap.xml` + dynamic `src/routes/sitemap[.]xml.ts` both updated with full new URL set + `<image:image>` entries for hero images (image sitemap).
- `robots.txt` retains `Allow: /` + sitemap pointer (already correct).
- OG + Twitter tags on every new route (title, description, type, url, image where meaningful).
- Image alt audit on existing site components; ensure every `<img>` has descriptive alt.
- Favicon — verify present; add if missing.
- Non-www: already canonical to `https://glasseruae.com` — confirmed.

## Schema Implementation
- `__root.tsx` / index → LocalBusiness, Organization, WebSite, FAQPage (existing — keep)
- Service pages → Service + FAQPage + BreadcrumbList
- Location pages → LocalBusiness (areaServed=neighborhood) + Service + BreadcrumbList
- Project pages → CreativeWork + BreadcrumbList
- Blog posts → BlogPosting + BreadcrumbList
- Contact → ContactPage

## Internal Linking
- Service pages list 3 related projects + 3 related services + link to /contact.
- Project pages link back to parent service + /contact.
- Blog posts link to 2 relevant service pages + 1 project.
- Homepage gets a new "Service Areas" + "Popular Services" link grid feeding the new pages.
- Footer expanded with grouped links (Services / Locations / Projects).

## Homepage SEO Additions (design-preserving)
- New keyword-rich section after `<Services>`: "Glass & Aluminium Services Across Dubai" with 4-column link grid to top new service pages.
- New "Areas We Serve" strip with chips linking to location pages.
- Existing FAQ kept; add 2 keyword-targeted Q&A entries.
- No visual restyling — reuse existing tokens (`bg-surface`, `text-navy`, `text-orange`, `rounded-2xl`, etc.).

## Trust Signals
- TrustBar updated to surface: 500+ Projects, Since 2019, Dubai-based team, Commercial + Residential, Custom Fabrication (if not already present).

## Redirects
- None required — no existing URLs being removed or renamed.

## Deliverables Before Publish
A markdown summary file listing: full page table (URL · SEO title · meta description · canonical · schemas), sitemap diff, internal-link map, redirect config (none).

## Out of Scope
- No backend, no DB, no auth changes.
- No design system, color, font, or layout changes to existing pages.
- No removal of existing routes/components.

## Effort Estimate
Large — roughly 35 new files (routes + 3 shared components + content data file + sitemap updates + summary doc). Will batch writes in parallel.

Approve to proceed and I'll build it all in one pass.