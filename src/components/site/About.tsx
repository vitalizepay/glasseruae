import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import partition from "@/assets/service-partition.jpg";
import aluminium from "@/assets/service-aluminium.jpg";
import { RevealWords } from "./motion-primitives";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-8%", "10%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-12%"]);
  const s1 = useTransform(scrollYProgress, [0, 1], [1.15, 1.05]);
  const s2 = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-navy/60 mb-12">
          <span>(03) — About Glasser</span>
          <span className="hidden md:inline">Est. 2019 · Dubai</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative h-[480px] md:h-[560px]"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-[68%] h-[72%] rounded-3xl overflow-hidden shadow-soft ring-1 ring-black/5"
            >
              <motion.img
                src={partition}
                alt="Glass partition"
                style={{ y: y1, scale: s1 }}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 right-0 w-[58%] h-[58%] rounded-3xl overflow-hidden shadow-elegant ring-8 ring-background"
            >
              <motion.img
                src={aluminium}
                alt="Aluminium villa facade"
                style={{ y: y2, scale: s2 }}
                className="w-full h-full object-cover will-change-transform"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-2 left-2 text-[10px] uppercase tracking-[0.3em] text-navy/50">
              Selected works — 2019 / 2025
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <h2
              className="text-navy text-balance font-light leading-[0.98] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              <RevealWords as="span" text="Crafting" className="inline" />
              {" "}
              <RevealWords as="span" text="luxury glass" italic delay={0.15} className="inline" />
              {" "}
              <RevealWords as="span" text="spaces across the Emirates" delay={0.35} className="inline" />
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 h-px bg-navy/15 origin-left"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="pt-8 space-y-5"
            >
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Glasser Technical Works LLC has been transforming Dubai's most ambitious residential, commercial and hospitality spaces for over 7 years. Our specialists combine European engineering with regional craftsmanship.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                We partner directly with developers, architects, interior designers and homeowners — from concept through to flawless on-site execution.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
