import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

const T = "Glass Door Installation Dubai | Frameless & Pivot Doors | Glasser UAE";
const D = "Frameless glass door installation in Dubai — single, double, pivot, sliding & automatic. Office, retail, villa, hotel & shopfront applications. Free survey UAE-wide.";
const URL = "https://glasseruae.com/glass-door-installation-dubai";

const FAQS = [
  { q: "Can you replace just the floor spring?", a: "Yes. Failed floor springs are one of our most common repair calls — we hold Dorma, Geze and Newstar stock for next-day replacement." },
  { q: "Frameless single or double doors?", a: "Both. Single doors suit office entries; double doors are common for boardrooms, hotel meeting rooms and retail entrances." },
  { q: "Do you install automatic sliding doors?", a: "Yes. We supply and install Dorma, Geze and Tormax automatic sliding doors for retail, hospitals and commercial entries." },
];

export const Route = createFileRoute("/glass-door-installation-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd("Glass Door Installation Dubai", URL, D)) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Door Installation Dubai" }])) },
    ],
  }),
  component: () => (
    <SeoLanding
      eyebrow="Doors · Dubai"
      h1="Glass Door Installation Dubai"
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: "Glass Door Installation Dubai" }]}
      intro="Specialist glass door installation across Dubai — frameless single and double pivots, sliding glass doors, swing doors with patch fittings, and automatic entries. We supply, install and maintain glass door systems for offices, retail, F&B, clinics, villas and hotels."
      defaultService="Glass Door Installation Dubai"
      benefits={[
        "Frameless single & double pivot doors",
        "Patch-fitting swing doors with overhead closer",
        "Frameless sliding glass doors with soft-close",
        "Automatic sliding entrances — Dorma, Geze, Tormax",
        "Floor spring supply & emergency replacement",
        "10mm & 12mm tempered safety glass",
        "Polished chrome, brushed nickel, matte black hardware",
        "Same-day repair callouts across Dubai",
      ]}
      sections={[
        { heading: "Frameless Pivot Glass Doors", paragraphs: [
          "Frameless pivot doors are the premium choice for office entries, boardrooms, meeting rooms and high-end retail. A 12mm tempered glass leaf is mounted on a concealed floor spring at the bottom and a discrete pivot at the top, with an overhead transom panel above and a sidelight beside. The result is a clean, almost-invisible glass entry with no visible frame.",
        ] },
        { heading: "Patch Fittings & Swing Doors", paragraphs: [
          "Patch-fitted glass doors use stainless steel corner patches to clamp the glass leaf and carry the hardware load. They are simpler to install than pivot systems, use surface-mounted overhead door closers, and suit applications where floor coring for a spring is impractical — typically retrofits in existing offices.",
        ] },
        { heading: "Sliding & Automatic Glass Doors", paragraphs: [
          "Frameless sliding glass doors use top-mounted stainless steel tracks with concealed soft-close dampers — perfect for offices and homes where door swing clearance is tight. Automatic sliding entrances using Dorma, Geze or Tormax operators are standard for retail, clinics and offices with high footfall — we handle supply, installation, commissioning and ongoing maintenance contracts.",
        ] },
        { heading: "Floor Springs & Hardware", paragraphs: [
          "Glasser stocks Dorma BTS80, Geze TS500NV and Newstar floor springs for both new installation and emergency replacement. A jammed or leaking floor spring is the most common reason for an emergency callout — we typically respond within 4 hours in central Dubai and can replace the spring on the same visit.",
        ] },
        { heading: "Hardware Finishes & Custom Configurations", paragraphs: [
          "Door handles, push plates, pull bars, locks and patch fittings are available in polished chrome, brushed nickel, matte black, brushed gold and antique bronze. We supply Dorma, Geze, Hafele, FSB and custom-machined hardware on premium projects.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[
        { to: "/glass-shopfront-dubai", label: "Glass Shopfront Dubai" },
        { to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors" },
      ]}
    />
  ),
});
