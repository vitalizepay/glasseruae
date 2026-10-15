import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment } from "react";
import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildBlogHead } from "@/lib/seo";
import { partitionTitle, partitionSlug, partitionDate, partitionDescription, partitionIntro, partitionSections, partitionFaqs } from "@/content/premium-partition-project";
import concept from "@/assets/blog/premium-glass-partitions-dubai-concept.webp";

export const Route = createFileRoute("/blog/premium-glass-partitions-dubai-aed-400k-project")({
  head: () => buildBlogHead({ slug: partitionSlug, title: partitionTitle, seoTitle: "Premium Glass Partitions Dubai: AED 400K Order | Glasser UAE", description: partitionDescription, datePublished: partitionDate, faqs: partitionFaqs }),
  component: PremiumPartitionArticle,
});

const consultation = "https://wa.me/971568400838?text=Hi%20Glasser%20UAE%2C%20I%20would%20like%20to%20discuss%20a%20premium%20glass%20partition%20project%20in%20Dubai.";
function Paragraph({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <p className="text-muted-foreground leading-8 mb-5">{parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    return match ? <Link key={i} to={match[2]} className="text-editorial-accent underline underline-offset-4">{match[1]}</Link> : <Fragment key={i}>{part}</Fragment>;
  })}</p>;
}
function PremiumPartitionArticle() {
  return <Layout><article className="facade-publication" data-no-auto-reveal>
    <header className="pt-28 md:pt-32 pb-8 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-8"><Link to="/">Home</Link><span>/</span><Link to="/blog">Blog</Link><span>/</span><span aria-current="page">Premium partition project</span></nav>
        <p className="text-xs uppercase text-editorial-accent border-t border-border pt-5">Glasser UAE · Completed order / Dubai</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-editorial font-medium leading-tight max-w-6xl mt-7">{partitionTitle}</h1>
        <p className="text-sm text-muted-foreground mt-6 mb-8">By Glasser Technical Works Team · Published <time dateTime={partitionDate}>15 October 2026</time></p>
        <dl className="grid grid-cols-1 sm:grid-cols-3 border-y border-border py-5 gap-5 mb-8"><div><dt className="text-xs text-muted-foreground">Order value</dt><dd className="text-3xl font-medium mt-2">AED 400,000</dd></div><div><dt className="text-xs text-muted-foreground">Work</dt><dd className="text-xl font-medium mt-2">Premium glass partitions</dd></div><div><dt className="text-xs text-muted-foreground">Status / Location</dt><dd className="text-xl font-medium mt-2">Completed / Dubai</dd></div></dl>
        <figure><img src={concept} alt="Illustrative premium glass meeting-room partitions with slim aluminium framing" title="Premium glass partition design concept for Dubai interiors" width={1536} height={864} loading="eager" fetchPriority="high" className="w-full h-auto aspect-video object-cover"/><figcaption className="text-xs text-muted-foreground mt-3 leading-5">AI-generated editorial illustration — not a photograph of the completed AED 400,000 order.</figcaption></figure>
      </div>
    </header>
    <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[230px_minmax(0,1fr)] gap-10 lg:gap-16 py-10">
      <aside className="lg:sticky lg:top-28 self-start"><details open className="border-t border-border pt-4"><summary className="flex justify-between text-sm font-medium cursor-pointer">On this page <ChevronDown size={16}/></summary><nav aria-label="Table of contents" className="mt-4"><ol className="space-y-3">{partitionSections.map(s => <li key={s.id}><a href={`#${s.id}`} className="text-xs leading-5 text-muted-foreground hover:text-editorial-accent">{s.heading}</a></li>)}<li><a href="#faqs" className="text-xs text-muted-foreground">Frequently asked questions</a></li></ol></nav></details><Button asChild className="mt-6 h-auto min-h-10 py-3 whitespace-normal w-full bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={consultation} target="_blank" rel="noopener noreferrer">Discuss your project <ArrowUpRight/></a></Button></aside>
      <div className="max-w-4xl min-w-0">
        {partitionIntro.split("\n\n").map(p => <Paragraph key={p} text={p}/>)}
        <aside aria-label="Quick answer" className="border-l-4 border-editorial-accent bg-surface p-6 my-8"><h2 className="text-xs font-semibold uppercase text-editorial-accent mb-3">Quick answer</h2><p className="leading-7">Glasser UAE completed an AED 400,000 premium glass-partition order in Dubai. The value relates to this order only. For a new project, glass, framing, doors, privacy, site access and scope must be reviewed together before a meaningful quotation can be prepared.</p></aside>
        {partitionSections.map((s, i) => <section key={s.id} id={s.id} className="border-t border-border py-8"><p className="text-xs text-editorial-accent mb-3">{String(i + 1).padStart(2, "0")} / PROJECT INSIGHTS</p><h2 className="text-2xl md:text-3xl leading-tight font-medium mb-6">{s.heading}</h2>{s.paragraphs.map(p => <Paragraph key={p} text={p}/>)}</section>)}
        <section id="faqs" className="border-t border-border py-10"><h2 className="text-3xl font-medium mb-6">Frequently asked questions</h2>{partitionFaqs.map(f => <details key={f.q} className="group border-b border-border py-5"><summary className="flex justify-between gap-4 cursor-pointer list-none font-medium"><span>{f.q}</span><ChevronDown size={18} className="shrink-0 group-open:rotate-180"/></summary><p className="mt-4 text-muted-foreground leading-7">{f.a}</p></details>)}</section>
        <aside className="border-y border-border py-7"><h2 className="text-lg font-medium mb-3">About this company update</h2><p className="text-sm text-muted-foreground leading-6">Written by Glasser Technical Works Team. Project facts are supplied by Glasser UAE; system-selection advice is general guidance for future projects, not an independent technical audit of this order.</p></aside>
        <section className="py-10"><h2 className="text-2xl font-medium mb-6">Related Glasser articles</h2><div className="grid sm:grid-cols-2 gap-4"><Link to="/blog/aed-200k-commercial-glass-aluminium-project-dubai" className="border border-border p-5 rounded-md hover:border-editorial-accent">Commercial glass & aluminium project <ArrowUpRight size={18} className="mt-4 text-editorial-accent"/></Link><Link to="/blog/glass-partitions-dubai-office-guide" className="border border-border p-5 rounded-md hover:border-editorial-accent">Choosing glass partitions for your Dubai office <ArrowUpRight size={18} className="mt-4 text-editorial-accent"/></Link></div></section>
      </div>
    </div>
    <section className="bg-editorial text-editorial-foreground py-16 md:py-24"><div className="max-w-5xl mx-auto px-5 md:px-10"><p className="text-xs uppercase text-editorial-foreground/70 mb-5">Glasser Technical Works LLC</p><h2 className="text-3xl md:text-5xl font-medium leading-tight">Planning Premium Glass Partitions in Dubai?</h2><p className="mt-6 text-editorial-foreground/75 leading-8 max-w-3xl">Share your drawings, approximate partition area, room requirements and project location. Our team can discuss the appropriate glass, aluminium and door-system requirements for your project.</p><div className="flex flex-wrap gap-3 mt-8"><Button asChild size="lg" className="h-auto min-h-12 py-3 whitespace-normal bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={consultation} target="_blank" rel="noopener noreferrer">Request a Project Consultation <ArrowUpRight/></a></Button><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><a href="tel:+971568400838">Speak to Glasser UAE <Phone/></a></Button></div><div className="mt-8 flex flex-wrap gap-6 text-sm"><a href="tel:+971568400838">+971 56 840 0838</a><a href="mailto:sales@glasseruae.com">sales@glasseruae.com</a></div></div></section>
  </article></Layout>;
}