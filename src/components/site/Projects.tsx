import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
          <h2
            className="lg:col-span-8 text-navy text-balance font-light leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
          >
            Projects shaping the <em className="italic font-normal">UAE skyline</em>
          </h2>
          <p className="lg:col-span-4 text-muted-foreground font-light text-base md:text-lg leading-relaxed">
            A curated selection of luxury villas, offices and hospitality landmarks where craftsmanship meets architecture.
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-[2rem] bg-stone"
            >
              <Link to={p.to} className="absolute inset-0 z-10" aria-label={p.title} />
              <div className="relative aspect-[21/9] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
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
              <div className="absolute top-{i} left-6 top-6 text-xs uppercase tracking-[0.3em] text-white/80 hidden">{String(i + 1).padStart(2, "0")}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
