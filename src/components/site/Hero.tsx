import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import hero from "@/assets/hero-dubai.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col bg-background pt-28 overflow-hidden">
      {/* Soft top wash */}
      <div className="absolute inset-x-0 top-0 h-[60vh] pointer-events-none bg-gradient-to-b from-stone/60 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col">
        {/* Eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-navy/60"
        >
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-orange" />
            Glass &amp; Aluminium · Dubai · Since 2019
          </span>
          <span className="hidden md:inline">(01) — Index</span>
        </motion.div>

        {/* Massive editorial headline */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-10 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-9 text-navy font-light leading-[0.95] tracking-[-0.03em] text-balance"
            style={{ fontSize: "clamp(2.75rem, 9vw, 9rem)" }}
          >
            Dubai&rsquo;s Premium{" "}
            <em className="not-italic font-normal italic">Glass</em>
            <span className="text-navy/30"> &amp; </span>
            <em className="not-italic font-normal italic">Aluminium</em> Experts
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 lg:pb-4"
          >
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Transforming villas, offices and commercial spaces across the UAE with bespoke glass and aluminium solutions — designed, engineered and installed to architectural standards.
            </p>
          </motion.div>
        </div>

        {/* Hairline + actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 md:mt-16 pt-6 border-t border-navy/15 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:bg-navy/90 transition"
            >
              Get Free Quote
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-navy/20 text-sm font-medium text-navy hover:bg-navy hover:text-navy-foreground transition"
            >
              View Projects
              <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.28em] text-navy/60">
            <span><span className="text-navy font-medium">2019</span> &nbsp;Established</span>
            <span><span className="text-navy font-medium">500+</span> &nbsp;Projects</span>
            <span><span className="text-navy font-medium">7</span> &nbsp;Emirates</span>
          </div>
        </motion.div>

        {/* Wide cinematic image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-16 mb-8 relative rounded-[2rem] overflow-hidden ring-1 ring-black/5 shadow-elegant"
        >
          <div className="aspect-[21/9] md:aspect-[24/9] w-full overflow-hidden">
            <img
              src={hero}
              alt="Dubai skyline through architectural glass"
              className="w-full h-full object-cover animate-ken-burns"
              width={1920}
              height={820}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white/90 text-[11px] uppercase tracking-[0.3em]">
            Downtown Dubai · Architectural glazing
          </div>
        </motion.div>
      </div>
    </section>
  );
}
