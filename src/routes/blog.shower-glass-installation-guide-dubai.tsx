import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/project-villa.jpg";

const SLUG = "shower-glass-installation-guide-dubai";
const TITLE = "Shower Glass Installation Guide Dubai";
const DESC = "Dubai shower glass guide: 8mm/10mm/12mm tempered options, frameless vs semi-frameless vs framed, PVD hardware, waterproofing, villa vs apartment installs.";
const PUBLISHED = "2026-04-08";
const MODIFIED = "2026-07-17";

const FAQS = [
  { q: "How long does shower glass installation take in Dubai?", a: "Site survey takes about 20 minutes, fabrication 4–7 days, and installation itself is a single visit of 2–4 hours. Cure time before first use is 24 hours." },
  { q: "What thickness of tempered glass should I use for a Dubai shower?", a: "10mm tempered safety glass is the Dubai standard. Step up to 12mm for very wide walk-in panels or frameless pivot doors, and use 8mm only for small semi-frameless enclosures." },
  { q: "Do I really need a nano coating on shower glass in Dubai?", a: "Yes — Dubai water is extremely hard. Without a hydrophobic nano coating like Diamond Fusion or EnduroShield, mineral deposits etch permanently into the glass within months. The AED 300–500 upgrade pays for itself." },
  { q: "Can you install shower glass in a rented Dubai apartment?", a: "Yes. We use non-destructive fixings wherever possible and provide method statements for landlord or building management NOC requests." },
  { q: "What is the difference between frameless, semi-frameless and framed shower enclosures?", a: "Frameless uses only clips or patch fittings on 10–12mm glass for the cleanest look. Semi-frameless has a slim frame around the door only. Framed uses full aluminium framing around 6–8mm glass — cheaper but visually heavier and more prone to mould in seals." },
  { q: "Is villa shower installation different from apartment installation?", a: "Yes. Villas allow larger walk-in configurations with concealed drainage and channel systems, while apartment installs must work with existing waterproofing and often need landlord NOCs for any core drilling." },
];

