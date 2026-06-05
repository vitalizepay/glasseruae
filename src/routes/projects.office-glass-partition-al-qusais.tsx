import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import staircase from "@/assets/glass-staircase.asset.json";
import partition from "@/assets/steel-partition.asset.json";
import cabin from "@/assets/glass-office-cabin.jpg.asset.json";

const T = "Office Glass Partition — Al Qusais Project | Glasser UAE";
const D = "Frameless office glass partition project in Al Qusais, Dubai — 280 sqm fit-out completed in 9 days. Acoustic meeting rooms, branded manifestation, full DCD compliance.";
const URL = "https://glasseruae.com/projects/office-glass-partition-al-qusais";

export const Route = createFileRoute("/projects/office-glass-partition-al-qusais")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "CreativeWork",
        name: "Office Glass Partition — Al Qusais", url: URL,
        creator: { "@type": "Organization", name: "Glasser UAE" },
        locationCreated: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Al Qusais", addressRegion: "Dubai", addressCountry: "AE" } },
      }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Office Glass Partition — Al Qusais" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Al Qusais Office Partition" }]}
      title="Office Glass Partition — Al Qusais"
      location="Al Qusais Industrial Area, Dubai"
      overview="A 280 square metre corporate office fit-out featuring frameless single-glazed partitions for open work zones and acoustic double-glazed partitions for meeting rooms, completed from survey to handover in 9 calendar days."
      scope={["Site survey & CAD layout", "DCD & landlord NOC submittals", "6 acoustic meeting rooms", "12 frameless glass doors", "Branded vinyl manifestation", "Out-of-hours installation"]}
      materials={["10mm tempered glass — open areas", "6+12+6 acoustic double-glazed units", "Aluminium U-channel concealed framing", "Dorma BTS80 floor springs", "Brushed nickel hardware"]}
      challenge="The client occupied the floor during refurbishment and required the partition installation to happen without disrupting day-to-day operations or client visits."
      solution="Glasser scheduled all glass installation across two consecutive weekends, working evening shifts to complete electrical penetrations and floor sealing. All glass was pre-cut and gasketed at our workshop so on-site time was minimised."
      result="The full 280 sqm partition scope was delivered in 9 days, on budget and snag-free, with zero downtime for the operating team."
      testimonial={{ quote: "Glasser handled the entire approvals process and installed our partitions in two weekends without our team losing a single working hour. The acoustic boardrooms perform beautifully.", author: "Operations Director, Al Qusais office" }}
      gallery={[
        { src: cabin.url, alt: "Frameless office glass partition with branded vinyl manifestation in Al Qusais" },
        { src: partition.url, alt: "Acoustic double-glazed meeting room partition with steel framing" },
        { src: staircase.url, alt: "Glass partition installation detail — Al Qusais office" },
      ]}
      relatedService={{ to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" }}
    />
  ),
});
