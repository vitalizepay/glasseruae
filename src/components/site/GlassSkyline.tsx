import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Building2, Sun, Layers } from "lucide-react";

const FEATURES = [
  { icon: Building2, label: "Curtain Walls", desc: "Floor-to-ceiling structural facades" },
  { icon: Sun, label: "Solar Control", desc: "Low-E coatings tuned for UAE sun" },
  { icon: Layers, label: "Laminated Safety", desc: "Multi-layer impact-rated glass" },
  { icon: Sparkles, label: "Self-Cleaning", desc: "Hydrophilic nano coatings" },
];

export function GlassSkyline() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const xLayer1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const xLayer2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-navy via-[#0a1530] to-navy text-white overflow-hidden"
    >
      {/* Atmospheric sun */}
      <motion.div
        style={{ y: sunY }}
        className="absolute left-1/2 top-20 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-radial from-orange/30 via-orange/10 to-transparent blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">
            Engineered for the Skyline
          </span>
          <h2 className="text-4xl md:text-6xl font-light mt-3 text-balance">
            Glass that defines the <em className="text-orange not-italic">Dubai horizon</em>
          </h2>
          <p className="mt-5 text-white/70 text-lg leading-relaxed">
            From the spires of Downtown to the curves of Palm Jumeirah — every facade
            we craft is engineered to perform under the UAE sun and shine after dark.
          </p>
        </div>

        {/* Interactive skyline canvas */}
        <div className="relative h-[480px] rounded-3xl overflow-hidden border border-white/10 shadow-elegant glass-facade">
          {/* Gradient sky */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f3d] via-[#1a2f55] to-[#3a1f0a]" />

          {/* Sun */}
          <div className="absolute right-[20%] top-[20%] w-32 h-32 rounded-full bg-gradient-radial from-orange via-orange/60 to-transparent blur-md animate-pulse-slow" />

          {/* Stars/lights */}
          <svg className="absolute inset-0 w-full h-full">
            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={i}
                cx={`${(i * 37) % 100}%`}
                cy={`${(i * 19) % 40}%`}
                r={(i % 2) + 1}
                fill="#FFB668"
                opacity="0.6"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.9;0.2"
                  dur={`${2 + (i % 4)}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.15}s`}
                />
              </circle>
            ))}
          </svg>

          {/* Background skyline */}
          <motion.svg
            style={{ x: xLayer1 }}
            viewBox="0 0 1440 480"
            preserveAspectRatio="xMidYEnd slice"
            className="absolute bottom-0 inset-x-0 w-[110%] h-full"
          >
            <defs>
              <linearGradient id="bgTower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3a5a8c" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#0a1530" stopOpacity="1" />
              </linearGradient>
            </defs>
            {[
              [50, 220], [150, 280], [240, 200], [330, 320], [430, 240],
              [530, 360], [640, 280], [750, 340], [860, 220], [960, 300],
              [1070, 260], [1180, 340], [1290, 240], [1390, 300],
            ].map(([x, h], i) => (
              <rect key={i} x={x} y={480 - h} width="80" height={h} fill="url(#bgTower)" />
            ))}
          </motion.svg>

          {/* Foreground skyline with detailed windows */}
          <motion.svg
            style={{ x: xLayer2 }}
            viewBox="0 0 1440 480"
            preserveAspectRatio="xMidYEnd slice"
            className="absolute bottom-0 inset-x-0 w-[110%] h-full"
          >
            <defs>
              <linearGradient id="fgTower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF8a3d" stopOpacity="0.7" />
                <stop offset="30%" stopColor="#1e3a5f" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#020812" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="sweepGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFB668" stopOpacity="0.5" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[
              { x: 100, w: 90, h: 380 },
              { x: 240, w: 70, h: 300 },
              { x: 360, w: 110, h: 440 },
              { x: 520, w: 80, h: 340 },
              { x: 650, w: 60, h: 280 },
              { x: 760, w: 130, h: 460 },
              { x: 940, w: 75, h: 320 },
              { x: 1060, w: 95, h: 400 },
              { x: 1210, w: 70, h: 300 },
              { x: 1320, w: 90, h: 360 },
            ].map((b, i) => (
              <g key={i}>
                <rect x={b.x} y={480 - b.h} width={b.w} height={b.h} fill="url(#fgTower)" />
                {/* Glass window grid */}
                {Array.from({ length: Math.floor(b.h / 22) }).map((_, row) =>
                  Array.from({ length: Math.floor(b.w / 16) }).map((_, col) => {
                    const lit = (row * 5 + col * 3 + i * 7) % 4 === 0;
                    return (
                      <rect
                        key={`${row}-${col}`}
                        x={b.x + 4 + col * 16}
                        y={480 - b.h + 10 + row * 22}
                        width="10"
                        height="12"
                        fill={lit ? "#FFB668" : "#243a5c"}
                        opacity={lit ? 0.95 : 0.5}
                      >
                        {lit && (
                          <animate
                            attributeName="opacity"
                            values="0.95;0.4;0.95"
                            dur={`${2.5 + (i % 3)}s`}
                            repeatCount="indefinite"
                            begin={`${(row * 0.1 + col * 0.07)}s`}
                          />
                        )}
                      </rect>
                    );
                  })
                )}
                {/* Shimmer sweep across each tower */}
                <rect
                  x={b.x}
                  y={480 - b.h}
                  width={b.w}
                  height={b.h}
                  fill="url(#sweepGrad)"
                  opacity="0"
                >
                  <animate
                    attributeName="opacity"
                    values="0;0.6;0"
                    dur={`${5 + i * 0.5}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.7}s`}
                  />
                </rect>
                {/* Top edge highlight */}
                <line
                  x1={b.x}
                  y1={480 - b.h}
                  x2={b.x + b.w}
                  y2={480 - b.h}
                  stroke="#FF6B00"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </g>
            ))}
          </motion.svg>

          {/* Reflection on glass surface */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy via-navy/60 to-transparent" />

          {/* Floating spec badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 left-6 glass-dark rounded-2xl px-4 py-3 text-xs"
          >
            <div className="text-orange uppercase tracking-widest font-semibold">Live</div>
            <div className="text-white/90 mt-0.5">Burj District facade · 1,240 panels</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-32 right-6 glass-dark rounded-2xl px-4 py-3 text-xs max-w-[200px]"
          >
            <div className="text-orange uppercase tracking-widest font-semibold">UV Reduction</div>
            <div className="text-white/90 mt-0.5">99.4% blocked by Low-E coating</div>
          </motion.div>
        </div>

        {/* Feature pills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl glass-dark border border-white/10 hover:border-orange/40 transition-all hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl gradient-orange flex items-center justify-center mb-4 shadow-orange-glow">
                <f.icon size={20} className="text-white" />
              </div>
              <h3 className="font-display text-xl text-white">{f.label}</h3>
              <p className="text-sm text-white/60 mt-1">{f.desc}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange/0 via-orange/0 to-orange/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
