import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/site/Breadcrumbs";
import { StickyCTA } from "@/components/site/StickyCTA";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SEO_LOCATIONS } from "@/lib/seo";
import { MapPin, ArrowRight } from "lucide-react";

const T = "Areas We Serve | Glass & Aluminium Across the UAE | Glasser UAE";
const D = "Glasser Technical Works covers Dubai, Sharjah, Ajman and Abu Dhabi — including Al Qusais, Al Nahda, Deira, Business Bay, Dubai Marina, JVC and more.";
const URL = "https://glasseruae.com/areas-we-serve";

const ZONES = [
  { city: "Dubai", areas: ["Al Qusais", "Al Nahda", "Deira", "Business Bay", "Dubai Marina", "JVC", "DIFC", "JLT", "Downtown", "Jumeirah", "Dubai Hills", "Al Barsha"] },
  { city: "Sharjah", areas: ["Al Majaz", "Al Nahda Sharjah", "Al Qasimia", "Sharjah Industrial Area", "University City"] },
  { city: "Ajman", areas: ["Ajman Corniche", "Al Jurf", "Al Nuaimiya"] },
  { city: "Abu Dhabi", areas: ["Khalifa City", "Al Reem Island", "Yas Island", "Mussafah"] },
];

export const Route = createFileRoute("/areas-we-serve")({
  head: () => ({
    meta: [
      { title: T }, { name: "description", content: D },
      { property: "og:title", content: T }, { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd([{ label: "Home", to: "/" }, { label: "Areas We Serve" }])) },
      { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        name: "Glasser Technical Works LLC", url: "https://glasseruae.com",
        telephone: "+971568400838",
        address: { "@type": "PostalAddress", streetAddress: "Al Hilal Bldg, Al Nahda Street, Al Qusais", addressLocality: "Dubai", addressCountry: "AE" },
        areaServed: ZONES.flatMap((z) => [z.city, ...z.areas]),
      }) },
    ],
  }),
  component: () => (
    <Layout>
      <section className="pt-32 pb-12 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Areas We Serve" }]} />
          <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">Coverage</span>
          <h1 className="text-4xl md:text-6xl text-navy mt-4 font-light leading-tight">Areas We Serve</h1>
          <p className="mt-6 text-lg text-muted-foreground font-light max-w-3xl">From our Al Qusais workshop we deliver glass and aluminium installation across all four major emirates — Dubai, Sharjah, Ajman and Abu Dhabi.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-6">
          {ZONES.map((z) => (
            <div key={z.city} className="p-6 rounded-2xl border border-border bg-surface">
              <h2 className="text-2xl text-navy font-medium flex items-center gap-2"><MapPin className="text-orange" size={18} /> {z.city}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {z.areas.map((a) => (
                  <span key={a} className="inline-flex items-center px-3 py-1.5 rounded-full bg-background border border-border text-sm text-navy">{a}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl text-navy font-medium mb-6">Dedicated location pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SEO_LOCATIONS.map((l) => (
              <Link key={l.to} to={l.to} className="p-4 rounded-xl border border-border bg-background hover:border-orange transition flex items-center justify-between">
                <span className="text-navy">{l.label}</span><ArrowRight size={14} className="text-orange" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <QuoteForm />
        </div>
      </section>

      <StickyCTA />
    </Layout>
  ),
});
