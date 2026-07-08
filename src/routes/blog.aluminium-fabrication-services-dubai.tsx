import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/hero-dubai.jpg";

const SLUG = "aluminium-fabrication-services-dubai";
const TITLE = "Aluminium Fabrication Services in Dubai";
const DESC = "Aluminium fabrication in Dubai: doors, windows, curtain wall, ACP cladding, pergolas and louvres. CNC workshop capability, AAMA finishes and typical lead times.";
const PUBLISHED = "2026-05-06";
const MODIFIED = "2026-06-05";

export const Route = createFileRoute("/blog/aluminium-fabrication-services-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESC,
      image,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={image}
      imageAlt="Aluminium fabrication workshop producing architectural profiles for Dubai projects"
      intro="Aluminium fabrication is the backbone of modern UAE construction — from villa windows to tower facades. Here's what a serious fabrication partner should offer."
      sections={[
        { heading: "Scope", paragraphs: ["Doors and windows, curtain wall mullion-transom packages, ACP cladding sub-frames, pergolas and louvres, balustrade frames, screens, signage and bespoke architectural assemblies."] },
        { heading: "Workshop Equipment", paragraphs: ["CNC double-headed saws for precise cuts, copy routers for hardware preparation, crimping and corner-cleat assembly stations, dedicated gasketing benches and QA inspection at every stage."] },
        { heading: "Finishes", paragraphs: ["Powder coating to AAMA 2603/2604/2605 spec, anodising in champagne/bronze/natural finishes, wood-effect coatings and marine-grade options for coastal projects."] },
        { heading: "Lead Times", paragraphs: ["Standard doors and windows: 7–14 days. Curtain wall and pergola packages: 4–8 weeks depending on scale and finish."] },
      ]}
      serviceLinks={[
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
        { to: "/aluminium-fabrication-dubai", label: "Aluminium Fabrication Dubai" },
        { to: "/services/aluminium-windows-dubai", label: "Aluminium Windows" },
      ]}
      related={[
        { to: "/blog/glass-shopfront-installation-guide", label: "Glass Shopfront Installation Guide Dubai" },
        { to: "/blog/office-glass-partition-cost-dubai", label: "Office Glass Partition Cost in Dubai (2026)" },
      ]}
      ctaHeading="Working on a Dubai aluminium project?"
      ctaText="Send drawings or scope — we'll quote within one working day."
    />
  ),
});
