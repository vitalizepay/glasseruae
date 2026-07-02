import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    n: "01",
    t: "Consultation & Site Survey",
    d: "We visit, measure, and listen — translating your space into a precise brief.",
  },
  {
    n: "02",
    t: "Design & Material Selection",
    d: "Shop drawings, glass specs, hardware finishes — every detail signed off.",
  },
  {
    n: "03",
    t: "Precision Fabrication",
    d: "Tempered, laminated, edge-polished in-house to architectural tolerances.",
  },
  {
    n: "04",
    t: "Installation & Handover",
    d: "Clean, on-schedule install by trained crews. Aftercare included.",
  },
];

export function Process() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-p-head]", {
        opacity: 0, y: 50, duration: 1.1, ease: "expo.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.utils.toArray<HTMLElement>("[data-p-step]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 60, duration: 1.0, ease: "expo.out", delay: (i % 4) * 0.08,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      data-no-auto-reveal
      ref={ref}
      id="process"
      className="py-24 md:py-40 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div data-p-head className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            — How we work
          </div>
          <h2 className="mt-6 text-4xl md:text-6xl text-navy font-light leading-[1.02] text-balance">
            <SplitWords text="A four-step process," className="block" />
            <SplitWords text="engineered around your build." className="block italic font-extralight" delay={0.15} />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STEPS.map((s) => (
            <div
              key={s.n}
              data-p-step
              className="group relative rounded-3xl border border-border bg-white p-8 hover:-translate-y-1.5 hover:shadow-elegant transition-all duration-700"
            >
              <div
                className="text-[11px] font-mono tracking-[0.35em]"
                style={{ color: "#3fd0c9" }}
              >
                {s.n}
              </div>
              <h3 className="mt-6 text-xl md:text-2xl text-navy font-light">{s.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">
                {s.d}
              </p>
              <div className="mt-8 h-px w-10 bg-navy/20 group-hover:w-20 group-hover:bg-[#3fd0c9] transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
