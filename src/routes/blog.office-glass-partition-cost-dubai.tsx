import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/hero-cinematic.jpg";

const SLUG = "office-glass-partition-cost-dubai";
const TITLE = "Office Glass Partition Cost in Dubai (2026)";
const DESC = "2026 Dubai office glass partition prices: per-sqm rates for 10mm/12mm frameless and acoustic, pivot door costs, DCD/NOC fees and a 50 sqm worked example.";
const PUBLISHED = "2026-03-18";
const MODIFIED = "2026-06-05";

export const Route = createFileRoute("/blog/office-glass-partition-cost-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESC,
      image,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={image}
      imageAlt="Modern Dubai office interior with frameless glass partition rooms"
      intro="Office glass partition pricing in Dubai is more transparent than most fit-out trades — but the per-square-metre rate hides important variables. Here's the full breakdown."
      sections={[
        { heading: "Per Square Metre Pricing", paragraphs: ["Single-glazed 10mm frameless: AED 350–450/sqm. Single-glazed 12mm frameless: AED 450–550/sqm. Double-glazed acoustic: AED 650–850/sqm. Framed aluminium partitions: AED 280–380/sqm."] },
        { heading: "Doors & Hardware", paragraphs: ["Frameless pivot doors with floor spring: AED 2,500–4,500 per leaf. Patch-fitted swing doors: AED 1,800–2,800. Frameless sliding doors with track: AED 3,500–5,500. Premium finishes (matte black, brushed gold) add 15–25%."] },
        { heading: "Approvals & Vinyl", paragraphs: ["DCD and landlord NOC submissions are typically AED 1,500–3,500 per submittal. Frosted manifestation strips: AED 75–120/lm. Custom branded vinyl: AED 250–450 per logo."] },
        { heading: "Worked Example — 50 sqm Office", paragraphs: ["50 sqm of frameless 12mm partitions @ AED 500/sqm = AED 25,000. Two frameless pivot doors @ AED 3,200 = AED 6,400. DCD + landlord NOC = AED 2,500. Vinyl manifestation = AED 1,500. Total: AED 35,400 — fully supplied, installed and approved."] },
      ]}
      serviceLinks={[
        { to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" },
        { to: "/services/frameless-glass-partitions-dubai", label: "Frameless Glass Partitions" },
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation" },
      ]}
      related={[
        { to: "/blog/glass-partitions-dubai-office-guide", label: "How to Choose the Right Glass Partition for Your Dubai Office" },
        { to: "/blog/best-glass-partition-company-dubai", label: "Best Glass Partition Company in Dubai (2026 Guide)" },
      ]}
      ctaHeading="Get an itemised quote for your Dubai office"
      ctaText="Free site survey and fixed-price quote within 24 hours."
    />
  ),
});
