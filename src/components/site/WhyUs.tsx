import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, MapPin, Gem, PenTool, Headphones } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitWords } from "./Reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const POINTS = [
  { icon: ShieldCheck, title: "Certified Team", desc: "Licensed engineers, installers and project managers." },
  { icon: Gem, title: "Premium Materials", desc: "European-grade tempered glass and thermal aluminium." },
  { icon: PenTool, title: "Custom Designs", desc: "Bespoke engineering tailored to your architecture." },
  { icon: Zap, title: "Fast Delivery", desc: "On-time completion with disciplined site management." },
  { icon: MapPin, title: "UAE Coverage", desc: "Dubai, Abu Dhabi, Sharjah, Ajman and beyond." },
  { icon: Headphones, title: "Maintenance Support", desc: "Repair, replacement and warranty-backed care." },
];

export function WhyUs() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-why-eyebrow]", {
        opacity: 0, y: 30, duration: 1, ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
      });
      gsap.utils.toArray<HTMLElement>("[data-why-cell]").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0, y: 70, duration: 1.1, ease: "expo.out", delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
        const icon = el.querySelector<HTMLElement>("[data-why-icon]");
        if (icon) {
          gsap.from(icon, {
            scale: 0.4, rotate: -20, opacity: 0, duration: 1.1, ease: "back.out(2)", delay: 0.2 + (i % 3) * 0.08,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section data-no-auto-reveal ref={ref} className="py-28 md:py-44 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <div data-why-eyebrow className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— Why Glasser</div>
          <h2 className="text-4xl md:text-7xl mt-6 text-navy text-balance font-light leading-[1.02]">
            <SplitWords text="Built on trust," className="block" />
            <SplitWords text="finished with precision." className="block italic font-extralight" delay={0.15} />
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-[2rem] overflow-hidden border border-border">
          {POINTS.map((p) => (
            <div
              key={p.title}
              data-why-cell
              className="group bg-white p-10 md:p-12 hover:bg-surface transition-colors duration-700"
            >
              <div data-why-icon className="w-12 h-12 rounded-full bg-stone flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-colors duration-700">
                <p.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-7 text-xl md:text-2xl font-light text-navy">{p.title}</h3>
              <p className="mt-3 text-muted-foreground font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
