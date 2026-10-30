import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { Fragment } from "react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildBlogHead } from "@/lib/seo";
import { contractorsGuide as g } from "@/content/high-rise-contractors";
import hero from "@/assets/blog/high-rise-glass-installation-dubai.webp";

export const Route = createFileRoute("/blog/high-rise-glass-aluminium-contractors-dubai")({
  head: () => buildBlogHead({ slug: g.slug, title: g.title, seoTitle: g.seoTitle, description: g.description, datePublished: g.date, faqs: g.faqs.map((f) => ({ q: f.q, a: f.a })) }),
  component: ContractorsArticle,
});

const enquiry = "https://wa.me/971568400838?text=Hello%20Glasser%20UAE%2C%20I%20would%20like%20to%20discuss%20a%20glass%20and%20aluminium%20project.";

type Block = { t: string; x?: string; i?: readonly string[] };

function EnquiryButton({ label = "Request a quotation" }: { label?: string }) {
  return <Button asChild size="lg" className="h-auto min-h-12 py-3 whitespace-normal bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={enquiry} target="_blank" rel="noopener noreferrer">{label} <ArrowUpRight /></a></Button>;
}

function RenderBlock({ b }: { b: Block }) {
  if (b.t === "h3") return <h3 className="text-xl font-medium mt-8 mb-4">{b.x}</h3>;
  if (b.t === "h4") return <h4 className="font-semibold mt-6 mb-2">{b.x}</h4>;
  if (b.t === "ul") return <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-7 mb-5">{b.i!.map((x) => <li key={x}>{x}</li>)}</ul>;
  if (b.t === "ol") return <ol className="list-decimal pl-6 space-y-2 text-muted-foreground leading-7 mb-5">{b.i!.map((x) => <li key={x}>{x}</li>)}</ol>;
  return <p className="text-muted-foreground leading-8 mb-5">{b.x}</p>;
}

