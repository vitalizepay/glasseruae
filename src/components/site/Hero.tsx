import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import video1 from "@/assets/landing/hero-video-1.mp4.asset.json";
import video2 from "@/assets/landing/hero-video-2.mp4.asset.json";
import video3 from "@/assets/landing/hero-video-3.mp4.asset.json";

const TEAL = "#3fd0c9";
const VIDEOS = [video1.url, video2.url, video3.url];
const SLIDE_MS = 9000; // slightly shorter than 10s to overlap the fade

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const contentY = useTransform(scrollY, [0, 500], [0, 80]);
  const bgScale = useTransform(scrollY, [0, 800], [1, 1.08]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % VIDEOS.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      data-no-auto-reveal
      ref={root}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Video crossfade stack with slow cinematic zoom + scroll parallax */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        {VIDEOS.map((src, i) => (
          <motion.video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
            initial={false}
            animate={{
              opacity: i === active ? 1 : 0,
              scale: i === active ? 1.05 : 1.0,
            }}
            transition={{
              opacity: { duration: 1.0, ease: "easeInOut" },
              scale: { duration: 20, ease: "linear" },
            }}
          />
        ))}
      </motion.div>

      {/* Cinematic luxury overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.20), rgba(0,0,0,0.38), rgba(0,0,0,0.55))",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_45%,rgba(0,0,0,0.55)_100%)]" />

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/80"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 41) % 100}%`,
              width: 2 + (i % 3),
              height: 2 + (i % 3),
              filter: "blur(0.5px)",
            }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.6, 1.2, 0.6] }}
            transition={{
              duration: 3.5 + (i % 4),
              repeat: Infinity,
              delay: (i * 0.35) % 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 min-h-[100svh] container mx-auto px-5 md:px-10 flex flex-col justify-center pt-32 md:pt-36 pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] uppercase"
          style={{ color: TEAL }}
        >
          Dubai · Glass &amp; Aluminium Specialists
        </motion.div>

        <h1
          className="mt-6 md:mt-8 font-display font-medium text-white text-balance max-w-[1100px]"
          style={{ lineHeight: 1.02, letterSpacing: "-0.02em", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          <motion.span
            className="inline-block mr-[0.28em]"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            We build the
          </motion.span>

          <motion.span
            className="relative inline-block mr-[0.28em] italic"
            style={{ color: TEAL, letterSpacing: "-0.01em" }}
            initial={{ opacity: 0, scale: 0.95, letterSpacing: "0.05em" }}
            animate={{
              opacity: 1,
              scale: 1,
              letterSpacing: "-0.01em",
              textShadow: `0 0 30px ${TEAL}55, 0 0 60px ${TEAL}22`,
            }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          >
            glass
            {/* Reflection sweep */}
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-0 overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.85) 50%, transparent 70%)",
                backgroundSize: "220% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              initial={{ backgroundPositionX: "200%" }}
              animate={{ backgroundPositionX: "-100%" }}
              transition={{ duration: 1.6, ease: "easeInOut", delay: 1.4 }}
            >
              glass
            </motion.span>
          </motion.span>

          <motion.span
            className="inline-block mr-[0.28em]"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 1.7 }}
          >
            that defines
          </motion.span>

          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.0 }}
          >
            luxury spaces.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.7 }}
          className="mt-7 md:mt-9 text-[15px] sm:text-[17px] md:text-[19px] font-light text-white/85 max-w-[600px]"
          style={{ lineHeight: 1.7 }}
        >
          Turnkey frameless glass, shower enclosures, railings, mirrors and bespoke aluminium works
          across the UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="mt-9 md:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          {/* Primary — blue gradient + ripple */}
          <a
            href="https://wa.me/971568400838?text=Hi%20Glasser%2C%20I%27d%20like%20a%20free%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 h-[54px] px-8 rounded-full text-white text-[13px] font-medium tracking-wide overflow-hidden transition-transform duration-500 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #1e6bff 0%, #3fd0c9 100%)",
              boxShadow: "0 20px 50px -15px rgba(30,107,255,0.55)",
            }}
          >
            <span className="relative z-10">Get Free Quote</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-500" />
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
              }}
            />
          </a>

          {/* Secondary — glassmorphism + animated border */}
          <Link
            to="/projects"
            className="group relative inline-flex items-center justify-center h-[54px] px-8 rounded-full text-white text-[13px] font-medium tracking-wide backdrop-blur-xl bg-white/10 border border-white/30 hover:bg-white/15 transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">View Our Projects</span>
            <span
              aria-hidden
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(63,208,201,0.6), transparent 40%)",
                filter: "blur(6px)",
              }}
            />
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="mt-12 flex items-center gap-2">
          {VIDEOS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show scene ${i + 1}`}
              className="h-[2px] rounded-full transition-all duration-500"
              style={{
                width: i === active ? 44 : 20,
                background: i === active ? TEAL : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.3, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none text-white/60"
      >
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
