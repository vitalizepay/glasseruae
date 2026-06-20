import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const FAQS = [
  { q: "Which areas in the UAE does Glasser serve?", a: "We deliver and install across all seven Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain — with most projects concentrated in Dubai and Abu Dhabi." },
  { q: "How long does a typical glass partition project take?", a: "Standard frameless office or residential partitions are usually fabricated and installed within 7 to 14 days from final measurement and approval. Larger facades and custom curtain walls run on a project-specific schedule." },
  { q: "Do you offer free site measurement and quotation?", a: "Yes. We provide complimentary site surveys and detailed written quotes across the UAE — typically within 24 hours of your enquiry." },
  { q: "What kind of glass do you use?", a: "We use European-grade tempered, laminated and double-glazed glass with Low-E coatings tuned for the UAE climate. All glass is safety-rated and supplied with manufacturer documentation." },
  { q: "Do you provide aluminium windows and doors as well?", a: "Yes. We design and install thermal-break aluminium windows, sliding and pivot doors, folding systems and curtain walls in premium architectural finishes." },
  { q: "Is your work warranted?", a: "Every installation is covered by a written workmanship warranty, plus the manufacturer warranty on glass and hardware. We also offer ongoing maintenance and repair contracts." },
];

export function FAQ() {
  const ref = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-faq-side]", {
        opacity: 0, y: 40, duration: 1.1, ease: "expo.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.utils.toArray<HTMLElement>("[data-faq-row]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 40, duration: 0.9, ease: "expo.out", delay: i * 0.06,
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section data-no-auto-reveal ref={ref} className="py-28 md:py-44 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div data-faq-side className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— FAQ</div>
          <h2 data-faq-side className="text-4xl md:text-6xl mt-6 text-navy text-balance font-light leading-[1.05]">
            <SplitWords text="Questions," className="block" />
            <SplitWords text="answered." className="block italic font-extralight" delay={0.12} />
          </h2>
          <p data-faq-side className="mt-6 text-muted-foreground font-light">
            Everything you need to know before commissioning a glass or aluminium project in the UAE.
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="border-t border-border">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} data-faq-row className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-7 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="text-lg md:text-2xl text-navy font-light">{f.q}</span>
                    <span className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-navy shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-500">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-muted-foreground leading-relaxed font-light text-lg">{f.a}</p>
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
