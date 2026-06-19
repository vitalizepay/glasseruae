import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-28 md:py-44 bg-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-white/50 mb-12">
          <span>(07) — Start your project</span>
          <span className="hidden md:inline">Free consultation · 24h response</span>
        </div>
        <h2
          className="text-balance font-light leading-[0.92] tracking-[-0.03em] max-w-6xl"
          style={{ fontSize: "clamp(2.75rem, 9vw, 8.5rem)" }}
        >
          Let&rsquo;s build something <em className="italic font-normal">exceptional</em>
        </h2>
        <div className="mt-12 grid md:grid-cols-12 gap-10 items-end border-t border-white/15 pt-10">
          <p className="md:col-span-6 text-lg md:text-xl text-white/70 font-light leading-relaxed">
            Tell us about your space. We&rsquo;ll respond with a free consultation and bespoke quote within 24 hours.
          </p>
          <div className="md:col-span-6 flex flex-wrap gap-3 md:justify-end">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-navy text-sm font-medium hover:bg-white/90 transition"
            >
              Request Free Consultation
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="tel:+971568400838"
              className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/25 text-sm font-medium text-white hover:bg-white hover:text-navy transition"
            >
              +971 56 840 0838
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
