import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { relatedFor } from "@/lib/services";

const SLUG = "shower-enclosures-dubai";
const T = "Shower Enclosures Dubai | Frameless Glass Shower Screens | Glasser UAE";
const D = "Frameless luxury shower enclosures in Dubai. Custom-made tempered glass shower screens and enclosures by Glasser UAE. Supply and installation across the UAE.";
const URL = `https://glasseruae.com/services/${SLUG}`;

export const Route = createFileRoute("/services/shower-enclosures-dubai")({
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
      h1="Shower Enclosures Dubai"
      intro="Transform your bathroom with a bespoke frameless shower enclosure from Glasser UAE. Every enclosure is custom-measured and manufactured from high-grade tempered safety glass, then installed by our specialist team to your exact specifications. Trusted by interior designers and homeowners across Dubai, Abu Dhabi and Sharjah."
      featuresHeading="Enclosure styles"
      features={[
        "Walk-in shower screens — open, minimalist look",
        "Hinged-door frameless enclosures",
        "Sliding-door enclosures for compact bathrooms",
        "Corner-entry enclosures for square wet areas",
        "10mm or 12mm tempered safety glass options",
        "Easy-clean nano coating available",
      ]}
      related={relatedFor(SLUG)}
      faqs={[
        { q: "How much does a frameless shower enclosure cost in Dubai?", a: "Frameless shower enclosures in Dubai range from AED 2,500 to AED 8,000+ depending on size, glass thickness, and hardware. We provide free measurements and written quotations." },
        { q: "What glass is used for shower enclosures in the UAE?", a: "We use 8mm and 10mm toughened tempered safety glass with marine-grade corrosion-resistant hardware throughout." },
        { q: "How long does shower enclosure installation take?", a: "A standard frameless shower enclosure installation in Dubai takes 1–2 days." },
        { q: "Do you install shower enclosures across all seven Emirates?", a: "Yes. We serve Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain." },
        { q: "Do you offer walk-in shower screens in Dubai?", a: "Yes. We supply walk-in screens, hinged door enclosures, sliding door systems, and corner entry enclosures — all custom-made." },
      ]}
    />
  ),
});
