import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { relatedFor } from "@/lib/services";

const SLUG = "frameless-glass-partitions-dubai";
const T = "Frameless Glass Partitions Dubai | Glasser UAE";
const D = "Expert frameless glass partition installation in Dubai. Glasser UAE supplies and fits seamless office and residential glass partitions across all Emirates. Free quote.";
const URL = `https://glasseruae.com/services/${SLUG}`;

export const Route = createFileRoute("/services/frameless-glass-partitions-dubai")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Service"
      h1="Frameless Glass Partitions Dubai"
      intro="Looking for frameless glass partitions in Dubai? Glasser Technical Works LLC designs and installs crystal-clear tempered glass partition systems for offices, villas and commercial spaces across the UAE. With over 15 years of experience and 500+ projects completed, our team delivers precision-engineered partitions that transform interiors without sacrificing light or space."
      featuresHeading="What we offer"
      features={[
        "Tempered safety glass to international standards",
        "Custom dimensions and layouts to fit any space",
        "Acoustic and double-glazed options for sound control",
        "Fast on-site installation by specialist fitters",
        "Minimalist hardware in brushed steel, black or brass",
        "Integrated doors, sliders and pivot openings",
      ]}
      related={relatedFor(SLUG)}
    />
  ),
});
