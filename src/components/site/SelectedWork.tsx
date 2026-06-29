import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SplitWords } from "./Reveal";
import img1 from "@/assets/selected-work/WA0096.jpg.asset.json";
import img2 from "@/assets/selected-work/WA0097.jpg.asset.json";
import img3 from "@/assets/selected-work/WA0093.jpg.asset.json";
import img4 from "@/assets/selected-work/WA0088.jpg.asset.json";
import img5 from "@/assets/selected-work/WA0069.jpg.asset.json";
import img6 from "@/assets/selected-work/WA0063.jpg.asset.json";
import img7 from "@/assets/selected-work/WA0062.jpg.asset.json";
import img8 from "@/assets/selected-work/WA0061.jpg.asset.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Item = {
  src: string;
  cat: string;
  title: string;
  loc: string;
  /** Tailwind classes for the editorial grid placement (desktop) */
  span: string;
  /** Aspect ratio for the image card */
  ratio: string;
};

const ITEMS: Item[] = [
  { src: img1.url, cat: "Staircase",         title: "Frameless Glass Balustrade",   loc: "Private Villa",     span: "md:col-span-7", ratio: "aspect-[4/5]" },
  { src: img2.url, cat: "Staircase",         title: "Floating Stair Railing",       loc: "Private Residence", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { src: img3.url, cat: "Bathroom",          title: "Mirror & Shower Glass",        loc: "Penthouse",         span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { src: img4.url, cat: "Shower Glass",      title: "Frameless Shower Enclosure",   loc: "Master Bath",       span: "md:col-span-7", ratio: "aspect-[4/5]" },
  { src: img5.url, cat: "Mirrors",           title: "Decorative Feature Mirror",    loc: "Living Space",      span: "md:col-span-6", ratio: "aspect-[4/5]" },
  { src: img6.url, cat: "Mirrors",           title: "Full-Height Feature Mirror",   loc: "Entrance Foyer",    span: "md:col-span-6", ratio: "aspect-[4/5]" },
  { src: img7.url, cat: "Back-Painted Glass", title: "Antique Mirror Panel",        loc: "Feature Wall",      span: "md:col-span-7", ratio: "aspect-[4/5]" },
  { src: img8.url, cat: "Mirrors",           title: "LED Backlit Mirror",           loc: "Guest Bathroom",    span: "md:col-span-5", ratio: "aspect-[4/5]" },
];

export function SelectedWork() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      gsap.from("[data-sw-eyebrow]", {
        opacity: 0, y: 24, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
      });

      if (reduced) return;

      gsap.utils.toArray<HTMLElement>("[data-sw-card]").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0, y: 60, duration: 1.1, ease: "power3.out",
          delay: (i % 2) * 0.08,
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
        const img = card.querySelector<HTMLElement>("[data-sw-img]");
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6, ease: "none",
              scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        }
      });
    }, root);

    // Refresh after images load (handles parallax measurements)
    const imgs = Array.from(root.current?.querySelectorAll("img") ?? []);
    let pending = imgs.length;
    const done = () => {
      pending--;
      if (pending <= 0) ScrollTrigger.refresh();
    };
    if (pending === 0) ScrollTrigger.refresh();
    imgs.forEach((i) => {
      const im = i as HTMLImageElement;
      if (im.complete && im.naturalWidth > 0) done();
      else {
        im.addEventListener("load", done, { once: true });
        im.addEventListener("error", done, { once: true });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      data-no-auto-reveal
      ref={root}
      className="relative bg-background overflow-hidden"
      aria-label="Selected work"
    >
      <div className="container mx-auto px-6 pt-24 md:pt-32 pb-20 md:pb-28">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl">
          <div>
            <div data-sw-eyebrow className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              — Selected Work
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl lg:text-7xl text-navy text-balance font-light leading-[1.02]">
              <SplitWords text="Crafted across" className="block" />
              <SplitWords text="the Emirates." className="block italic font-extralight" delay={0.15} />
            </h2>
          </div>
          <p data-sw-eyebrow className="max-w-sm text-sm text-muted-foreground leading-relaxed">
            A close look at recent installations — frameless glass, custom mirrors and structural glazing for residences and offices across the UAE.
          </p>
        </div>

        {/* Editorial grid */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-5 md:gap-7">
          {ITEMS.map((it, i) => (
            <article
              key={it.title + i}
              data-sw-card
              className={`group relative overflow-hidden rounded-2xl md:rounded-[1.75rem] bg-stone shadow-soft ${it.span}`}
            >
              <div className={`relative overflow-hidden ${it.ratio}`}>
                <img
                  data-sw-img
                  src={it.src}
                  alt={`${it.cat} — ${it.title} — ${it.loc}`}
                  loading={i < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="absolute inset-0 w-full h-[112%] -top-[6%] object-cover will-change-transform transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              </div>

              {/* Index */}
              <div className="absolute top-5 left-5 text-white/85 text-[10px] uppercase tracking-[0.45em]">
                {String(i + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
              </div>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 text-white">
                <div className="text-[10px] uppercase tracking-[0.4em] text-[#e8d4b0]">
                  {it.cat}
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl font-light leading-tight">
                  {it.title}
                </h3>
                <div className="mt-2 flex items-end justify-between gap-4">
                  <span className="text-xs text-white/75">{it.loc}</span>
                  <span className="inline-flex w-9 h-9 rounded-full bg-white/15 backdrop-blur items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
