import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Shower Glass Dubai | Frameless Shower Enclosures | Glasser UAE";
const D = "Frameless shower glass installation in Dubai — walk-in enclosures, sliding doors, hinged screens & wet-rooms. 10mm tempered glass, premium hardware, free survey.";
const URL = "https://glasseruae.com/shower-glass-dubai";

const FAQS = [
  { q: "How much does shower glass cost in Dubai?", a: "A standard frameless walk-in shower enclosure in Dubai ranges from AED 1,800 to AED 4,500 depending on size, hardware finish and glass treatment." },
  { q: "What thickness glass do you use?", a: "We use 10mm tempered safety glass as standard. 12mm is available for very large panels or pivot doors." },
  { q: "How long does installation take?", a: "Typical residential shower glass installation is completed in a single visit, around 2–4 hours from arrival to handover." },
  { q: "Can you do nano-coating?", a: "Yes. Easy-clean nano coating is recommended for Dubai water hardness and is offered as a standard upgrade." },
];

export const Route = createFileRoute("/shower-glass-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Shower Glass Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Shower Glass Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Bath · Dubai"
      h1="Shower Glass Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Shower Glass Dubai" }]}
      intro="Premium frameless shower glass enclosures supplied and installed across Dubai. We work with villa owners, interior designers, fit-out contractors and developers — fitting walk-in screens, sliding doors, hinged enclosures and luxury wet-room glass."
      defaultService="Shower Glass Dubai"
      benefits={[
        "10mm tempered safety glass as standard",
        "Frameless walk-in, hinged & sliding configurations",
        "Chrome, brushed nickel, matte black, gold hardware",
        "Easy-clean nano coating available",
        "Frosted, tinted & patterned glass options",
        "Same-day installation for most residential jobs",
        "Free site measurement in Dubai & Sharjah",
        "Workmanship warranty on every install",
      ]}
      process={[
        { step: "Measure", detail: "Precise on-site template — typically 20 minutes." },
        { step: "Fabricate", detail: "Glass cut, polished and toughened — 4–7 days." },
        { step: "Install", detail: "Single-visit installation, fully sealed and tested." },
        { step: "Aftercare", detail: "Easy-clean nano application and maintenance guidance." },
      ]}
      sections={[
        { heading: "Types of Shower Glass We Install", paragraphs: [
          "Walk-in fixed screens are the cleanest, most contemporary configuration — a single 10mm panel with optional return panel, no door required. Hinged shower doors swing outward (or in-and-out with double-action hinges) and suit small to mid-size enclosures. Frameless sliding shower doors run on top-mounted stainless steel tracks and are the preferred choice for tighter bathroom layouts where a swing door would foul the vanity.",
          "For master bedrooms and luxury villa bathrooms, we install full glass partition walls separating wet and dry zones — usually paired with rain heads, body jets and underfloor heating.",
        ] },
        { heading: "Glass & Hardware Specifications", paragraphs: [
          "All shower glass we supply is 10mm tempered safety glass, polished on all exposed edges and toughened to BS EN 12150. For oversized panels (over 1.2m wide) or pivot configurations we offer 12mm glass.",
          "Hardware finishes include polished chrome, brushed nickel, matte black and brushed gold — sourced from leading European and Far-East manufacturers. Hinges are dual-action with self-closing return; sliding kits are top-mounted stainless steel with soft-close dampers.",
        ] },
        { heading: "Easy-Clean Nano Coating", paragraphs: [
          "Dubai's water has notably high mineral content, which causes limescale to build up on shower glass within weeks. We strongly recommend specifying a hydrophobic nano coating (Diamond Fusion, EnduroShield or equivalent). This forms an invisible barrier that prevents mineral and soap deposits bonding to the glass — so a quick wipe-down keeps the enclosure crystal clear for years.",
        ] },
        { heading: "Pricing Guide", paragraphs: [
          "A single fixed walk-in screen starts around AED 1,800. A standard hinged door enclosure (door + return panel) is typically AED 2,500 to AED 3,500. Larger walk-in or sliding configurations and premium finishes run AED 3,500 to AED 4,500. Nano coating adds AED 300–500 per enclosure.",
        ] },
        { heading: "Installation & Aftercare", paragraphs: [
          "Most residential shower glass jobs are completed in a single 2–4 hour visit. Our installers protect floors and surrounding finishes, drill into wall tiles only where structurally necessary, and silicone-seal all junctions with neutral-cure sanitary-grade sealant. After 24 hours the enclosure can be used normally. We provide a written workmanship warranty plus the manufacturer's hardware warranty.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/services/shower-enclosures-dubai", label: "Shower Enclosures" },
        { to: "/services/custom-mirrors-dubai", label: "Custom Mirrors" },
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation Dubai" },
      ]}
    />
  ),
});
