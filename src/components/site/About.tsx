import {
  Layers,
  Building2,
  Waves,
  Volume2,
  Droplets,
  Fence,
  PanelsTopLeft,
} from "lucide-react";

const FEATURES = [
  { icon: Layers, title: "Frameless Glass Partitions" },
  { icon: Building2, title: "Office Glass Partitions" },
  { icon: Waves, title: "Curved Glass Solutions" },
  { icon: Volume2, title: "Acoustic & Soundproof Glass" },
  { icon: Droplets, title: "Shower Glass Enclosures" },
  { icon: Fence, title: "Glass Railings & Balustrades" },
  { icon: PanelsTopLeft, title: "Glass Facades & Curtain Wall Systems" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-36 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <div className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            — Glasser Technical Works LLC
          </div>
          <h2 className="text-4xl md:text-6xl mt-6 text-navy text-balance font-light leading-[1.05]">
            Premium Glass & Aluminium Solutions{" "}
            <span className="italic font-extralight">
              Across Dubai & UAE
            </span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed font-light">
            Glasser Technical Works LLC — 7+ Years, 1200+ Projects across the
            UAE — delivers premium architectural glass and aluminium solutions
            for luxury villas, corporate offices, hotels, retail spaces,
            restaurants, and commercial developments across Dubai and the
            Emirates. We specialise in Frameless Glass Partitions, Office Glass
            Partitions, Curved Glass Solutions, Acoustic & Soundproof Glass,
            Shower Glass Enclosures, Glass Railings & Balustrades, and Glass
            Facades & Curtain Wall Systems. Every project is custom-designed,
            precision-engineered, and installed with exceptional craftsmanship,
            durability, and modern architectural excellence.
          </p>
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className={`group relative rounded-3xl border border-border bg-surface/60 backdrop-blur-sm p-7 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(10,20,40,0.35)] hover:border-navy/30 ${
                i === 6 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-navy/5 text-navy flex items-center justify-center transition-colors duration-500 group-hover:bg-navy group-hover:text-white">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-display text-lg md:text-xl font-medium text-navy leading-snug">
                {title}
              </h3>
              <span className="mt-5 block h-px w-10 bg-navy/20 transition-all duration-500 group-hover:w-16 group-hover:bg-navy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
