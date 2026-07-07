const SERVICES = [
  "Frameless Glass Partitions",
  "Office Glass Partitions",
  "Curved Glass Solutions",
  "Acoustic & Soundproof Glass",
  "Shower Glass Enclosures",
  "Glass Railings & Balustrades",
  "Glass Facades & Curtain Wall Systems",
];

function Chip({ label, last }: { label: string; last?: boolean }) {
  return (
    <>
      <span
        className="inline-block whitespace-nowrap font-semibold text-navy rounded-full px-2.5 py-0.5 mx-0.5 transition-colors duration-300 hover:text-white cursor-default"
        style={{ backgroundColor: "rgba(67, 133, 244, 0.09)" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4385F4")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(67, 133, 244, 0.09)")}
      >
        {label}
      </span>
      {last ? "" : ", "}
    </>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            — Glasser Technical Works LLC
          </div>
          <h2 className="text-3xl md:text-5xl mt-6 text-navy text-balance font-light leading-[1.1]">
            Premium Glass & Aluminium Solutions{" "}
            <span className="italic font-extralight">Across Dubai & UAE</span>
          </h2>

          <p className="mt-10 md:mt-12 text-lg md:text-xl text-navy/75 leading-[1.9] font-light text-left md:text-center">
            <span className="font-semibold text-navy">Glasser Technical Works LLC</span> delivers
            premium architectural glass and aluminium solutions for luxury villas, corporate
            offices, hotels, retail spaces, restaurants, and commercial developments across
            Dubai and the UAE. We specialize in{" "}
            {SERVICES.map((s, i) => (
              <Chip key={s} label={s} last={i === SERVICES.length - 1} />
            ))}
            . Every project is custom-designed, precision-engineered, and installed with
            exceptional craftsmanship, durability, and modern architectural excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
