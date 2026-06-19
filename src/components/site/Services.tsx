import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import partition from "@/assets/service-partition.jpg";
import aluminium from "@/assets/service-aluminium.jpg";
import shower from "@/assets/service-shower.jpg";
import mirror from "@/assets/service-mirror.jpg";
import office from "@/assets/project-office.jpg";
import villa from "@/assets/project-villa.jpg";

const SERVICES = [
  { img: partition, title: "Frameless Glass Partitions", desc: "Seamless office and residential partitions in crystal-clear tempered glass." },
  { img: aluminium, title: "Aluminium Doors", desc: "Sliding, pivot and folding aluminium systems in premium architectural finishes." },
  { img: office, title: "Aluminium Windows", desc: "Thermal-break window systems engineered for the UAE climate." },
  { img: shower, title: "Shower Enclosures", desc: "Frameless luxury enclosures crafted to your bathroom dimensions." },
  { img: mirror, title: "Custom Mirrors", desc: "Bespoke mirror installations for hospitality, retail and private homes." },
  { img: villa, title: "Glass Facades", desc: "Structural curtain-wall facades for villas, offices and commercial towers." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">What we do</span>
            <h2 className="text-4xl md:text-6xl mt-4 text-navy text-balance font-light">
              Bespoke glass &amp; aluminium, end to end
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md font-light">
            From concept and engineering to delivery and installation — six disciplines, one specialist team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-3xl overflow-hidden border border-border hover:-translate-y-1 transition-all duration-500 shadow-glass hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl text-navy font-medium">{s.title}</h3>
                  <span className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-navy/60 group-hover:bg-navy group-hover:text-white group-hover:border-navy transition">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-navy border-b border-navy/30 hover:border-navy pb-1 transition">
            Explore all services <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
