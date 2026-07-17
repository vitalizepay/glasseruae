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
      intro="Looking for frameless glass partitions in Dubai? Glasser Technical Works LLC designs and installs crystal-clear tempered glass partition systems for offices, villas and commercial spaces across the UAE. With over 5 years of experience and 500+ projects completed, our team delivers precision-engineered partitions that transform interiors without sacrificing light or space."
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
      guide={{ to: "/blog/glass-partitions-dubai-office-guide", label: "How to Choose the Right Glass Partition for Your Dubai Office" }}
      faqs={[
        { q: "How much do frameless glass partitions cost in Dubai?", a: "Frameless glass partitions in Dubai typically cost between AED 350 and AED 850 per square metre, fully installed. Glasser UAE provides free site surveys and written quotations." },
        { q: "How long does glass partition installation take in Dubai?", a: "Most office and residential partition projects take 7–14 days from initial survey to completed installation." },
        { q: "Are frameless glass partitions safe?", a: "Yes. All our partitions use toughened tempered safety glass meeting international safety standards." },
        { q: "Can I get glass partitions installed in my Dubai villa?", a: "Absolutely. We install in villas, apartments, home offices and residential spaces across all seven Emirates." },
        { q: "Do you provide acoustic glass partitions in Dubai?", a: "Yes. We supply double-glazed acoustic systems reducing noise by 42–48 decibels — ideal for meeting rooms and boardrooms." },
      ]}
    />
  ),
});
