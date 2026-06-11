import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import waterfront from "@/assets/waterfront-villa-glass-palm-jumeirah.jpg.asset.json";
import villa from "@/assets/luxury-frameless-villa-glass.jpg.asset.json";
import facade from "@/assets/glass-facade.asset.json";

const T = "Premium Waterfront Glass Works — Palm Jumeirah Dubai | Glasser UAE";
const D = "Premium waterfront frameless glass installation for a Palm Jumeirah villa — corner-jointed 12mm tempered glass facade with hidden hardware and panoramic palm views.";
const URL = "https://glasseruae.com/projects/premium-waterfront-glass-palm-jumeirah";

export const Route = createFileRoute("/projects/premium-waterfront-glass-palm-jumeirah")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
      { property: "og:image", content: waterfront.url },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: "Premium Waterfront Glass Works — Palm Jumeirah Dubai", url: URL, image: waterfront.url, creator: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Premium Waterfront Glass Works — Palm Jumeirah Dubai" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Premium Waterfront Glass Works — Palm Jumeirah Dubai" }]}
      title="Premium Waterfront Glass Works — Palm Jumeirah Dubai"
      location="Palm Jumeirah, Dubai"
      overview="A premium frameless glass facade across the main reception level of a Palm Jumeirah villa — featuring structural glass corner joints and uninterrupted views of the Palm waterfront and skyline."
      scope={[
        "Full-height frameless glass facade",
        "Structural glass-to-glass corner joints",
        "Concealed hardware and hinges",
        "Heat-soak tested safety glass",
        "Custom-fabricated stainless trim",
      ]}
      materials={[
        "12mm heat-soaked tempered glass",
        "Structural UV-cured silicone joints",
        "316 marine-grade stainless steel fittings",
        "Anodised aluminium recessed channel",
      ]}
      challenge="A Palm Jumeirah waterfront location meant high humidity, salt exposure and direct sun load — combined with a client requirement for zero visible framing at the corner panels."
      solution="We specified heat-soaked tempered glass for safety, marine-grade stainless hardware for corrosion resistance, and used UV-cured structural silicone for the glass-to-glass corner joints — eliminating any vertical mullion."
      result="A flawless wraparound glass facade with crystal-clear views across the Palm and Dubai skyline, fully engineered for the coastal environment and DM-compliant."
      testimonial={{ quote: "The corner glass joint is the detail we kept asking for and other contractors said was impossible. Glasser delivered it perfectly.", author: "Villa Owner, Palm Jumeirah" }}
      gallery={[
        { src: waterfront.url, alt: "Villa Glass Installation Dubai Palm Jumeirah waterfront" },
        { src: villa.url, alt: "Luxury Glass Partition UAE Palm villa interior" },
        { src: facade.url, alt: "Glass and Aluminium Company Dubai waterfront facade" },
      ]}
      relatedService={{ to: "/glass-facade-dubai", label: "Glass Facade Dubai" }}
    />
  ),
});
