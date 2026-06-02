import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { relatedFor } from "@/lib/services";

const SLUG = "aluminium-windows-dubai";
const T = "Aluminium Windows Dubai | Thermal-Break Window Systems | Glasser UAE";
const D = "Thermal-break aluminium windows for Dubai villas and offices. Glasser UAE engineers and installs high-performance window systems across the UAE. Free consultation.";
const URL = `https://glasseruae.com/services/${SLUG}`;

export const Route = createFileRoute("/services/aluminium-windows-dubai")({
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
      h1="Aluminium Windows Dubai"
      intro="Our thermal-break aluminium window systems are specifically engineered for the UAE climate — reducing heat transfer and energy costs while delivering the clean lines demanded by modern Dubai architecture. Glasser UAE installs across residential villas, commercial buildings and hospitality projects from Dubai to Abu Dhabi."
      featuresHeading="Why our windows perform"
      features={[
        "Thermal-break profiles reduce heat transfer and AC load",
        "Acoustic glazing for noise reduction in city locations",
        "Marine-grade powder coating for UAE durability",
        "Custom sizing for villas, towers and renovations",
        "Tilt-and-turn, sliding and fixed configurations",
        "Compliance with Dubai Municipality regulations",
      ]}
      related={relatedFor(SLUG)}
    />
  ),
});
