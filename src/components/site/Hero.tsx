import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import poster from "@/assets/landing/staircase.jpg";
import video1 from "@/assets/landing/hero-video-1.mp4.asset.json";
import video2 from "@/assets/landing/hero-video-2.mp4.asset.json";
import video3 from "@/assets/landing/hero-video-3.mp4.asset.json";

const VIDEOS = [video1.url, video2.url, video3.url];

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const videos = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState<boolean[]>([]);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();
  const playing = !paused && !reduceMotion && visible;

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting && !document.hidden);
    }, { threshold: 0.1 });
    const onVisibility = () => setVisible(!document.hidden && element.getBoundingClientRect().bottom > 0);
    observer.observe(element);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    videos.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && playing) {
        void video.play().catch(() => setPaused(true));
      } else {
        video.pause();
      }
    });
  }, [active, playing]);

  const selectScene = (index: number) => {
    const video = videos.current[index];
    if (video && index !== active) video.currentTime = 0;
    setActive(index);
  };

  return (
    <section ref={root} data-no-auto-reveal aria-label="Glasser glass and aluminium works" className="glasser-hero relative isolate w-full overflow-hidden bg-hero-surface text-hero-foreground">
      <img src={poster} alt="" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
      {VIDEOS.map((src, i) => (
        <video
          key={src}
          ref={(element) => { videos.current[i] = element; }}
          src={src}
          muted
          playsInline
          preload={i === active ? "auto" : "metadata"}
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={() => setReady((previous) => { const next = [...previous]; next[i] = true; return next; })}
          onEnded={() => selectScene((i + 1) % VIDEOS.length)}
          className={`hero-film absolute inset-0 h-full w-full object-cover ${i === active && ready[i] ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="hero-shade pointer-events-none absolute inset-0" />

      <div className="hero-inner relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="hero-copy max-w-[720px]">
          <p className="mb-6 flex items-center gap-3 text-sm font-medium text-hero-foreground/90">
            <span className="h-px w-8 bg-hero-accent" aria-hidden="true" />
            Glasser Technical Works LLC
          </p>
          <h1 className="hero-title font-display font-medium">
            Glass &amp; aluminium<br />
            <span className="italic text-hero-accent">works in Dubai.</span>
          </h1>
          <p className="mt-6 max-w-[490px] text-base leading-relaxed text-hero-foreground/85 md:mt-7 md:text-lg">
            Glass partitions, façades and bespoke aluminium systems for commercial spaces and private residences across the UAE.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-9">
            <Button asChild size="lg" className="hero-quote group h-12 gap-4 rounded-md px-6">
              <a href="https://wa.me/971568400838?text=Hi%20Glasser%2C%20I%27d%20like%20to%20discuss%20a%20glass%20and%20aluminium%20project." target="_blank" rel="noopener noreferrer">
                Discuss your project <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="hero-projects group h-12 gap-4 rounded-md px-6">
              <Link to="/projects">Explore our projects <ArrowUpRight /></Link>
            </Button>
          </div>
        </div>

        <div className="hero-footer absolute bottom-7 left-6 right-6 flex items-end justify-between gap-6 border-t border-hero-foreground/20 pt-5 md:bottom-8 md:left-12 md:right-12 lg:left-20 lg:right-20">
          <div className="flex items-center gap-4">
            <ArrowDown size={16} className="text-hero-accent" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-hero-foreground/75">Commercial &amp; residential<span className="hidden sm:inline"> · Dubai &amp; UAE</span></p>
          </div>
          <div className="flex shrink-0 items-center gap-1" role="group" aria-label="Hero video controls">
            {VIDEOS.map((_, i) => (
              <Button key={i} variant="ghost" size="icon" onClick={() => selectScene(i)} aria-label={`Show scene ${i + 1}`} aria-pressed={i === active} className="hero-scene h-10 w-10 rounded-md" title={`Show scene ${i + 1}`}>
                <span className={`h-0.5 w-5 ${i === active ? "bg-hero-accent" : "bg-hero-foreground/40"}`} />
              </Button>
            ))}
            <Button variant="ghost" size="icon" disabled={Boolean(reduceMotion)} onClick={() => setPaused((value) => !value)} aria-label={playing ? "Pause background video" : "Play background video"} title={reduceMotion ? "Motion reduced by your device settings" : playing ? "Pause background video" : "Play background video"} className="hero-scene ml-1 h-10 w-10 rounded-md border border-hero-foreground/25">
              {playing ? <Pause /> : <Play />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}