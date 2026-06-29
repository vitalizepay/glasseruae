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

const ITEMS = [
  { src: img1.url, cat: "Staircase", title: "Frameless Glass Balustrade", loc: "Private Villa" },
  { src: img2.url, cat: "Staircase", title: "Floating Stair Glass Railing", loc: "Private Residence" },
  { src: img3.url, cat: "Bathroom", title: "Mirror & Shower Glass", loc: "Penthouse" },
  { src: img4.url, cat: "Shower Glass", title: "Frameless Shower Enclosure", loc: "Master Bath" },
  { src: img5.url, cat: "Mirrors", title: "Decorative Mirror Feature Wall", loc: "Living Space" },
  { src: img6.url, cat: "Mirrors", title: "Full-Height Feature Mirror", loc: "Entrance Foyer" },
  { src: img7.url, cat: "Back-Painted Glass", title: "Antique Mirror Panel", loc: "Feature Wall" },
  { src: img8.url, cat: "Mirrors", title: "LED Backlit Mirror", loc: "Guest Bathroom" },
];

export function SelectedWork() {
  const root = useRef<HTMLElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);
  const progress = useRef<HTMLSpanElement | null>(null);
  const counter = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const ctx = gsap.context(() => {
      // Header reveals
      gsap.from("[data-sw-eyebrow]", {
        opacity: 0, y: 24, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
      });

      if (reduced || !isDesktop) {
        // Mobile / reduced: simple fade-in for cards
        gsap.utils.toArray<HTMLElement>("[data-sw-panel]").forEach((el) => {
          gsap.from(el, {
            opacity: 0, y: 40, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
        return;
      }

      // Desktop: pinned horizontal scroll
      const trackEl = track.current!;
      const getDistance = () => trackEl.scrollWidth - window.innerWidth;

      const tween = gsap.to(trackEl, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + getDistance(),
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress.current) progress.current.style.transform = `scaleX(${self.progress})`;
            if (counter.current) {
              const idx = Math.min(ITEMS.length, Math.floor(self.progress * ITEMS.length) + 1);
              counter.current.textContent = String(idx).padStart(2, "0");
            }
          },
        },
      });

      // Per-panel image parallax + caption reveal
      gsap.utils.toArray<HTMLElement>("[data-sw-panel]").forEach((panel) => {
        const img = panel.querySelector<HTMLElement>("[data-sw-img]");
        const lines = panel.querySelectorAll<HTMLElement>("[data-sw-line]");

        if (img) {
          gsap.fromTo(
            img,
            { xPercent: -4, scale: 1.05 },
            {
              xPercent: 4, scale: 1.05, ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: tween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        }
        gsap.fromTo(
          lines,
          { yPercent: 100 },
          {
            yPercent: 0, ease: "power3.out", duration: 0.9, stagger: 0.08,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: tween,
              start: "left 65%",
              once: true,
            },
          },
        );
      });
    }, root);

    // Refresh after images load
    const imgs = root.current?.querySelectorAll("img") ?? [];
    let loaded = 0;
    const done = () => {
      loaded++;
      if (loaded >= imgs.length) ScrollTrigger.refresh();
    };
    imgs.forEach((i) => {
      if ((i as HTMLImageElement).complete) done();
      else i.addEventListener("load", done, { once: true });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      data-no-auto-reveal
      ref={root}
      className="relative bg-background overflow-hidden lg:h-screen"
      aria-label="Selected work"
    >
      <div className="container mx-auto px-6 pt-20 md:pt-28 lg:pt-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div data-sw-eyebrow className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              — Selected Work
            </div>
            <h2 className="mt-5 text-4xl md:text-6xl text-navy text-balance font-light leading-[1.02]">
              <SplitWords text="Crafted across" className="block" />
              <SplitWords text="the Emirates." className="block italic font-extralight" delay={0.15} />
            </h2>
          </div>
          <div data-sw-eyebrow className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-muted-foreground">
            <span ref={counter}>01</span>
            <span className="text-muted-foreground/40">/</span>
            <span>{String(ITEMS.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      {/* Desktop horizontal track / Mobile snap-scroll */}
      <div className="mt-10 md:mt-14 lg:mt-10">
        <div
          ref={track}
          className="
            flex gap-6 md:gap-8 px-6 will-change-transform
            lg:will-change-transform
            max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-10
            [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          "
        >
          {ITEMS.map((it, i) => (
            <article
              key={it.title}
              data-sw-panel
              className="
                group relative shrink-0 snap-center overflow-hidden rounded-[1.75rem] bg-stone
                h-[58vh] sm:h-[64vh] lg:h-[70vh]
                aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:w-auto
              "
              style={{
                // Give desktop panels a natural width based on a 3:4 portrait-ish ratio of 70vh
                ...(typeof window !== "undefined" && window.innerWidth >= 1024
                  ? { width: "calc(70vh * 0.78)" }
                  : {}),
              }}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  data-sw-img
                  src={it.src}
                  alt={`${it.cat} — ${it.title} — ${it.loc}`}
                  loading="lazy"
                  className="w-full h-full object-cover will-change-transform transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </div>

              <div className="absolute top-5 left-5 text-white/80 text-[10px] uppercase tracking-[0.45em]">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
                <div className="overflow-hidden">
                  <div data-sw-line className="text-[10px] uppercase tracking-[0.4em] text-[#e8d4b0]">
                    {it.cat}
                  </div>
                </div>
                <div className="overflow-hidden mt-3">
                  <h3 data-sw-line className="font-display text-2xl md:text-3xl font-light leading-tight">
                    {it.title}
                  </h3>
                </div>
                <div className="overflow-hidden mt-2 flex items-end justify-between gap-4">
                  <span data-sw-line className="text-xs text-white/70">{it.loc}</span>
                  <span
                    data-sw-line
                    className="inline-flex w-9 h-9 rounded-full bg-white/10 backdrop-blur items-center justify-center transition-transform duration-500 group-hover:translate-x-1"
                  >
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Progress bar (desktop) */}
        <div className="hidden lg:block container mx-auto px-6 mt-6">
          <div className="h-px w-full bg-border overflow-hidden">
            <span
              ref={progress}
              className="block h-px bg-navy origin-left scale-x-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
