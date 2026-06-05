import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const T = "Glass Shopfront Installation Guide Dubai | Glasser UAE";
const D = "Everything retailers need to know about glass shopfront installation in Dubai — mall vs high-street rules, glass specification, vinyl, overnight install scheduling.";
const URL = "https://glasseruae.com/blog/glass-shopfront-installation-guide";

export const Route = createFileRoute("/blog/glass-shopfront-installation-guide")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:url", content: URL }, { property: "og:type", content: "article" }],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Glass Shopfront Installation Guide Dubai", url: URL, author: { "@type": "Organization", name: "Glasser UAE" } }) }],
  }),
  component: () => (
    <BlogPost
      h1="Glass Shopfront Installation Guide Dubai"
      intro="A new glass shopfront is the single highest-impact change a Dubai retailer can make to footfall and brand perception. Here's what to plan for."
      sections={[
        { heading: "Mall Tenant Design Manuals", paragraphs: ["Every major mall in Dubai publishes a tenant design manual with strict rules on glass type, head height, signage zones and lighting. Submit drawings against the manual to avoid rework."] },
        { heading: "Glass Selection", paragraphs: ["12mm tempered frameless is standard. Jewellery, electronics and luxury retail step up to 13.5mm laminated security glass. Low-iron (ultra-clear) is worth the premium for high-end stores."] },
        { heading: "Vinyl & Branding", paragraphs: ["Manifestation strips are mandatory for safety. Custom branded vinyl is the cheapest, fastest way to express brand identity on glass."] },
        { heading: "Overnight Installation", paragraphs: ["Mall handovers usually allocate one overnight window. Pre-fabricate everything at the workshop and use the on-site time only for lifting, sealing and cleaning."] },
      ]}
      ctaHeading="Planning a Dubai retail fit-out?"
      ctaText="We'll handle mall approvals, fabrication and overnight installation."
    />
  ),
});
