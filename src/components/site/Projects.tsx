import { motion } from "framer-motion";
import villa from "@/assets/project-villa.jpg";
import office from "@/assets/project-office.jpg";
import hotel from "@/assets/project-hotel.jpg";
import shower from "@/assets/service-shower.jpg";
import partition from "@/assets/service-partition.jpg";
import mirror from "@/assets/service-mirror.jpg";

const PROJECTS = [
  { img: villa, title: "Luxury Villa Facade", cat: "Residential · Emirates Hills", span: "md:col-span-2 md:row-span-2" },
  { img: office, title: "Corporate Office Partitions", cat: "Commercial · DIFC" },
  { img: hotel, title: "Hospitality Lobby", cat: "Hotel · Downtown Dubai" },
  { img: shower, title: "Marble Shower Enclosure", cat: "Residential · Palm Jumeirah" },
  { img: partition, title: "Frameless Boardroom", cat: "Office · Business Bay", span: "md:col-span-2" },
  { img: mirror, title: "Mirror Installation", cat: "Hospitality · JBR" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-navy text-navy-foreground relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Featured Work</span>
            <h2 className="text-4xl md:text-6xl mt-3 text-white text-balance">
              Projects shaping the UAE skyline
            </h2>
          </div>
          <p className="text-white/60 max-w-md">
            A curated selection of luxury villas, offices and hospitality landmarks where craftsmanship meets architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-4 grid-flow-dense auto-rows-[220px] gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`relative group overflow-hidden rounded-2xl ${p.span ?? ""}`}
            >
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-xs uppercase tracking-widest text-orange">{p.cat}</p>
                <h3 className="text-xl font-semibold text-white mt-1">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
