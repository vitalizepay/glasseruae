import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Aluminium Fabrication Dubai | Custom Workshop | Glasser UAE";
const D = "Custom aluminium fabrication in Dubai — doors, windows, pergolas, louvres, cladding sub-frames and bespoke architectural work. In-house Al Qusais workshop.";
const URL = "https://glasseruae.com/aluminium-fabrication-dubai";

const FAQS = [
  { q: "Can you fabricate to my drawings?", a: "Yes. Send us your architect or engineer drawings — we'll quote against the spec or value-engineer alternatives." },
  { q: "Minimum order quantity?", a: "No formal minimum. We have produced single bespoke pieces for villa retrofits up to multi-tower curtain-wall packages." },
  { q: "Do you ship outside Dubai?", a: "Yes. Fabricated assemblies are delivered across the UAE and to neighbouring GCC projects on request." },
  { q: "What turn-around can I expect?", a: "Most standard fabrication is delivered in 7–14 days; complex curtain-wall packages 4–8 weeks depending on scale." },
];

export const Route = createFileRoute("/aluminium-fabrication-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Aluminium Fabrication Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Aluminium Fabrication Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Fabrication · Dubai"
      h1="Aluminium Fabrication Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Aluminium Fabrication Dubai" }]}
      intro="Our Al Qusais workshop produces precision-fabricated aluminium assemblies for fit-out contractors, architects, developers and end-clients across the UAE. CNC cutting, automated machining, gasketing and assembly are all handled in-house — which means tight tolerances, fast turn-around and direct accountability for quality."
      defaultService="Aluminium Fabrication Dubai"
      benefits={[
        "In-house Al Qusais fabrication workshop",
        "CNC cutting & automated machining",
        "Custom profiles, finishes & dimensions",
        "Powder coating & anodising arranged",
        "Shop drawings & engineering support",
        "Fast turn-around — typically 7–14 days",
        "Trade & project-scale supply",
        "Delivered UAE-wide",
      ]}
      process={[
        { step: "Brief", detail: "Drawings, samples or sketches reviewed by our production engineer." },
        { step: "Quote", detail: "Itemised quote with material spec and finish options." },
        { step: "Fabricate", detail: "Cut, machined, assembled & QA'd in-house." },
        { step: "Deliver", detail: "Packed, labelled and delivered to your site." },
      ]}
      sections={[
        { heading: "What We Fabricate", paragraphs: [
          "Glasser's fabrication scope covers complete door and window assemblies, curtain-wall mullion-transom packages, ACP cladding sub-frames, pergola structures, sun-louvre systems, balustrade frames, equipment screens, signage frames, planter trims and custom architectural feature work. If your project needs aluminium cut, machined and assembled to a drawing — we can produce it.",
        ] },
        { heading: "Workshop Capability", paragraphs: [
          "Our workshop runs CNC double-headed saws for precise mitred and square cuts, copy routers for hardware preparation, crimping and corner-cleat assembly stations, and dedicated gasketing benches. QA checks are completed at material receipt, sub-assembly and final assembly — with dimensional records kept against the approved shop drawings.",
        ] },
        { heading: "Working With Fit-Out & Main Contractors", paragraphs: [
          "We act as a trade supplier to main contractors and fit-out companies across Dubai. Standard commercial terms include progress invoicing, retention release on snag completion, and certified material delivery notes. Our project managers integrate with your programme so deliveries arrive when you need them — not before, not after.",
        ] },
        { heading: "Finishes & Coatings", paragraphs: [
          "We supply powder-coated (RAL or pantone), anodised, wood-finish and pre-coated marine-grade finishes. Powder coating is performed by partner facilities to AAMA 2603/2604/2605 spec depending on project. For coastal or facade applications, AAMA 2605 grade powder coating delivers 10+ year warranty performance.",
        ] },
        { heading: "Pricing & Lead Times", paragraphs: [
          "Fabrication is priced by linear metre of finished profile or per assembled unit, depending on the scope. Standard door and window fabrication is delivered in 7–14 days. Curtain wall packages, pergolas and bespoke architectural work range 4–8 weeks depending on size and finish selection. Express slots are sometimes available — ask for current capacity.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors Dubai" },
        { to: "/glass-facade-dubai", label: "Glass Facade Dubai" },
      ]}
    />
  ),
});
