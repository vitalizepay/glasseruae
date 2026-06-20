import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partition from "@/assets/service-partition.jpg";
import aluminium from "@/assets/service-aluminium.jpg";
import shower from "@/assets/service-shower.jpg";
import mirror from "@/assets/service-mirror.jpg";
import office from "@/assets/project-office.jpg";
import villa from "@/assets/project-villa.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  { img: partition, title: "Frameless Glass Partitions", desc: "Seamless office and residential partitions in crystal-clear tempered glass." },
  { img: aluminium, title: "Aluminium Doors", desc: "Sliding, pivot and folding aluminium systems in premium architectural finishes." },
  { img: office, title: "Aluminium Windows", desc: "Thermal-break window systems engineered for the UAE climate." },
  { img: shower, title: "Shower Enclosures", desc: "Frameless luxury enclosures crafted to your bathroom dimensions." },
  { img: mirror, title: "Custom Mirrors", desc: "Bespoke mirror installations for hospitality, retail and private homes." },
  { img: villa, title: "Glass Facades", desc: "Structural curtain-wall facades for villas, offices and commercial towers." },
];

export function Services() {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-svc-head]", {
        opacity: 0, y: 60, duration: 1.2, ease: "expo.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.utils.toArray<HTMLElement>("[data-svc-card]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 80, duration: 1.1, ease: "expo.out", delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="py-28 md:py-44 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <span data-svc-head className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— What we do</span>
            <h2 data-svc-head className="text-4xl md:text-7xl mt-6 text-navy text-balance font-light leading-[1.02]">
              Bespoke glass &amp; aluminium,<br className="hidden md:block" />
              <em className="not-italic font-extralight">end to end.</em>
            </h2>
          </div>
          <p data-svc-head className="text-muted-foreground max-w-sm font-light text-base">
            From concept and engineering to delivery and installation — six disciplines, one specialist team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              data-svc-card
              className="group bg-white rounded-[2rem] overflow-hidden border border-border hover:-translate-y-2 transition-all duration-700 shadow-glass hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl text-navy font-light">{s.title}</h3>
                  <span className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-navy/60 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition-all duration-500">
                    <ArrowUpRight size={16} className="group-hover:rotate-12 transition-transform duration-500" />
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-navy border-b border-navy/30 hover:border-navy pb-1 transition">
            Explore all services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
