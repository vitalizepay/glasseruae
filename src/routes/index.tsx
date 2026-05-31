import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Projects } from "@/components/site/Projects";
import { GlassSkyline } from "@/components/site/GlassSkyline";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { ContactSection } from "@/components/site/ContactSection";

const TITLE = "Glasser UAE — Premium Glass & Aluminium Specialists in Dubai";
const DESC = "Glasser Technical Works LLC — Dubai's trusted experts in frameless glass partitions, shower enclosures, aluminium doors & windows, mirrors and architectural glass across the UAE.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "glass works Dubai, aluminium works UAE, frameless glass partitions, shower enclosures Dubai, aluminium doors windows, office glass, custom mirrors Dubai, Glasser Technical Works" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_AE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Glasser Technical Works LLC",
          image: "/og.jpg",
          telephone: "+971568400838",
          email: "sales@glasseruae.com",
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
          openingHours: "Sa-Th 08:00-19:00",
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
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Testimonials />
      <CTA />
      <ContactSection />
    </Layout>
  );
}
