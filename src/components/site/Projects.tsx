import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";
import office from "@/assets/office-glass-partition-black-frame.jpg.asset.json";
import villa from "@/assets/luxury-frameless-villa-glass.jpg.asset.json";
import waterfront from "@/assets/waterfront-villa-glass-palm-jumeirah.jpg.asset.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  { img: office.url, alt: "Office Glass Partition Dubai with black aluminium frame", title: "Office Glass Partition Installation", cat: "Commercial · Dubai", year: "2025", to: "/projects/office-glass-partition-installation-dubai" },
  { img: villa.url, alt: "Luxury Frameless Villa Glass Installation Dubai", title: "Luxury Frameless Villa Glass", cat: "Residential · Dubai Waterfront", year: "2025", to: "/projects/luxury-frameless-villa-glass-dubai" },
  { img: waterfront.url, alt: "Villa Glass Installation Dubai — Palm Jumeirah waterfront", title: "Premium Waterfront Glass Works", cat: "Villa · Palm Jumeirah", year: "2025", to: "/projects/premium-waterfront-glass-palm-jumeirah" },
];

export function Projects() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-prj-head]", {
        opacity: 0, y: 60, duration: 1.2, ease: "expo.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });

      gsap.utils.toArray<HTMLElement>("[data-prj-card]").forEach((card) => {
        const img = card.querySelector<HTMLImageElement>("[data-prj-img]");
        const content = card.querySelector<HTMLElement>("[data-prj-content]");

        gsap.from(card, {
          opacity: 0, y: 100, duration: 1.3, ease: "expo.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, yPercent: -6 },
            {
              scale: 1, yPercent: 6, ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }
        if (content) {
          gsap.from(content.querySelectorAll("[data-prj-line]"), {
            opacity: 0, y: 24, duration: 1, ease: "expo.out", stagger: 0.08,
            scrollTrigger: { trigger: card, start: "top 75%", once: true },
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="projects" className="py-28 md:py-44 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <span data-prj-head className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— Featured Work</span>
            <h2 data-prj-head className="text-4xl md:text-7xl mt-6 text-navy text-balance font-light leading-[1.02]">
              Projects shaping the<br className="hidden md:block" />
              <em className="not-italic font-extralight">UAE skyline.</em>
            </h2>
          </div>
          <p data-prj-head className="text-muted-foreground max-w-sm font-light">
            A curated selection of luxury villas, offices and hospitality landmarks where craftsmanship meets architecture.
          </p>
        </div>

        <div className="space-y-10 md:space-y-16">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              data-prj-card
              className="group relative overflow-hidden rounded-[2.5rem] bg-stone"
            >
              <Link to={p.to} className="absolute inset-0 z-20" aria-label={p.title} />
              <div className="relative aspect-[21/10] overflow-hidden">
                <img
                  data-prj-img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover will-change-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent" />
              </div>

              <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white/80 text-[10px] uppercase tracking-[0.5em] z-10">
                {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
              </div>

              <div data-prj-content className="absolute inset-x-0 bottom-0 p-8 md:p-14 text-white z-10">
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <div data-prj-line className="text-[11px] uppercase tracking-[0.4em] text-white/70">{p.cat} · {p.year}</div>
                    <h3 data-prj-line className="mt-4 text-3xl md:text-6xl font-light text-balance leading-[1.02]">{p.title}</h3>
                  </div>
                  <span className="hidden md:flex w-16 h-16 rounded-full bg-white text-navy items-center justify-center shrink-0 transition-all duration-700 group-hover:scale-110">
                    <ArrowUpRight size={22} className="group-hover:rotate-12 transition-transform duration-500" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-navy border-b border-navy/30 hover:border-navy pb-1 transition">
            View all projects <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
