import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const T = "Shower Glass Installation Guide Dubai | Glasser UAE";
const D = "Step-by-step guide to shower glass installation in Dubai — choosing between walk-in, hinged and sliding enclosures, nano coating and installation prep.";
const URL = "https://glasseruae.com/blog/shower-glass-installation-guide-dubai";

export const Route = createFileRoute("/blog/shower-glass-installation-guide-dubai")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:url", content: URL }, { property: "og:type", content: "article" }],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Shower Glass Installation Guide Dubai", url: URL, author: { "@type": "Organization", name: "Glasser UAE" } }) }],
  }),
  component: () => (
    <BlogPost
      h1="Shower Glass Installation Guide Dubai"
      intro="Frameless shower glass transforms a bathroom — but only if the glass, hardware and waterproofing are specified correctly for Dubai's water and climate conditions."
      sections={[
        { heading: "Choose the Right Configuration", paragraphs: ["Walk-in fixed screens are the cleanest, most modern option and require no door. Hinged enclosures suit small to mid-size bathrooms. Sliding doors are perfect where swing clearance is limited."] },
        { heading: "Glass & Hardware", paragraphs: ["10mm tempered safety glass is standard; 12mm for very wide panels or pivot doors. Hardware finishes: chrome, brushed nickel, matte black, brushed gold. PVD coatings outperform powder coat in humid bathrooms."] },
        { heading: "Why Nano Coating Matters in Dubai", paragraphs: ["Dubai water is exceptionally hard. Without a hydrophobic nano coating (Diamond Fusion, EnduroShield), mineral deposits etch into the glass within months. The AED 300–500 upgrade is non-negotiable."] },
        { heading: "Installation Timeline", paragraphs: ["Survey: 20 minutes. Fabrication: 4–7 days. Installation: single visit, 2–4 hours. Cure time before use: 24 hours."] },
      ]}
      ctaHeading="Ready to upgrade your Dubai bathroom?"
      ctaText="Free measurement and detailed quote."
    />
  ),
});
