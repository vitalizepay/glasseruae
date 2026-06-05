import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Glass Shopfront Dubai | Retail & F&B Specialists | Glasser UAE";
const D = "Glass shopfront installation in Dubai for retail, F&B and showroom spaces. Frameless storefronts, sliding & pivot entries, branded vinyl & overnight install.";
const URL = "https://glasseruae.com/glass-shopfront-dubai";

const FAQS = [
  { q: "Can you install overnight to avoid trading disruption?", a: "Yes. Retail and F&B shopfront installations are routinely scheduled overnight or during mall handover windows." },
  { q: "Do you handle mall handover and Civil Defence approvals?", a: "Yes. We submit landlord drawings and DCD approvals for retail and F&B fit-outs in Dubai malls and high-streets." },
  { q: "Glass thickness for shopfronts?", a: "Typically 12mm tempered for frameless storefronts, 13.5mm laminated where security or impact resistance is required." },
];

export const Route = createFileRoute("/glass-shopfront-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Glass Shopfront Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Shopfront Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Retail · Dubai"
      h1="Glass Shopfront Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Shopfront Dubai" }]}
      intro="Frameless glass shopfronts for retail, F&B, salons, clinics and showrooms across Dubai's malls and high-street locations. We deliver mall-compliant storefront systems with overnight installation windows, branded vinyl manifestation and full Civil Defence approvals."
      defaultService="Glass Shopfront Dubai"
      benefits={[
        "12mm frameless tempered glass storefronts",
        "Sliding, pivot & swing entrance doors",
        "13.5mm laminated security glass option",
        "Branded vinyl & frosted manifestation",
        "Mall-compliant fit-out documentation",
        "Overnight & weekend installation",
        "DM, DCD and landlord NOC handled",
        "Maintenance & repair contracts available",
      ]}
      sections={[
        { heading: "Mall vs High-Street Shopfront Requirements", paragraphs: [
          "Mall shopfronts in Dubai (Mall of the Emirates, Dubai Mall, Dubai Hills, City Walk, etc.) follow strict landlord design guidelines covering glass type, frame profiles, head height, signage zones and lighting. Each landlord publishes a Tenant Design Manual — we work to that document, prepare submittal-ready shop drawings, and obtain landlord and DCD sign-off before fabrication starts.",
          "High-street shopfronts on Jumeirah Beach Road, Sheikh Zayed Road and Al Wasl follow Dubai Municipality external facade rules and require building owner approval. We handle the documentation route end to end.",
        ] },
        { heading: "Glass & Door Systems", paragraphs: [
          "Standard frameless storefronts use 12mm tempered glass with U-channels at floor and ceiling. Entrance doors are typically 12mm tempered frameless with floor-spring pivots, or aluminium-framed sliding doors with auto-operators. For security-sensitive retail (jewellery, electronics) we upgrade to 13.5mm laminated glass with reinforced floor and head fixings.",
        ] },
        { heading: "Branded Manifestation & Vinyl", paragraphs: [
          "All retail glass shopfronts in Dubai must carry manifestation strips for safety. We supply frosted vinyl bands, custom branded logo manifestation, and full digital print wraps for promotional installations. Application is bubble-free and warranted for outdoor UV exposure.",
        ] },
        { heading: "Overnight Installation", paragraphs: [
          "Most mall handovers and high-street shopfronts must be installed outside trading hours. We schedule overnight installation crews with full safety lighting, protect adjacent tenants and circulation areas, and have the storefront fully glazed, sealed and cleaned before mall opening hours.",
        ] },
        { heading: "Maintenance & Repair", paragraphs: [
          "We service shopfront emergencies across Dubai — broken panels, failed floor springs, jammed sliders, vinyl replacements. Same-day boarding and next-day glass replacement is available for active retail tenants.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation Dubai" },
        { to: "/glass-facade-dubai", label: "Glass Facade Dubai" },
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
      ]}
    />
  ),
});
