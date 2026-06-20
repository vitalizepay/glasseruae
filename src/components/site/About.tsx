import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import partition from "@/assets/service-partition.jpg";
import aboutDetail from "@/assets/about-detail.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-reveal]", {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
      });
      gsap.utils.toArray<HTMLElement>("[data-about-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="py-28 md:py-44 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        <div className="lg:col-span-6 relative h-[560px] md:h-[680px]">
          <div data-about-reveal data-about-parallax className="absolute top-0 left-0 w-[68%] h-[72%] rounded-[2rem] overflow-hidden shadow-soft">
            <img src={partition} alt="Frameless glass partition by Glasser" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div data-about-reveal data-about-parallax className="absolute bottom-0 right-0 w-[55%] h-[58%] rounded-[2rem] overflow-hidden shadow-elegant ring-8 ring-background">
            <img src={aboutDetail} alt="Architectural detail of a glass and aluminium partition" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="lg:col-span-6">
          <span data-about-reveal className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">— About Glasser</span>
          <h2 data-about-reveal className="text-4xl md:text-6xl mt-6 text-navy text-balance font-light leading-[1.05]">
            Crafting luxury glass spaces across the Emirates.
          </h2>
          <p data-about-reveal className="mt-8 text-lg text-muted-foreground leading-relaxed font-light">
            Glasser Technical Works LLC has been transforming Dubai's most ambitious residential,
            commercial and hospitality spaces for over 7 years. Our specialists combine European
            engineering with regional craftsmanship.
          </p>
          <p data-about-reveal className="mt-4 text-muted-foreground leading-relaxed font-light">
            We partner directly with developers, architects, interior designers and homeowners —
            from concept through to flawless on-site execution.
          </p>
          <div data-about-reveal className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div>
              <div className="font-display text-4xl text-navy">7+</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="font-display text-4xl text-navy">1,200</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Projects</div>
            </div>
            <div>
              <div className="font-display text-4xl text-navy">UAE</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">7 Emirates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
