import { motion } from "framer-motion";
import partition from "@/assets/service-partition.jpg";
import shower from "@/assets/service-shower.jpg";
import aluminium from "@/assets/service-aluminium.jpg";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[560px]"
        >
          <div className="absolute top-0 left-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-elegant">
            <img src={partition} alt="Glass partition" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-2xl overflow-hidden shadow-elegant border-8 border-background">
            <img src={aluminium} alt="Aluminium villa" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
          <div className="absolute top-[35%] right-[8%] w-32 h-40 rounded-xl overflow-hidden shadow-elegant border-4 border-background">
            <img src={shower} alt="Shower enclosure" className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">About Glasser</span>
          <h2 className="text-4xl md:text-5xl mt-3 text-navy text-balance">
            Crafting luxury glass spaces across the Emirates
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            Glasser Technical Works LLC has been transforming Dubai's most ambitious residential, commercial and hospitality spaces for over 15 years. Our team of certified specialists combines European engineering with regional craftsmanship.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            We work directly with developers, architects, interior designers and homeowners — from concept through to flawless on-site execution.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              ["15+", "Years of Experience"],
              ["500+", "Projects Delivered"],
              ["98%", "Client Satisfaction"],
              ["7", "Emirates Covered"],
            ].map(([n, l]) => (
              <div key={l} className="border-l-2 border-orange pl-4">
                <div className="text-4xl font-display text-navy">{n}</div>
                <div className="text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
