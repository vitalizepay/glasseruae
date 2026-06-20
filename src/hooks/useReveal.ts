import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/** Fade-up reveal on scroll for direct children matched by selector. */
export function useReveal<T extends HTMLElement = HTMLElement>(
  selector = "[data-reveal]",
  options: { y?: number; stagger?: number; duration?: number; start?: string } = {},
) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    if (!ref.current) return;
    const { y = 60, stagger = 0.12, duration = 1.1, start = "top 85%" } = options;
    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray<HTMLElement>(selector);
      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { y, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start, once: true },
            delay: Number(el.dataset.revealDelay ?? 0) * stagger,
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, [selector, options.y, options.stagger, options.duration, options.start]);
  return ref;
}