export const Route = createFileRoute("/blog/shower-glass-installation-guide-dubai")({
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
      imageAlt="Luxury villa bathroom with a custom walk-in shower glass installation in Dubai"
      intro="A frameless [shower glass Dubai](/shower-glass-dubai) install transforms a bathroom — but only if the glass thickness, hardware quality and waterproofing detailing are specified correctly for Dubai's hard water, humid climate and unique villa-vs-apartment site conditions. This guide walks through every decision an owner or interior designer needs to make before signing off a shower glass quote in the UAE."
      sections={[
        {
          heading: "Choose the Right Shower Glass Configuration",
          paragraphs: [
            "Dubai bathrooms typically fit one of four shower configurations: walk-in fixed screens, hinged enclosures, sliding-door enclosures and corner-entry enclosures. Walk-in fixed screens are the cleanest, most modern option and require no door — perfect for large villa bathrooms with a linear drain. Hinged enclosures suit small to mid-size bathrooms where you have swing clearance. Sliding doors are essential in compact apartment bathrooms where a swing door would collide with the vanity or WC.",
            "Corner-entry enclosures are the space-saving solution for older Dubai apartments (Bur Dubai, Deira) where the bathroom footprint is tight. See our full [shower enclosures](/services/shower-enclosures-dubai) page for images of each configuration on live projects.",
          ],
        },
        {
          heading: "Glass Thickness Options — 8mm vs 10mm vs 12mm",
          paragraphs: [
            "Glass thickness is the single biggest decision. 8mm tempered is only appropriate for small semi-framed enclosures and doors under 700mm wide. 10mm tempered is Dubai's frameless standard — strong enough for panels up to 1.2m wide and 2.4m tall with proper fixings. 12mm tempered is required for pivot doors, walk-in panels wider than 1.4m, and any panel over 2.4m tall.",
            "All glass must be tempered (toughened) to UAE safety standards and CE-marked or equivalent. Cheap 'heat-strengthened' glass is not the same and is not safe for shower use — always ask for the tempering certificate.",
          ],
        },
        {
          heading: "Frameless vs Semi-Frameless vs Framed Enclosures",
          paragraphs: [
            "Frameless enclosures use clips, patch fittings and a small hinge kit only. Nothing surrounds the glass. This is the premium spec — pricier but visually clean, easier to clean and free of aluminium framing that traps mould in humid Dubai bathrooms.",
            "Semi-frameless has a slim frame around the door leaf only. Fixed panels remain frameless. It's a mid-tier compromise and 15–25% cheaper than fully frameless.",
            "Framed enclosures wrap every edge of the glass in aluminium. Cheapest option, but the frames pool water, corrode over 3–5 years in Dubai humidity, and the silicone/gasket seals discolour badly. We only recommend framed for temporary rentals or lowest-budget projects.",
          ],
        },
        {
          heading: "Hardware Quality — Why PVD Beats Powder Coat in Dubai",
          paragraphs: [
            "Bathroom hardware in Dubai lives in a hot, humid, chlorinated environment. Cheap chrome-plated brass pits and flakes within 12–18 months. Powder-coated aluminium fades and chalks in direct sun (Palm villas with skylights are especially harsh).",
            "PVD (physical vapour deposition) coatings are the gold standard — a molecular-level bond that outperforms every other finish in bathroom conditions. Available in polished chrome, brushed nickel, matte black, brushed gold and rose gold. The upgrade over standard chrome is AED 400–900 per enclosure and adds 10+ years of finish life. Solid stainless-steel 316-grade hardware is even better for beach or Palm Jumeirah properties exposed to salt air.",
          ],
        },
        {
          heading: "Nano Coating — Non-Negotiable for Dubai Water",
          paragraphs: [
            "Dubai water is exceptionally hard (total dissolved solids often 200–400 ppm from DEWA supply, higher on some Palm villas). Without a hydrophobic nano coating like Diamond Fusion, EnduroShield or ClearShield, mineral deposits etch permanently into the glass surface within 4–6 months. Once etched, they cannot be polished out.",
            "The AED 300–500 nano coating upgrade extends the visual life of a shower enclosure from 12 months to 5+ years and is non-negotiable on any premium install. Reapplication every 2–3 years keeps it performing.",
          ],
        },
        {
          heading: "Waterproofing & Substrate Considerations",
          paragraphs: [
            "Shower glass is only as good as the waterproofing behind it. Before we install, we check that tile-backer boards or PVC waterproof membranes extend at least 200mm above the highest water splash point, that floor falls are correctly graded to the drain (minimum 1:80), and that any core-drilled fixing points hit solid substrate rather than hollow tile.",
            "For rain showers and body jets, we specify a threshold-free walk-in with a linear channel drain and slightly enlarged glass footprint to contain splash. Ask any contractor to inspect the waterproofing before quoting — if they don't, they're not the right installer.",
          ],
        },
        {
          heading: "Villa vs Apartment Installations",
          paragraphs: [
            "Dubai villa bathrooms (Jumeirah, Emirates Hills, Al Barsha, Dubai Hills, Khawaneej) are usually specified from scratch during a fit-out. That lets us design large walk-in enclosures with concealed drainage, ceiling-mounted rain showers, and full-height fixed panels 2.4–2.8m tall. Villas also allow us to core-drill freely into concrete floors and walls.",
            "Apartment installations (Marina, JVC, Business Bay, JLT, Downtown) are constrained by existing waterproofing, landlord NOCs, and — for tower buildings — restrictions on core drilling into slabs or curtain-wall zones. We use non-destructive fixings wherever possible and provide the method statements building management need before starting.",
          ],
        },
        {
          heading: "Installation Timeline & Aftercare",
          paragraphs: [
            "The realistic timeline for a Dubai shower glass install: site survey 20 minutes; approval and fabrication 4–7 days for stock hardware, 10–14 days for premium PVD or custom sizes; installation itself a single visit of 2–4 hours; silicone cure before first use 24 hours.",
            "Aftercare: squeegee the glass after each use for the first two weeks so the nano coating cures properly, then weekly. Avoid abrasive cleaners — plain warm water and a microfibre cloth is enough. Pair a new enclosure with a matching [custom mirror](/services/custom-mirrors-dubai) for a coordinated bathroom finish.",
          ],
        },
      ]}
      serviceLinks={[
        { to: "/services/shower-enclosures-dubai", label: "Shower Enclosures" },
        { to: "/shower-glass-dubai", label: "Shower Glass Dubai" },
        { to: "/services/custom-mirrors-dubai", label: "Custom Mirrors" },
      ]}
      related={[
        { to: "/blog/frameless-shower-enclosures-dubai-guide", label: "Frameless Shower Enclosures Dubai: What to Expect" },
        { to: "/blog/mirror-suppliers-dubai", label: "Mirror Suppliers in Dubai — Complete Buyer's Guide" },
        { to: "/blog/office-glass-partition-cost-dubai", label: "Office Glass Partition Cost in Dubai (2026)" },
      ]}
      faqs={FAQS}
      ctaHeading="Ready to upgrade your Dubai bathroom?"
      ctaText="Free measurement and detailed quote."
    />
  ),
});
