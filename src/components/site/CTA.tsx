import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-36 bg-surface">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Start your project</span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl mt-5 text-navy text-balance font-light">
          Let's build something <em className="not-italic">exceptional</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground font-light">
          Tell us about your space. We'll respond with a free consultation and bespoke quote within 24 hours.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:bg-navy/90 transition"
          >
            Request Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+971568400838"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-white border border-border text-sm font-medium text-navy hover:bg-stone transition"
          >
            +971 56 840 0838
          </a>
        </div>
      </div>
    </section>
  );
}
