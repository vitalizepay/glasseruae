import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/project-office.jpg";

const SLUG = "best-glass-partition-company-dubai";
const TITLE = "Best Glass Partition Company in Dubai (2026 Guide)";
const DESC = "Vet Dubai glass partition companies in 2026: trade licence and insurance checks, in-house fabrication, itemised pricing, warranty terms and red flags to avoid.";
const PUBLISHED = "2026-03-04";
const MODIFIED = "2026-06-05";

const FAQS = [
  { q: "How do I verify a glass partition company in Dubai?", a: "Check Dubai trade licence, public liability insurance, completed-project references, written warranty terms and supplier accreditation with major aluminium system houses." },
  { q: "Is the cheapest quote usually the best?", a: "Rarely. Very low quotes typically skip safety glass certification, use thinner hardware and exclude approvals scope. A mid-range quote with full inclusions usually delivers better total value." },
];

export const Route = createFileRoute("/blog/best-glass-partition-company-dubai")({
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
      imageAlt="Corporate office fitted with premium frameless glass partitions in Dubai"
      intro="Choosing the [best glass partition company in Dubai](/services/frameless-glass-partitions-dubai) matters more than most fit-out decisions. The partitions are highly visible, structurally bonded into your space, and expensive to redo. This 2026 guide explains exactly what to check before signing a quote."
      sections={[
        { heading: "Trade Licence & Insurance", paragraphs: ["The first check is the simplest — every Dubai contractor must hold a valid trade licence covering glass and aluminium works, plus public liability insurance of at least AED 1 million. Ask for both documents up front. A reputable company sends them within minutes."] },
        { heading: "In-House Fabrication vs Subcontracting", paragraphs: ["Companies that own a workshop control quality and timeline. Subcontracted suppliers add cost, lengthen lead times and dilute accountability when issues arise. Glasser fabricates every project at our Al Qusais workshop, including [office glass partitions](/office-glass-partition-dubai) and full [aluminium works](/aluminium-works-dubai)."] },
        { heading: "Project References", paragraphs: ["Ask for 3 references from the past 12 months in your sector (office, retail, clinic). A serious supplier will share them and welcome the call. Hesitation is a red flag."] },
        { heading: "Pricing Transparency", paragraphs: ["A good Dubai partition quote is itemised: glass type and thickness per square metre, door hardware per leaf, approvals scope, installation and snagging. Vague single-line quotes hide costs that resurface later — the detailed [office glass partition cost](/blog/office-glass-partition-cost-dubai) breakdown shows what an itemised quote should look like."] },
        { heading: "Why Glasser UAE", paragraphs: ["Since 2019 Glasser Technical Works has delivered 500+ projects across the UAE — corporate HQs, F&B chains, clinics and luxury villas. Licensed, insured, in-house fabrication, transparent quotes, signed warranty on every install."] },
      ]}
      serviceLinks={[
        { to: "/services/frameless-glass-partitions-dubai", label: "Frameless Glass Partitions" },
        { to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" },
        { to: "/glass-partition-dubai", label: "Glass Partition Dubai" },
      ]}
      related={[
        { to: "/blog/office-glass-partition-cost-dubai", label: "Office Glass Partition Cost in Dubai (2026)" },
        { to: "/blog/glass-partitions-dubai-office-guide", label: "How to Choose the Right Glass Partition for Your Dubai Office" },
        { to: "/blog/acoustic-glass-dubai", label: "Acoustic Glass in Dubai: How Soundproof Glass Works" },
        { to: "/blog/curved-glass-dubai", label: "Curved Glass in Dubai: Uses, Fabrication and Cost Guide" },
      ]}
      faqs={FAQS}
      ctaHeading="Looking for a partition partner in Dubai?"
      ctaText="Request a free site survey & quote within 24 hours."
    />
  ),
});
