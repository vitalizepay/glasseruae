import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Glass Partition Dubai | Frameless Office Partitions | Glasser UAE";
const D = "Premium glass partition installation in Dubai. Frameless, framed, acoustic & demountable systems for offices, clinics and retail. Free site survey across the UAE.";
const URL = "https://glasseruae.com/glass-partition-dubai";

const FAQS = [
  { q: "How much does a glass partition cost in Dubai?", a: "Glass partitions in Dubai typically range from AED 350 to AED 850 per square metre installed, depending on glass thickness, frameless vs framed system, single or double glazing and door hardware." },
  { q: "How long does installation take?", a: "Most Dubai office partition projects are completed 7–14 days from initial survey, including fabrication and installation." },
  { q: "Are your glass partitions DCD compliant?", a: "Yes. We use tempered safety glass that meets UAE Civil Defence and Dubai Municipality requirements for commercial spaces." },
  { q: "Can the partitions be moved later?", a: "Demountable frameless systems can be fully disassembled and reconfigured, ideal for growing teams or short-term fit-outs." },
  { q: "Do you offer a warranty?", a: "Every installation is covered by a workmanship warranty plus the manufacturer's hardware warranty." },
  { q: "Which areas of Dubai do you cover?", a: "We install across all Dubai districts including DIFC, Business Bay, Dubai Marina, JLT, Al Qusais, Deira, Bur Dubai, JVC and Dubai South." },
];

export const Route = createFileRoute("/glass-partition-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "website" },
      { name: "twitter:title", content: T }, { name: "twitter:description", content: D },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Glass Partition Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Partition Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Service · Dubai"
      h1="Glass Partition Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Partition Dubai" }]}
      intro="Glasser Technical Works is one of Dubai's most trusted specialists in frameless and framed glass partitions for offices, clinics, retail spaces and showrooms. Since 2019 we have delivered over 500 projects across the UAE — from small startup fit-outs in JVC to enterprise headquarters in DIFC and Business Bay."
      defaultService="Glass Partition Dubai"
      benefits={[
        "European-grade 10mm and 12mm tempered safety glass",
        "Frameless, framed & demountable systems",
        "Acoustic double-glazed options up to 48 dB",
        "Single, double and pivot frameless glass doors",
        "Dubai Municipality and DCD compliant installations",
        "Free site survey and detailed quotation within 24 hours",
        "Workmanship warranty on every project",
        "In-house fabrication — no third-party delays",
      ]}
      process={[
        { step: "Survey", detail: "Free on-site measurement & layout consultation anywhere in Dubai." },
        { step: "Design & Quote", detail: "Detailed CAD layout and fixed-price quote within 24 hours." },
        { step: "Fabrication", detail: "Glass and hardware fabricated in our Al Qusais workshop." },
        { step: "Install & Snag", detail: "Clean, fast site installation — typically 1–3 days." },
      ]}
      sections={[
        { heading: "What Is a Glass Partition?", paragraphs: [
          "A glass partition is a non-load-bearing wall system built from tempered safety glass that divides interior space without blocking light. In Dubai's commercial real-estate market — where natural light, openness and a premium aesthetic command higher rents and longer leases — glass partitions have become the default specification for modern offices, clinics, banks, law firms and retail showrooms.",
          "Unlike traditional drywall or block partitions, glass systems can be installed in days rather than weeks, leave the structural shell untouched, and can be dismantled and reused when your team grows or moves. For tenanted spaces in towers across DIFC, Business Bay, Sheikh Zayed Road and Dubai Marina, this flexibility is critical.",
        ] },
        { heading: "Types of Glass Partitions We Install in Dubai", paragraphs: [
          "Frameless single-glazed partitions are the most popular choice for Dubai offices. They use 10mm or 12mm toughened glass with discrete top and bottom U-channels, giving a clean floor-to-ceiling glass wall with minimal visible hardware. Acoustic performance is typically 32–38 dB — sufficient for open-plan zones and most meeting rooms.",
          "Double-glazed acoustic partitions use two panes of glass with a sealed air cavity, delivering 42–48 dB sound reduction. These are essential for HR rooms, boardrooms, legal practices and clinics where speech privacy is non-negotiable. Framed aluminium partitions remain a cost-effective option for industrial and warehouse offices where aesthetics are secondary. Demountable systems — designed to be reconfigured — suit co-working operators and tenants on short leases.",
        ] },
        { heading: "How Much Do Glass Partitions Cost in Dubai?", paragraphs: [
          "Pricing depends on glass thickness, frame system, door hardware and finishing. As a guide: single-glazed frameless 10mm partitions start around AED 350 per square metre installed; 12mm frameless from AED 450; double-glazed acoustic systems from AED 650 to AED 850 per square metre. Frameless glass doors with floor-spring pivots add AED 2,500 to AED 4,500 per door.",
          "For a typical 50 sqm office partition in Dubai, expect AED 17,500 to AED 42,500 fully supplied and installed. Every Glasser quote is itemised so you see exactly what you are paying for — no hidden extras after work starts.",
        ] },
        { heading: "Installation Timeline & Process", paragraphs: [
          "Most projects move from initial enquiry to handover within 7–14 calendar days. A free site survey takes 30–45 minutes, after which our team produces a detailed CAD layout and fixed quote within one working day. On approval, fabrication is completed in 4–7 days at our Al Qusais workshop, followed by 1–3 days of on-site installation.",
          "We work around your business hours — including evenings and weekends — to minimise disruption to staff and clients. All installations include thorough snagging, glass cleaning and a final walk-through.",
        ] },
        { heading: "Why Choose Glasser UAE for Your Glass Partition Project", paragraphs: [
          "Glasser Technical Works LLC is a Dubai-licensed specialist contractor with full insurance, an in-house fabrication workshop, and a portfolio that includes corporate HQs, F&B chains, clinics, banks and luxury residential projects across all seven Emirates. We hold direct relationships with leading European and Far-East glass mills, which means competitive pricing and consistent quality.",
          "Our project managers handle building approvals, fit-out NOCs and post-installation snagging directly with your facilities team — so the partition project never becomes your problem to solve.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" },
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation Dubai" },
        { to: "/services/frameless-glass-partitions-dubai", label: "Frameless Glass Partitions" },
      ]}
    />
  ),
});
