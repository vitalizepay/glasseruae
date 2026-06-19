import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import hero from "@/assets/hero-dubai.jpg";

const SPECIALIZATIONS = [
  { label: "Glass Partitions", to: "/services/frameless-glass-partitions-dubai" },
  { label: "Aluminium Systems", to: "/aluminium-works-dubai" },
  { label: "Shower Enclosures", to: "/services/shower-enclosures-dubai" },
  { label: "Bespoke Mirrors", to: "/services/custom-mirrors-dubai" },
  { label: "Facades", to: "/services/glass-facades-dubai" },
];

function WordReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1.05]);

  return (
    <section className="relative min-h-screen w-full bg-paper text-foreground pt-24 md:pt-28 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-0 border-x border-foreground/10 min-h-[85vh]">
          {/* Vertical decorative rules */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-foreground/5 hidden md:block" aria-hidden />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-foreground/5 hidden md:block" aria-hidden />

          {/* Left sidebar — specialization list */}
          <aside className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 border-foreground/10">
            <div className="space-y-10 md:space-y-14">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="space-y-3"
              >
                <span className="block text-[10px] tracking-[0.3em] uppercase text-foreground/40 font-medium">
                  Specialization
                </span>
                <ul className="text-xs uppercase tracking-[0.18em] leading-loose text-ink font-medium pt-1">
                  {SPECIALIZATIONS.map((s, i) => (
                    <motion.li
                      key={s.label}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={s.to}
                        className="block hover:translate-x-1 transition-transform duration-500"
                      >
                        {s.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.9 }}
                className="hidden md:block text-xs text-foreground/60 leading-relaxed max-w-[14rem]"
              >
                Based in Dubai, serving the Emirates' most refined residential and commercial projects with technical precision since 2019.
              </motion.p>
            </div>

            <motion.a
              href="#about"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-10 h-12 w-12 rounded-full border border-foreground/20 flex items-center justify-center group hover:bg-ink transition-colors duration-500"
              aria-label="Scroll to next section"
            >
              <ArrowDown size={14} className="text-foreground group-hover:text-paper transition-colors duration-500 group-hover:translate-y-0.5" />
            </motion.a>
          </aside>

          {/* Center + Right composition */}
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-9">
            {/* Title block */}
            <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-end relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="mb-6 overflow-hidden"
              >
                <span className="inline-block text-[10px] tracking-[0.5em] uppercase text-foreground/40 font-medium">
                  Architecture &amp; Interior Glass — Dubai · Since 2019
                </span>
              </motion.div>

              {/* Massive italic wordmark */}
              <h1
                className="font-display italic leading-[0.82] tracking-[-0.04em] text-ink select-none"
                style={{ fontSize: "clamp(5.5rem, 18vw, 16rem)" }}
              >
                <WordReveal delay={0.25}>Glasser</WordReveal>
              </h1>

              <div className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-8">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="max-w-xs text-sm text-foreground leading-relaxed"
                >
                  Engineering transparency through luxury glass and aluminium solutions, tailored to the modern architectural silhouette of the UAE.
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 h-px bg-foreground/10 mb-2 hidden md:block origin-left"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="flex flex-wrap gap-x-8 gap-y-3 items-end"
                >
                  <Link
                    to="/projects"
                    className="text-[10px] uppercase tracking-[0.25em] font-medium pb-1 border-b border-ink hover:opacity-50 transition-opacity"
                  >
                    View Projects
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[10px] uppercase tracking-[0.25em] font-medium pb-1 border-b border-foreground/30 hover:border-ink hover:text-ink transition-colors"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Feature image block with floating dark project card */}
            <motion.div
              ref={imgRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.4 }}
              className="md:col-span-3 relative h-[420px] md:h-auto bg-surface mt-8 md:mt-0 overflow-hidden"
            >
              <motion.img
                src={hero}
                alt="Luxury floor-to-ceiling glass partition in a Dubai penthouse with slim aluminium frames"
                style={{ y: imgY, scale: imgScale }}
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-[1200ms] will-change-transform"
                width={800}
                height={1200}
                fetchPriority="high"
                decoding="async"
              />

              {/* Floating featured-project label */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-ink text-paper p-5 text-left max-w-[15rem] shadow-elegant"
              >
                <span className="block text-[9px] uppercase tracking-[0.3em] opacity-60 mb-2 font-medium">
                  Featured Project
                </span>
                <h3 className="font-display italic text-xl leading-tight">
                  Palm Jumeirah Residence
                </h3>
                <p className="text-[10px] opacity-70 mt-3 leading-relaxed">
                  Frameless facade and interior partition system spanning 450 sqm of waterfront villa.
                </p>
                <Link
                  to="/projects/premium-waterfront-glass-palm-jumeirah"
                  className="mt-4 inline-block text-[10px] uppercase tracking-[0.25em] font-medium border-b border-paper/40 hover:border-paper transition-colors"
                >
                  Read case
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Footer metadata strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="absolute bottom-3 left-6 right-6 hidden md:flex justify-between items-center pointer-events-none"
          >
            <span className="text-[8px] uppercase tracking-[0.5em] text-foreground">Contracting Excellence</span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-foreground">Est. 2019 · Dubai UAE</span>
            <span className="text-[8px] uppercase tracking-[0.5em] text-foreground">25.2816° N, 55.3714° E</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
