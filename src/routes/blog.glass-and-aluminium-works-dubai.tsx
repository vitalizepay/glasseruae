import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { Fragment } from "react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildBlogHead } from "@/lib/seo";
import { solutionsGuide as g, type SolutionsBlock } from "@/content/glass-aluminium-solutions";
import hero from "@/assets/blog/glass-aluminium-works-dubai.jpg.asset.json";

export const Route = createFileRoute("/blog/glass-and-aluminium-works-dubai")({
  head: () => buildBlogHead({ slug: g.slug, title: g.title, seoTitle: g.seoTitle, description: g.description, datePublished: g.published, dateModified: g.modified, faqs: g.faqs }),
  component: SolutionsArticle,
});

const enquiry = "https://wa.me/971568400838?text=Hello%20Glasser%20UAE%2C%20I%20would%20like%20a%20quotation%20for%20a%20glass%20and%20aluminium%20project.%20Location%3A%20%20Scope%3A%20";
function EnquiryButton({ label = "Request a project quotation" }: { label?: string }) {
  return <Button asChild size="lg" className="h-auto min-h-12 py-3 whitespace-normal bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={enquiry} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight /></a></Button>;
}
function RenderBlock({ block }: { block: SolutionsBlock }) {
  if (block.type === "heading") return <h3 className="text-xl font-medium mt-8 mb-4">{block.text}</h3>;
  if (block.type === "list") return <ul className="list-disc pl-6 space-y-2 text-muted-foreground leading-7 mb-5">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
  return <p className="text-muted-foreground leading-8 mb-5">{block.text}</p>;
}
function SolutionsArticle() {
  return <Layout><article className="facade-publication" data-no-auto-reveal>
    <header className="pt-28 md:pt-32 pb-10 bg-surface"><div className="max-w-7xl mx-auto px-5 md:px-10">
      <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-8"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">Glass and aluminium solutions</span></nav>
      <p className="text-xs uppercase text-editorial-accent border-t border-border pt-5">Glasser UAE · Architectural guide</p>
      <h1 className="text-3xl md:text-5xl leading-tight font-medium text-editorial max-w-5xl mt-6">{g.title}</h1>
      <p className="text-sm text-muted-foreground mt-6">By Glasser Technical Works Team · Updated <time dateTime={g.modified}>7 November 2026</time></p>
      <p className="text-lg text-muted-foreground leading-8 max-w-3xl mt-6">{g.intro[0]}</p>
      <figure className="mt-8"><img src={hero.url} alt="Architectural reference showing glass partitions and slim aluminium framing in an office interior" className="w-full aspect-[16/7] object-cover" loading="eager" fetchPriority="high" /><figcaption className="text-xs text-muted-foreground leading-5 mt-3">Existing website illustration used as an architectural reference, not documentation of a specific completed project.</figcaption></figure>
    </div></header>
    <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16 py-10">
      <aside className="lg:sticky lg:top-28 self-start"><details open className="border-t border-border pt-4"><summary className="flex justify-between text-sm font-medium cursor-pointer">On this page <ChevronDown size={16} /></summary><nav aria-label="Table of contents" className="mt-4"><ol className="space-y-3">{g.sections.map((s) => <li key={s.id}><a href={`#${s.id}`} className="text-xs leading-5 text-muted-foreground hover:text-editorial-accent">{s.heading}</a></li>)}<li><a href="#faqs" className="text-xs text-muted-foreground">Frequently asked questions</a></li></ol></nav></details></aside>
      <div className="max-w-4xl min-w-0">
        <aside aria-label="Quick answer" className="border-l-4 border-editorial-accent bg-surface p-6 mb-8"><h2 className="text-xs uppercase text-editorial-accent font-semibold mb-3">Quick answer</h2><p className="leading-8">{g.quickAnswer}</p></aside>
        {g.intro.slice(1).map((p) => <p key={p} className="text-muted-foreground leading-8 mb-5">{p}</p>)}
        <aside className="border-y border-border py-7 my-8"><h2 className="text-xl font-medium mb-3">Planning an office, retail or commercial package?</h2><p className="text-muted-foreground leading-7 mb-5">Send your drawings or BOQ, site photographs, location and target handover date to discuss the specification and scope.</p><EnquiryButton label="Share drawings and requirements" /></aside>
        {g.sections.map((s, i) => <Fragment key={s.id}><section id={s.id} className="border-t border-border py-8 scroll-mt-28"><p className="text-xs text-editorial-accent mb-3">{String(i + 1).padStart(2, "0")} / ARCHITECTURAL GUIDE</p><h2 className="text-2xl md:text-3xl leading-tight font-medium mb-6">{s.heading}</h2>{s.blocks.map((block, j) => <RenderBlock key={j} block={block} />)}</section>{i === 5 && <aside className="border-y border-border py-7"><h2 className="text-xl font-medium mb-3">Coordinating a façade or multi-trade package?</h2><p className="text-muted-foreground leading-7 mb-5">Share approved drawings, performance requirements and site constraints. Confirm design responsibility, approvals and installation scope before fabrication.</p><EnquiryButton label="Discuss your commercial project" /></aside>}</Fragment>)}
        <section className="border-t border-border py-8"><h2 className="text-2xl font-medium mb-5">Explore the relevant services</h2><ul className="grid sm:grid-cols-2 gap-3 text-editorial-accent underline underline-offset-4"><li><Link to="/office-glass-partition-dubai">Office glass partitions</Link></li><li><Link to="/glass-door-installation-dubai">Glass door installation</Link></li><li><Link to="/services/aluminium-windows-dubai">Aluminium windows</Link></li><li><Link to="/services/aluminium-doors-dubai">Aluminium doors</Link></li><li><Link to="/glass-facade-dubai">Glass façades</Link></li><li><Link to="/glass-railing-dubai">Glass railings and balustrades</Link></li><li><Link to="/shower-glass-dubai">Shower enclosures</Link></li><li><Link to="/services/custom-mirrors-dubai">Custom mirrors</Link></li><li><Link to="/aluminium-fabrication-dubai">Aluminium fabrication</Link></li><li><Link to="/areas-we-serve">Service areas and project enquiries</Link></li></ul></section>
        <section id="faqs" className="border-t border-border py-10 scroll-mt-28"><h2 className="text-3xl font-medium mb-6">Frequently asked questions</h2>{g.faqs.map((f) => <details key={f.q} className="group border-b border-border py-5"><summary className="flex justify-between gap-4 cursor-pointer list-none font-medium"><span>{f.q}</span><ChevronDown size={18} className="shrink-0 group-open:rotate-180" /></summary><p className="mt-4 text-muted-foreground leading-7">{f.a}</p></details>)}</section>
        <section className="py-10"><h2 className="text-2xl font-medium mb-6">Related reading</h2><ul className="space-y-4 text-editorial-accent underline underline-offset-4"><li><Link to="/blog/glass-doors-dubai">Choosing a glass door system in Dubai</Link></li><li><Link to="/blog/high-rise-building-facade-dubai">High-rise glass and aluminium façade planning</Link></li><li><Link to="/blog/premium-glass-partitions-dubai-aed-400k-project">Premium glass partitions: the AED 400,000 completed Dubai order</Link></li><li><Link to="/blog/curved-glass-dubai">Curved architectural glass</Link></li></ul></section>
        <aside className="border-t border-border py-8"><h2 className="text-xl font-medium mb-4">About this guide</h2><p className="text-muted-foreground leading-7">Prepared by the Glasser Technical Works Team for property owners, architects, developers and fit-out contractors. This is selection and procurement guidance, not structural design or confirmation of authority approval. Safety-critical and external systems require project-specific engineering and applicable approvals.</p></aside>
      </div>
    </div>
    <section className="bg-editorial text-editorial-foreground py-16 md:py-20"><div className="max-w-5xl mx-auto px-5 md:px-10"><p className="text-xs uppercase text-editorial-foreground/70 mb-5">Glasser Technical Works LLC</p><h2 className="text-3xl md:text-5xl leading-tight font-medium">Discuss your glass and aluminium project.</h2><p className="mt-6 text-editorial-foreground/75 leading-8 max-w-3xl">Send your project location, dimensions, drawings or BOQ and preferred completion date. Ask for an itemised quotation with materials, hardware, installation scope, exclusions and agreed terms.</p><div className="flex flex-wrap gap-3 mt-8"><EnquiryButton /><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><a href="tel:+971568400838">Call Glasser UAE <Phone /></a></Button><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><Link to="/contact">Send a project enquiry <ArrowUpRight /></Link></Button></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm mt-8"><a href="tel:+971568400838">+971 56 840 0838</a><a href="mailto:sales@glasseruae.com">sales@glasseruae.com</a></div></div></section>
  </article></Layout>;
}
