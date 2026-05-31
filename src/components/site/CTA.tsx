import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy text-navy-foreground p-10 md:p-16">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-orange/20 blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-72 h-72 rounded-full bg-orange/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl text-white text-balance">Ready to transform your space?</h2>
              <p className="mt-4 text-white/70">Get a free on-site consultation and quote within 24 hours.</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-orange text-orange-foreground font-semibold shadow-orange-glow hover:scale-105 transition-transform">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:+971568400838" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark text-white font-semibold hover:bg-white/10 transition">
                <Phone size={16} /> +971 56 840 0838
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
