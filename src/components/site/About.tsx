import { motion } from "framer-motion";
import partition from "@/assets/service-partition.jpg";
import aluminium from "@/assets/service-aluminium.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-navy/60 mb-12">
          <span>(03) — About Glasser</span>
          <span className="hidden md:inline">Est. 2019 · Dubai</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-6 relative h-[480px] md:h-[560px]"
          >
            <div className="absolute top-0 left-0 w-[68%] h-[72%] rounded-3xl overflow-hidden shadow-soft ring-1 ring-black/5">
              <img src={partition} alt="Glass partition" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute bottom-0 right-0 w-[58%] h-[58%] rounded-3xl overflow-hidden shadow-elegant ring-8 ring-background">
              <img src={aluminium} alt="Aluminium villa facade" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-2 left-2 text-[10px] uppercase tracking-[0.3em] text-navy/50">
              Selected works — 2019 / 2025
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <h2
              className="text-navy text-balance font-light leading-[0.98] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
            >
              Crafting <em className="italic font-normal">luxury glass</em> spaces across the Emirates
            </h2>
            <div className="mt-8 border-t border-navy/15 pt-8 space-y-5">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Glasser Technical Works LLC has been transforming Dubai's most ambitious residential, commercial and hospitality spaces for over 7 years. Our specialists combine European engineering with regional craftsmanship.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                We partner directly with developers, architects, interior designers and homeowners — from concept through to flawless on-site execution.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
