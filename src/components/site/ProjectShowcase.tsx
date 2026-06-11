import { Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Breadcrumbs, type Crumb } from "@/components/site/Breadcrumbs";
import { StickyCTA } from "@/components/site/StickyCTA";
import { ArrowRight, MapPin, Quote } from "lucide-react";

export interface ProjectShowcaseProps {
  crumbs: Crumb[];
  title: string;
  location: string;
  overview: string;
  scope: string[];
  materials: string[];
  challenge: string;
  solution: string;
  result: string;
  testimonial?: { quote: string; author: string };
  gallery: { src: string; alt: string }[];
  relatedService: { to: string; label: string };
}

export function ProjectShowcase(p: ProjectShowcaseProps) {
  return (
    <Layout>
      <section className="pt-32 pb-12 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl">
          <Breadcrumbs items={p.crumbs} />
          <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] text-orange font-semibold">Project</span>
          <h1 className="text-4xl md:text-6xl text-navy mt-4 font-light leading-tight">{p.title}</h1>
          <p className="mt-4 inline-flex items-center gap-2 text-muted-foreground"><MapPin size={14} className="text-orange" /> {p.location}</p>
          <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed max-w-3xl">{p.overview}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-4">
          {p.gallery.map((g) => (
            <img key={g.src} src={g.src} alt={g.alt} className="w-full aspect-[4/3] object-cover rounded-2xl border border-border" loading="lazy" />
          ))}
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-border bg-background">
            <h2 className="text-navy font-medium text-xl mb-3">Scope of work</h2>
            <ul className="space-y-2 text-muted-foreground text-sm font-light">
              {p.scope.map((s) => <li key={s}>• {s}</li>)}
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-border bg-background">
            <h2 className="text-navy font-medium text-xl mb-3">Materials</h2>
            <ul className="space-y-2 text-muted-foreground text-sm font-light">
              {p.materials.map((s) => <li key={s}>• {s}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl space-y-8">
          <div>
            <h2 className="text-2xl text-navy font-medium mb-3">Challenge</h2>
            <p className="text-muted-foreground font-light leading-relaxed">{p.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl text-navy font-medium mb-3">Solution</h2>
            <p className="text-muted-foreground font-light leading-relaxed">{p.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl text-navy font-medium mb-3">Result</h2>
            <p className="text-muted-foreground font-light leading-relaxed">{p.result}</p>
          </div>
        </div>
      </section>

      {p.testimonial && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-6 max-w-3xl">
            <figure className="p-8 rounded-2xl border border-border bg-background">
              <Quote className="text-orange" size={24} />
              <blockquote className="mt-3 text-navy text-xl font-light leading-relaxed">"{p.testimonial.quote}"</blockquote>
              <figcaption className="mt-4 text-sm text-muted-foreground">— {p.testimonial.author}</figcaption>
            </figure>
          </div>
        </section>
      )}

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-orange font-semibold">Service</p>
          <Link to={p.relatedService.to} className="mt-2 inline-flex items-center gap-2 text-navy text-2xl font-light hover:text-orange transition">
            {p.relatedService.label} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-light">Have a similar project?</h2>
          <p className="mt-4 text-white/70 font-light">Tell us about your space — we'll arrange a free on-site visit within 24 hours.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange text-orange-foreground font-medium hover:bg-orange/90 transition">
            Request Free Site Visit <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <StickyCTA />
    </Layout>
  );
}
