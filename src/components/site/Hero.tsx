import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPoster from "@/assets/landing/glasser-hero-loop-poster.jpg.asset.json";
import heroVideo from "@/assets/landing/glasser-hero-loop.mp4.asset.json";

const poster = heroPoster.url;

export function Hero() {
  const root = useRef<HTMLElement | null>(null);
  const video = useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(true);
  const playing = !reduceMotion && visible;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

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
    const element = video.current;
    if (!element) return;
    if (playing) {
      void element.play().catch(() => setReady(false));
    } else {
      element.pause();
    }
  }, [playing]);

  return (
    <section ref={root} data-no-auto-reveal aria-label="Glasser glass and aluminium works" className="glasser-hero relative isolate w-full overflow-hidden bg-hero-surface text-hero-foreground">
      <img src={poster} alt="" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      <video
          ref={video}
          src={!reduceMotion ? heroVideo.url : undefined}
          poster={poster}
          autoPlay={playing}
          loop
          muted
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setReady(true)}
          onError={() => setReady(false)}
          className={`hero-film pointer-events-none absolute inset-0 h-full w-full object-cover ${ready && !reduceMotion ? "opacity-100" : "opacity-0"}`}
        />
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
        </div>
      </div>
    </section>
  );
}