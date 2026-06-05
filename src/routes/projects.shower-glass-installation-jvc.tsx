import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import bath from "@/assets/luxury-bathroom-mirror.jpg.asset.json";
import vanity from "@/assets/marble-vanity-mirror.jpg.asset.json";
import villa from "@/assets/glass-villa.asset.json";

const T = "Shower Glass Installation — JVC Project | Glasser UAE";
const D = "Frameless shower glass enclosure installation in JVC, Dubai — luxury villa master bathroom with nano-coated 10mm tempered glass and matte black hardware.";
const URL = "https://glasseruae.com/projects/shower-glass-installation-jvc";

export const Route = createFileRoute("/projects/shower-glass-installation-jvc")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: "Shower Glass Installation — JVC", url: URL, creator: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Shower Glass — JVC" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Shower Glass — JVC" }]}
      title="Shower Glass Installation — JVC"
      location="Jumeirah Village Circle, Dubai"
      overview="Master and guest bathroom shower glass installation in a JVC villa. Two frameless walk-in enclosures with nano coating and a matching vanity mirror — installed in a single working day."
      scope={["Two frameless walk-in shower enclosures", "10mm tempered toughened glass", "Easy-clean nano coating", "Matte black hardware", "Vanity mirror with LED back-lighting"]}
      materials={["10mm tempered safety glass", "Matte black brass hardware", "Diamond Fusion nano coating", "Sanitary-grade neutral-cure silicone"]}
      challenge="The client wanted a luxury hotel-style frameless aesthetic with hardware that would not corrode in Dubai's hard water environment."
      solution="We specified PVD-coated matte black brass hardware (rather than powder-coated steel) for long-term finish stability and applied Diamond Fusion nano coating to all glass for hydrophobic mineral protection."
      result="Both shower enclosures and the vanity mirror were installed, sealed and snagged in a single 6-hour visit. Client signed off the same day."
      testimonial={{ quote: "Spotless installation. The nano coating keeps the glass looking new — I just wipe it down once a week.", author: "Homeowner, JVC" }}
      gallery={[
        { src: bath.url, alt: "Luxury bathroom frameless shower glass installation in JVC villa" },
        { src: vanity.url, alt: "Marble vanity with custom LED back-lit mirror in JVC" },
        { src: villa.url, alt: "Frameless shower screen detail in Dubai villa" },
      ]}
      relatedService={{ to: "/shower-glass-dubai", label: "Shower Glass Dubai" }}
    />
  ),
});
