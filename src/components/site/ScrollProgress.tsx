import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!barRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const st = gsap.to(barRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[70] h-[2px] pointer-events-none" aria-hidden="true">
      <div ref={barRef} className="h-full w-full origin-left scale-x-0 bg-orange" />
    </div>
  );
}
