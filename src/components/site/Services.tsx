import { motion } from "framer-motion";
import {
  Square, Columns3, DoorOpen, AppWindow, Droplets, Sparkles, Wrench, Frame,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const SERVICES = [
  { icon: Columns3, title: "Frameless Glass Partitions", desc: "Seamless office & residential partitions with crystal-clear tempered glass." },
  { icon: Square, title: "Glass Works", desc: "Custom-cut tempered, laminated and tinted glass for any project." },
  { icon: DoorOpen, title: "Glass & Aluminium Doors", desc: "Sliding, swing, pivot and folding systems in premium finishes." },
  { icon: AppWindow, title: "Aluminium Windows", desc: "Energy-efficient thermal-break aluminium window systems." },
  { icon: Droplets, title: "Shower Enclosures", desc: "Frameless luxury shower enclosures crafted to your bathroom." },
  { icon: Sparkles, title: "Custom Mirrors", desc: "Bespoke mirror installations for hospitality, retail and homes." },
  { icon: Frame, title: "Office Glass Solutions", desc: "Acoustic, switchable and double-glazed office partition systems." },
  { icon: Wrench, title: "Glass Maintenance", desc: "Inspection, repair, replacement and emergency glass services." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">What we do</span>
          <h2 className="text-4xl md:text-6xl mt-3 text-navy text-balance">
            Premium glass &amp; aluminium services
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            From frameless partitions to full architectural facades — we deliver luxury craftsmanship across every UAE emirate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative bg-white rounded-2xl p-7 border border-border hover:border-orange/40 hover:-translate-y-2 transition-all duration-500 shadow-glass hover:shadow-elegant overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-orange/5 to-transparent" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-orange group-hover:text-orange-foreground text-navy flex items-center justify-center transition-colors duration-500">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-xl text-navy font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
