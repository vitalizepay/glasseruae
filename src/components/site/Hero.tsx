import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import hero from "@/assets/hero-dubai.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Dubai skyline through glass facade" className="w-full h-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Floating glass panels */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[8%] w-40 h-56 glass rounded-2xl animate-float opacity-50" />
        <div className="absolute top-[55%] right-[12%] w-32 h-44 glass rounded-2xl animate-float opacity-40" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[30%] right-[28%] w-24 h-32 glass rounded-xl animate-float opacity-30" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.2em] text-white mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" /> UAE's Premium Glass Specialist
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.05] text-balance">
            Dubai's Trusted <em className="text-orange not-italic font-normal">Glass &amp; Aluminium</em> Experts
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
            Premium glass, aluminium, doors, windows &amp; custom architectural solutions across the UAE — designed and installed with luxury craftsmanship.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-orange text-orange-foreground font-semibold shadow-orange-glow hover:scale-105 transition-transform"
            >
              Get Free Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/90 hover:text-navy transition"
            >
              <Play size={16} /> View Projects
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[["15+", "Years"], ["500+", "Projects"], ["98%", "Satisfaction"]].map(([n, l]) => (
              <div key={l} className="text-white">
                <div className="text-3xl md:text-4xl font-display text-orange">{n}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
