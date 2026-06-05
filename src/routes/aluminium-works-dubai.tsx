import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Aluminium Works Dubai | Doors, Windows, Cladding | Glasser UAE";
const D = "Comprehensive aluminium works in Dubai — doors, windows, curtain walls, cladding and custom fabrication. Licensed contractor serving the UAE since 2019.";
const URL = "https://glasseruae.com/aluminium-works-dubai";

const FAQS = [
  { q: "Which aluminium systems do you supply?", a: "We work with leading systems including Alupco, Schueco, Reynaers, Sapa and Technal — selected per project specification and budget." },
  { q: "Do you fabricate in-house?", a: "Yes. Our Al Qusais workshop handles cutting, machining, gasketing and assembly for doors, windows and curtain walls." },
  { q: "Can you supply thermally broken systems?", a: "Yes. Thermally broken aluminium profiles are recommended for villa windows, facades and any external glazing in the UAE climate." },
  { q: "Are your aluminium works DM compliant?", a: "All our supply and installation follows Dubai Municipality and Estidama building regulations." },
];

export const Route = createFileRoute("/aluminium-works-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Aluminium Works Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Aluminium Works Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Aluminium · Dubai"
      h1="Aluminium Works Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Aluminium Works Dubai" }]}
      intro="From thermally broken villa windows to large curtain-wall facades on commercial towers, Glasser delivers complete aluminium scope across Dubai and the wider UAE. We are a licensed specialist contractor with in-house fabrication, certified installers and direct supplier relationships with the region's leading aluminium systems."
      defaultService="Aluminium Works Dubai"
      benefits={[
        "Aluminium doors — sliding, swing, folding & pivot",
        "Aluminium windows — casement, tilt-turn, sliding",
        "Curtain walls & unitised facades",
        "Aluminium composite panel (ACP) cladding",
        "Thermally broken systems for UAE climate",
        "Powder-coated and anodised finishes",
        "Schueco, Reynaers, Alupco & Sapa systems",
        "Dubai Municipality & Estidama compliant",
      ]}
      process={[
        { step: "Survey", detail: "Site measurement & specification review by a senior technician." },
        { step: "Engineer", detail: "Structural calcs, wind-load analysis and shop drawings." },
        { step: "Fabricate", detail: "In-house cutting, machining and assembly to DIN tolerances." },
        { step: "Install", detail: "Certified installers with full safety & QA documentation." },
      ]}
      sections={[
        { heading: "Aluminium Doors", paragraphs: [
          "Aluminium doors are the workhorse of Dubai construction — used in villa entrances, balcony access, commercial main entries, shopfront systems and back-of-house service doors. We supply and install single, double, sliding, folding (bi-fold) and pivot configurations in thermally broken or standard profiles, paired with the appropriate ironmongery for the application.",
        ] },
        { heading: "Aluminium Windows", paragraphs: [
          "For UAE residential and hospitality projects, thermally broken aluminium windows are now the default specification — they dramatically reduce solar heat gain and cut AC loads. We offer casement, tilt-and-turn, sliding and fixed window configurations, with double-glazed low-e units sized to project performance specs.",
        ] },
        { heading: "Curtain Walls & Facades", paragraphs: [
          "Curtain-wall systems for commercial towers in Business Bay, Sheikh Zayed Road and DIFC require precise engineering, wind-load calculations, structural silicone joints and certified installers working from MEWPs or BMU cradles. Glasser handles the full design-build cycle, from concept facade engineering through to final commissioning.",
        ] },
        { heading: "Aluminium Composite Cladding", paragraphs: [
          "ACP cladding is widely used on Dubai commercial and mixed-use buildings for its lightweight finish, colour stability and design flexibility. We install fire-rated A2 grade ACP only, using cassette or rivet-fix systems on certified sub-frames. All cladding work is signed off against DCD Cladding Regulation 2017 requirements.",
        ] },
        { heading: "Custom Aluminium Fabrication", paragraphs: [
          "Beyond doors, windows and facades, we handle bespoke aluminium scope: pergolas, louvres, balustrades, equipment screens, signage frames and architectural feature work. If it can be cut, machined and assembled from aluminium extrusion, we can fabricate it.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/aluminium-fabrication-dubai", label: "Aluminium Fabrication Dubai" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors Dubai" },
        { to: "/services/aluminium-windows-dubai", label: "Aluminium Windows Dubai" },
        { to: "/glass-facade-dubai", label: "Glass Facade Dubai" },
      ]}
    />
  ),
});
