import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { relatedFor } from "@/lib/services";

const SLUG = "glass-facades-dubai";
const T = "Glass Facades Dubai | Curtain Wall & Structural Glazing | Glasser UAE";
const D = "Structural glass facade and curtain wall installation in Dubai and UAE. Glasser UAE engineers glass facades for villas, offices and commercial towers. Get a quote.";
const URL = `https://glasseruae.com/services/${SLUG}`;

export const Route = createFileRoute("/services/glass-facades-dubai")({
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
      h1="Glass Facades Dubai"
      intro="Glasser UAE delivers structural glass facade and curtain wall systems for Dubai's most ambitious architecture. Our engineering-led approach covers everything from initial design and load calculations through to fabrication and on-site installation — serving developers, main contractors and architects across the UAE."
      featuresHeading="Facade systems we deliver"
      features={[
        "Unitised and stick-built curtain wall systems",
        "Structural glazing with minimal sightlines",
        "Spandrel and shadow-box panels",
        "Ventilated facades and rainscreen cladding",
        "Wind-load and thermal performance engineering",
        "Coordination with main contractors and consultants",
      ]}
      related={relatedFor(SLUG)}
      guide={{ to: "/blog/curved-glass-dubai", label: "Curved Glass Dubai — Complete Design Guide" }}
      faqs={[
        { q: "What is a structural glass facade?", a: "A structural glass facade is a building envelope system where glass panels are supported by a structural framework — either a curtain wall, spider fitting system, or structural silicone glazing — creating an all-glass exterior wall." },
        { q: "Do you install glass facades on Dubai villas?", a: "Yes. We install glass facade and curtain wall systems on residential villas, commercial buildings, and mixed-use towers across Dubai and Abu Dhabi." },
        { q: "How long does a glass facade project take in Dubai?", a: "Facade projects vary significantly. A residential villa facade typically takes 3–6 weeks. Commercial curtain wall projects depend on building size and structural requirements." },
        { q: "Do you handle the engineering and permits for glass facades in Dubai?", a: "Yes. Our team manages the full process including structural engineering, material specification, fabrication, and on-site installation across the UAE." },
      ]}
    />
  ),
});
