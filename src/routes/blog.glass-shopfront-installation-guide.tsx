import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/service-aluminium.jpg";

const SLUG = "glass-shopfront-installation-guide";
const TITLE = "Glass Shopfront Installation Guide Dubai";
const DESC = "Dubai shopfront guide: frameless vs framed vs curved systems, mall vs street-facing rules, 12mm tempered and 13.5mm laminated security glass, permits and vinyl.";
const PUBLISHED = "2026-04-22";
const MODIFIED = "2026-07-17";

const FAQS = [
  { q: "What glass thickness is used for shopfronts in Dubai malls?", a: "12mm tempered frameless glass is the Dubai mall standard. Jewellery, electronics and luxury retail step up to 13.5mm laminated security glass." },
  { q: "Do you handle mall tenant design manual approvals?", a: "Yes. We prepare shopfront drawings, sections and specs to match each mall's tenant design manual and submit for landlord approval before fabrication." },
  { q: "How long does a shopfront installation take?", a: "Fabrication is 7–10 days, and on-site installation is scheduled inside the mall's overnight handover window — typically a single night." },
  { q: "Is manifestation vinyl included?", a: "Yes. Safety manifestation strips are included by default; custom branded vinyl and frosted logos are quoted per design." },
  { q: "What's the difference between a mall shopfront and a street-facing shopfront in Dubai?", a: "Mall shopfronts follow the landlord's tenant design manual and install in overnight windows. Street-facing shopfronts on Sheikh Zayed Road or in JLT/Business Bay follow Dubai Municipality and building management rules, must handle heat/UV load, and often need laminated glass for security." },
  { q: "Do curved glass shopfronts cost more?", a: "Yes — curved (bent) tempered glass shopfronts cost 3–5x the equivalent flat glass price, driven by the bending furnace tooling and freight from specialist fabricators." },
];

