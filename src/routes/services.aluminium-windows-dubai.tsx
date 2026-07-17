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
      guide={{ to: "/blog/aluminium-fabrication-services-dubai", label: "Aluminium Fabrication Services in Dubai" }}
      faqs={[
        { q: "Why choose aluminium windows for Dubai villas?", a: "Aluminium windows are corrosion-resistant, low-maintenance and can be fitted with thermal-break technology to reduce heat transfer and cooling costs significantly." },
        { q: "What is a thermal-break aluminium window?", a: "A thermal-break window has a non-conductive barrier inside the aluminium frame that reduces heat transfer. In Dubai's climate this can reduce cooling costs by up to 30%." },
        { q: "How much do aluminium windows cost in Dubai?", a: "Pricing starts from approximately AED 400 per square metre for standard systems, rising to AED 900+ for thermal-break double-glazed systems. Contact us for a free quotation." },
        { q: "Do you replace existing windows in Dubai villas?", a: "Yes. We remove existing systems and install new aluminium windows with full sealing, finishing and warranty across all Emirates." },
        { q: "How long does aluminium window installation take?", a: "A typical Dubai villa window replacement takes 3–5 days depending on the number of windows and site access." },
      ]}
    />
  ),
});
