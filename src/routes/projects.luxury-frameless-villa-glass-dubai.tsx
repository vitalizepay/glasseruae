import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import villa from "@/assets/luxury-frameless-villa-glass.jpg.asset.json";
import waterfront from "@/assets/waterfront-villa-glass-palm-jumeirah.jpg.asset.json";
import facade from "@/assets/glass-facade.asset.json";

const T = "Luxury Frameless Villa Glass Installation Dubai | Glasser UAE";
const D = "Luxury frameless glass installation for a Dubai waterfront villa — floor-to-ceiling 12mm tempered glass with hidden channel anchoring and uninterrupted sea views.";
const URL = "https://glasseruae.com/projects/luxury-frameless-villa-glass-dubai";

export const Route = createFileRoute("/projects/luxury-frameless-villa-glass-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
      { property: "og:image", content: villa.url },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: "Luxury Frameless Villa Glass Installation — Dubai", url: URL, image: villa.url, creator: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Luxury Frameless Villa Glass Installation — Dubai" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Luxury Frameless Villa Glass Installation — Dubai" }]}
      title="Luxury Frameless Villa Glass Installation — Dubai"
      location="Dubai Waterfront Villa, UAE"
      overview="A full floor-to-ceiling frameless glass installation across the main living area of a luxury Dubai waterfront villa — designed to preserve uninterrupted views of the marina while delivering premium thermal and acoustic performance."
      scope={[
        "Floor-to-ceiling frameless glass walls",
        "Recessed top and bottom U-channel anchoring",
        "Hidden door hardware integration",
        "Sea-facing facade panels",
        "On-site precision measurement and template",
      ]}
      materials={[
        "12mm clear tempered safety glass",
        "Recessed aluminium U-channel (powder coated)",
        "Structural silicone bonding (Dow Corning)",
        "316 marine-grade stainless steel fixings",
      ]}
      challenge="The villa required completely unobstructed sea views with no visible framing, while still meeting Dubai Municipality safety glass standards for a high-traffic family space facing a balcony."
      solution="We engineered a fully recessed U-channel system grouted into the slab and ceiling, allowing the 12mm tempered glass to appear suspended. All hardware was hidden, and structural silicone bonding eliminated visible joints."
      result="A flawless frameless installation delivering panoramic waterfront views, premium acoustic comfort and complete safety compliance — completed without any disruption to adjacent interior finishes."
      gallery={[
        { src: villa.url, alt: "Frameless Glass Partition Dubai luxury villa" },
        { src: waterfront.url, alt: "Villa Glass Installation Dubai waterfront view" },
        { src: facade.url, alt: "Luxury Glass Partition UAE villa facade" },
      ]}
      relatedService={{ to: "/services/frameless-glass-partitions-dubai", label: "Frameless Glass Partitions Dubai" }}
    />
  ),
});
