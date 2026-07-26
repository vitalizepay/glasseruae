import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Row = {
  name: string;
  tag: string;
  features: { title: string; desc: string }[];
};

const ROWS: Row[] = [
  {
    name: "Frameless Glass Partitions",
    tag: "Offices · Retail · Villas",
    features: [
      { title: "10–12mm tempered", desc: "European-grade toughened glass, polished edges, engineered for UAE conditions." },
      { title: "Acoustic options", desc: "Double-glazed and laminated build-ups for meeting rooms and boardrooms." },
      { title: "Branding ready", desc: "Frosted film, manifestation bands and logo etching applied in-house." },
    ],
  },
  {
    name: "Aluminium Doors",
    tag: "Entrances · Interiors",
    features: [
      { title: "Slim sightlines", desc: "Minimal profiles in powder-coated or anodised finishes to any RAL." },
      { title: "Hardware", desc: "Floor springs, patch fittings and access control integration." },
      { title: "Thermal breaks", desc: "Insulated profiles that reduce heat gain on external openings." },
    ],
  },
  {
    name: "Aluminium Windows",
    tag: "Residential · Commercial",
    features: [
      { title: "Sliding & casement", desc: "Bespoke systems sized to opening, sealed against dust and heat." },
      { title: "Double glazing", desc: "Insulated units that cut cooling load and street noise." },
      { title: "Weather tested", desc: "Gaskets and drainage detailed for summer storms and sandy winds." },
    ],
  },
  {
    name: "Shower Enclosures",
    tag: "Bathrooms · Hospitality",
    features: [
      { title: "Frameless clarity", desc: "Ultra-clear low-iron glass with no green tint across the panel." },
      { title: "Easy-clean coating", desc: "Hydrophobic treatment that resists limescale from hard water." },
      { title: "Custom geometry", desc: "Walk-ins, corner and niche enclosures cut to the millimetre." },
    ],
  },
  {
    name: "Custom Mirrors",
    tag: "Interiors · Fit-out",
    features: [
      { title: "LED backlit", desc: "Integrated lighting with demister pads and dimmable drivers." },
      { title: "Antique & tinted", desc: "Bronze, grey and antique finishes for feature walls." },
      { title: "Shaped & bevelled", desc: "CNC-cut shapes, bevels and polished edge details." },
    ],
  },
  {
    name: "Glass Facades",
    tag: "Structural · Towers",
    features: [
      { title: "Structural glazing", desc: "Spider fittings, curtain walling and cable-net systems." },
      { title: "Solar control", desc: "Coated units specified for UAE solar gain and glare." },
      { title: "Site engineering", desc: "Survey, shop drawings, fabrication and certified installation." },
    ],
  },
];

function AccordionRow({ row, index }: { row: Row; index: number }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      el.style.height = open ? "auto" : "0px";
      return;
    }
    const tween = gsap.to(el, {
      height: open ? "auto" : 0,
      duration: 0.6,
      ease: "expo.out",
    });
    return () => {
      tween.kill();
    };
  }, [open]);

  return (
    <div
      data-acc-row
      className={`border-b border-white/10 transition-colors duration-500 ${open ? "bg-white/[0.04]" : ""}`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-6 px-6 md:px-10 py-8 text-left group"
      >
        <span className="text-[11px] tracking-[0.3em] text-white/40 w-10 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-display text-2xl md:text-4xl font-light text-white tracking-[-0.02em]">
            {row.name}
          </span>
          <span className="block mt-2 text-[10px] uppercase tracking-[0.28em] text-white/40">{row.tag}</span>
        </span>
        <span
          className={`shrink-0 grid place-items-center h-11 w-11 rounded-full border border-white/20 text-white transition-transform duration-500 ${
            open ? "rotate-45 bg-orange border-orange" : "group-hover:border-white/50"
          }`}
        >
          <Plus size={18} />
        </span>
      </button>

      <div ref={panelRef} className="overflow-hidden h-0">
        <div className="px-6 md:px-10 pb-10 grid gap-8 md:grid-cols-3">
          {row.features.map((f) => (
            <div key={f.title}>
              <div className="text-white text-sm font-medium">{f.title}</div>
              <p className="mt-2 text-white/60 text-sm font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServicesAccordion() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-acc-row]", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} data-no-auto-reveal className="bg-navy py-24 md:py-36">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl md:text-6xl font-light tracking-[-0.02em] max-w-3xl">
          Everything in glass &amp; aluminium.
        </h2>
        <div className="mt-14 border-t border-white/10">
          {ROWS.map((r, i) => (
            <AccordionRow key={r.name} row={r} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
