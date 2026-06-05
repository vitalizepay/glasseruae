import { Link } from "@tanstack/react-router";
import { Check, ArrowRight, MapPin, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { QuoteForm } from "@/components/site/QuoteForm";
import { StickyCTA } from "@/components/site/StickyCTA";

export interface SeoSection {
  heading: string;
  paragraphs: string[];
}

export interface SeoFAQ {
  q: string;
  a: string;
}

export interface SeoRelated {
  to: string;
  label: string;
}

export interface SeoLandingProps {
  eyebrow: string;
  h1: string;
  intro: string;
  crumbs: Crumb[];
  benefits: string[];
  process?: { step: string; detail: string }[];
  sections: SeoSection[];
  faqs: SeoFAQ[];
  areas?: string[];
  relatedServices?: SeoRelated[];
  relatedProjects?: SeoRelated[];
  defaultService?: string;
  defaultLocation?: string;
  gallery?: { src: string; alt: string }[];
}

export function SeoLanding(p: SeoLandingProps) {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={p.crumbs} />
          <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">{p.eyebrow}</span>
          <h1 className="text-4xl md:text-6xl text-navy mt-4 font-light leading-tight">{p.h1}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light max-w-3xl">{p.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition">
              Get free quote <ArrowRight size={14} />
            </Link>
            <a href="tel:+971568400838" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange text-orange-foreground font-medium hover:bg-orange/90 transition">
              Call +971 56 840 0838
            </a>
            <a href="https://wa.me/971568400838" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl md:text-3xl text-navy font-medium mb-8">Why choose Glasser UAE</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {p.benefits.map((b) => (
              <li key={b} className="flex gap-3 items-start p-5 rounded-2xl border border-border bg-surface">
                <Check size={18} className="text-orange shrink-0 mt-1" />
                <span className="text-navy font-light">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl space-y-10">
          {p.sections.map((s, i) => (
            <article key={i}>
              <h2 className="text-2xl md:text-3xl text-navy font-medium mb-4">{s.heading}</h2>
              {s.paragraphs.map((para, j) => (
                <p key={j} className="text-muted-foreground font-light leading-relaxed mb-4">{para}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {p.process && p.process.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl md:text-3xl text-navy font-medium mb-8">Our process</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {p.process.map((s, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-surface">
                  <div className="text-orange text-3xl font-light">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-navy font-medium">{s.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-light">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {p.gallery && p.gallery.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl md:text-3xl text-navy font-medium mb-8">Recent work</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" loading="lazy" />
              ))}
            </div>
          </div>
        </section>
      )}

      {p.areas && p.areas.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-2xl md:text-3xl text-navy font-medium mb-6">Service areas</h2>
            <div className="flex flex-wrap gap-2">
              {p.areas.map((a) => (
                <span key={a} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-surface text-sm text-navy">
                  <MapPin size={12} className="text-orange" /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-navy font-medium mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {p.faqs.map((f) => (
              <details key={f.q} className="group p-5 rounded-2xl border border-border bg-background">
                <summary className="cursor-pointer text-navy font-medium list-none flex justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-orange text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-muted-foreground font-light leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <QuoteForm defaultService={p.defaultService} defaultLocation={p.defaultLocation} />
        </div>
      </section>

      {(p.relatedProjects?.length || p.relatedServices?.length) && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10">
            {p.relatedProjects && p.relatedProjects.length > 0 && (
              <div>
                <h2 className="text-xl md:text-2xl text-navy font-medium mb-4">Related projects</h2>
                <div className="space-y-2">
                  {p.relatedProjects.map((r) => (
                    <Link key={r.to} to={r.to} className="block p-4 rounded-xl border border-border bg-background hover:border-orange transition">
                      <span className="text-navy flex items-center justify-between"><span className="flex items-center gap-2"><Star size={14} className="text-orange" /> {r.label}</span><ArrowRight size={14} /></span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {p.relatedServices && p.relatedServices.length > 0 && (
              <div>
                <h2 className="text-xl md:text-2xl text-navy font-medium mb-4">Related services</h2>
                <div className="space-y-2">
                  {p.relatedServices.map((r) => (
                    <Link key={r.to} to={r.to} className="block p-4 rounded-xl border border-border bg-background hover:border-orange transition">
                      <span className="text-navy flex items-center justify-between">{r.label}<ArrowRight size={14} /></span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-light">Ready to start your project?</h2>
          <p className="mt-4 text-white/70 font-light">Free site survey & detailed quotation across Dubai, Sharjah, Ajman and Abu Dhabi.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-orange-foreground font-medium hover:bg-orange/90 transition">
              Request a quote <ArrowRight size={16} />
            </Link>
            <a href="tel:+971568400838" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white hover:bg-white/10">
              +971 56 840 0838
            </a>
          </div>
        </div>
      </section>

      <StickyCTA />
    </Layout>
  );
}
