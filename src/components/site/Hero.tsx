import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import hero from "@/assets/hero-dubai.jpg";
import facade from "@/assets/service-aluminium.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-background pt-28">
      {/* Cinematic, almost-static backdrop (image with very slow ken-burns) */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={hero}
          alt="Dubai skyline through architectural glass"
          className="w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
        {/* Soft white overlay for an Apple/Emaar luxury feel */}
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone border border-border text-[11px] uppercase tracking-[0.22em] text-navy/70">
              <span className="w-1.5 h-1.5 rounded-full bg-orange" />
              Glass &amp; Aluminium · Dubai · Since 2019
            </span>
            <h1 className="mt-7 text-5xl md:text-7xl lg:text-[5.25rem] font-light text-navy leading-[1.02] tracking-tight text-balance">
              Dubai's Premium <br className="hidden md:block" />
              <em className="not-italic font-normal">Glass &amp; Aluminium</em> Experts
            </h1>
            <p className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Transforming villas, offices and commercial spaces across the UAE with bespoke glass and aluminium solutions — designed, engineered and installed to architectural standards.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:bg-navy/90 transition"
              >
                Get Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border border-border text-sm font-medium text-navy hover:bg-stone transition"
              >
                <Play size={14} /> View Projects
              </Link>
            </div>
          </motion.div>

          {/* Floating glass panel mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative h-[440px] md:h-[560px] hidden md:block"
          >
            <div className="absolute inset-0 animate-float">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-elegant ring-1 ring-black/5">
                <img src={facade} alt="Glass facade mockup" className="w-full h-full object-cover" />
                {/* Soft white wash */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
                {/* Reflection sweep every ~9s */}
                <div className="absolute inset-0 shine-overlay" />
                {/* Subtle inner frame */}
                <div className="absolute inset-3 rounded-[1.6rem] border border-white/30" />
              </div>
            </div>
            {/* Floating small panel */}
            <div className="absolute -bottom-6 -left-6 w-40 h-52 rounded-2xl glass shadow-soft p-4 hidden lg:block">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Project</div>
              <div className="mt-1 text-sm font-medium text-navy leading-snug">Downtown Penthouse · Frameless facade</div>
              <div className="mt-4 text-3xl font-display text-navy">1,240</div>
              <div className="text-xs text-muted-foreground">glass panels delivered</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tasteful scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-navy/70 text-[10px] uppercase tracking-[0.4em] flex flex-col items-center gap-2">
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-navy/60 to-transparent" />
      </div>
    </section>
  );
}
