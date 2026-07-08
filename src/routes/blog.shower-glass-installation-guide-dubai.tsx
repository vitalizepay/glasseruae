import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/project-villa.jpg";

const SLUG = "shower-glass-installation-guide-dubai";
const TITLE = "Shower Glass Installation Guide Dubai";
const DESC = "Dubai shower glass install guide: walk-in vs hinged vs sliding, 10mm/12mm tempered glass, PVD hardware, nano coating for hard water and a full site timeline.";
const PUBLISHED = "2026-04-08";
const MODIFIED = "2026-06-05";

const FAQS = [
  { q: "How long does shower glass installation take in Dubai?", a: "Site survey takes about 20 minutes, fabrication 4–7 days, and installation itself is a single visit of 2–4 hours. Cure time before first use is 24 hours." },
  { q: "What thickness of tempered glass should I use for a Dubai shower?", a: "10mm tempered safety glass is the Dubai standard. Step up to 12mm for very wide walk-in panels or frameless pivot doors." },
  { q: "Do I really need a nano coating on shower glass in Dubai?", a: "Yes — Dubai water is extremely hard. Without a hydrophobic nano coating like Diamond Fusion or EnduroShield, mineral deposits etch permanently into the glass within months. The AED 300–500 upgrade pays for itself." },
  { q: "Can you install shower glass in a rented Dubai apartment?", a: "Yes. We use non-destructive fixings wherever possible and can provide method statements for landlord or building management NOC requests." },
];

export const Route = createFileRoute("/blog/shower-glass-installation-guide-dubai")({
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
      imageAlt="Luxury villa bathroom with a custom walk-in shower glass installation"
      intro="A frameless [shower glass Dubai](/shower-glass-dubai) install transforms a bathroom — but only if the glass, hardware and waterproofing are specified correctly for Dubai's hard water and humid climate."
      sections={[
        { heading: "Choose the Right Shower Glass Configuration", paragraphs: ["Walk-in fixed screens are the cleanest, most modern option and require no door. Hinged enclosures suit small to mid-size bathrooms. Sliding doors are perfect where swing clearance is limited. Full options on our [shower enclosures](/services/shower-enclosures-dubai) page."] },
        { heading: "Glass & Hardware", paragraphs: ["10mm tempered safety glass is standard; 12mm for very wide panels or pivot doors. Hardware finishes: chrome, brushed nickel, matte black, brushed gold. PVD coatings outperform powder coat in humid bathrooms."] },
        { heading: "Why Nano Coating Matters for Dubai Shower Glass", paragraphs: ["Dubai water is exceptionally hard. Without a hydrophobic nano coating (Diamond Fusion, EnduroShield), mineral deposits etch into the glass within months. The AED 300–500 upgrade is non-negotiable."] },
        { heading: "Installation Timeline", paragraphs: ["Survey: 20 minutes. Fabrication: 4–7 days. Installation: single visit, 2–4 hours. Cure time before use: 24 hours. Pair a new enclosure with a matching [custom mirror](/services/custom-mirrors-dubai) for a coordinated bathroom finish."] },
      ]}
      serviceLinks={[
        { to: "/services/shower-enclosures-dubai", label: "Shower Enclosures" },
        { to: "/shower-glass-dubai", label: "Shower Glass Dubai" },
        { to: "/services/custom-mirrors-dubai", label: "Custom Mirrors" },
      ]}
      related={[
        { to: "/blog/frameless-shower-enclosures-dubai-guide", label: "Frameless Shower Enclosures Dubai: What to Expect" },
        { to: "/blog/office-glass-partition-cost-dubai", label: "Office Glass Partition Cost in Dubai (2026)" },
      ]}
      faqs={FAQS}
      ctaHeading="Ready to upgrade your Dubai bathroom?"
      ctaText="Free measurement and detailed quote."
    />
  ),
});
