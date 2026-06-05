import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";

const T = "Aluminium Fabrication Services in Dubai | Glasser UAE";
const D = "What aluminium fabrication covers in Dubai — doors, windows, pergolas, cladding sub-frames and bespoke architectural work. Workshop capability and lead times.";
const URL = "https://glasseruae.com/blog/aluminium-fabrication-services-dubai";

export const Route = createFileRoute("/blog/aluminium-fabrication-services-dubai")({
  head: () => ({
    meta: [{ title: T }, { name: "description", content: D }, { property: "og:title", content: T }, { property: "og:description", content: D }, { property: "og:url", content: URL }, { property: "og:type", content: "article" }],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: "Aluminium Fabrication Services in Dubai", url: URL, author: { "@type": "Organization", name: "Glasser UAE" } }) }],
  }),
  component: () => (
    <BlogPost
      h1="Aluminium Fabrication Services in Dubai"
      intro="Aluminium fabrication is the backbone of modern UAE construction — from villa windows to tower facades. Here's what a serious fabrication partner should offer."
      sections={[
        { heading: "Scope", paragraphs: ["Doors and windows, curtain wall mullion-transom packages, ACP cladding sub-frames, pergolas and louvres, balustrade frames, screens, signage and bespoke architectural assemblies."] },
        { heading: "Workshop Equipment", paragraphs: ["CNC double-headed saws for precise cuts, copy routers for hardware preparation, crimping and corner-cleat assembly stations, dedicated gasketing benches and QA inspection at every stage."] },
        { heading: "Finishes", paragraphs: ["Powder coating to AAMA 2603/2604/2605 spec, anodising in champagne/bronze/natural finishes, wood-effect coatings and marine-grade options for coastal projects."] },
        { heading: "Lead Times", paragraphs: ["Standard doors and windows: 7–14 days. Curtain wall and pergola packages: 4–8 weeks depending on scale and finish."] },
      ]}
      ctaHeading="Working on a Dubai aluminium project?"
      ctaText="Send drawings or scope — we'll quote within one working day."
    />
  ),
});
