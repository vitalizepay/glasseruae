import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export const FAQS = [
  { q: "Which areas in the UAE does Glasser serve?", a: "We deliver and install across all seven Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain — with most projects concentrated in Dubai and Abu Dhabi." },
  { q: "How long does a typical glass partition project take?", a: "Standard frameless office or residential partitions are usually fabricated and installed within 7 to 14 days from final measurement and approval. Larger facades and custom curtain walls run on a project-specific schedule." },
  { q: "Do you offer free site measurement and quotation?", a: "Yes. We provide complimentary site surveys and detailed written quotes across the UAE — typically within 24 hours of your enquiry." },
  { q: "What kind of glass do you use?", a: "We use European-grade tempered, laminated and double-glazed glass with Low-E coatings tuned for the UAE climate. All glass is safety-rated and supplied with manufacturer documentation." },
  { q: "Do you provide aluminium windows and doors as well?", a: "Yes. We design and install thermal-break aluminium windows, sliding and pivot doors, folding systems and curtain walls in premium architectural finishes." },
  { q: "Is your work warranted?", a: "Every installation is covered by a written workmanship warranty, plus the manufacturer warranty on glass and hardware. We also offer ongoing maintenance and repair contracts." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-36 bg-surface">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">FAQ</span>
          <h2 className="text-4xl md:text-5xl mt-4 text-navy text-balance font-light">Questions, answered.</h2>
          <p className="mt-5 text-muted-foreground font-light">
            Everything you need to know before commissioning a glass or aluminium project in the UAE.
          </p>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-6 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="text-lg md:text-xl text-navy font-medium">{f.q}</span>
                    <span className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-12 text-muted-foreground leading-relaxed font-light">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
