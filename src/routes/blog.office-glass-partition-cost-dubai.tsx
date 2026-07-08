import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/hero-cinematic.jpg";

const SLUG = "office-glass-partition-cost-dubai";
const TITLE = "Office Glass Partition Cost in Dubai (2026)";
const DESC = "2026 Dubai office glass partition prices: per-sqm rates for 10mm/12mm frameless and acoustic, pivot door costs, DCD/NOC fees and a 50 sqm worked example.";
const PUBLISHED = "2026-03-18";
const MODIFIED = "2026-06-05";

const FAQS = [
  { q: "How much does an office glass partition cost per square metre in Dubai?", a: "Single-glazed 10mm frameless partitions start at AED 350/sqm, 12mm frameless around AED 450–550/sqm, and double-glazed acoustic systems AED 650–850/sqm — fully supplied and installed." },
  { q: "Are DCD and landlord NOC fees included in a glass partition quote?", a: "Not by default. DCD submittals and landlord NOCs typically cost AED 1,500–3,500 per submission. Glasser UAE lists them as a separate line item so nothing is hidden." },
  { q: "How much does a frameless pivot door cost in Dubai?", a: "Frameless pivot doors with a floor spring cost AED 2,500–4,500 per leaf depending on hardware finish and glass thickness." },
  { q: "What's a realistic total for a 50 sqm Dubai office partition project?", a: "About AED 35,000–40,000 all-in — including 50 sqm of 12mm frameless glass, two pivot doors, DCD and landlord NOC fees, and frosted vinyl manifestation." },
];

export const Route = createFileRoute("/blog/office-glass-partition-cost-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESC,
      image,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      faqs: FAQS,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={image}
      imageAlt="Modern Dubai office interior with frameless glass partition rooms"
      intro="Office glass partition cost in Dubai is more transparent than most fit-out trades — but the per-square-metre rate hides important variables like glass thickness, door hardware and approvals. Here's the full 2026 breakdown, with real per-sqm rates and a worked example for a typical [office glass partition Dubai](/office-glass-partition-dubai) fit-out."
      sections={[
        { heading: "Office Glass Partition Cost Per Square Metre in Dubai", paragraphs: ["Single-glazed 10mm frameless: AED 350–450/sqm. Single-glazed 12mm frameless: AED 450–550/sqm. Double-glazed acoustic: AED 650–850/sqm. Framed aluminium partitions: AED 280–380/sqm. See our full [frameless glass partitions](/services/frameless-glass-partitions-dubai) service for spec details."] },
        { heading: "Doors & Hardware", paragraphs: ["Frameless pivot doors with floor spring: AED 2,500–4,500 per leaf. Patch-fitted swing doors: AED 1,800–2,800. Frameless sliding doors with track: AED 3,500–5,500. Premium finishes (matte black, brushed gold) add 15–25%. Full breakdown on our [glass door installation Dubai](/glass-door-installation-dubai) page."] },
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
      faqs={FAQS}
      ctaHeading="Get an itemised quote for your Dubai office"
      ctaText="Free site survey and fixed-price quote within 24 hours."
    />
  ),
});
