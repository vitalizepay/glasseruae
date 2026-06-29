import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { SplitWords } from "./Reveal";
import heroImage from "@/assets/hero-luxury-villa.jpg";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const media = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-h-eyebrow]", { opacity: 0, y: 12, duration: 1.1 }, 0.2)
        .from("[data-h-rule]", { scaleX: 0, transformOrigin: "left", duration: 1.4 }, 0.3)
        .from("[data-h-sub]", { opacity: 0, y: 20, duration: 1.1 }, 1.6)
        .from("[data-h-cta] > *", { opacity: 0, y: 18, duration: 0.9, stagger: 0.1 }, 1.8)
        .from("[data-h-trust] > *", { opacity: 0, y: 12, duration: 0.8, stagger: 0.08 }, 2.1)
        .from("[data-h-scroll]", { opacity: 0, duration: 1 }, 2.4);

      // Subtle mouse parallax
      const onMove = (e: MouseEvent) => {
        if (!media.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 12;
        const y = (e.clientY / window.innerHeight - 0.5) * 12;
        gsap.to(media.current, { x, y, duration: 1.4, ease: "power3.out" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      data-no-auto-reveal
      ref={root}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Cinematic background (Ken Burns) */}
      <div ref={media} className="absolute inset-0 -z-0 will-change-transform">
        <div
          className="absolute inset-[-4%] animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        />
      </div>

      {/* Cinematic grading layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_75%,rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      {/* Warm highlight */}
      <div className="absolute -top-1/3 -right-1/4 w-[80vw] h-[80vw] rounded-full bg-[#c7a36b]/10 blur-[120px] pointer-events-none" />
      {/* Film grain */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Editorial corner labels */}
      <div className="absolute top-28 md:top-32 left-6 md:left-10 right-6 md:right-10 flex items-start justify-between text-[10px] uppercase tracking-[0.45em] text-white/70 z-10">
        <span data-h-eyebrow className="inline-flex items-center gap-3">
          <span className="w-6 h-px bg-[#c7a36b]" />
          Glasser · Dubai
        </span>
        <span data-h-eyebrow className="hidden md:inline-flex items-center gap-3">
          Est. UAE
          <span className="w-6 h-px bg-[#c7a36b]" />
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-10 flex items-center pt-28 md:pt-32 pb-16">
        <div className="w-full max-w-[640px]">
          <div
            data-h-rule
            className="h-px w-24 bg-gradient-to-r from-[#c7a36b] to-transparent mb-6 md:mb-8"
          />

          <h1
            className="font-display font-light text-white text-balance"
            style={{
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              fontSize: "clamp(2.5rem, 6.8vw, 7rem)",
            }}
          >
            <SplitWords text="Invisible Luxury." className="block" delay={0.4} stagger={0.06} start="top 100%" />
            <SplitWords
              text="Built in Glass."
              className="block italic font-extralight text-[#e8d4b0]"
              delay={0.7}
              stagger={0.06}
              start="top 100%"
            />
          </h1>

          <p
            data-h-sub
            className="mt-8 md:mt-10 text-[17px] md:text-[20px] font-light text-white/82 max-w-[520px]"
            style={{ lineHeight: 1.75 }}
          >
            Custom architectural glass and aluminium solutions crafted for luxury villas,
            premium offices and iconic developments across the UAE.
          </p>

          <div data-h-cta className="mt-10 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 h-[58px] px-8 rounded-full bg-white text-[#0a0a0a] text-[12px] uppercase tracking-[0.28em] font-medium hover:bg-[#c7a36b] hover:text-black transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(199,163,107,0.6)]"
            >
              Request Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 h-[58px] px-8 rounded-full border border-white/45 text-white text-[12px] uppercase tracking-[0.28em] font-medium hover:bg-white/8 hover:border-white/80 backdrop-blur-md transition-all duration-500"
            >
              View Projects
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
            </Link>
          </div>

          <div
            data-h-trust
            className="mt-12 md:mt-14 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-y-3 gap-x-6 text-[10px] uppercase tracking-[0.32em] text-white/70"
          >
            {[
              "7+ Years Experience",
              "1200+ Projects",
              "Across UAE",
              "Free Site Visit",
            ].map((t, i) => (
              <div key={t} className="flex items-center gap-6">
                {i > 0 && <span className="hidden sm:inline-block w-px h-3 bg-white/25" />}
                <span className="inline-flex items-center gap-2">
                  <span className="text-[#c7a36b]">✓</span>
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-h-scroll
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 pointer-events-none text-white/60"
      >
        <span className="text-[9px] uppercase tracking-[0.5em]">Scroll</span>
        <span className="relative block w-px h-12 overflow-hidden bg-white/15">
          <span className="absolute top-0 left-0 w-px h-6 bg-[#c7a36b] animate-[scroll-line_2.4s_ease-in-out_infinite]" />
        </span>
      </div>

      <style>{`
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