function ContractorsArticle() {
  return <Layout><article className="facade-publication" data-no-auto-reveal>
    <header className="pt-28 md:pt-32 pb-10 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-8"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">High-rise glass & aluminium contractors</span></nav>
        <p className="text-xs uppercase text-editorial-accent border-t border-border pt-5">Glasser UAE · Contractor guide</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-medium text-editorial max-w-5xl mt-6">{g.title}</h1>
        <p className="text-sm text-muted-foreground mt-6">By Glasser Technical Works Team · <time dateTime={g.date}>30 October 2026</time></p>
        <p className="text-lg text-muted-foreground leading-8 max-w-3xl mt-6">{g.intro[0]}</p>
        <figure className="mt-8"><img src={hero} alt="High-rise glass and aluminium installation in Dubai" className="w-full aspect-[16/7] object-cover" loading="eager" fetchPriority="high" /><figcaption className="text-xs text-muted-foreground leading-5 mt-3">Editorial illustration, not a photograph of a specific Glasser UAE project.</figcaption></figure>
      </div>
    </header>
    <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16 py-10">
      <aside className="lg:sticky lg:top-28 self-start"><details open className="border-t border-border pt-4"><summary className="flex justify-between text-sm font-medium cursor-pointer">On this page <ChevronDown size={16} /></summary><nav aria-label="Table of contents" className="mt-4"><ol className="space-y-3">{g.sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="text-xs leading-5 text-muted-foreground hover:text-editorial-accent">{s.heading}</a></li>)}<li><a href="#faqs" className="text-xs text-muted-foreground">Frequently asked questions</a></li></ol></nav></details></aside>
      <div className="max-w-4xl min-w-0">
        <aside aria-label="Quick answer" className="border-l-4 border-editorial-accent bg-surface p-6 mb-8"><h2 className="text-xs uppercase text-editorial-accent font-semibold mb-3">Quick answer</h2><p className="leading-8">High-rise glass and aluminium work in Dubai needs a contractor who confirms site measurements before fabrication, matches glass specifications to each application, prepares documents for consultant approval, phases deliveries floor by floor and supports snagging and maintenance after handover. Glasser Technical Works LLC supports developers, main contractors and fit-out companies across Dubai, Sharjah and Ajman.</p></aside>
        {g.intro.slice(1).map((p) => <p key={p} className="text-muted-foreground leading-8 mb-5">{p}</p>)}
        {g.sections.map((s, i) => <Fragment key={s.id}><section id={s.id} className="border-t border-border py-8 scroll-mt-28"><p className="text-xs text-editorial-accent mb-3">{String(i + 1).padStart(2, "0")} / CONTRACTOR GUIDE</p><h2 className="text-2xl md:text-3xl leading-tight font-medium mb-6">{s.heading}</h2>{s.blocks.map((b, j) => <RenderBlock key={j} b={b as Block} />)}</section>{i === 1 && <aside className="border-y border-border py-7 my-3"><h2 className="text-xl font-medium mb-3">Planning a tower or commercial package?</h2><p className="text-muted-foreground leading-7 mb-5">Send drawings, BOQ, photographs and the project location to Glasser UAE to start a project-specific discussion.</p><EnquiryButton label="Share your project" /></aside>}</Fragment>)}
        <section className="border-t border-border py-8"><h2 className="text-2xl font-medium mb-5">Explore the relevant services</h2><ul className="space-y-3 text-editorial-accent underline underline-offset-4"><li><Link to="/glass-partition-dubai">Glass partitions</Link></li><li><Link to="/glass-door-installation-dubai">Glass doors</Link></li><li><Link to="/aluminium-works-dubai">Aluminium works</Link></li><li><Link to="/glass-facade-dubai">Glass façades</Link></li><li><Link to="/glass-railing-dubai">Glass balustrades and railings</Link></li><li><Link to="/shower-glass-dubai">Shower enclosures</Link></li><li><Link to="/contact">Contact Glasser UAE</Link></li></ul></section>
        <section id="faqs" className="border-t border-border py-10 scroll-mt-28"><h2 className="text-3xl font-medium mb-6">Frequently asked questions</h2>{g.faqs.map((f) => <details key={f.q} className="group border-b border-border py-5"><summary className="flex justify-between gap-4 cursor-pointer list-none font-medium"><span>{f.q}</span><ChevronDown size={18} className="shrink-0 group-open:rotate-180" /></summary><p className="mt-4 text-muted-foreground leading-7">{f.a}</p></details>)}</section>
        <section className="py-10"><h2 className="text-2xl font-medium mb-6">Related reading</h2><div className="grid sm:grid-cols-2 gap-4"><Link to="/blog/high-rise-building-facade-dubai" className="border border-border p-5 rounded-md hover:border-editorial-accent">High-rise façade planning guide <ArrowUpRight className="mt-4 text-editorial-accent" size={18} /></Link><Link to="/blog/glass-and-aluminium-works-dubai" className="border border-border p-5 rounded-md hover:border-editorial-accent">Glass and aluminium works in Dubai <ArrowUpRight className="mt-4 text-editorial-accent" size={18} /></Link></div></section>
      </div>
    </div>
    <section className="bg-editorial text-editorial-foreground py-16 md:py-20"><div className="max-w-5xl mx-auto px-5 md:px-10"><p className="text-xs uppercase text-editorial-foreground/70 mb-5">Glasser Technical Works LLC</p><h2 className="text-3xl md:text-5xl leading-tight font-medium">Request a quotation or become a B2B partner.</h2><p className="mt-6 text-editorial-foreground/75 leading-8 max-w-3xl">Send your project drawings, BOQ or requirements to discuss your next glass and aluminium project with our team.</p><div className="flex flex-wrap gap-3 mt-8"><EnquiryButton /><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><a href="tel:+971568400838">Call Glasser UAE <Phone /></a></Button><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><Link to="/contact">Send a project enquiry <ArrowUpRight /></Link></Button></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm mt-8"><a href="tel:+971568400838">+971 56 840 0838</a><a href="mailto:sales@glasseruae.com">sales@glasseruae.com</a></div></div></section>
  </article></Layout>;
}
