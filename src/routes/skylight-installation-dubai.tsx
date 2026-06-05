import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Skylight Installation Dubai | Glass Roof Lights | Glasser UAE";
const D = "Skylight installation in Dubai — fixed, vented and pyramid glass skylights for villas, atriums and commercial spaces. Laminated solar-control glazing, full DM compliance.";
const URL = "https://glasseruae.com/skylight-installation-dubai";

const FAQS = [
  { q: "Will a skylight overheat my room in summer?", a: "Not when correctly specified. We use solar-control low-e laminated glass with light transmission tuned to reduce heat gain by 60–75% compared with clear glass." },
  { q: "Can skylights open?", a: "Yes. Vented and electrically operated skylights are available for ventilation, with rain sensors that auto-close in inclement weather." },
  { q: "Are skylights safe for villas?", a: "Yes. All skylight glazing is laminated (PVB or SentryGlas) — if cracked, the glass remains bonded and contained." },
];

export const Route = createFileRoute("/skylight-installation-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Skylight Installation Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Skylight Installation Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Skylights · Dubai"
      h1="Skylight Installation Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Skylight Installation Dubai" }]}
      intro="Bespoke skylight design, supply and installation for Dubai villas, atriums, restaurants and commercial roof spaces. We engineer fixed, vented and pyramid skylight systems with solar-control laminated glass and fully waterproofed upstands."
      defaultService="Skylight Installation Dubai"
      benefits={[
        "Fixed, vented & motorised skylights",
        "Pyramid, lantern & barrel-vault shapes",
        "Solar-control low-e laminated glass",
        "Aluminium thermally broken framing",
        "Integrated rain sensors & blinds",
        "Full waterproofing & flashing detail",
        "DM-compliant structural calculations",
        "Atrium & feature-roof glazing",
      ]}
      sections={[
        { heading: "Why Specify a Skylight in Dubai?", paragraphs: [
          "A correctly engineered skylight transforms internal spaces — flooding stairwells, atriums and central corridors with natural light without sacrificing thermal performance. In Dubai villas, skylights over double-height entrances and central staircases create a sense of openness and drama that side windows cannot achieve.",
        ] },
        { heading: "Glass Specification for UAE Sun", paragraphs: [
          "All skylight glass is laminated for safety (so broken fragments remain bonded). We specify solar-control low-e coated laminated units — typical performance: light transmission 40–55%, solar heat-gain coefficient 0.22–0.30. Ceramic-fritted patterns and switchable smart glass are available on premium projects.",
        ] },
        { heading: "Fixed vs Vented vs Motorised", paragraphs: [
          "Fixed skylights are the most cost-effective and water-tight option — ideal where ventilation is provided elsewhere. Manually opening skylights add winter cross-ventilation for villas. Motorised skylights with rain and wind sensors enable smoke ventilation in atriums and add hands-free convenience for high-mount installations.",
        ] },
        { heading: "Structural & Waterproofing Detail", paragraphs: [
          "Skylights require careful upstand detailing — typically a 150–200mm concrete or steel upstand above the finished roof level with a continuous bituminous or liquid waterproofing membrane carried up the upstand and lapped under the skylight frame flashing. We coordinate this scope with the roofing contractor and inspect every junction before sign-off.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/glass-facade-dubai", label: "Glass Facade Dubai" },
        { to: "/glass-railing-dubai", label: "Glass Railing Dubai" },
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
      ]}
    />
  ),
});
