import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Check, ArrowRight } from "lucide-react";

export interface RelatedService {
  to: string;
  label: string;
}

export interface ServicePageProps {
  h1: string;
  eyebrow: string;
  intro: string;
  featuresHeading: string;
  features: string[];
  related: RelatedService[];
}

export function ServicePage({ h1, eyebrow, intro, featuresHeading, features, related }: ServicePageProps) {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-surface">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">{eyebrow}</span>
          <h1 className="text-4xl md:text-6xl text-navy mt-4 font-light">{h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{intro}</p>
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

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-light">Get a free quote</h2>
          <p className="mt-4 text-white/70 font-light">Free site survey and detailed quotation anywhere in the UAE.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-orange-foreground font-medium hover:bg-orange/90 transition"
          >
            Request a quote <ArrowRight size={16} />
          </Link>
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
