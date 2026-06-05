import { SeoLanding } from "@/components/site/SeoLanding";
import { SERVICE_AREAS, SEO_PROJECTS, SEO_SERVICES, faqJsonLd, serviceJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";

export interface LocationProps {
  slug: string;
  area: string;
  landmarks: string[];
  blurb: string;
  localContext: string;
}

export function locationHead(p: LocationProps) {
  const URL = `https://glasseruae.com/${p.slug}`;
  const T = `Glass Partition ${p.area} | Office & Retail Specialists | Glasser UAE`;
  const D = `Glass partition installation in ${p.area}, Dubai. Frameless office, retail and clinic partitions. Free site survey, fast install, full DM compliance.`;
  const FAQS = [
    { q: `How quickly can you install in ${p.area}?`, a: `Most ${p.area} projects are surveyed within 24 hours and installed within 7–14 days from approval.` },
    { q: `Do you handle landlord NOCs in ${p.area}?`, a: `Yes. We prepare and submit fit-out NOCs directly to building management on your behalf.` },
    { q: `Do you cover after-hours installation in ${p.area}?`, a: `Yes — evening and weekend installation is available for live offices and retail spaces in ${p.area}.` },
  ];
  return {
    head: () => ({
      meta: [
        { title: T }, { name: "description", content: D },
        { property: "og:title", content: T }, { property: "og:description", content: D },
        { property: "og:url", content: URL },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceJsonLd(`Glass Partition ${p.area}`, URL, D)) },
        { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Areas We Serve", to: "/areas-we-serve" }, { label: p.area }])) },
      ],
    }),
    FAQS, URL, T, D,
  };
}

export function LocationPage(p: LocationProps) {
  const { FAQS } = locationHead(p);
  return (
    <SeoLanding
      eyebrow={`Location · ${p.area}`}
      h1={`Glass Partition ${p.area}`}
      crumbs={[{ label: "Home", to: "/" }, { label: "Areas We Serve", to: "/areas-we-serve" }, { label: p.area }]}
      intro={p.blurb}
      defaultLocation={p.area}
      defaultService="Glass Partition"
      benefits={[
        `Local team familiar with ${p.area} buildings & landlords`,
        "Free site survey within 24 hours",
        "Frameless 10mm & 12mm tempered glass",
        "Acoustic double-glazed options",
        "Out-of-hours installation available",
        "Landlord NOC & DCD submittal handled",
        "Workmanship warranty on every install",
        "Full UAE service coverage",
      ]}
      sections={[
        { heading: `Glass Partitions in ${p.area}`, paragraphs: [
          p.localContext,
          `Our team works across all major commercial and residential addresses in ${p.area}, with hundreds of completed projects nearby. We understand the building access procedures, working-hour restrictions and approval routes that apply to local landlords and developers.`,
        ] },
        { heading: `Local Landmarks We Service Near ${p.area}`, paragraphs: [
          `Glasser regularly installs glass partitions, doors, mirrors and aluminium works for clients near: ${p.landmarks.join(", ")}. Site teams reach most ${p.area} addresses within 30 minutes from our Al Qusais workshop.`,
        ] },
        { heading: "What's Included in a Local Installation", paragraphs: [
          "Every local project includes a free measurement visit, fixed-price written quotation, CAD layout, fabrication at our Al Qusais workshop, installation by our own crews (not subcontractors), thorough snagging, glass cleaning and a workmanship warranty.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[...SEO_SERVICES].slice(0, 4)}
    />
  );
}
