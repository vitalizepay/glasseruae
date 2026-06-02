import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight } from "lucide-react";

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostProps {
  h1: string;
  intro: string;
  sections: BlogSection[];
  faqs?: BlogFAQ[];
  ctaHeading: string;
  ctaText: string;
}

export function BlogPost({ h1, intro, sections, faqs, ctaHeading, ctaText }: BlogPostProps) {
  return (
    <Layout>
      <article className="pt-32 pb-12 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">Guide</span>
          <h1 className="text-4xl md:text-5xl text-navy mt-4 font-light leading-tight">{h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{intro}</p>
        </div>
      </article>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 max-w-3xl space-y-10">
          {sections.map((s, i) => (
            <div key={i}>
              {s.heading && <h2 className="text-2xl md:text-3xl text-navy font-medium mb-4">{s.heading}</h2>}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground font-light leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          ))}

          {faqs && faqs.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl text-navy font-medium mb-6">Frequently asked questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group p-5 rounded-2xl border border-border bg-surface">
                    <summary className="cursor-pointer text-navy font-medium list-none flex justify-between gap-4">
                      <span>{f.q}</span>
                      <span className="text-orange text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground font-light">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-light">{ctaHeading}</h2>
          <p className="mt-4 text-white/70 font-light">{ctaText}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-orange-foreground font-medium hover:bg-orange/90 transition"
          >
            Request a quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
