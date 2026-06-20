import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  /** "fade-up" (default), "clip", "scale" */
  variant?: "fade-up" | "clip" | "scale";
  start?: string;
};

/** Lightweight GSAP scroll reveal — single trigger per element, GPU transforms only. */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  delay = 0,
  y = 60,
  duration = 1.1,
  variant = "fade-up",
  start = "top 88%",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tween: gsap.core.Tween;
    if (variant === "clip") {
      gsap.set(el, { clipPath: "inset(0 0 100% 0)", opacity: 1 });
      tween = gsap.to(el, {
        clipPath: "inset(0 0 0% 0)",
        duration: 1.6,
        ease: "expo.out",
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      });
    } else if (variant === "scale") {
      gsap.set(el, { scale: 1.12, opacity: 0 });
      tween = gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 1.4,
        ease: "expo.out",
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      });
    } else {
      gsap.set(el, { y, opacity: 0 });
      tween = gsap.to(el, {
        y: 0,
        opacity: 1,
        duration,
        ease: "expo.out",
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }
    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [variant, y, duration, delay, start]);

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

type SplitWordsProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  start?: string;
};

/** Word-by-word mask reveal — wraps each word in an overflow-hidden span. */
export function SplitWords({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.08,
  y = 110,
  start = "top 85%",
}: SplitWordsProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLElement>("[data-word]");
    const tween = gsap.fromTo(
      words,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: "expo.out",
        stagger,
        delay,
        scrollTrigger: { trigger: el, start, once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, stagger, y, start, text]);

  const parts = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {parts.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em]">
          <span data-word className={`inline-block will-change-transform ${wordClassName ?? ""}`}>
            {w}
            {i < parts.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </span>
  );
}
