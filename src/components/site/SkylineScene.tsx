import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Animated SVG Dubai skyline with parallax layers, scanning light,
 * shimmering glass facades and floating reflection particles.
 * Pure SVG + CSS — no external assets required.
 */
export function SkylineScene({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Sun / glow */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange/25 blur-[120px] animate-pulse-slow" />

      {/* Stars / particles */}
      <svg className="absolute inset-0 w-full h-full opacity-50">
        <defs>
          <radialGradient id="star" cx="50%" cy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 40 }).map((_, i) => {
          const cx = (i * 137) % 100;
          const cy = (i * 53) % 60;
          const r = (i % 3) + 1;
          return (
            <circle
              key={i}
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={r}
              fill="url(#star)"
              style={{
                animation: `twinkle ${3 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          );
        })}
      </svg>

      {/* Back skyline layer */}
      <motion.svg
        style={{ y: yBack }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYEnd slice"
        className="absolute bottom-0 inset-x-0 w-full h-[70%]"
      >
        <defs>
          <linearGradient id="glassBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1e3a5f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a1a2f" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="shimmer" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Far towers silhouette */}
        {[
          [40, 180], [110, 140], [180, 200], [260, 110], [340, 170],
          [420, 90], [510, 150], [600, 70], [690, 130], [780, 100],
          [870, 160], [960, 80], [1050, 140], [1140, 110], [1230, 180],
          [1320, 130], [1390, 170],
        ].map(([x, h], i) => (
          <rect
            key={i}
            x={x}
            y={400 - h}
            width="55"
            height={h}
            fill="url(#glassBack)"
            opacity="0.7"
          />
        ))}
      </motion.svg>

      {/* Mid skyline with windows */}
      <motion.svg
        style={{ y: yMid }}
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYEnd slice"
        className="absolute bottom-0 inset-x-0 w-full h-[60%]"
      >
        <defs>
          <linearGradient id="glassMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2d5a9e" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#0f2540" stopOpacity="1" />
            <stop offset="100%" stopColor="#050d1a" stopOpacity="1" />
          </linearGradient>
        </defs>
        {[
          { x: 80, w: 70, h: 280 },
          { x: 200, w: 90, h: 340 },
          { x: 330, w: 60, h: 240 },
          { x: 430, w: 100, h: 380 },
          { x: 580, w: 70, h: 300 },
          { x: 690, w: 110, h: 360 },
          { x: 840, w: 80, h: 260 },
          { x: 960, w: 95, h: 340 },
          { x: 1100, w: 75, h: 290 },
          { x: 1220, w: 105, h: 370 },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={400 - b.h} width={b.w} height={b.h} fill="url(#glassMid)" />
            {/* Windows grid */}
            {Array.from({ length: Math.floor(b.h / 18) }).map((_, row) =>
              Array.from({ length: Math.floor(b.w / 14) }).map((_, col) => {
                const lit = (row * 7 + col * 3 + i) % 5 === 0;
                return (
                  <rect
                    key={`${row}-${col}`}
                    x={b.x + 4 + col * 14}
                    y={400 - b.h + 8 + row * 18}
                    width="8"
                    height="10"
                    fill={lit ? "#FFB668" : "#1a2a44"}
                    opacity={lit ? 0.9 : 0.4}
                  >
                    {lit && (
                      <animate
                        attributeName="opacity"
                        values="0.9;0.3;0.9"
                        dur={`${3 + (i % 4)}s`}
                        repeatCount="indefinite"
                        begin={`${(row + col) * 0.1}s`}
                      />
                    )}
                  </rect>
                );
              })
            )}
            {/* Shimmer sweep */}
            <rect
              x={b.x}
              y={400 - b.h}
              width={b.w}
              height={b.h}
              fill="url(#shimmer)"
              opacity="0.25"
            >
              <animate
                attributeName="opacity"
                values="0;0.4;0"
                dur={`${6 + i}s`}
                repeatCount="indefinite"
                begin={`${i * 0.8}s`}
              />
            </rect>
          </g>
        ))}
      </motion.svg>

      {/* Foreground: Burj-like spire + reflective panels */}
      <motion.svg
        style={{ y: yFront }}
        viewBox="0 0 1440 500"
        preserveAspectRatio="xMidYEnd slice"
        className="absolute bottom-0 inset-x-0 w-full h-[80%]"
      >
        <defs>
          <linearGradient id="spire" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF8a3d" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#2d4a78" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020812" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Tall central spire */}
        <polygon points="710,0 720,30 740,500 690,500" fill="url(#spire)" opacity="0.92" />
        <polygon points="720,30 740,500 760,500 730,80" fill="#0a1a2f" opacity="0.85" />
        {/* Side towers */}
        <rect x="540" y="180" width="60" height="320" fill="url(#spire)" opacity="0.85" />
        <rect x="820" y="220" width="70" height="280" fill="url(#spire)" opacity="0.85" />
        <rect x="910" y="160" width="50" height="340" fill="url(#spire)" opacity="0.8" />
        {/* Glow line at top */}
        <line x1="715" y1="0" x2="715" y2="500" stroke="#FF6B00" strokeWidth="1" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="4s" repeatCount="indefinite" />
        </line>
      </motion.svg>

      {/* Ground haze */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background via-background/70 to-transparent" />

      {/* Scanning light beam */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-y-10 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-orange/10 to-transparent skew-x-12 animate-skyline-scan" />
      </div>
    </div>
  );
}
