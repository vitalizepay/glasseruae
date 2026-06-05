import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const T = "Best Glass Partition Company in Dubai (2026 Guide) | Glasser UAE";
const D = "How to choose the best glass partition company in Dubai — what to check, average pricing, red flags, and why Glasser UAE leads the market for office partition fit-outs.";
const URL = "https://glasseruae.com/blog/best-glass-partition-company-dubai";

const FAQS = [
  { q: "How do I verify a glass partition company in Dubai?", a: "Check Dubai trade licence, public liability insurance, completed-project references, written warranty terms and supplier accreditation with major aluminium system houses." },
  { q: "Is the cheapest quote usually the best?", a: "Rarely. Very low quotes typically skip safety glass certification, use thinner hardware and exclude approvals scope. A mid-range quote with full inclusions usually delivers better total value." },
];

export const Route = createFileRoute("/blog/best-glass-partition-company-dubai")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:url", content: URL }, { property: "og:type", content: "article" }],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Best Glass Partition Company in Dubai (2026 Guide)", url: URL, author: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) },
    ],
  }),
  component: () => (
    <BlogPost
      h1="Best Glass Partition Company in Dubai (2026 Guide)"
      intro="Choosing the right glass partition company in Dubai matters more than most fit-out decisions. The partitions are highly visible, structurally bonded into your space, and expensive to redo. This guide explains exactly what to check before signing a quote."
      sections={[
        { heading: "Trade Licence & Insurance", paragraphs: ["The first check is the simplest — every Dubai contractor must hold a valid trade licence covering glass and aluminium works, plus public liability insurance of at least AED 1 million. Ask for both documents up front. A reputable company sends them within minutes."] },
        { heading: "In-House Fabrication vs Subcontracting", paragraphs: ["Companies that own a workshop control quality and timeline. Subcontracted suppliers add cost, lengthen lead times and dilute accountability when issues arise. Glasser fabricates every project at our Al Qusais workshop."] },
        { heading: "Project References", paragraphs: ["Ask for 3 references from the past 12 months in your sector (office, retail, clinic). A serious supplier will share them and welcome the call. Hesitation is a red flag."] },
        { heading: "Pricing Transparency", paragraphs: ["A good Dubai partition quote is itemised: glass type and thickness per square metre, door hardware per leaf, approvals scope, installation and snagging. Vague single-line quotes hide costs that resurface later."] },
        { heading: "Why Glasser UAE", paragraphs: ["Since 2019 Glasser Technical Works has delivered 500+ projects across the UAE — corporate HQs, F&B chains, clinics and luxury villas. Licensed, insured, in-house fabrication, transparent quotes, signed warranty on every install."] },
      ]}
      faqs={FAQS}
      ctaHeading="Looking for a partition partner in Dubai?"
      ctaText="Request a free site survey & quote within 24 hours."
    />
  ),
});
