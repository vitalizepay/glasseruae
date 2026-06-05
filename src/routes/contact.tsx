import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ContactSection } from "@/components/site/ContactSection";

const T = "Contact Glasser UAE — Free Glass & Aluminium Quote";
const D = "Call +971 56 840 0838 or email sales@glasseruae.com. Free site survey and quote for glass partitions, shower enclosures, aluminium doors & windows in the UAE.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: "https://glasseruae.com/contact" },
    ],
    links: [{ rel: "canonical", href: "https://glasseruae.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Glasser Technical Works LLC",
          telephone: "+971568400838",
          email: "sales@glasseruae.com",
          url: "https://glasseruae.com/contact",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Hilal Bldg, Al Nahda St, Al Qusais",
            addressLocality: "Dubai",
            postalCode: "235485",
            addressCountry: "AE",
          },
          areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE"],
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
            opens: "08:00", closes: "19:00",
          }],
        }),
      },
    ],
  }),
  component: () => (
    <Layout>
      <div className="pt-32 pb-8 bg-navy text-white text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Contact</span>
        <h1 className="text-5xl md:text-7xl mt-3">Let's talk glass</h1>
        <p className="mt-4 text-white/70 max-w-xl mx-auto px-6">Free consultation and on-site survey across the UAE.</p>
      </div>
      <ContactSection />
    </Layout>
  ),
});
