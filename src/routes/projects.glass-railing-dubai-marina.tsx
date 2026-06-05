import { createFileRoute } from "@tanstack/react-router";
import { ProjectShowcase } from "@/components/site/ProjectShowcase";
import { breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import villa from "@/assets/glass-villa.asset.json";
import staircase from "@/assets/glass-staircase.asset.json";
import facade from "@/assets/glass-facade.asset.json";

const T = "Glass Railing — Dubai Marina Project | Glasser UAE";
const D = "Frameless cantilevered glass railing installation on a Dubai Marina balcony — 21.5mm laminated structural glass with stainless handrail, full DM compliance.";
const URL = "https://glasseruae.com/projects/glass-railing-dubai-marina";

export const Route = createFileRoute("/projects/glass-railing-dubai-marina")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL }, { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: "Glass Railing — Dubai Marina", url: URL, creator: { "@type": "Organization", name: "Glasser UAE" } }) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Glass Railing — Dubai Marina" }])) },
    ],
  }),
  component: () => (
    <ProjectShowcase
      crumbs={[{ label: "Home", to: "/" }, { label: "Projects", to: "/projects" }, { label: "Glass Railing — Dubai Marina" }]}
      title="Glass Railing — Dubai Marina"
      location="Dubai Marina, Dubai"
      overview="A 14 linear metre frameless cantilevered glass balustrade installation on a high-floor Dubai Marina apartment balcony, using 21.5mm laminated structural glass with a brushed stainless steel top handrail."
      scope={["14 lm cantilevered balustrade", "21.5mm laminated structural glass", "Recessed U-channel base", "Brushed 316 stainless top rail", "Wind-load engineering submittal"]}
      materials={["21.5mm (10+10) laminated tempered glass with SentryGlas interlayer", "Aluminium structural U-channel", "316 marine-grade stainless steel handrail"]}
      challenge="The balcony faces open sea exposure with high wind loads, and the building required engineered structural calculations for the cantilevered glass without a top rail visible."
      solution="We designed the railing using 21.5mm SentryGlas-interlayer laminated glass anchored in an aluminium U-channel grouted into the slab. Engineering calculations validated performance to building code with a discrete brushed stainless top rail for hand support."
      result="The full 14 lm railing was installed in a single day with no visible fixings. Uninterrupted Marina skyline views with full safety compliance."
      testimonial={{ quote: "Stunning glass railing — feels like the balcony has no edge. Engineering paperwork was perfect for building management.", author: "Owner, Marina apartment" }}
      gallery={[
        { src: villa.url, alt: "Frameless glass balustrade overlooking Dubai Marina" },
        { src: staircase.url, alt: "Cantilevered glass railing detail with stainless handrail" },
        { src: facade.url, alt: "Marina balcony glass railing installation" },
      ]}
      relatedService={{ to: "/glass-railing-dubai", label: "Glass Railing Dubai" }}
    />
  ),
});
