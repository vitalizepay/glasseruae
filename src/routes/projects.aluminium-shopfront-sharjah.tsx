import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import facade from "@/assets/glass-facade.asset.json";
import corridor from "@/assets/glass-corridor.asset.json";
import partition from "@/assets/office-glass-partition-black.jpg.asset.json";

const T = "Aluminium Shopfront — Sharjah Project | Glasser UAE";
const D = "Aluminium shopfront and frameless glass storefront installation in Sharjah — full retail fit-out completed during overnight handover window with mall compliance.";
const URL = "https://glasseruae.com/projects/aluminium-shopfront-sharjah";

export const Route = createFileRoute("/projects/aluminium-shopfront-sharjah")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: "Aluminium Shopfront — Sharjah", url: URL, creator: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Aluminium Shopfront — Sharjah" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Aluminium Shopfront — Sharjah" }]}
      title="Aluminium Shopfront — Sharjah"
      location="Sharjah retail mall"
      overview="A 9 linear metre retail shopfront fit-out combining a frameless 12mm tempered glass storefront with bronze-anodised aluminium pivot entrance door and branded vinyl manifestation — installed overnight during the mall handover window."
      scope={["12mm frameless tempered storefront", "Bronze anodised aluminium pivot door", "Branded vinyl manifestation", "Mall NOC submittals", "Overnight installation crew"]}
      materials={["12mm tempered safety glass", "Bronze anodised aluminium profiles", "Dorma BTS80 floor spring", "3M cast vinyl manifestation"]}
      challenge="The mall handover window was a single 8-hour overnight slot. All glass, framing and door hardware had to be on site, pre-prepared and ready to lift straight into place."
      solution="Glasser pre-fabricated the entire shopfront — including hardware preparation, gasketing and vinyl application — at our Al Qusais workshop. The on-site crew handled lifting, levelling, sealing and final cleaning only."
      result="The shopfront was fully installed, sealed, vinyl-applied and snag-cleared before the mall opened the following morning. Zero impact on adjacent tenants."
      testimonial={{ quote: "Pre-fab approach saved the project. They walked in, lifted everything into place, sealed and left before sunrise.", author: "Retail Project Manager" }}
      gallery={[
        { src: facade.url, alt: "Frameless aluminium shopfront with bronze anodised framing in Sharjah" },
        { src: corridor.url, alt: "Glass shopfront installation detail" },
        { src: partition.url, alt: "Aluminium pivot entrance door in dark bronze finish" },
      ]}
      relatedService={{ to: "/glass-shopfront-dubai", label: "Glass Shopfront Dubai" }}
    />
  ),
});
