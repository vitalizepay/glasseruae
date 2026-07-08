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

export interface BlogInternalLink {
  to: string;
  label: string;
}

export interface BlogRelatedPost {
  to: string;
  label: string;
}

export interface BlogPostProps {
  h1: string;
  intro: string;
  sections: BlogSection[];
  faqs?: BlogFAQ[];
  ctaHeading: string;
  ctaText: string;
  image?: string;
  imageAlt?: string;
  serviceLinks?: BlogInternalLink[];
  related?: BlogRelatedPost[];
}

export function BlogPost({
  h1,
  intro,
  sections,
  faqs,
  ctaHeading,
  ctaText,
  image,
  imageAlt,
  serviceLinks,
  related,
}: BlogPostProps) {
  return (
    <Layout>
      <article className="pt-32 pb-8 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground mb-6">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link to="/" className="hover:text-orange">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:text-orange">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-navy truncate max-w-[60vw]" aria-current="page">{h1}</li>
            </ol>
          </nav>
          <span className="text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">Guide</span>
          <h1 className="text-4xl md:text-5xl text-navy mt-4 font-light leading-tight">{h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{intro}</p>
        </div>
      </article>

      {image && (
        <div className="bg-surface pb-8">
          <div className="container mx-auto px-6 max-w-3xl">
            <img
              src={image}
              alt={imageAlt ?? h1}
              className="w-full h-auto rounded-2xl object-cover aspect-[16/9]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      )}

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

          {serviceLinks && serviceLinks.length > 0 && (
            <div className="p-6 rounded-2xl bg-surface border border-border">
              <h2 className="text-lg text-navy font-medium mb-3">Related services</h2>
              <ul className="flex flex-wrap gap-2">
                {serviceLinks.map((s) => (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className="inline-block px-3 py-1.5 rounded-full bg-white border border-border text-sm text-navy hover:text-orange hover:border-orange transition"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

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

      {related && related.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-2xl md:text-3xl text-navy font-medium mb-6">Related articles</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="block p-5 rounded-2xl bg-white border border-border hover:border-orange hover:shadow-elegant transition"
                  >
                    <span className="text-navy font-medium">{r.label}</span>
                    <span className="mt-2 text-orange text-sm inline-flex items-center gap-1">
                      Read guide <ArrowRight size={14} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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
