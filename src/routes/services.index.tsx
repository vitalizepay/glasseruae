import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Services } from "@/components/site/Services";
import { Reveal, SplitWords } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";

const T = "Glass & Aluminium Services in Dubai | Glasser UAE";
const D = "Frameless glass partitions, shower enclosures, aluminium doors & windows, custom mirrors, office glass solutions and maintenance across the UAE.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: "https://glasseruae.com/services" },
    ],
    links: [{ rel: "canonical", href: "https://glasseruae.com/services" }],
  }),
  component: () => (
    <Layout>
      <div className="pt-32 pb-12 bg-surface text-center overflow-hidden">
        <Reveal as="span" className="block text-xs uppercase tracking-[0.3em] text-orange font-semibold" y={20} duration={0.8}>
          — Services
        </Reveal>
        <h1 className="text-5xl md:text-7xl text-navy mt-3 font-light leading-[1.05]">
          <SplitWords text="Premium glass" className="block" />
          <SplitWords text="& aluminium." className="block italic font-extralight" delay={0.15} />
        </h1>
        <Reveal as="p" className="mt-6 text-muted-foreground max-w-2xl mx-auto px-6 font-light" delay={0.3} y={40}>
          From bespoke partitions to full architectural facades — explore our complete range of services.
        </Reveal>
      </div>
      <Services />
      <CTA />
    </Layout>
  ),
});
