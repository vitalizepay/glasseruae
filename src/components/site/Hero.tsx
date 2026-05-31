import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-dubai.jpg";
import { SkylineScene } from "./SkylineScene";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <motion.div style={{ y: yImg, opacity: opacityImg }} className="absolute inset-0">
        <img src={hero} alt="Dubai skyline through glass facade" className="w-full h-full object-cover opacity-60" width={1920} height={1280} />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-navy/40 to-transparent" />
      </motion.div>

      {/* Animated glass skyline */}
      <SkylineScene />

      {/* Floating glass panels */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[6%] w-44 h-60 glass rounded-2xl opacity-60 shadow-elegant"
        >
          <div className="absolute inset-2 rounded-xl border border-white/20" />
          <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-orange animate-pulse" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[52%] right-[10%] w-36 h-48 glass rounded-2xl opacity-50"
        >
          <div className="absolute inset-2 rounded-xl border border-white/15" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[28%] right-[26%] w-28 h-36 glass rounded-xl opacity-40"
        />
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

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 text-xs uppercase tracking-[0.3em] flex flex-col items-center gap-2"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-orange to-transparent" />
      </motion.div>
    </section>
  );
}
