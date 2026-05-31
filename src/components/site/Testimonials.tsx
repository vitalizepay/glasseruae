import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  { name: "Ahmed Al Mansoori", role: "Villa Owner, Emirates Hills", text: "Glasser transformed our entire ground floor with frameless glass partitions. The finish is flawless and the team was punctual every step of the way." },
  { name: "Sarah Khan", role: "Interior Designer, Downtown", text: "My go-to partner for premium residential projects in Dubai. Their attention to detail on mirror and shower installations is unmatched." },
  { name: "Rajesh Patel", role: "Facility Manager, DIFC Tower", text: "We commissioned Glasser for office partition renovations across two floors — clean installation, zero disruption, excellent value." },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Client Voices</span>
          <h2 className="text-4xl md:text-6xl mt-3 text-navy text-balance">What our clients say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-2xl bg-surface border border-border"
            >
              <Quote className="absolute top-6 right-6 text-orange/20" size={48} />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} className="fill-orange text-orange" />)}
              </div>
              <p className="text-foreground leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-navy">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
