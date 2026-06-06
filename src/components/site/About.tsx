import { motion } from "framer-motion";
import partition from "@/assets/service-partition.jpg";
import aluminium from "@/assets/service-aluminium.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 relative h-[520px]"
        >
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-soft">
            <img src={partition} alt="Glass partition" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 right-0 w-[55%] h-[55%] rounded-3xl overflow-hidden shadow-elegant ring-8 ring-background">
            <img src={aluminium} alt="Aluminium villa facade" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">About Glasser</span>
          <h2 className="text-4xl md:text-5xl mt-4 text-navy text-balance font-light">
            Crafting luxury glass spaces across the Emirates
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
            Glasser Technical Works LLC has been transforming Dubai's most ambitious residential, commercial and hospitality spaces for over 7 years. Our specialists combine European engineering with regional craftsmanship.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed font-light">
            We partner directly with developers, architects, interior designers and homeowners — from concept through to flawless on-site execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
