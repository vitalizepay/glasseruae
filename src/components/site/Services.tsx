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
  { img: partition, title: "Frameless Glass Partitions", short: "Partitions", desc: "Seamless office and residential partitions in crystal-clear tempered glass." },
  { img: aluminium, title: "Aluminium Doors", short: "Doors", desc: "Sliding, pivot and folding aluminium systems in premium architectural finishes." },
  { img: office, title: "Aluminium Windows", short: "Windows", desc: "Thermal-break window systems engineered for the UAE climate." },
  { img: shower, title: "Shower Enclosures", short: "Showers", desc: "Frameless luxury enclosures crafted to your bathroom dimensions." },
  { img: mirror, title: "Custom Mirrors", short: "Mirrors", desc: "Bespoke mirror installations for hospitality, retail and private homes." },
  { img: villa, title: "Glass Facades", short: "Facades", desc: "Structural curtain-wall facades for villas, offices and commercial towers." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-navy text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div>
            <span className="text-[11px] uppercase tracking-[0.32em] text-white/50">(02) — What we do</span>
            <h2
              className="mt-6 font-light leading-[0.95] tracking-[-0.03em] text-balance max-w-4xl"
              style={{ fontSize: "clamp(2.25rem, 6vw, 5.5rem)" }}
            >
              Bespoke <em className="italic font-normal">glass &amp; aluminium</em>, end to end
            </h2>
          </div>
          <p className="text-white/60 max-w-sm font-light text-base md:text-lg leading-relaxed">
            From concept and engineering to delivery and installation — six disciplines, one specialist team.
          </p>
        </div>

        {/* Editorial row list */}
        <ul className="border-t border-white/10">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative border-b border-white/10"
            >
              <Link
                to="/services"
                className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[3rem_1fr_1.6fr_auto] items-center gap-4 md:gap-10 py-8 md:py-10 relative"
              >
                {/* Hover image reveal */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-24 md:right-44 top-1/2 -translate-y-1/2 w-48 h-32 md:w-72 md:h-48 rounded-2xl overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ring-1 ring-white/10 z-10"
                >
                  <img src={s.img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>

                <span className="text-[11px] uppercase tracking-[0.28em] text-white/40 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p className="hidden md:block text-sm text-white/60 font-light max-w-xs leading-relaxed">
                  {s.desc}
                </p>

                <h3
                  className="font-light leading-none tracking-[-0.03em] text-white transition-transform duration-500 group-hover:-translate-x-2"
                  style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
                >
                  <em className="italic font-normal">{s.title}</em>
                </h3>

                <span className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-navy group-hover:border-white transition">
                  <ArrowUpRight size={18} className="transition-transform duration-500 group-hover:-rotate-45" />
                </span>
              </Link>
              {/* Mobile description */}
              <p className="md:hidden -mt-4 pb-6 text-sm text-white/55 font-light pr-16">{s.desc}</p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 flex items-center justify-between gap-6 flex-wrap">
          <p className="text-white/50 text-sm max-w-md font-light">
            Every project is engineered, fabricated and installed by our in-house specialist team.
          </p>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-navy text-sm font-medium hover:bg-white/90 transition"
          >
            Explore all services
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
          </Link>
        </div>
      </div>
    </section>
  );
}
