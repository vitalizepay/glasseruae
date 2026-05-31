import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

const T = "About Glasser Technical Works — Dubai Glass & Aluminium Specialists";
const D = "Learn about Glasser Technical Works LLC — 15+ years delivering premium glass and aluminium installations to homes, offices and hotels across the UAE.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <Layout>
      <div className="pt-32 pb-12 bg-surface text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">About</span>
        <h1 className="text-5xl md:text-7xl text-navy mt-3">Crafting glass since 2009</h1>
      </div>
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
    </Layout>
  ),
});
