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
  const URL = `https://www.glasseruae.com/${p.slug}`;
  const T = `Glass Partition ${p.area} | Office & Retail Specialists | Glasser UAE`;
  const D = `Plan glass partitions for a project in ${p.area}. Discuss office, retail and residential glazing, doors, finishes and site requirements with Glasser UAE.`;
  const FAQS = [
    { q: `How is installation scheduled in ${p.area}?`, a: "Share your target programme and site constraints. Surveyed dimensions, approved specifications, material availability and site readiness determine the agreed schedule." },
    { q: `Who handles landlord approvals in ${p.area}?`, a: "Agree responsibilities for building-management approvals, technical submissions and specialist engineering with the contractor and consultant before appointment." },
    { q: `Can work be planned outside office hours in ${p.area}?`, a: "Confirm permitted working hours, deliveries, protection and access with building management, then request a project-specific installation sequence." },
  ];
  return {
    head: () => ({
      meta: [
        { title: T }, { name: "description", content: D },
        { property: "og:title", content: T }, { property: "og:description", content: D },
        { property: "og:url", content: URL },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
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
        "Project-specific partition layouts",
        "Survey and dimension coordination",
        "Glass construction specified for room use",
        "Acoustic requirements reviewed with the consultant",
        "Working hours and access planning",
        "Approval responsibilities agreed in advance",
        "Doors, hardware and finish selection",
        "Itemised quotation with clear scope",
      ]}
      sections={[
        { heading: `Glass Partitions in ${p.area}`, paragraphs: [
          `Discuss glass partitions, doors and associated aluminium framing for your project in ${p.area}. Send drawings, room uses and finish references so the proposed package can be reviewed against your requirements.`,
          "Building access, permitted working hours and approval responsibilities differ by premises. Confirm these with the project team rather than assuming a standard installation programme.",
        ] },
        { heading: `Local Landmarks We Service Near ${p.area}`, paragraphs: [
          `Nearby reference points include ${p.landmarks.join(", ")}. Include your exact building address and loading or lift restrictions in the enquiry; these landmarks are location references, not completed-project claims.`,
        ] },
        { heading: "What's Included in a Local Installation", paragraphs: [
          "Confirm whether survey, drawings, supply, installation, removal, protection, cleaning and approvals are included. Ask for a written quotation stating assumptions and exclusions, and agree any warranty terms before appointment.",
        ] },
      ]}
      faqs={FAQS}
      areas={SERVICE_AREAS}
      relatedProjects={[...SEO_PROJECTS]}
      relatedServices={[...SEO_SERVICES].slice(0, 4)}
    />
  );
}
