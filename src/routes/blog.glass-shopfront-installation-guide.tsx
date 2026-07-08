import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/service-aluminium.jpg";

const SLUG = "glass-shopfront-installation-guide";
const TITLE = "Glass Shopfront Installation Guide Dubai";
const DESC = "Dubai retail shopfront guide: mall tenant design manuals, 12mm tempered vs laminated security glass, vinyl manifestation and overnight install scheduling.";
const PUBLISHED = "2026-04-22";
const MODIFIED = "2026-06-05";

const FAQS = [
  { q: "What glass thickness is used for shopfronts in Dubai malls?", a: "12mm tempered frameless glass is the Dubai mall standard. Jewellery, electronics and luxury retail step up to 13.5mm laminated security glass." },
  { q: "Do you handle mall tenant design manual approvals?", a: "Yes. We prepare shopfront drawings, sections and specs to match each mall's tenant design manual and submit for landlord approval before fabrication." },
  { q: "How long does a shopfront installation take?", a: "Fabrication is 7–10 days, and on-site installation is scheduled inside the mall's overnight handover window — typically a single night." },
  { q: "Is manifestation vinyl included?", a: "Yes. Safety manifestation strips are included by default; custom branded vinyl and frosted logos are quoted per design." },
];

export const Route = createFileRoute("/blog/glass-shopfront-installation-guide")({
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
      imageAlt="Frameless glass shopfront installation at a Dubai mall retail unit"
      intro="A new [glass shopfront in Dubai](/glass-shopfront-dubai) is the single highest-impact change a retailer can make to footfall and brand perception. Here's what to plan for."
      sections={[
        { heading: "Mall Tenant Design Manuals", paragraphs: ["Every major mall in Dubai publishes a tenant design manual with strict rules on glass type, head height, signage zones and lighting. Submit drawings against the manual to avoid rework."] },
        { heading: "Glass Selection", paragraphs: ["12mm tempered frameless is standard. Jewellery, electronics and luxury retail step up to 13.5mm laminated security glass. Low-iron (ultra-clear) is worth the premium for high-end stores. Pair with matching [aluminium doors](/services/aluminium-doors-dubai) for a coordinated finish."] },
        { heading: "Vinyl & Branding", paragraphs: ["Manifestation strips are mandatory for safety. Custom branded vinyl is the cheapest, fastest way to express brand identity on glass."] },
        { heading: "Overnight Installation", paragraphs: ["Mall handovers usually allocate one overnight window. Pre-fabricate everything at the workshop and use the on-site time only for lifting, sealing and cleaning. For flagship stores we integrate with [glass facades](/services/glass-facades-dubai) work above the storefront."] },
      ]}
      serviceLinks={[
        { to: "/glass-shopfront-dubai", label: "Glass Shopfront Dubai" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors" },
        { to: "/services/glass-facades-dubai", label: "Glass Facades" },
      ]}
      related={[
        { to: "/blog/aluminium-fabrication-services-dubai", label: "Aluminium Fabrication Services in Dubai" },
        { to: "/blog/best-glass-partition-company-dubai", label: "Best Glass Partition Company in Dubai (2026 Guide)" },
      ]}
      faqs={FAQS}
      ctaHeading="Planning a Dubai retail fit-out?"
      ctaText="We'll handle mall approvals, fabrication and overnight installation."
    />
  ),
});
