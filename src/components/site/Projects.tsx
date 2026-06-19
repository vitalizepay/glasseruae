import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { RevealWords } from "./motion-primitives";

function ProjectCard({ p, i }: { p: typeof PROJECTS[number]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-[2rem] bg-stone"
    >
      <Link to={p.to} className="absolute inset-0 z-10" aria-label={p.title} />
      <div ref={ref} className="relative aspect-[21/9] overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.alt}
          style={{ y, scale }}
          className="w-full h-full object-cover will-change-transform transition-transform duration-[1400ms] group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-white">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.3em] text-white/70">{p.cat} · {p.year}</div>
            <h3 className="mt-3 text-3xl md:text-5xl font-light text-balance">{p.title}</h3>
          </div>
          <span className="hidden md:flex w-14 h-14 rounded-full bg-white text-navy items-center justify-center shrink-0 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <ArrowUpRight size={20} />
          </span>
        </div>
        <div className="mt-6 max-w-2xl text-sm text-white/0 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
            Engineered glass and aluminium delivered to architectural specification, installed on schedule.
          </span>
        </div>
      </div>
      <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.3em] text-white/80">
        {String(i + 1).padStart(2, "0")} / 03
      </div>
    </motion.article>
  );
}
import office from "@/assets/office-glass-partition-black-frame.jpg.asset.json";
import villa from "@/assets/luxury-frameless-villa-glass.jpg.asset.json";
import waterfront from "@/assets/waterfront-villa-glass-palm-jumeirah.jpg.asset.json";

const PROJECTS = [
  { img: office.url, alt: "Office Glass Partition Dubai with black aluminium frame", title: "Office Glass Partition Installation", cat: "Commercial · Dubai", year: "2025", to: "/projects/office-glass-partition-installation-dubai" },
  { img: villa.url, alt: "Luxury Frameless Villa Glass Installation Dubai", title: "Luxury Frameless Villa Glass", cat: "Residential · Dubai Waterfront", year: "2025", to: "/projects/luxury-frameless-villa-glass-dubai" },
  { img: waterfront.url, alt: "Villa Glass Installation Dubai — Palm Jumeirah waterfront", title: "Premium Waterfront Glass Works", cat: "Villa · Palm Jumeirah", year: "2025", to: "/projects/premium-waterfront-glass-palm-jumeirah" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-navy/60 mb-12">
          <span>(04) — Featured Work</span>
          <span className="hidden md:inline">Selected — 2025</span>
        </div>
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <RevealWords
            as="h2"
            text="Projects shaping the UAE skyline"
            className="lg:col-span-8 text-navy text-balance font-light leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-4 text-muted-foreground font-light text-base md:text-lg leading-relaxed"
          >
            A curated selection of luxury villas, offices and hospitality landmarks where craftsmanship meets architecture.
          </motion.p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
