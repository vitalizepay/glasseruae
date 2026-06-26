import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";
import heroImage from "@/assets/hero-luxury-villa.jpg";
import curvedFacade from "@/assets/glass-facade.asset.json";
import staircase from "@/assets/glass-staircase.asset.json";
import bathMirror from "@/assets/luxury-bathroom-mirror.jpg.asset.json";
import vanityMirror from "@/assets/marble-vanity-mirror.jpg.asset.json";
import villaInterior from "@/assets/glass-villa.asset.json";
import officeCabin from "@/assets/glass-office-cabin.jpg.asset.json";
import waterfront from "@/assets/waterfront-villa-glass-palm-jumeirah.jpg.asset.json";
import corridor from "@/assets/glass-corridor.asset.json";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const gallery = [
  { src: curvedFacade.url, label: "Curved Glass Facade" },
  { src: villaInterior.url, label: "Frameless Villa Glazing" },
  { src: bathMirror.url, label: "Luxury Mirrors" },
  { src: officeCabin.url, label: "Premium Office Glass" },
  { src: waterfront.url, label: "Waterfront Architecture" },
  { src: corridor.url, label: "Structural Glazing" },
];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const imgWrap = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const card1 = useRef<HTMLDivElement | null>(null);
  const card2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic mask reveal of the hero image on mount
      gsap.fromTo(
        imgWrap.current,
        { clipPath: "inset(12% 12% 12% 12% round 1.5rem)" },
        { clipPath: "inset(0% 0% 0% 0% round 1.5rem)", duration: 2.4, ease: "expo.out" },
      );
      gsap.fromTo(
        imgRef.current,
        { scale: 1.4 },
        { scale: 1.05, duration: 2.6, ease: "expo.out" },
      );

      // Parallax scrub
      gsap.to(imgRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Floating cards
      [card1.current, card2.current].forEach((c, i) => {
        if (!c) return;
        gsap.to(c, {
          y: i === 0 ? -14 : 14,
          duration: 4 + i,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 20, duration: 1.1 }, 0.2)
        .from("[data-hero-meta]", { opacity: 0, y: 20, duration: 1.1 }, 0.3)
        .from("[data-hero-rule]", { scaleX: 0, transformOrigin: "left", duration: 1.6 }, 0.4)
        .from("[data-hero-sub]", { opacity: 0, y: 20, duration: 1.2 }, 1.4)
        .from("[data-hero-cta] > *", { opacity: 0, y: 20, duration: 1, stagger: 0.12 }, 1.5)
        .from("[data-hero-card]", { opacity: 0, y: 40, scale: 0.96, duration: 1.4, stagger: 0.15 }, 1.2)
        .from("[data-hero-stat]", { opacity: 0, y: 16, duration: 1, stagger: 0.1 }, 1.6)
        .from("[data-hero-gallery] > *", { opacity: 0, y: 30, duration: 1, stagger: 0.08 }, 2)
        .from("[data-hero-scroll]", { opacity: 0, duration: 1.2 }, 1.9);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      data-no-auto-reveal
      ref={root}
      className="relative bg-[#f6f2ec] text-[#1a1612] overflow-hidden"
    >
      {/* Top eyebrow */}
      <div className="relative z-20 pt-28 md:pt-32">
        <div className="container mx-auto px-6 lg:px-10 flex items-center justify-between">
          <span
            data-hero-eyebrow
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[#7a6a55]"
          >
            <span className="w-6 h-px bg-[#b89968]" />
            Glasser Technical Works
          </span>
          <span
            data-hero-meta
            className="hidden md:inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.45em] text-[#7a6a55]"
          >
            Est. Dubai · UAE
            <span className="w-6 h-px bg-[#b89968]" />
          </span>
        </div>
        <div data-hero-rule className="container mx-auto px-6 lg:px-10 mt-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#b89968]/40 to-transparent" />
        </div>
      </div>

      {/* Main split layout */}
      <div className="container mx-auto px-6 lg:px-10 pt-12 md:pt-16 pb-10 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left — Editorial copy */}
          <div className="lg:col-span-5 xl:col-span-5 lg:pt-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#9a8870] mb-8">
              <span className="font-mono">01 / Architecture</span>
              <span className="w-8 h-px bg-[#c9b690]" />
              <span>Vol. MMXXVI</span>
            </div>

            <h1 className="font-display font-light tracking-[-0.025em] text-balance text-[#1a1612] leading-[0.98] text-[clamp(2.6rem,5.4vw,5.5rem)]">
              <SplitWords text="Architectural" className="block" delay={0.5} stagger={0.05} start="top 100%" />
              <SplitWords
                text="glass &amp; aluminium"
                className="block italic font-extralight text-[#7a5a32]"
                delay={0.7}
                stagger={0.05}
                start="top 100%"
              />
              <SplitWords text="engineered for" className="block" delay={0.9} stagger={0.05} start="top 100%" />
              <SplitWords
                text="luxury living."
                className="block italic font-extralight"
                delay={1.05}
                stagger={0.05}
                start="top 100%"
              />
            </h1>

            <p
              data-hero-sub
              className="mt-10 text-[15px] md:text-base text-[#5a4f42] font-light leading-[1.75] max-w-md"
            >
              Bespoke curved glazing, frameless partitions, structural facades, luxury mirrors and
              premium aluminium systems — crafted for Dubai's finest villas, hotels and iconic
              developments since 2019.
            </p>

            <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#1a1612] text-[#f6f2ec] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#2a221b] transition-all duration-500"
              >
                Get Free Quote
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full border border-[#1a1612]/20 text-[#1a1612] text-xs uppercase tracking-[0.25em] font-medium hover:border-[#1a1612]/60 hover:bg-white/40 backdrop-blur transition-all duration-500"
              >
                Explore Projects
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-14 pt-8 border-t border-[#c9b690]/40 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "500+", l: "Projects Delivered" },
                { v: "7", l: "Emirates Served" },
                { v: "2019", l: "Established" },
              ].map((s) => (
                <div key={s.l} data-hero-stat>
                  <div className="font-display text-3xl md:text-4xl font-light text-[#1a1612]">{s.v}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#9a8870] leading-snug">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Cinematic image with floating product cards */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            <div
              ref={imgWrap}
              className="relative aspect-[4/5] lg:aspect-[5/6] w-full overflow-hidden rounded-2xl bg-[#1a1612] will-change-[clip-path] shadow-[0_40px_80px_-30px_rgba(26,22,18,0.45)]"
            >
              <img
                ref={imgRef}
                src={heroImage}
                alt="Luxury curved glass villa overlooking the Dubai skyline at golden hour"
                className="w-full h-full object-cover will-change-transform"
                width={1600}
                height={1920}
                fetchPriority="high"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1612]/30 via-transparent to-transparent" />

              {/* Corner labels */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-[9px] uppercase tracking-[0.4em] text-white/85">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b78a]" />
                  Palm Jumeirah · Residence
                </span>
                <span className="hidden md:inline">N 25°06′ · E 55°08′</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.35em] text-white/90">
                <span className="font-mono">Curved Structural Glazing</span>
                <span className="hidden md:inline">Golden Hour · 17:42</span>
              </div>
            </div>

            {/* Floating product card — top left */}
            <div
              ref={card1}
              data-hero-card
              className="hidden md:flex absolute -left-6 lg:-left-10 top-12 lg:top-20 w-44 lg:w-52 flex-col gap-3 p-3 rounded-xl bg-[#fdfaf5]/90 backdrop-blur-md border border-[#c9b690]/40 shadow-[0_20px_50px_-20px_rgba(26,22,18,0.35)]"
            >
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img src={vanityMirror.url} alt="Bronze mirror" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="px-1 pb-1">
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#9a8870]">No. 04</div>
                <div className="mt-1 text-sm font-display text-[#1a1612]">Bronze Mirror</div>
                <div className="text-[10px] text-[#7a6a55] mt-0.5">Hand-finished · UAE</div>
              </div>
            </div>

            {/* Floating product card — bottom right */}
            <div
              ref={card2}
              data-hero-card
              className="hidden md:flex absolute -right-4 lg:-right-8 bottom-14 lg:bottom-20 w-48 lg:w-56 flex-col gap-3 p-3 rounded-xl bg-[#fdfaf5]/90 backdrop-blur-md border border-[#c9b690]/40 shadow-[0_20px_50px_-20px_rgba(26,22,18,0.35)]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img src={staircase.url} alt="Glass staircase" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="px-1 pb-1">
                <div className="text-[9px] uppercase tracking-[0.3em] text-[#9a8870]">No. 11</div>
                <div className="mt-1 text-sm font-display text-[#1a1612]">Glass Balustrade</div>
                <div className="text-[10px] text-[#7a6a55] mt-0.5">Frameless · Tempered</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom premium gallery */}
      <div className="border-t border-[#c9b690]/30 bg-[#f1ece4]/60">
        <div className="container mx-auto px-6 lg:px-10 py-10 md:py-14">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] text-[#9a8870]">— Selected Craft</div>
              <h2 className="mt-2 font-display text-2xl md:text-3xl font-light text-[#1a1612] tracking-tight">
                A portfolio of precision.
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#7a5a32] hover:text-[#1a1612] transition-colors"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div
            data-hero-gallery
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          >
            {gallery.map((g) => (
              <figure
                key={g.label}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-[#1a1612]/5"
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612]/70 via-[#1a1612]/0 to-transparent opacity-90" />
                <figcaption className="absolute bottom-3 left-3 right-3 text-[10px] uppercase tracking-[0.3em] text-white/90">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div
        data-hero-scroll
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#7a6a55] text-[9px] uppercase tracking-[0.5em] hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        Scroll
        <span className="w-px h-8 bg-gradient-to-b from-[#b89968] to-transparent" />
      </div>
    </section>
  );
}
