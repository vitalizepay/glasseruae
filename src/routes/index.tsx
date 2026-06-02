import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";
import heroImage from "@/assets/hero-dubai.jpg";

const TITLE = "Glass & Aluminium Company Dubai | Glasser UAE";
const DESC = "Glasser UAE — Dubai specialists in frameless glass partitions, aluminium doors & windows, shower enclosures, mirrors and facades across the UAE.";
const URL = "https://glasseruae.com/";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Glass Company Dubai, Aluminium Company Dubai, Frameless Glass Dubai, Glass Partitions Dubai, Aluminium Windows Dubai, Aluminium Doors Dubai, Glasser Technical Works, glass facades UAE" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:locale", content: "en_AE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://glasseruae.com/#business",
          name: "Glasser Technical Works LLC",
          url: "https://glasseruae.com",
          logo: "https://glasseruae.com/assets/glasser-logo-CdC4CQ8d.png",
          description: "Dubai specialists in frameless glass partitions, aluminium doors and windows, shower enclosures, mirrors and glass facades across the UAE since 2009.",
          telephone: "+971568400838",
          email: "sales@glasseruae.com",
          foundingDate: "2009",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Hilal Bldg, Al Nahda Street, Al Qusais",
            addressLocality: "Dubai",
            addressCountry: "AE",
            postalCode: "235485",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 25.2816,
            longitude: 55.3714,
          },
          openingHoursSpecification: [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"],
            opens: "08:00",
            closes: "19:00",
          }],
          areaServed: ["Dubai","Abu Dhabi","Sharjah","Ajman","Ras Al Khaimah","Fujairah","Umm Al Quwain"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Glass & Aluminium Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Frameless Glass Partitions Dubai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aluminium Doors Dubai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aluminium Windows Dubai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shower Enclosures Dubai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Mirrors Dubai" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Glass Facades UAE" } },
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Which areas in the UAE does Glasser serve?",
              acceptedAnswer: { "@type": "Answer", text: "We deliver and install across all seven Emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain." },
            },
            {
              "@type": "Question",
              name: "Do you offer free site measurement and quotation?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. We offer a completely free site visit, measurement and detailed quotation for all glass and aluminium projects across the UAE." },
            },
            {
              "@type": "Question",
              name: "What kind of glass do you use?",
              acceptedAnswer: { "@type": "Answer", text: "We use European-grade tempered and laminated safety glass, toughened to international standards and engineered for UAE climate conditions." },
            },
            {
              "@type": "Question",
              name: "Is your work warranted?",
              acceptedAnswer: { "@type": "Answer", text: "Yes. All installations are covered by warranty. We also offer post-installation repair, replacement and maintenance services." },
            },
          ],
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
