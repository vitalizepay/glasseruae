import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";

const T = "About Glasser UAE — Dubai Glass & Aluminium Experts";
const D = "Glasser Technical Works LLC — glass and aluminium project services for homes, offices and commercial interiors across the UAE.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: "https://www.glasseruae.com/about" },
    ],
    links: [{ rel: "canonical", href: "https://www.glasseruae.com/about" }],
  }),
  component: () => (
    <Layout>
      <div className="pt-32 pb-12 bg-surface text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">About</span>
        <h1 className="text-5xl md:text-7xl text-navy mt-3">Glasser Technical Works LLC</h1>
      </div>
      <About />
      <WhyUs />
      <Testimonials />
      <CTA />
    </Layout>
  ),
});
