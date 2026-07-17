import { createFileRoute } from "@tanstack/react-router";
import { BlogPost } from "@/components/site/BlogPost";
import { buildBlogHead } from "@/lib/seo";
import image from "@/assets/hero-dubai.jpg";

const SLUG = "aluminium-fabrication-services-dubai";
const TITLE = "Aluminium Fabrication Services in Dubai";
const DESC = "Dubai aluminium fabrication guide: doors, windows, curtain walls, ACP cladding, pergolas, partition frames, AAMA finishes, in-house CNC workshop and lead times.";
const PUBLISHED = "2026-05-06";
const MODIFIED = "2026-07-17";

const FAQS = [
  { q: "What aluminium fabrication services do you offer in Dubai?", a: "Doors and windows, curtain wall packages, ACP cladding sub-frames, pergolas, louvres, balustrade frames, partition frames, screens and bespoke architectural assemblies — all fabricated at our Al Qusais workshop." },
  { q: "What is the lead time for aluminium fabrication in Dubai?", a: "Standard aluminium doors and windows are typically 7–14 days. Curtain wall and pergola packages take 4–8 weeks depending on scale and finish specification." },
  { q: "Which powder coating standard do you use?", a: "We finish to AAMA 2603, 2604 or 2605 depending on the exposure spec, and offer anodising and wood-effect coatings for architectural projects." },
  { q: "Do you supply and install, or fabrication only?", a: "Both. We supply fabrication-only for main contractors working with their own installers, or turnkey supply-and-install across the UAE." },
  { q: "Why does in-house fabrication matter?", a: "In-house fabrication means we control quality, lead time and site variations directly. Outsourced fabricators add markup, communication lag and quality risk — critical failure points on tight fit-out schedules." },
  { q: "What project types do you fabricate for in the UAE?", a: "Residential villas, apartment fit-outs, commercial offices, retail shopfronts, hospitality, industrial warehouses, government projects and specialist assemblies for consultants and interior designers." },
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
      intro="[Aluminium fabrication in Dubai](/aluminium-fabrication-dubai) is the backbone of modern UAE construction — from villa windows to tower facades, from mall shopfronts to villa pergolas. A serious fabrication partner isn't just cutting extrusions to length; they own the CNC workshop, finish line, quality documentation and site coordination end-to-end. This guide covers what a proper Dubai aluminium fabricator delivers, the fabrication scope worth expecting, finish standards, and why in-house capability matters far more than headline pricing.",
      sections={[
        {
          heading: "Full Aluminium Fabrication Scope",
          paragraphs: [
            "Our Al Qusais workshop fabricates the complete architectural aluminium range: sliding, pivot and folding doors; casement, sliding and tilt-turn windows; unitised and stick-built curtain walls; ACP (aluminium composite panel) cladding sub-frames; pergolas and shade structures; louvre screens and privacy grilles; balustrade and railing frames; partition frames (both office and shopfront systems); signage sub-frames; and bespoke architectural assemblies to consultant drawings.",
            "See our full [aluminium works Dubai](/aluminium-works-dubai) service range for images and spec sheets on each product family.",
          ],
        },
        {
          heading: "Doors — Sliding, Pivot, Folding and Entrance Systems",
          paragraphs: [
            "Aluminium doors are the highest-volume product in our shop. We fabricate to Schuco, Reynaers, Aluk, Alumil and equivalent Chinese-system geometry — including thermal-break profiles for the UAE climate. Sliding doors up to 3.5m tall single leaf, folding systems up to 8-leaf bifold configurations, and pivot doors up to 1.4m wide.",
            "For entrance doors we integrate access control cut-outs, magnetic locks, panic hardware and closer plates at the fabrication stage rather than on-site — much cleaner finish and faster install. Full spec on our [aluminium doors](/services/aluminium-doors-dubai) page.",
          ],
        },
        {
          heading: "Windows — Thermal-Break Performance",
          paragraphs: [
            "Every window we fabricate for the UAE climate uses thermal-break profiles (a polyamide strip separating inner and outer aluminium to break heat conduction). This is non-negotiable for energy performance and DCL/DEWA green-building compliance.",
            "Configurations: casement, top-hung, side-hung, sliding, lift-and-slide, tilt-turn and fixed picture windows. Glazing options range from 6mm single-glazed for shaded elevations to double-glazed low-E units with argon gas fill and warm-edge spacers for west and south elevations. See our [aluminium windows](/services/aluminium-windows-dubai) page for full performance data.",
          ],
        },
        {
          heading: "Curtain Wall, ACP Cladding and Facade Sub-Structures",
          paragraphs: [
            "For tower and villa facades we fabricate both stick-built (mullion-transom on site) and unitised (factory-assembled panels lifted into place) curtain wall systems. Unitised is faster on tall towers and delivers better weathertightness; stick-built is more flexible for irregular geometry.",
            "ACP cladding sub-frames are fabricated to consultant details for both PVDF and FR-core panels. All fixings, brackets and expansion joints engineered for Dubai wind and thermal cycling.",
          ],
        },
        {
          heading: "Pergolas, Louvres and Outdoor Structures",
          paragraphs: [
            "Villa outdoor spaces in Emirates Hills, Al Barsha, Dubai Hills, Jumeirah and Palm Jumeirah increasingly want architectural aluminium pergolas — motorised louvre roofs (bioclimatic pergolas), fixed slat shades and integrated LED and misting systems.",
            "We fabricate the full aluminium sub-structure and integrate third-party motorised louvre systems (Renson, Corradi, Biossun equivalents). All structural calculations and wind-load engineering handled in-house.",
          ],
        },
        {
          heading: "Partition Frames and Interior Aluminium",
          paragraphs: [
            "For office fit-outs we fabricate slim-line aluminium framing systems for glazed partitions — 25mm, 40mm and 60mm-deep profiles with integrated door frames, blinds cavities and acoustic seals. Fabricated in tandem with the glass supply so both trades land on site the same day.",
            "This is where in-house fabrication pays off most: on a tight office fit-out schedule, having the frames and the glass produced under one roof eliminates the coordination gap that kills programmes.",
          ],
        },
        {
          heading: "Powder Coating & Finish Options",
          paragraphs: [
            "We finish to AAMA specification — AAMA 2603 for interior and lightly-exposed applications, AAMA 2604 for standard exterior, and AAMA 2605 (fluoropolymer/PVDF) for premium exterior facades and long-warranty projects. Marine-grade Qualicoat Class 3 available for coastal and Palm Jumeirah exposure.",
            "Colour range: full RAL palette, plus anodising in champagne, bronze, black and natural finishes; wood-effect powder coating (oak, walnut, teak); metallic finishes; and custom colour matching to architect samples with a 5-day approval sample turnaround.",
          ],
        },
        {
          heading: "Workshop Equipment & Quality Control",
          paragraphs: [
            "Our workshop runs CNC double-headed saws for precise mitre and square cuts, copy routers for hardware preparation, hydraulic crimping and corner-cleat assembly stations, dedicated gasketing benches, powder coating oven and QA inspection at every stage.",
            "Quality control: dimensional check on every profile, corner alignment jigs, gasket seating verification, and pre-delivery water and air pressure testing on a random sample from every batch. ISO-aligned documentation for consultants and main contractors.",
          ],
        },
        {
          heading: "Why In-House Fabrication Matters",
          paragraphs: [
            "Many Dubai 'aluminium contractors' are actually assemblers — they buy fabricated frames from a wholesale workshop and mark them up. That model has three failure modes: (1) they can't respond to design changes without going back to the wholesaler, (2) quality issues take weeks to resolve because the wholesaler blames the assembler and vice versa, (3) lead times balloon when the wholesaler has bigger jobs in front of yours.",
            "In-house fabrication (like ours) means the same team that measured your site is running the CNC saw, welding the corners, checking the powder-coat colour and dispatching the material. You get one point of contact, one warranty, and site-response times measured in hours rather than weeks.",
          ],
        },
        {
          heading: "Lead Times & Working with Main Contractors",
          paragraphs: [
            "Standard aluminium doors and windows: 7–14 days from approved shop drawings to delivery. Curtain wall packages: 4–8 weeks. Full villa aluminium package (doors + windows + pergola): 3–5 weeks.",
            "We supply fabrication-only for main contractors working with their own installers, or turnkey supply-and-install for interior designers and end clients across the UAE.",
          ],
        },
      ]}
      serviceLinks={[
        { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
        { to: "/aluminium-fabrication-dubai", label: "Aluminium Fabrication Dubai" },
        { to: "/services/aluminium-windows-dubai", label: "Aluminium Windows" },
        { to: "/services/aluminium-doors-dubai", label: "Aluminium Doors" },
      ]}
      related={[
        { to: "/blog/glass-shopfront-installation-guide", label: "Glass Shopfront Installation Guide Dubai" },
        { to: "/blog/office-glass-partition-cost-dubai", label: "Office Glass Partition Cost in Dubai (2026)" },
        { to: "/blog/best-glass-partition-company-dubai", label: "Best Glass Partition Company in Dubai (2026)" },
      ]}
      faqs={FAQS}
      ctaHeading="Working on a Dubai aluminium project?"
      ctaText="Send drawings or scope — we'll quote within one working day."
    />
  ),
});
