import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ, FAQS } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";

const TITLE = "Glass & Aluminium Company Dubai | Glasser UAE";
const DESC = "Glasser UAE — Dubai specialists in frameless glass partitions, aluminium doors & windows, shower enclosures, mirrors and facades across the UAE.";

const SERVICE_LIST = [
  "Frameless Glass Partitions Dubai",
  "Aluminium Doors Dubai",
  "Aluminium Windows Dubai",
  "Shower Enclosures Dubai",
  "Custom Mirrors Dubai",
  "Glass Facades Dubai",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Glass Company Dubai, Aluminium Company Dubai, Frameless Glass Dubai, Glass Partitions Dubai, Aluminium Windows Dubai, Aluminium Doors Dubai, Glasser Technical Works, glass facades UAE" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://glass-uae-shine.lovable.app/" },
      { property: "og:locale", content: "en_AE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://glass-uae-shine.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://glass-uae-shine.lovable.app/#business",
          name: "Glasser Technical Works LLC",
          image: "https://glass-uae-shine.lovable.app/og.jpg",
          telephone: "+971568400838",
          email: "sales@glasseruae.com",
          url: "https://glass-uae-shine.lovable.app/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Hilal Bldg, Al Nahda St, Al Qusais",
            addressLocality: "Dubai",
            postalCode: "235485",
            addressCountry: "AE",
          },
          areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE"],
          priceRange: "$$",
          description: DESC,
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
            opens: "08:00", closes: "19:00",
          }],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "184" },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Glass & Aluminium Installation",
          provider: { "@id": "https://glass-uae-shine.lovable.app/#business" },
          areaServed: { "@type": "Country", name: "United Arab Emirates" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Glass & Aluminium Services",
            itemListElement: SERVICE_LIST.map((s) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: s },
            })),
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactSection />
    </Layout>
  );
}
