import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import heroImage from "@/assets/landing/staircase.jpg";

const TEAL = "#3fd0c9";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const media = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from("[data-h-card]", { opacity: 0, y: 40, duration: 1.3 }, 0.15)
        .from("[data-h-eyebrow]", { opacity: 0, y: 14, duration: 0.9 }, 0.5)
        .from("[data-h-word]", { opacity: 0, y: 32, duration: 1.0, stagger: 0.08 }, 0.7)
        .from("[data-h-sub]", { opacity: 0, y: 18, duration: 0.9 }, 1.4)
        .from("[data-h-cta] > *", { opacity: 0, y: 16, duration: 0.8, stagger: 0.1 }, 1.6)
        .from("[data-h-chip]", { opacity: 0, y: 12, duration: 0.7, stagger: 0.08 }, 1.9)
        .from("[data-h-scroll]", { opacity: 0, duration: 0.9 }, 2.2);

      const onMove = (e: MouseEvent) => {
        if (!media.current) return;
        const x = (e.clientX / window.innerWidth - 0.5) * 14;
        const y = (e.clientY / window.innerHeight - 0.5) * 14;
        gsap.to(media.current, { x, y, duration: 1.6, ease: "power3.out" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);
    return () => ctx.revert();
  }, []);

  const headline = [
    { t: "We", accent: false },
    { t: "build", accent: false },
    { t: "the", accent: false },
    { t: "glass", accent: true },
    { t: "that", accent: false, br: true },
    { t: "defines", accent: false },
    { t: "luxury", accent: false },
    { t: "spaces.", accent: false },
  ];

  return (
    <section
      data-no-auto-reveal
      ref={root}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Background image with subtle parallax */}
      <div ref={media} className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-[-4%] bg-cover bg-center animate-ken-burns"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden
        />
      </div>

      {/* Grading */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_60%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_75%)]" />

      {/* Main content — floating glass card */}
      <div className="relative z-10 min-h-[100svh] container mx-auto px-5 md:px-10 flex items-center pt-32 md:pt-36 pb-24">
        <div
          data-h-card
          className="w-full max-w-[860px] rounded-[28px] md:rounded-[36px] border border-white/25 bg-white/12 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] p-7 sm:p-10 md:p-14"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.06) 60%, rgba(63,208,201,0.10) 100%)",
          }}
        >
          <div
            data-h-eyebrow
            className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] uppercase"
            style={{ color: TEAL }}
          >
            Dubai · Glass &amp; Aluminium Specialists
          </div>

          <h1
            className="mt-6 md:mt-8 font-display font-medium text-white text-balance"
            style={{ lineHeight: 1.02, letterSpacing: "-0.02em", fontSize: "clamp(2.25rem, 6.2vw, 5.5rem)" }}
          >
            <span className="inline-block">
              {headline.map((w, i) => (
                <span key={i} className="inline">
                  {w.br && <br className="hidden sm:inline" />}
                  <span
                    data-h-word
                    className="inline-block mr-[0.28em]"
                    style={w.accent ? { color: TEAL, fontStyle: "italic" } : undefined}
                  >
                    {w.t}
                  </span>
                </span>
              ))}
            </span>
          </h1>

          <p
            data-h-sub
            className="mt-7 md:mt-9 text-[15px] sm:text-[17px] md:text-[19px] font-light text-white/85 max-w-[560px]"
            style={{ lineHeight: 1.7 }}
          >
            Turnkey frameless glass, shower enclosures, railings, mirrors and bespoke aluminium works
            across the UAE.
          </p>

          <div
            data-h-cta
            className="mt-9 md:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 h-[54px] px-7 rounded-full text-black text-[13px] font-medium tracking-wide transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(63,208,201,0.7)]"
              style={{ background: TEAL }}
            >
              Get a Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-500" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center h-[54px] px-7 rounded-full bg-white text-[#0a0a0a] text-[13px] font-medium tracking-wide hover:bg-white/90 transition-all duration-500"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-10 md:mt-12 flex flex-wrap gap-3">
            {[
              { n: "7+", l: "Years" },
              { n: "1200+", l: "Projects" },
              { l: "Villas · Hotels · Commercial" },
            ].map((c, i) => (
              <span
                key={i}
                data-h-chip
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-2 text-[11px] sm:text-[12px] text-white/90"
              >
                {c.n && (
                  <span className="font-medium" style={{ color: TEAL }}>
                    {c.n}
                  </span>
                )}
                <span className="text-white/80">{c.l}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-h-scroll
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none text-white/60"
      >
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
