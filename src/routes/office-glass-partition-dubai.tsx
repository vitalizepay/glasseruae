import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Office Glass Partition Dubai | Glasser UAE";
const D = "Office glass partition specialists in Dubai. Frameless, acoustic & demountable office partition systems for towers, fit-outs and co-working spaces across the UAE.";
const URL = "https://glasseruae.com/office-glass-partition-dubai";

const FAQS = [
  { q: "Do you handle full office fit-outs or only partitions?", a: "We specialise in glass and aluminium scope: partitions, doors, facades, mirrors and shopfronts. We work alongside main fit-out contractors or directly with end-clients." },
  { q: "Will the partitions block Wi-Fi?", a: "No. Glass partitions do not meaningfully attenuate 2.4 GHz or 5 GHz Wi-Fi signals." },
  { q: "Can you install in occupied offices?", a: "Yes. We routinely work evenings and weekends to install in live offices with zero downtime." },
  { q: "Do you provide manifestation graphics?", a: "Yes. Frosted vinyl manifestation strips, custom logos and full privacy films can be supplied and installed with the partition." },
  { q: "What about fire-rated glass partitions?", a: "We supply EI30 and EI60 fire-rated glass partition systems where required for civil-defence compliance." },
];

export const Route = createFileRoute("/office-glass-partition-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: T }, { name: "twitter:description", content: D },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Office Glass Partition Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Office Glass Partition Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Workspace · Dubai"
      h1="Office Glass Partition Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Office Glass Partition Dubai" }]}
      intro="Modern Dubai workplaces are designed for light, transparency and rapid reconfiguration. Glasser UAE has fitted office glass partitions in towers across DIFC, Business Bay, Sheikh Zayed Road, Dubai Marina, JLT and Internet City — for tenants from 200 sqm startups to 5,000 sqm regional headquarters."
      defaultService="Office Glass Partition Dubai"
      benefits={[
        "Frameless single & double glazed partition systems",
        "Acoustic glass up to 48 dB sound reduction",
        "Floor-to-ceiling installation with concealed channels",
        "Frameless pivot, sliding & swing glass doors",
        "Manifestation graphics & branded vinyl",
        "Fire-rated EI30 / EI60 options available",
        "Out-of-hours installation for live offices",
        "Full DM, DCD and landlord NOC management",
      ]}
      process={[
        { step: "Brief", detail: "Discuss layout, headcount, meeting-room privacy & brand intent." },
        { step: "Design", detail: "CAD layout, finish samples and fixed-price proposal." },
        { step: "Approvals", detail: "We submit landlord & civil-defence NOCs on your behalf." },
        { step: "Install", detail: "Phased install around live operations, 2–5 day site duration." },
      ]}
      sections={[
        { heading: "Why Glass Partitions Dominate Dubai Office Fit-Outs", paragraphs: [
          "In Dubai's grade-A commercial towers, natural light is the single most important environmental factor for tenant attraction and staff retention. Solid drywall meeting rooms cut a floorplate's light by up to 60% — a serious problem when annual rents in DIFC or Business Bay can exceed AED 250 per square foot. Glass partitions preserve light penetration to the core of the floorplate while still delivering enclosed, acoustically separated rooms.",
          "They also signal a premium, modern brand to visiting clients. Whether you are a law firm, fintech, family office or media agency, the choice between glass and gypsum walls quietly shapes how clients perceive your business.",
        ] },
        { heading: "Open Plan, Meeting Rooms & Boardrooms — Choosing the Right System", paragraphs: [
          "Open work zones rarely need acoustic separation — single-glazed 10mm frameless partitions are ideal. They feel almost invisible and keep budget contained.",
          "Meeting rooms benefit from 12mm single-glazed or 6+12+6mm double-glazed systems with proper acoustic seals at floor and ceiling junctions. Boardrooms, HR offices and CEO suites should always be double-glazed: speech privacy is essential and the additional cost is small relative to total fit-out budget.",
        ] },
        { heading: "Acoustic Performance: What the Numbers Mean", paragraphs: [
          "Sound reduction is measured in decibels (Rw). 32 dB lets you hear normal conversation clearly through the wall. 38 dB makes raised voices muffled. 42 dB makes normal conversation inaudible. 48 dB delivers full speech privacy. For Dubai boardrooms handling sensitive deals, we recommend 42 dB minimum — and 48 dB for legal, HR and family-office environments.",
        ] },
        { heading: "Fit-Out Approvals & Landlord NOCs", paragraphs: [
          "Most Dubai commercial buildings require a fit-out NOC before partition work begins. Glasser handles this submission directly — providing the partition shop drawings, material certificates and method statements typically requested by building management. For civil-defence-controlled fit-outs we additionally submit DCD documentation and arrange the final inspection.",
        ] },
        { heading: "Installation in Live Offices", paragraphs: [
          "Roughly 40% of our office partition work is installed in occupied offices. We schedule work in evening or weekend shifts, protect carpets and equipment with floor sheeting, and use low-dust drilling techniques where possible. Glass panels are pre-cut at our workshop so on-site time is reduced to lifting, levelling and sealing — typically 2–5 days for a full floor.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/glass-partition-dubai", label: "Glass Partition Dubai" },
        { to: "/glass-door-installation-dubai", label: "Glass Door Installation Dubai" },
        { to: "/glass-railing-dubai", label: "Glass Railing Dubai" },
      ]}
    />
  ),
});