export const Route = createFileRoute("/blog/glass-shopfront-installation-guide")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESC,
      image,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      faqs: FAQS,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={image}
      imageAlt="Frameless glass shopfront installation at a Dubai mall retail unit"
      intro="A new [glass shopfront in Dubai](/glass-shopfront-dubai) is the single highest-impact change a retailer can make to footfall and brand perception. But shopfronts in Dubai sit at the intersection of landlord design manuals, Dubai Municipality permits, security-glass specifications and tight overnight installation windows — get any of those wrong and you either fail approval or delay opening. This guide covers every practical decision for a Dubai shopfront install in 2026.",
      sections={[
        {
          heading: "Shopfront Types — Frameless, Framed and Curved",
          paragraphs: [
            "Frameless glass shopfronts use structural silicone or patch-fitted glazing with no visible framing — the current premium spec across Dubai Mall, Mall of the Emirates and City Walk. They deliver maximum visual merchandising area and command a rental premium.",
            "Framed shopfronts wrap the glass in a thin aluminium frame, usually 40–60mm deep. Cheaper, faster to install, better acoustic separation from mall corridors, and still very common in Deira Gold Souk, Karama and neighbourhood community malls.",
            "Curved (bent) glass shopfronts are the highest-end option — most visible in Nakheel Mall, The Dubai Mall Zabeel expansion, and flagship stores in Fashion Avenue. Curved glass costs 3–5x flat glass and needs 8–12 week lead times.",
          ],
        },
        {
          heading: "Mall vs Street-Facing Requirements",
          paragraphs: [
            "Mall shopfronts (Dubai Mall, Mall of the Emirates, Nakheel Mall, City Centre, Ibn Battuta, Mirdif City Centre) follow the landlord's tenant design manual. Each mall dictates head height (typically 2.6–3.2m), signage zones, glass type, hardware finish, lighting integration and even the specific brands of hardware allowed. Submission is via the landlord's tenant coordination team before any fabrication starts.",
            "Street-facing shopfronts on Sheikh Zayed Road, in JLT retail podiums, DIFC Gate Village, JBR The Walk and Business Bay follow Dubai Municipality building code plus building management NOCs. Heat and UV load is a bigger factor — laminated glass with a solar control interlayer is often mandatory to prevent product fading and reduce cooling load.",
          ],
        },
        {
          heading: "Security & Safety Glass Specifications",
          paragraphs: [
            "12mm tempered frameless is the Dubai mall standard for general retail. For jewellery, watches, electronics, mobile phones and luxury retail (LV, Cartier, Rolex boutiques), landlord specs jump to 13.5mm laminated security glass — two 6mm tempered panes bonded by a 1.52mm SGP or PVB interlayer.",
            "For flagship diamond and high-jewellery boutiques, we've installed 21.5mm laminated glass with anti-attack certification — resistant to hammer, pickaxe and blowtorch attacks for at least 5 minutes (EN 356 P8/P8A). Insurers often require this and will name the glass spec in the policy.",
            "Low-iron (ultra-clear) glass eliminates the green tint of standard float glass and is worth the premium for high-end stores where product colour fidelity matters — think fashion, cosmetics and art galleries.",
          ],
        },
        {
          heading: "Signage & Branding Integration",
          paragraphs: [
            "Manifestation strips are mandatory for safety — usually one at 1.1m and another at 1.5m above finished floor level. Custom branded vinyl is the fastest, cheapest way to express brand identity on glass: full-height frosted logos, back-painted colour bands, or dot-matrix privacy films.",
            "For premium retail we integrate signage into the shopfront: back-lit halo lettering mounted to a stand-off from the glass, or ceramic frit prints baked into the tempered glass surface for permanence. Digital screens behind the glass are increasingly popular in electronics and fashion — plan the power and data conduits before glazing.",
          ],
        },
        {
          heading: "Permit & Approval Considerations in Dubai",
          paragraphs: [
            "Mall retail units require: tenant design manual submission, landlord fit-out coordination approval, and — where fire compartments or escape routes are affected — Dubai Civil Defence (DCD) sign-off. Budget 2–4 weeks for approvals before fabrication.",
            "Street-facing units additionally need Dubai Municipality building permit variation if the shopfront changes the building envelope, and DEWA/DDA/JAFZA equivalents for free-zone locations. Signage over 1 sqm needs a separate signage permit. A licensed contractor like Glasser Technical Works handles all of this in-house — a general glazier does not.",
          ],
        },
        {
          heading: "Overnight Installation Windows",
          paragraphs: [
            "Mall handovers almost universally allocate a single overnight window (10 PM to 6 AM). Everything must be pre-fabricated at the workshop and delivered ready to fit. On-site time is used only for lifting, sealing and cleaning.",
            "For flagship stores we integrate shopfront installation with [glass facades](/services/glass-facades-dubai) work above the storefront and [aluminium doors](/services/aluminium-doors-dubai) at the entrance. A single coordinated site visit is far cheaper than three separate trade attendances.",
          ],
        },
        {
          heading: "Cost Ranges & Lead Times",
          paragraphs: [
            "Ballpark Dubai shopfront costs in 2026: frameless 12mm tempered — AED 1,200–1,800 per running metre of shopfront, fully supplied and installed. Framed 8–10mm — AED 700–1,100/lm. Laminated security-grade 13.5mm — AED 2,200–3,200/lm. Curved bent glass — AED 5,500–9,000/lm plus long lead times.",
            "Lead time from award to opening: 3–5 weeks for standard flat glass, 8–12 weeks for curved. Approvals sit in parallel with fabrication where possible.",
          ],
        },
      ]}
      serviceLinks={[
        { to: "/glass-shopfront-dubai", label: "Glass Shopfront Dubai" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors" },
        { to: "/services/glass-facades-dubai", label: "Glass Facades" },
      ]}
      related={[
        { to: "/blog/aluminium-fabrication-services-dubai", label: "Aluminium Fabrication Services in Dubai" },
        { to: "/blog/curved-glass-dubai", label: "Curved Glass Dubai — Complete Design Guide" },
        { to: "/blog/best-glass-partition-company-dubai", label: "Best Glass Partition Company in Dubai (2026)" },
      ]}
      faqs={FAQS}
      ctaHeading="Planning a Dubai retail fit-out?"
      ctaText="We'll handle mall approvals, fabrication and overnight installation."
    />
  ),
});
