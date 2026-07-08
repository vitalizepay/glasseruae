import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/hero-dubai.jpg";

const SLUG = "aluminium-fabrication-services-dubai";
const TITLE = "Aluminium Fabrication Services in Dubai";
const DESC = "Aluminium fabrication in Dubai: doors, windows, curtain wall, ACP cladding, pergolas and louvres. CNC workshop capability, AAMA finishes and typical lead times.";
const PUBLISHED = "2026-05-06";
const MODIFIED = "2026-06-05";

const FAQS = [
  { q: "What aluminium fabrication services do you offer in Dubai?", a: "Doors and windows, curtain wall packages, ACP cladding sub-frames, pergolas, louvres, balustrade frames, screens and bespoke architectural assemblies — all fabricated at our Al Qusais workshop." },
  { q: "What is the lead time for aluminium fabrication in Dubai?", a: "Standard aluminium doors and windows are typically 7–14 days. Curtain wall and pergola packages take 4–8 weeks depending on scale and finish specification." },
  { q: "Which powder coating standard do you use?", a: "We finish to AAMA 2603, 2604 or 2605 depending on the exposure spec, and offer anodising and wood-effect coatings for architectural projects." },
  { q: "Do you supply and install, or fabrication only?", a: "Both. We supply fabrication-only for main contractors working with their own installers, or turnkey supply-and-install across the UAE." },
];

export const Route = createFileRoute("/blog/aluminium-fabrication-services-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESC,
      image,
      datePublished: PUBLISHED,
      dateModified: MODIFIED,
      faqs: FAQS,
    }),
  component: () => (
    <BlogPost
      h1={TITLE}
      image={image}
      imageAlt="Aluminium fabrication workshop producing architectural profiles for Dubai projects"
      intro="[Aluminium fabrication in Dubai](/aluminium-fabrication-dubai) is the backbone of modern UAE construction — from villa windows to tower facades. Here's what a serious fabrication partner should offer."
      sections={[
        { heading: "Aluminium Fabrication Scope", paragraphs: ["Doors and windows, curtain wall mullion-transom packages, ACP cladding sub-frames, pergolas and louvres, balustrade frames, screens, signage and bespoke architectural assemblies. See our full [aluminium works Dubai](/aluminium-works-dubai) range."] },
        { heading: "Workshop Equipment", paragraphs: ["CNC double-headed saws for precise cuts, copy routers for hardware preparation, crimping and corner-cleat assembly stations, dedicated gasketing benches and QA inspection at every stage."] },
        { heading: "Finishes", paragraphs: ["Powder coating to AAMA 2603/2604/2605 spec, anodising in champagne/bronze/natural finishes, wood-effect coatings and marine-grade options for coastal projects. Common on our [aluminium windows](/services/aluminium-windows-dubai) and door packages."] },
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
      faqs={FAQS}
      ctaHeading="Working on a Dubai aluminium project?"
      ctaText="Send drawings or scope — we'll quote within one working day."
    />
  ),
});
