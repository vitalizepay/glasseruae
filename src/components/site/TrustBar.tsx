import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const STATS = [
  { value: 7, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 7, suffix: "", label: "Emirates Covered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function TrustBar() {
  return (
    <section className="bg-background border-y border-navy/10">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-4 md:px-8 py-6 md:py-0 ${i > 0 ? "md:border-l border-navy/10" : ""}`}
            >
              <div className="font-display text-navy font-light leading-none tracking-[-0.03em]" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-[10px] md:text-xs uppercase tracking-[0.28em] text-navy/55">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
