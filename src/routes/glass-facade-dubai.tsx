import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Glass Facade Dubai | Curtain Walls & Structural Glazing | Glasser UAE";
const D = "Architectural glass facades in Dubai — curtain walls, structural glazing, spider systems, ventilated facades. Engineered to UAE wind & thermal performance specs.";
const URL = "https://glasseruae.com/glass-facade-dubai";

const FAQS = [
  { q: "Do you provide facade engineering?", a: "Yes. Wind-load analysis, thermal performance calculations and structural sizing are part of every facade package we deliver." },
  { q: "Which glass do you use for facades?", a: "Double-glazed low-e units (typically 6+12+6 or 8+16+8) with solar-control coating tuned to UAE solar gain. Triple glazing on premium specifications." },
  { q: "What about fire-rated facades?", a: "Cladding fire-rating follows DCD Cladding Regulation 2017 — we install only A2-rated systems with certified composition." },
];

export const Route = createFileRoute("/glass-facade-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Glass Facade Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Facade Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Facade · Dubai"
      h1="Glass Facade Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Facade Dubai" }]}
      intro="Engineered glass facades for towers, mixed-use buildings, villas and commercial podiums across Dubai. From conventional stick-system curtain walls to unitised cassette facades and spider-bolted structural glazing — we deliver the complete design-build envelope."
      defaultService="Glass Facade Dubai"
      benefits={[
        "Stick & unitised curtain wall systems",
        "Spider / structural-bolted point glazing",
        "Ventilated rear-fixed facades",
        "Solar-control double & triple glazing",
        "Wind-load & thermal engineering",
        "BMU & MEWP-based safe installation",
        "DCD Cladding Regulation 2017 compliant",
        "Facade refurbishment & re-glazing",
      ]}
      sections={[
        { heading: "Facade Systems for the UAE Climate", paragraphs: [
          "Dubai's combination of intense solar load (over 6 kWh/m²/day on vertical surfaces during summer), high ambient temperatures and occasional sandstorm wind events make facade specification very different from temperate-climate projects. Successful Dubai facades combine solar-control low-e coated glass, thermally broken aluminium framing, structural silicone joints sized for thermal movement, and accessible cleaning provisions (BMU rail or eye-bolt anchors).",
        ] },
        { heading: "Glass Specification", paragraphs: [
          "Standard Dubai facade glass is a double-glazed unit with a solar-control low-e coating on the cavity face of the outer glass — typical performance: light transmission around 50–60%, solar heat-gain coefficient 0.25–0.35, U-value 1.6–1.8 W/m²K. For premium projects and high-performance specs, triple-glazed units, ceramic-fritted glass or external sun-shading systems push performance further.",
        ] },
        { heading: "Curtain Wall vs Structural Glazing", paragraphs: [
          "Conventional stick-system curtain wall uses visible aluminium mullions and transoms framing each glass pane — the most common and cost-effective approach. Unitised systems are factory-assembled into floor-height cassettes lifted into place from BMU — faster on-site, better quality control, premium aesthetic. Structural glazing uses point-bolted spider systems with no visible framing, ideal for atriums, lobbies and feature facades where transparency is critical.",
        ] },
        { heading: "Approvals & Compliance", paragraphs: [
          "Every facade scope we deliver is signed off against DCD Cladding Regulation 2017 (post-Address Hotel response), Dubai Municipality structural codes, and the developer's facade performance spec. We provide wind-load calculations, thermal break details, structural silicone test certificates and complete material traceability documentation.",
        ] },
        { heading: "Refurbishment & Re-glazing", paragraphs: [
          "Beyond new build, we handle facade refurbishment scope: failed IGU replacement, gasket renewal, silicone re-application, broken pane replacement and full re-cladding programmes for aging towers in older Dubai districts.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
        { to: "/services/glass-facades-dubai", label: "Glass Facades" },
        { to: "/glass-shopfront-dubai", label: "Glass Shopfront Dubai" },
      ]}
    />
  ),
});
