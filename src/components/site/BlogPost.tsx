import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, ShieldCheck } from "lucide-react";
import type { ReactNode } from "react";

export interface BlogFAQ {
  q: string;
  a: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  lang?: string;
  dir?: "rtl" | "ltr";
  image?: { src: string; alt: string };
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

// Parse inline markdown-style links [text](/path) and render as router Links.
function renderParagraph(text: string): ReactNode {
  const parts: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    const label = m[1];
    const href = m[2];
    if (href.startsWith("/")) {
      parts.push(
        <Link key={key++} to={href} className="text-orange underline decoration-orange/40 underline-offset-4 hover:decoration-orange">
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a key={key++} href={href} className="text-orange underline decoration-orange/40 underline-offset-4 hover:decoration-orange">
          {label}
        </a>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
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
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">{renderParagraph(intro)}</p>
          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center font-semibold">GT</div>
            <div>
              <p className="text-navy font-medium">Glasser Technical Works Team</p>
              <p>UAE glass &amp; aluminium specialists since 2019</p>
            </div>
          </div>
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
            <div key={i} lang={s.lang} dir={s.dir}>
              {s.heading && <h2 className="text-2xl md:text-3xl text-navy font-medium mb-4">{s.heading}</h2>}
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-muted-foreground font-light leading-relaxed mb-4">{renderParagraph(p)}</p>
              ))}
              {s.image && (
                <img
                  src={s.image.src}
                  alt={s.image.alt}
                  className="w-full h-auto rounded-2xl object-cover aspect-[16/9] my-6"
                  loading="lazy"
                />
              )}
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

          <aside className="p-6 rounded-2xl bg-navy text-white/90 flex gap-4 items-start">
            <ShieldCheck className="text-orange shrink-0 mt-0.5" size={22} />
            <div className="text-sm leading-relaxed font-light">
              <p className="text-white font-medium mb-1">About the author</p>
              <p>
                Written by the Glasser Technical Works team — a licensed Dubai glass and aluminium
                contractor operating from Al Qusais since 2019, with 500+ delivered projects across
                the UAE. Reach us on{" "}
                <a href="tel:+971568400838" className="underline decoration-orange/60 hover:text-orange">+971 56 840 0838</a>{" "}
                or <a href="mailto:sales@glasseruae.com" className="underline decoration-orange/60 hover:text-orange">sales@glasseruae.com</a>.
              </p>
            </div>
          </aside>
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
