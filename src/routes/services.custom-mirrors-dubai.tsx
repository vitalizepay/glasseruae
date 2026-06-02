import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { relatedFor } from "@/lib/services";

const SLUG = "custom-mirrors-dubai";
const T = "Custom Mirrors Dubai | Bespoke Mirror Installation | Glasser UAE";
const D = "Bespoke custom mirror installation in Dubai. Glasser UAE crafts and installs custom mirrors for hotels, retail and private homes across the UAE. Free quote.";
const URL = `https://glasseruae.com/services/${SLUG}`;

export const Route = createFileRoute("/services/custom-mirrors-dubai")({
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
      h1="Custom Mirrors Dubai"
      intro="A precision-cut, perfectly installed custom mirror elevates any space — from hotel lobbies and luxury retail to private villas. Glasser UAE manufactures and installs bespoke mirrors across Dubai and the UAE, working to your exact dimensions, edge finish and mounting requirements."
      featuresHeading="Where our mirrors are installed"
      features={[
        "Hospitality — hotel lobbies, lifts and guest rooms",
        "Retail — fitting rooms, display walls and storefronts",
        "Residential — bathrooms, dressing rooms and feature walls",
        "Gym & fitness — full-wall studio and weights-room mirrors",
        "Edge finishes — polished, beveled, or framed",
        "Backlit and antique mirror options on request",
      ]}
      related={relatedFor(SLUG)}
      faqs={[
        { q: "What sizes of custom mirrors do you make in Dubai?", a: "We manufacture custom mirrors in any size and shape — from small decorative pieces to large full-wall installations for hotels, gyms, and retail spaces." },
        { q: "How long does a custom mirror take to manufacture and install in Dubai?", a: "Most custom mirrors are fabricated and installed within 5–10 working days depending on size and complexity." },
        { q: "Do you install mirrors in hotels and retail spaces in Dubai?", a: "Yes. We work with hospitality, retail, and residential clients across all seven Emirates supplying and installing bespoke mirrors to exact specifications." },
        { q: "What edge finishes are available for custom mirrors in Dubai?", a: "We offer polished, bevelled, flat-ground, and sandblasted edge finishes to suit your interior design requirements." },
      ]}
    />
  ),
});
