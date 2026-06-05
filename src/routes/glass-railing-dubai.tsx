import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Glass Railing Dubai | Frameless Balustrades & Staircases | Glasser UAE";
const D = "Frameless glass railings & balustrades in Dubai — balconies, staircases, pool surrounds, mezzanines. Structural laminated glass with U-channel or spigot fixing.";
const URL = "https://glasseruae.com/glass-railing-dubai";

const FAQS = [
  { q: "Are your railings DM compliant for height?", a: "Yes. We install to Dubai Municipality height and structural load requirements — 1100mm for balconies, 900mm for staircases, with calculated wind and crowd loads." },
  { q: "What glass do you use?", a: "Structural balustrades use 17.5mm or 21.5mm laminated tempered glass for U-channel and spigot systems. Top-rail systems can use 10mm or 12mm tempered." },
  { q: "Can I get one without a top rail?", a: "Yes — frameless cantilevered balustrades without a top rail are our most popular configuration for villas and rooftop terraces." },
];

export const Route = createFileRoute("/glass-railing-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Glass Railing Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Railing Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Railings · Dubai"
      h1="Glass Railing Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Railing Dubai" }]}
      intro="Frameless and stainless-supported glass railings installed across Dubai villas, towers, hotels and commercial projects. From cantilevered balcony balustrades to architectural feature staircases, every railing we deliver is engineered to UAE structural loads and DM approval requirements."
      defaultService="Glass Railing Dubai"
      benefits={[
        "Frameless cantilevered (no top rail) balustrades",
        "U-channel and stainless spigot fixing systems",
        "17.5mm & 21.5mm laminated structural glass",
        "Stainless steel handrails (304 & 316 marine grade)",
        "Balcony, staircase, mezzanine & pool applications",
        "DM-compliant heights & structural calculations",
        "Tinted, frosted & low-iron glass options",
        "Custom finishes — brushed, mirror, matte black",
      ]}
      sections={[
        { heading: "Where Glass Railings Are Used in Dubai", paragraphs: [
          "Glass railings dominate Dubai residential and hospitality architecture because they preserve views — whether that's the Marina skyline from a balcony, the Burj Khalifa from a downtown penthouse, or the swimming pool from a villa terrace. We install glass balustrades on apartment balconies, villa terraces and staircases, hotel mezzanines, rooftop bars, swimming pool surrounds, commercial atrium walkways and feature internal staircases.",
        ] },
        { heading: "Frameless Cantilevered vs U-Channel vs Spigot Systems", paragraphs: [
          "Cantilevered U-channel systems use a continuous aluminium base channel grouted into the floor slab — giving the cleanest, most uninterrupted glass line with no visible fixings. Spigot systems use individual stainless steel posts bolted to slab or fascia — a more visible look but quicker to install on existing structures. Top-rail systems use thinner glass clamped between a handrail and a base profile, suited to mid-budget projects.",
        ] },
        { heading: "Glass & Structural Specification", paragraphs: [
          "Structural balustrade glass is always laminated — meaning two sheets of tempered glass bonded with a PVB or SentryGlas interlayer. This ensures that if the glass is impacted, the broken fragments stay bonded and the balustrade remains in place. We typically use 17.5mm (8+8) for residential applications and 21.5mm (10+10) where line loads or wind exposure are higher.",
        ] },
        { heading: "Compliance & Engineering", paragraphs: [
          "Every railing system we install is signed off against Dubai Municipality requirements: 1100mm minimum height for balconies and roof terraces, 900mm for internal staircases, and the appropriate horizontal line loads (typically 0.74 kN/m residential, 1.5 kN/m commercial). For high-rise applications we provide calculated wind-load analysis as part of the submittal package.",
        ] },
        { heading: "Finishes & Hardware", paragraphs: [
          "Handrails are available in 50mm round or 40x40mm square stainless steel, finished in polished, brushed satin or matte black powder coat. For pool surrounds and coastal villas we specify 316 marine-grade stainless to prevent corrosion. Glass options include clear, low-iron (ultra-clear), bronze tinted, grey tinted and frosted.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/glass-facade-dubai", label: "Glass Facade Dubai" },
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation Dubai" },
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
      ]}
    />
  ),
});
