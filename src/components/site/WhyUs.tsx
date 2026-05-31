import { motion } from "framer-motion";
import { ShieldCheck, Zap, MapPin, Gem, Tag, Headphones } from "lucide-react";

const POINTS = [
  { icon: ShieldCheck, title: "Certified Team", desc: "Licensed engineers, installers and project managers." },
  { icon: Zap, title: "Fast Delivery", desc: "On-time completion with disciplined site management." },
  { icon: MapPin, title: "UAE-Wide Coverage", desc: "Dubai, Abu Dhabi, Sharjah, Ajman and beyond." },
  { icon: Gem, title: "Premium Materials", desc: "European-grade tempered glass and thermal aluminium." },
  { icon: Tag, title: "Competitive Pricing", desc: "Transparent quotes with no hidden costs." },
  { icon: Headphones, title: "After-Sales Support", desc: "Maintenance, repair and warranty backed service." },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Why Glasser</span>
          <h2 className="text-4xl md:text-6xl mt-3 text-navy text-balance">Built on trust, finished with precision</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {POINTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group p-8 bg-white rounded-2xl border border-border hover:border-navy/20 transition shadow-glass"
            >
              <div className="w-14 h-14 rounded-2xl gradient-orange flex items-center justify-center text-orange-foreground group-hover:scale-110 transition-transform">
                <p.icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
