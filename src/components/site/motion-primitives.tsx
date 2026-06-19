import { motion, useScroll, useTransform, type MotionProps } from "framer-motion";
import { useRef, type ReactNode, type ElementType, type CSSProperties } from "react";

/**
 * RevealWords — splits text into words and masks them up sequentially.
 * Use for big editorial headlines.
 */
export function RevealWords({
  text,
  as: Tag = "span",
  className,
  style,
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  once = true,
  italic = false,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
  italic?: boolean;
}) {
  const words = text.split(" ");
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.12em] mr-[0.25em]">
          <motion.span
            className={`inline-block ${italic ? "italic font-normal" : ""}`}
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%" },
            }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/**
 * ParallaxImage — translates an image vertically as the container scrolls
 * through the viewport. Wrap with an overflow-hidden rounded container.
 */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  range = 80,
  children,
  loading = "lazy",
  fetchPriority,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  range?: number;
  children?: ReactNode;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.12]);

  return (
    <div ref={ref} className={className}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className={`w-full h-full object-cover will-change-transform ${imgClassName ?? ""}`}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
      />
      {children}
    </div>
  );
}

/**
 * FadeUp — generic reveal-on-scroll wrapper.
 */
export function FadeUp({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  as: Tag = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
} & MotionProps) {
  const MotionTag = motion(Tag);
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
