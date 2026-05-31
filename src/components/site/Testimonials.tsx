import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Ahmed Al Mansoori", role: "Villa Owner · Emirates Hills", text: "Glasser transformed our entire ground floor with frameless glass partitions. Flawless finish, punctual delivery." },
  { name: "Sarah Khan", role: "Interior Designer · Downtown", text: "My go-to partner for premium residential projects in Dubai. Their attention to detail on mirror and shower installations is unmatched." },
  { name: "Rajesh Patel", role: "Facility Manager · DIFC Tower", text: "Office partition renovations across two floors. Clean installation, zero disruption, excellent value." },
  { name: "Layla Hassan", role: "Architect · Abu Dhabi", text: "An exceptional partner for facade glazing — engineering-led, design-respectful, and consistent on quality." },
  { name: "Mark Reynolds", role: "GM · Boutique Hotel JBR", text: "From initial sample boards to final installation, the Glasser team brought a calm, premium standard to our refit." },
  { name: "Fatima Al Suwaidi", role: "Homeowner · Palm Jumeirah", text: "The shower enclosure is a piece of art. Perfectly engineered, beautifully installed." },
];

function Card({ r }: { r: typeof REVIEWS[number] }) {
  return (
    <div className="min-w-[340px] md:min-w-[440px] max-w-[440px] bg-white rounded-3xl p-8 border border-border shadow-glass">
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} className="fill-orange text-orange" />)}
      </div>
      <p className="text-foreground leading-relaxed font-light">"{r.text}"</p>
      <div className="mt-6 pt-6 border-t border-border">
        <p className="font-medium text-navy">{r.name}</p>
        <p className="text-sm text-muted-foreground">{r.role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const loop = [...REVIEWS, ...REVIEWS];
  return (
    <section className="py-24 md:py-36 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-14">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Client Voices</span>
          <h2 className="text-4xl md:text-6xl mt-4 text-navy text-balance font-light">Trusted across the Emirates</h2>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 w-max animate-marquee">
          {loop.map((r, i) => <Card key={i} r={r} />)}
        </div>
      </div>
    </section>
  );
}
