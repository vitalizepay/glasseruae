import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Projects } from "@/components/site/Projects";
import { CTA } from "@/components/site/CTA";

const T = "Projects — Glass & Aluminium Installations Across Dubai | Glasser UAE";
const D = "Explore Glasser UAE's portfolio: luxury villas, offices, hotels and commercial facades with frameless glass and architectural aluminium.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <Layout>
      <div className="pt-32 bg-navy text-white text-center pb-12">
        <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Portfolio</span>
        <h1 className="text-5xl md:text-7xl mt-3">Featured projects</h1>
      </div>
      <Projects />
      <CTA />
    </Layout>
  ),
});
