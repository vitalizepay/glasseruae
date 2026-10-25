import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { Fragment } from "react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildBlogHead } from "@/lib/seo";
import { doorGuide } from "@/content/glass-doors-guide";
import officeGlass from "@/assets/blog/glass-door-reference.webp.asset.json";

export const Route = createFileRoute("/blog/glass-doors-dubai")({
  head: () => buildBlogHead({ slug: doorGuide.slug, title: doorGuide.title, seoTitle: doorGuide.seoTitle, description: doorGuide.description, datePublished: doorGuide.date }),
  component: GlassDoorsArticle,
});

const enquiry = "https://wa.me/971568400838?text=Hello%20Glasser%20UAE%2C%20I%20would%20like%20to%20discuss%20glass%20doors%20for%20my%20project.";

function EnquiryButton() {
  return <Button asChild size="lg" className="h-auto min-h-12 py-3 whitespace-normal bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={enquiry} target="_blank" rel="noopener noreferrer">Discuss your glass doors <ArrowUpRight /></a></Button>;
}

function GlassDoorsArticle() {
  return <Layout><article className="facade-publication" data-no-auto-reveal>
    <header className="pt-28 md:pt-32 pb-10 bg-surface">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-8"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/blog">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">Glass doors Dubai</span></nav>
        <p className="text-xs uppercase text-editorial-accent border-t border-border pt-5">Glasser UAE · Specification guide</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl leading-tight font-medium text-editorial max-w-5xl mt-6">{doorGuide.title}</h1>
        <p className="text-sm text-muted-foreground mt-6">By Glasser Technical Works Team · <time dateTime={doorGuide.date}>25 October 2026</time></p>
        <p className="text-lg text-muted-foreground leading-8 max-w-3xl mt-6">{doorGuide.intro}</p>
        <figure className="mt-8"><img src={officeGlass.url} alt="Glass office enclosure with transparent glazing and door framing, used as a door-system design reference" className="w-full aspect-[16/7] object-cover" loading="eager" fetchPriority="high" /><figcaption className="text-xs text-muted-foreground leading-5 mt-3">Existing Glasser website image used as a design reference, not documentation of a new completed door project.</figcaption></figure>
      </div>
    </header>
    <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[220px_minmax(0,1fr)] gap-10 lg:gap-16 py-10">
      <aside className="lg:sticky lg:top-28 self-start"><details open className="border-t border-border pt-4"><summary className="flex justify-between text-sm font-medium cursor-pointer">On this page <ChevronDown size={16} /></summary><nav aria-label="Table of contents" className="mt-4"><ol className="space-y-3">{doorGuide.sections.map(s => <li key={s.id}><a href={`#${s.id}`} className="text-xs leading-5 text-muted-foreground hover:text-editorial-accent">{s.heading}</a></li>)}<li><a href="#faqs" className="text-xs text-muted-foreground">Frequently asked questions</a></li></ol></nav></details></aside>
      <div className="max-w-4xl min-w-0">
        <aside aria-label="Quick answer" className="border-l-4 border-editorial-accent bg-surface p-6 mb-8"><h2 className="text-xs uppercase text-editorial-accent font-semibold mb-3">Quick answer</h2><p className="leading-8">{doorGuide.answer}</p></aside>
        {doorGuide.sections.map((s, i) => <Fragment key={s.id}><section id={s.id} className="border-t border-border py-8 scroll-mt-28"><p className="text-xs text-editorial-accent mb-3">{String(i + 1).padStart(2, "0")} / DOOR SELECTION</p><h2 className="text-2xl md:text-3xl leading-tight font-medium mb-6">{s.heading}</h2>{s.paragraphs.map(p => <p key={p} className="text-muted-foreground leading-8 mb-5">{p}</p>)}</section>{i === 3 && <aside className="border-y border-border py-7 my-3"><h2 className="text-xl font-medium mb-3">Planning an office or commercial entrance?</h2><p className="text-muted-foreground leading-7 mb-5">Share your opening photographs, drawings and operating requirements with Glasser UAE before choosing the glass and hardware.</p><EnquiryButton /></aside>}</Fragment>)}
        <section className="border-t border-border py-8"><h2 className="text-2xl font-medium mb-5">Explore the relevant services</h2><ul className="space-y-3 text-editorial-accent underline underline-offset-4"><li><Link to="/glass-door-installation-dubai">Glass door installation in Dubai</Link></li><li><Link to="/office-glass-partition-dubai">Office glass partitions and door coordination</Link></li><li><Link to="/glass-shopfront-dubai">Retail glass shopfronts</Link></li><li><Link to="/services/aluminium-doors-dubai">Aluminium-framed doors</Link></li><li><Link to="/shower-glass-dubai">Shower glass and bathroom enclosures</Link></li></ul></section>
        <section id="faqs" className="border-t border-border py-10 scroll-mt-28"><h2 className="text-3xl font-medium mb-6">Frequently asked questions</h2>{doorGuide.faqs.map(f => <details key={f.q} className="group border-b border-border py-5"><summary className="flex justify-between gap-4 cursor-pointer list-none font-medium"><span>{f.q}</span><ChevronDown size={18} className="shrink-0 group-open:rotate-180" /></summary><p className="mt-4 text-muted-foreground leading-7">{f.a}</p></details>)}</section>
        <section className="border-y border-border py-8"><h2 className="text-lg font-medium mb-3">Technical references and scope</h2><p className="text-sm text-muted-foreground leading-7 mb-4">This guide provides general selection guidance, not a project design or compliance certificate. International references support the technical discussion; applicable UAE requirements and the selected manufacturer's instructions govern the project specification.</p><ul className="space-y-3 text-sm text-editorial-accent underline underline-offset-4"><li><a href="https://www.glass.org/sites/default/files/2023-09/Heavy%20Glass%20Door%20Design%20Manual_2021.pdf" target="_blank" rel="noopener noreferrer">National Glass Association: Heavy Glass Door Design Manual</a></li><li><a href="https://www.glass.org/sites/default/files/2021-11/FB04-03%20%282021%29_Design_Considerations_for_Laminated_Glazing_Applications.pdf" target="_blank" rel="noopener noreferrer">National Glass Association: Laminated Glazing Applications</a></li><li><a href="https://www.glass.org/sites/default/files/2023-01/IN03-12_2023_Key_Elements_Fenestration_System_Shop_Drawings.pdf" target="_blank" rel="noopener noreferrer">National Glass Association: Fenestration System Shop Drawings</a></li></ul></section>
        <section className="py-10"><h2 className="text-2xl font-medium mb-6">Related reading</h2><div className="grid sm:grid-cols-2 gap-4"><Link to="/blog/glass-partitions-dubai-office-guide" className="border border-border p-5 rounded-md hover:border-editorial-accent">Choosing office glass partitions <ArrowUpRight className="mt-4 text-editorial-accent" size={18} /></Link><Link to="/blog/frameless-shower-enclosures-dubai-guide" className="border border-border p-5 rounded-md hover:border-editorial-accent">Planning frameless shower enclosures <ArrowUpRight className="mt-4 text-editorial-accent" size={18} /></Link></div></section>
      </div>
    </div>
    <section className="bg-editorial text-editorial-foreground py-16 md:py-20"><div className="max-w-5xl mx-auto px-5 md:px-10"><p className="text-xs uppercase text-editorial-foreground/70 mb-5">Glasser Technical Works LLC</p><h2 className="text-3xl md:text-5xl leading-tight font-medium">Specify a door that works for your space.</h2><p className="mt-6 text-editorial-foreground/75 leading-8 max-w-3xl">Discuss your Dubai or UAE glass-door project with Glasser UAE. Share the opening, intended use and required scope to start a project-specific conversation.</p><div className="flex flex-wrap gap-3 mt-8"><EnquiryButton /><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><a href="tel:+971568400838">Call Glasser UAE <Phone /></a></Button><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><Link to="/contact">Send a project enquiry <ArrowUpRight /></Link></Button></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm mt-8"><a href="tel:+971568400838">+971 56 840 0838</a><a href="mailto:sales@glasseruae.com">sales@glasseruae.com</a></div></div></section>
  </article></Layout>;
}