import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "@/assets/hero-cinematic.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow cinematic image scale + parallax on scroll
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15, yPercent: 0 },
        {
          scale: 1.25,
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Initial entrance — line-by-line reveal
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 24, duration: 1.1 })
        .from("[data-hero-line]", { opacity: 0, y: 80, duration: 1.4, stagger: 0.12 }, "-=0.8")
        .from("[data-hero-sub]", { opacity: 0, y: 24, duration: 1.2 }, "-=0.9")
        .from("[data-hero-cta]", { opacity: 0, y: 20, duration: 1, stagger: 0.1 }, "-=0.9")
        .from("[data-hero-meta]", { opacity: 0, y: 20, duration: 1, stagger: 0.1 }, "-=0.9")
        .from("[data-hero-scroll]", { opacity: 0, duration: 1.2 }, "-=0.6");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-navy text-white"
    >
      {/* Cinematic fullscreen image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          ref={imgRef}
          src={heroImage}
          alt="Luxury frameless glass villa overlooking the Dubai skyline at golden hour"
          className="w-full h-full object-cover will-change-transform"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
        {/* Editorial gradient washes */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-transparent to-transparent" />
      </div>

      {/* Top hairline + eyebrow */}
      <div className="absolute top-28 left-0 right-0 z-10">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <span
            data-hero-eyebrow
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.42em] text-white/70"
          >
            <span className="w-8 h-px bg-white/50" />
            Glasser · Est. Dubai 2019
          </span>
          <span
            data-hero-meta
            className="hidden md:inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.42em] text-white/60"
          >
            UAE · Architectural Glass & Aluminium
            <span className="w-8 h-px bg-white/50" />
          </span>
        </div>
      </div>

      {/* Cinematic headline block */}
      <div className="container mx-auto px-6 relative z-10 pb-24 md:pb-32">
        <div className="max-w-6xl">
          <h1 className="font-display font-light tracking-[-0.03em] text-balance text-white leading-[0.95] text-[clamp(3rem,9vw,9rem)]">
            <span className="block overflow-hidden">
              <span data-hero-line className="block">Architectural</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block italic font-extralight">glass &amp; aluminium</span>
            </span>
            <span className="block overflow-hidden">
              <span data-hero-line className="block">for the modern UAE.</span>
            </span>
          </h1>

          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <p
              data-hero-sub
              className="md:col-span-6 text-base md:text-lg text-white/75 font-light leading-relaxed max-w-xl"
            >
              Designed, engineered and installed to architectural standard — frameless partitions,
              shower enclosures, aluminium systems and structural facades, delivered across the
              Emirates since 2019.
            </p>

            <div data-hero-cta className="md:col-span-6 flex flex-wrap gap-3 md:justify-end">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-navy text-sm font-medium hover:bg-white/90 transition-all duration-500"
              >
                Request a private consultation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
              </Link>
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all duration-500"
              >
                <Play size={14} /> View the portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-hero-scroll
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 text-[10px] uppercase tracking-[0.5em] flex flex-col items-center gap-3"
      >
        Scroll
        <span className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
