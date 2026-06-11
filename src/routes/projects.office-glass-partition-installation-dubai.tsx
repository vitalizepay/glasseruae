import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import office from "@/assets/office-glass-partition-black-frame.jpg.asset.json";
import officeCabin from "@/assets/glass-office-cabin.jpg.asset.json";
import officeBlack from "@/assets/office-glass-partition-black.jpg.asset.json";

const T = "Office Glass Partition Installation Dubai | Glasser UAE";
const D = "Office glass partition installation in Dubai with black aluminium framing — frameless single-glazed cabin, full-height glass walls, 24-hour install with DM compliance.";
const URL = "https://glasseruae.com/projects/office-glass-partition-installation-dubai";

export const Route = createFileRoute("/projects/office-glass-partition-installation-dubai")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
      { property: "og:image", content: office.url },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: "Office Glass Partition Installation — Dubai", url: URL, image: office.url, creator: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Office Glass Partition Installation — Dubai" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Office Glass Partition Installation — Dubai" }]}
      title="Office Glass Partition Installation — Dubai"
      location="Dubai, UAE"
      overview="A modern private executive cabin built with 10mm clear tempered glass and a matte black aluminium frame system. Designed for an open-plan office in Dubai needing a sound-managed private workspace without compromising natural light."
      scope={[
        "Full-height single-glazed glass cabin",
        "Matte black aluminium framing system",
        "Frameless hinged glass door with hydraulic closer",
        "Acoustic perimeter sealing",
        "Site survey, fabrication and install in 5 working days",
      ]}
      materials={[
        "10mm clear tempered safety glass (DM-approved)",
        "Powder-coated matte black aluminium profile system",
        "Premium hydraulic floor-spring door hinge",
        "EPDM acoustic gaskets",
      ]}
      challenge="The client needed an executive cabin in a live working office, with minimal disruption and no visible silicone joints to maintain the premium black-frame design language."
      solution="We pre-fabricated the full cabin at our Al Qusais workshop, delivered overnight and installed in a single working day using dry-jointed structural framing — eliminating wet silicone joints and curing time."
      result="Delivered a fully functional private cabin with crisp sightlines, acoustic privacy and a sharp black-framed look that complements modern office interiors across Dubai."
      testimonial={{ quote: "Exactly the look we wanted — clean black frames, perfect glass alignment, installed without any disruption to our team.", author: "Operations Manager, Dubai office" }}
      gallery={[
        { src: office.url, alt: "Office Glass Partition Dubai with black aluminium frame" },
        { src: officeCabin.url, alt: "Frameless Glass Partition Dubai office cabin" },
        { src: officeBlack.url, alt: "Luxury Glass Partition UAE matte black framing" },
      ]}
      relatedService={{ to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" }}
    />
  ),
});
