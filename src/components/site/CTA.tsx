import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function CTA() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-cta-el]", {
        opacity: 0, y: 40, duration: 1.1, ease: "expo.out", stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section data-no-auto-reveal ref={ref} className="py-28 md:py-44 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <div data-cta-el className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— Start your project</div>
        <h2 className="text-4xl md:text-7xl lg:text-8xl mt-6 text-navy text-balance font-light leading-[0.98]">
          <SplitWords text="Let's build something" className="block" />
          <SplitWords text="exceptional." className="block italic font-extralight" delay={0.15} />
        </h2>
        <p data-cta-el className="mt-8 text-lg text-muted-foreground font-light max-w-2xl mx-auto">
          Tell us about your space. We'll respond with a free consultation and bespoke quote within 24 hours.
        </p>
        <div data-cta-el className="mt-12 flex justify-center flex-wrap gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:bg-navy/90 transition-all duration-500"
          >
            Request Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-500" />
          </Link>
          <a
            href="tel:+971568400838"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white border border-border text-sm font-medium text-navy hover:bg-stone transition-all duration-500"
          >
            +971 56 840 0838
          </a>
        </div>
      </div>
    </section>
  );
}
