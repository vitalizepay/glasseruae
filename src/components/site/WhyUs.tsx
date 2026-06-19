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
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-navy/60 mb-12">
          <span>(05) — Why Glasser</span>
          <span className="hidden md:inline">Six commitments</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-14 mb-16">
          <h2
            className="lg:col-span-8 text-navy text-balance font-light leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
          >
            Built on <em className="italic font-normal">trust</em>, finished with <em className="italic font-normal">precision</em>
          </h2>
          <p className="lg:col-span-4 lg:self-end text-muted-foreground font-light text-base md:text-lg leading-relaxed">
            What clients across the UAE come back for — the standard we hold on every project, every time.
          </p>
        </div>

        <ul className="border-t border-navy/10">
          {POINTS.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_2fr_auto] items-center gap-6 md:gap-10 py-7 md:py-9 border-b border-navy/10 group"
            >
              <span className="text-[11px] uppercase tracking-[0.28em] text-navy/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-navy font-light leading-tight tracking-[-0.02em]"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                <em className="italic font-normal">{p.title}</em>
              </h3>
              <p className="hidden md:block text-muted-foreground font-light leading-relaxed max-w-md">{p.desc}</p>
              <span className="hidden md:flex w-11 h-11 rounded-full bg-stone items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition">
                <p.icon size={18} strokeWidth={1.5} />
              </span>
              <p className="col-span-2 md:hidden -mt-2 text-sm text-muted-foreground font-light">{p.desc}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
