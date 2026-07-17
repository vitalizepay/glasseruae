import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { relatedFor } from "@/lib/services";

const SLUG = "aluminium-doors-dubai";
const T = "Aluminium Doors Dubai | Sliding, Pivot & Folding Systems | Glasser UAE";
const D = "Premium aluminium doors in Dubai — sliding, pivot and folding systems by Glasser UAE. Architectural finishes, UAE-ready engineering. Get a free quote today.";
const URL = `https://glasseruae.com/services/${SLUG}`;

export const Route = createFileRoute("/services/aluminium-doors-dubai")({
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
      h1="Aluminium Doors Dubai"
      intro="Glasser UAE supplies and installs premium aluminium door systems across Dubai and the wider Emirates. From sleek sliding doors to statement pivot entrances and space-saving folding systems, our aluminium doors are engineered to perform in the UAE climate while delivering a luxury architectural finish."
      featuresHeading="Door systems we install"
      features={[
        "Sliding aluminium doors — large spans, minimal frames",
        "Pivot entrance doors — statement architectural openings",
        "Folding / bifold systems — open up indoor-outdoor living",
        "Thermal-break profiles for the UAE climate",
        "Powder-coated finishes in any RAL colour",
        "Integrated security locking and smart access options",
      ]}
      related={relatedFor(SLUG)}
      guide={{ to: "/blog/aluminium-fabrication-services-dubai", label: "Aluminium Fabrication Services in Dubai" }}
      faqs={[
        { q: "What types of aluminium doors do you supply in Dubai?", a: "We supply and install sliding doors, pivot doors, folding doors, and bifold aluminium door systems in a range of premium architectural finishes." },
        { q: "Are aluminium doors suitable for Dubai's climate?", a: "Yes. Aluminium is naturally corrosion-resistant and performs exceptionally well in the UAE's heat and humidity. Our door systems are engineered specifically for Gulf conditions." },
        { q: "How much do aluminium doors cost in Dubai?", a: "Aluminium door pricing in Dubai starts from approximately AED 1,500 per unit for standard sliding systems, rising for pivot and custom folding configurations. Contact us for a free site survey and quotation." },
        { q: "Do you install aluminium doors in villas and apartments?", a: "Yes. We install across residential villas, apartments, commercial offices, and hospitality spaces throughout Dubai and the wider UAE." },
      ]}
    />
  ),
});
