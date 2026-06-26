import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";
import heroImage from "@/assets/hero-luxury-villa.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const imgWrap = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrap.current,
        { clipPath: "inset(10% 10% 10% 10% round 1.25rem)" },
        { clipPath: "inset(0% 0% 0% 0% round 1.25rem)", duration: 2.2, ease: "expo.out" },
      );
      gsap.fromTo(
        imgRef.current,
        { scale: 1.35 },
        { scale: 1.05, duration: 2.4, ease: "expo.out" },
      );
      gsap.to(imgRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 16, duration: 1 }, 0.2)
        .from("[data-hero-rule]", { scaleX: 0, transformOrigin: "left", duration: 1.4 }, 0.3)
        .from("[data-hero-sub]", { opacity: 0, y: 18, duration: 1.1 }, 1.4)
        .from("[data-hero-cta] > *", { opacity: 0, y: 18, duration: 0.9, stagger: 0.1 }, 1.5)
        .from("[data-hero-meta]", { opacity: 0, y: 14, duration: 1 }, 1.7)
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
      {/* Top eyebrow row */}
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
            data-hero-eyebrow
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
      <div className="container mx-auto px-6 lg:px-10 pt-14 md:pt-20 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — Editorial copy */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-[#9a8870] mb-10">
              <span className="font-mono">01</span>
              <span className="w-8 h-px bg-[#c9b690]" />
              <span>Architectural Glass &amp; Aluminium</span>
            </div>

            <h1 className="font-display font-light tracking-[-0.025em] text-balance text-[#1a1612] leading-[0.98] text-[clamp(2.75rem,6vw,6rem)]">
              <SplitWords text="Architectural" className="block" delay={0.5} stagger={0.05} start="top 100%" />
              <SplitWords
                text="glass, engineered"
                className="block"
                delay={0.7}
                stagger={0.05}
                start="top 100%"
              />
              <SplitWords
                text="for luxury living."
                className="block italic font-extralight text-[#7a5a32]"
                delay={0.9}
                stagger={0.05}
                start="top 100%"
              />
            </h1>

            <p
              data-hero-sub
              className="mt-10 text-[15px] md:text-base text-[#5a4f42] font-light leading-[1.8] max-w-md"
            >
              Bespoke curved glazing, frameless partitions, structural facades and premium
              aluminium systems — crafted for Dubai's finest villas, hotels and developments.
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
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-[#1a1612] hover:text-[#7a5a32] transition-colors duration-500 px-2 py-4"
              >
                Explore Projects
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              </Link>
            </div>
          </div>

          {/* Right — Cinematic image */}
          <div className="lg:col-span-6 relative">
            <div
              ref={imgWrap}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#1a1612] will-change-[clip-path] shadow-[0_40px_80px_-30px_rgba(26,22,18,0.4)]"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1a1612]/40 via-transparent to-transparent" />

              <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-[9px] uppercase tracking-[0.4em] text-white/85">
                <span className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b78a]" />
                  Palm Jumeirah · Residence
                </span>
                <span className="hidden md:inline">Golden Hour</span>
              </div>
              <div
                data-hero-meta
                className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.35em] text-white/90"
              >
                <span className="font-mono">Curved Structural Glazing</span>
                <span className="hidden md:inline">N 25° · E 55°</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-hero-scroll
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#7a6a55] text-[9px] uppercase tracking-[0.5em] hidden md:flex flex-col items-center gap-2 pointer-events-none"
      >
        Scroll
        <span className="w-px h-8 bg-gradient-to-b from-[#b89968] to-transparent" />
      </div>
    </section>
  );
}
