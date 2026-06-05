import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const T = "Office Glass Partition Cost in Dubai (2026) | Glasser UAE";
const D = "What office glass partitions actually cost in Dubai in 2026 — per square metre pricing, doors, acoustic options and a worked example for a 50 sqm fit-out.";
const URL = "https://glasseruae.com/blog/office-glass-partition-cost-dubai";

export const Route = createFileRoute("/blog/office-glass-partition-cost-dubai")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:url", content: URL }, { property: "og:type", content: "article" }],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Office Glass Partition Cost in Dubai (2026)", url: URL, author: { "@type": "Organization", name: "Glasser UAE" } }) }],
  }),
  component: () => (
    <BlogPost
      h1="Office Glass Partition Cost in Dubai (2026)"
      intro="Office glass partition pricing in Dubai is more transparent than most fit-out trades — but the per-square-metre rate hides important variables. Here's the full breakdown."
      sections={[
        { heading: "Per Square Metre Pricing", paragraphs: ["Single-glazed 10mm frameless: AED 350–450/sqm. Single-glazed 12mm frameless: AED 450–550/sqm. Double-glazed acoustic: AED 650–850/sqm. Framed aluminium partitions: AED 280–380/sqm."] },
        { heading: "Doors & Hardware", paragraphs: ["Frameless pivot doors with floor spring: AED 2,500–4,500 per leaf. Patch-fitted swing doors: AED 1,800–2,800. Frameless sliding doors with track: AED 3,500–5,500. Premium finishes (matte black, brushed gold) add 15–25%."] },
        { heading: "Approvals & Vinyl", paragraphs: ["DCD and landlord NOC submissions are typically AED 1,500–3,500 per submittal. Frosted manifestation strips: AED 75–120/lm. Custom branded vinyl: AED 250–450 per logo."] },
        { heading: "Worked Example — 50 sqm Office", paragraphs: ["50 sqm of frameless 12mm partitions @ AED 500/sqm = AED 25,000. Two frameless pivot doors @ AED 3,200 = AED 6,400. DCD + landlord NOC = AED 2,500. Vinyl manifestation = AED 1,500. Total: AED 35,400 — fully supplied, installed and approved."] },
      ]}
      ctaHeading="Get an itemised quote for your Dubai office"
      ctaText="Free site survey and fixed-price quote within 24 hours."
    />
  ),
});
