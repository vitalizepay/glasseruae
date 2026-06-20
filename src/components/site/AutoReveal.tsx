import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Site-wide scroll reveal. For every <section> on the page, stagger-fades-in
 * its primary content (headings, paragraphs, list items, cards, images, CTAs)
 * the first time the section enters the viewport. Components that opt out by
 * marking themselves data-no-auto-reveal are skipped, and elements already
 * marked data-reveal-skip won't be animated (use this on hero/GSAP-driven
 * sections that have their own choreography).
 */
export function AutoReveal() {
  const location = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Wait one tick so newly mounted route DOM is in place
    const id = window.setTimeout(() => {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("main section");
        sections.forEach((section) => {
          if (section.dataset.noAutoReveal !== undefined) return;

          const targets = section.querySelectorAll<HTMLElement>(
            [
              ":scope > * h1",
              ":scope > * h2",
              ":scope > * h3",
              ":scope > * h4",
              ":scope > * > p",
              ":scope > * > .group",
              ":scope > * article",
              ":scope > * li",
              ":scope > * > a",
              ":scope > * > .grid > *",
              ":scope > * > .flex > *",
              ":scope > * img",
            ].join(","),
          );

          const list: HTMLElement[] = [];
          targets.forEach((el) => {
            if (el.dataset.revealSkip !== undefined) return;
            if (el.closest("[data-reveal-skip]")) return;
            if (el.closest("[data-no-auto-reveal]") !== section && el.closest("[data-no-auto-reveal]")) return;
            // de-dupe (descendants matched by multiple selectors)
            if (!list.includes(el)) list.push(el);
          });

          if (list.length === 0) return;

          gsap.set(list, { autoAlpha: 0, y: 40 });
          gsap.to(list, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          });
        });

        ScrollTrigger.refresh();
      });

      return () => ctx.revert();
    }, 60);

    return () => window.clearTimeout(id);
  }, [location]);

  return null;
}
