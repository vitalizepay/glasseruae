import { motion } from "framer-motion";
import { ShieldCheck, Zap, MapPin, Gem, PenTool, Headphones } from "lucide-react";

const POINTS = [
  { icon: ShieldCheck, title: "Certified Team", desc: "Licensed engineers, installers and project managers." },
  { icon: Gem, title: "Premium Materials", desc: "European-grade tempered glass and thermal aluminium." },
  { icon: PenTool, title: "Custom Designs", desc: "Bespoke engineering tailored to your architecture." },
  { icon: Zap, title: "Fast Delivery", desc: "On-time completion with disciplined site management." },
  { icon: MapPin, title: "UAE Coverage", desc: "Dubai, Abu Dhabi, Sharjah, Ajman and beyond." },
  { icon: Headphones, title: "Maintenance Support", desc: "Repair, replacement and warranty-backed care." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Why Glasser</span>
          <h2 className="text-4xl md:text-6xl mt-4 text-navy text-balance font-light">
            Built on trust, finished with precision
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group bg-white p-10 hover:bg-surface transition-colors duration-500"
            >
              <div className="w-11 h-11 rounded-full bg-stone flex items-center justify-center text-navy">
                <p.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-navy">{p.title}</h3>
              <p className="mt-2 text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
