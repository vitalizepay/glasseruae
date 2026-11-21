import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/site/QuoteForm";
import { serviceWhatsAppUrl } from "@/lib/enquiries";

export interface RelatedService {
  to: string;
  label: string;
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  h1: string;
  eyebrow: string;
  intro: string;
  featuresHeading: string;
  features: string[];
  related: RelatedService[];
  faqs?: ServiceFAQ[];
  guide?: { to: string; label: string };
}

export function ServicePage({ h1, eyebrow, intro, featuresHeading, features, related, faqs, guide }: ServicePageProps) {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">{eyebrow}</span>
          <h1 className="text-4xl md:text-6xl text-navy mt-4 font-light">{h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3"><Button asChild size="lg"><a href={serviceWhatsAppUrl(h1)} target="_blank" rel="noopener noreferrer">Discuss this service <ArrowRight size={16} /></a></Button><Button asChild variant="outline" size="lg"><a href="#service-enquiry">Request a quotation</a></Button></div>
          {guide && (
            <Link
              to={guide.to}
              className="mt-6 inline-flex items-center gap-2 text-navy hover:text-orange font-medium text-sm underline decoration-orange/40 underline-offset-4"
            >
              Read our guide: {guide.label} <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl md:text-3xl text-navy font-medium mb-8">{featuresHeading}</h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <li key={f} className="flex gap-3 items-start p-5 rounded-2xl border border-border bg-surface">
                <Check size={18} className="text-orange shrink-0 mt-1" />
                <span className="text-navy font-light">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {faqs && faqs.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-2xl md:text-3xl text-navy font-medium mb-8">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6 rounded-2xl border border-border bg-background">
                  <summary className="cursor-pointer text-navy font-medium list-none flex justify-between items-start gap-4">
                    <span>{f.q}</span>
                    <span className="text-orange text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-muted-foreground font-light leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>
      )}

      <section id="service-enquiry" className="py-20 bg-background scroll-mt-24"><div className="container mx-auto px-6 max-w-3xl"><QuoteForm defaultService={h1} /></div></section>

      <section className="py-20 bg-navy text-navy-foreground">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-light">Discuss your project scope</h2>
          <p className="mt-4 text-navy-foreground/70 font-light">Share the location, available drawings and required glass or aluminium work.</p>
          <Button asChild size="lg" className="mt-8"><Link to="/contact">Request a quote <ArrowRight size={16} /></Link></Button>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl text-navy font-medium mb-8">Related services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="group p-6 rounded-2xl border border-border bg-surface hover:border-orange hover:shadow-elegant transition"
              >
                <span className="text-navy font-medium group-hover:text-orange flex items-center justify-between">
                  {r.label} <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
