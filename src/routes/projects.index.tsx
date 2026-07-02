import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CTA } from "@/components/site/CTA";
import { ArrowUpRight } from "lucide-react";
import { SplitWords } from "@/components/site/Reveal";
import staircase from "@/assets/landing/staircase.jpg";
import partition from "@/assets/landing/partition.jpg";
import shower from "@/assets/landing/shower.jpg";
import mirror from "@/assets/landing/mirror.jpg";
import railing from "@/assets/landing/railing.jpg";
import tower from "@/assets/landing/tower.jpg";

const T = "Completed Glass Projects in Dubai | Glasser Technical Works";
const D = "Browse completed glass partition, mirror, shower glass, ACP cladding and luxury villa projects across Dubai and the UAE by Glasser Technical Works.";
const URL = "https://glasseruae.com/projects";

const IMAGES = [
  { src: staircase, alt: "Curved glass partitions and architectural glass installation in Dubai" },
  { src: mirror, alt: "Golden and beveled mirror installation in Dubai" },
  { src: shower, alt: "Gym mirrors and shower glass installation in Dubai" },
  { src: partition, alt: "Glass partition with fused glass and golden cladding in Dubai" },
  { src: railing, alt: "Back painted glass and luxury glass handrails in Dubai" },
  { src: tower, alt: "Commercial glass, mirrors and shower glass project in Dubai" },
];

const PROJECTS = [
  { title: "Abu Dhabi Terminal Project", cat: "Curved Glass Partitions", loc: "Abu Dhabi" },
  { title: "Dubai Creek Harbour", cat: "Golden & Beveled Mirrors", loc: "Dubai Creek" },
  { title: "Al Barsha Gym", cat: "Gym Mirrors & Shower Glass", loc: "Al Barsha" },
  { title: "JLT Cluster", cat: "Glass Partition with Fused Glass & Golden Cladding", loc: "JLT" },
  { title: "Khawaneej Villa", cat: "Back Painted Glass & Luxury Glass Handrails", loc: "Khawaneej" },
  { title: "Meydan One (MBC)", cat: "Glass Handrails, Mirrors & Shower Glass", loc: "Meydan" },
  { title: "Dubai Khawaneej Villa", cat: "Back Painted Glass & Steel Handrails", loc: "Khawaneej" },
  { title: "Dubai Creek Restaurants", cat: "Glass Partitions & Back Painted Glass", loc: "Dubai Creek" },
  { title: "Palm Jumeirah Pointe", cat: "Beauty Salon Mirrors", loc: "Palm Jumeirah" },
  { title: "Back Painted Glass Project", cat: "Back Painted Glass", loc: "Dubai" },
  { title: "Jumeirah Village Circle", cat: "ACP Cladding", loc: "JVC" },
  { title: "Office Glass Partition", cat: "Office Glass Partition", loc: "Dubai" },
  { title: "Dubai Hills Villa", cat: "Mirrors, Shower Glass & Glass Handrails", loc: "Dubai Hills" },
  { title: "Sharjah Luxury Villa", cat: "Luxury Mirrors & Antique Mirrors", loc: "Sharjah" },
  { title: "Sharjah Villa", cat: "Antique Mirror Designs", loc: "Sharjah" },
  { title: "Jumeirah Islands Villa", cat: "Mirrors, Shower Glass & Glass Handrails", loc: "Jumeirah Islands" },
  { title: "Palm Jumeirah Villa", cat: "Mirrors, Shower Glass & Glass Handrails", loc: "Palm Jumeirah" },
  { title: "Palm Jumeirah Villa", cat: "Luxury Shower Glass & Mirrors", loc: "Palm Jumeirah" },
  { title: "Jumeirah Islands Villa", cat: "Luxury Mirrors", loc: "Jumeirah Islands" },
  { title: "Al Quoz Car Showroom", cat: "Glass Partitions", loc: "Al Quoz" },
  { title: "Decorative Fused & Engraved Glass", cat: "Decorative Glass", loc: "Dubai" },
  { title: "Deira", cat: "ACP Cladding", loc: "Deira" },
  { title: "Dubai Mall – Versace Shop Front Glass", cat: "Shop Front Glass", loc: "Dubai Mall" },
  { title: "Dubai Mall – Shop Front Glass Partition", cat: "Shop Front Glass Partition", loc: "Dubai Mall" },
  { title: "Palm Jumeirah Gym", cat: "Premium Gym Mirrors", loc: "Palm Jumeirah" },
  { title: "Antique Engraved Glass Doors", cat: "Antique Engraved Glass", loc: "Dubai" },
];

const ITEMS = PROJECTS.map((p) => p.title);

function ProjectListing() {
  return (
    <section className="py-28 md:py-44 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— Portfolio</div>
            <h2 className="text-4xl md:text-7xl mt-6 text-navy text-balance font-light leading-[1.02]">
              <SplitWords text="Completed glass" className="block" />
              <SplitWords text="projects across the UAE." className="block italic font-extralight" delay={0.15} />
            </h2>
          </div>
        </div>

        <div className="max-w-5xl mb-16">
          <p className="text-muted-foreground font-light leading-relaxed text-lg">
            Glasser Technical Works delivers premium glass solutions for residential, commercial and hospitality spaces across the UAE. Our portfolio includes Glass Projects Dubai such as frameless glass partitions, toughened shower enclosures, bespoke mirror installation Dubai, and elegant back painted glass Dubai feature walls. From Glass Partition Dubai office fit-outs and ACP Cladding Dubai facades to Glass Handrail Dubai balustrades and luxury villa interiors, every project reflects precision engineering and refined craftsmanship.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {PROJECTS.map((p, i) => {
            const img = IMAGES[i % IMAGES.length];
            return (
              <article
                key={`${p.title}-${i}`}
                className="group relative overflow-hidden rounded-[2.5rem] bg-stone"
              >
                <div className="relative aspect-[21/10] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover will-change-transform transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
                </div>

                <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white/80 text-[10px] uppercase tracking-[0.5em] z-10">
                  {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-14 text-white z-10">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.4em] text-white/70">{p.cat} · {p.loc}</div>
                      <h3 className="mt-4 text-3xl md:text-6xl font-light text-balance leading-[1.02]">{p.title}</h3>
                    </div>
                    <span className="hidden md:flex w-16 h-16 rounded-full bg-white text-navy items-center justify-center shrink-0 transition-all duration-700 group-hover:scale-110">
                      <ArrowUpRight size={22} className="group-hover:rotate-12 transition-transform duration-500" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Glasser UAE Projects",
          url: URL,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: ITEMS.map((name, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name,
            })),
          },
        }),
      },
    ],
  }),
  component: () => (
    <Layout>
      <div className="pt-32 bg-navy text-white text-center pb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Portfolio</span>
        <h1 className="text-5xl md:text-7xl mt-3">Featured projects</h1>
      </div>
      <ProjectListing />
      <CTA />
    </Layout>
  ),
});
