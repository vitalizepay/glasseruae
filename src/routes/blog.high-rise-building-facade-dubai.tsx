import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, Phone, Mail, ArrowUpRight, ChevronDown } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildBlogHead } from "@/lib/seo";
import { facadeTitle, facadeSlug, facadeDate, facadeDescription, facadeIntro, quickAnswer, facadeSections, facadeFaqs } from "@/content/high-rise-facade";
import hero from "@/assets/blog/high-rise-facade-dubai-hero.webp";
import unitized from "@/assets/blog/dubai-unitized-curtain-wall.webp";
import detail from "@/assets/blog/curtain-wall-engineering-detail.webp";
import installation from "@/assets/blog/high-rise-glass-installation-dubai.webp";
import completed from "@/assets/blog/completed-dubai-glass-facade.webp";
import planning from "@/assets/blog/dubai-facade-project-planning.webp";

export const Route = createFileRoute("/blog/high-rise-building-facade-dubai")({
  head: () => buildBlogHead({ slug: facadeSlug, title: facadeTitle, seoTitle: "High-Rise Façade Dubai: Cost & Planning Guide | Glasser UAE", description: facadeDescription, datePublished: facadeDate, dateModified: facadeDate, faqs: facadeFaqs }),
  component: FacadeGuide,
});

const images = [
  { src: hero, alt: "Illustrative Dubai high-rise tower with blue-grey glass façade under construction", caption: "The tower envelope: glass, aluminium and installation strategy.", title: "High-rise glass façade planning in Dubai", width: 1536, height: 864 },
  { src: unitized, alt: "Illustrative unitized glass curtain wall module being hoisted at a Dubai high-rise", caption: "Unitized modules shift assembly into the factory—not coordination out of the project.", title: "Unitized curtain wall installation concept", width: 1536, height: 864 },
  { src: detail, alt: "Illustrative aluminium mullion and transom intersection with double-glazed glass and gasket joints", caption: "Performance is resolved at the interfaces between materials.", title: "Curtain wall framing and glazing interface", width: 1152, height: 864 },
  { src: installation, alt: "Illustrative glass façade panel installation using suction equipment and suspended tower access", caption: "Access and lifting constraints belong in the plan before fabrication.", title: "High-rise façade access and glass handling", width: 1536, height: 864 },
  { src: completed, alt: "Illustrative finished Dubai commercial tower with glass curtain wall and feature entrance glazing", caption: "Architectural clarity depends on concealed technical coordination.", title: "Completed glass and aluminium façade concept", width: 1536, height: 864 },
  { src: planning, alt: "Illustrative project team reviewing Dubai façade drawings, glass and aluminium samples", caption: "A coordinated tender begins with drawings, performance criteria and defined interfaces.", title: "Dubai façade project planning concept", width: 1536, height: 864 },
];
const consultation = "https://wa.me/971568400838?text=Hi%20Glasser%20UAE%2C%20I%20would%20like%20a%20review%20of%20my%20high-rise%20facade%20project.";

function InlineText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  for (const match of text.matchAll(re)) {
    const index = match.index ?? 0;
    nodes.push(text.slice(last, index));
    const href = match[2];
    nodes.push(href.startsWith("/") ? <Link key={index} to={href} className="text-editorial-accent underline underline-offset-4">{match[1]}</Link> : <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-editorial-accent underline underline-offset-4">{match[1]}</a>);
    last = index + match[0].length;
  }
  nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function EditorialImage({ index }: { index: number }) {
  const image = images[index];
  if (!image) return null;
  return <figure className="my-10">
    <img src={image.src} alt={image.alt} title={image.title} width={image.width} height={image.height} loading="lazy" decoding="async" className="w-full h-auto rounded-md" />
    <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">{image.caption} <span className="block mt-1">AI-generated editorial illustration — not a Glasser project photograph or installation detail.</span></figcaption>
  </figure>;
}

function FacadeGuide() {
  const [active, setActive] = useState(facadeSections[0]?.id ?? "");
  const progressRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
        const current = [...facadeSections].reverse().find(s => (document.getElementById(s.id)?.getBoundingClientRect().top ?? Infinity) <= 160);
        setActive(current?.id ?? facadeSections[0]?.id ?? "");
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const bodyWords = [facadeTitle, facadeIntro, quickAnswer, ...facadeSections.flatMap(s => [s.title, s.question ?? "", s.answer ?? "", ...s.paragraphs, ...(s.list ?? []), ...(s.table?.headings ?? []), ...(s.table?.rows.flat() ?? [])]), ...facadeFaqs.flatMap(f => [f.q, f.a])].join(" ").split(/\s+/).length;
  return <Layout><article className="facade-publication">
    <div className="fixed inset-x-0 top-0 z-[75] h-1 bg-transparent pointer-events-none" aria-hidden="true"><div ref={progressRef} className="h-full bg-editorial-accent origin-left scale-x-0" /></div>
    <header className="pt-28 md:pt-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground flex flex-wrap gap-2 mb-10"><Link to="/">Home</Link><span>/</span><Link to="/blog">Insights</Link><span>/</span><span aria-current="page">High-rise façade planning</span></nav>
        <div className="border-t border-border pt-5 flex flex-wrap justify-between gap-3 text-xs uppercase text-editorial-accent"><span>Glasser UAE · Technical journal</span><span>Building envelope / Dubai</span></div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.12] text-editorial max-w-6xl mt-8 mb-7">{facadeTitle}</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground pb-8"><span>By Glasser Technical Works Team</span><span>Updated <time dateTime={facadeDate}>8 October 2026</time></span><span>{Math.ceil(bodyWords / 220)} min read</span></div>
      </div>
      <figure className="max-w-7xl mx-auto px-5 md:px-10">
        <img src={hero} alt={images[0]?.alt} title={images[0]?.title} width={1536} height={864} fetchPriority="high" loading="eager" className="w-full h-auto aspect-video object-cover" />
        <figcaption className="text-xs text-muted-foreground mt-3 pb-8">AI-generated editorial illustration — not a completed Glasser project.</figcaption>
      </figure>
    </header>
    <div className="max-w-7xl mx-auto px-5 md:px-10 grid lg:grid-cols-[240px_minmax(0,1fr)] gap-10 lg:gap-16 py-10">
      <aside className="lg:sticky lg:top-28 self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto" data-lenis-prevent>
        <details open className="border-t border-border pt-4"><summary className="text-sm font-semibold cursor-pointer flex items-center justify-between">On this page <ChevronDown size={16}/></summary>
          <nav aria-label="Table of contents" className="mt-4"><ol className="space-y-2">{facadeSections.map((s, i) => <li key={s.id}><a href={`#${s.id}`} aria-current={active === s.id ? "location" : undefined} className={`text-xs leading-relaxed flex gap-3 py-1 ${active === s.id ? "text-editorial-accent font-medium" : "text-muted-foreground hover:text-foreground"}`}><span className="tabular-nums shrink-0">{String(i + 1).padStart(2,"0")}</span><span>{s.title}</span></a></li>)}<li><a href="#faqs" className="text-xs text-muted-foreground">Frequently asked questions</a></li></ol></nav>
        </details>
        <Button asChild className="mt-6 w-full h-auto min-h-10 py-3 whitespace-normal bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={consultation} target="_blank" rel="noopener noreferrer">Request a Project Review <ArrowUpRight/></a></Button>
      </aside>
      <div className="min-w-0 max-w-4xl">
        <div className="text-base leading-8 text-muted-foreground space-y-5">{facadeIntro.split("\n\n").map(p => <p key={p}>{p}</p>)}</div>
        <aside aria-label="Quick answer" className="my-10 border-l-4 border-editorial-accent bg-surface p-6 md:p-8 rounded-md"><h2 className="text-xs font-semibold uppercase text-editorial-accent mb-3">Quick answer</h2><p className="text-base leading-7 text-foreground">{quickAnswer}</p></aside>
        {facadeSections.map((s, i) => <section key={s.id} id={s.id} className="py-8 border-t border-border">
          <div className="text-xs text-editorial-accent mb-3 tabular-nums">{String(i + 1).padStart(2,"0")} / PLANNING GUIDE</div>
          <h2 className="text-2xl md:text-3xl font-medium leading-tight mb-6 text-editorial">{s.title}</h2>
          {s.question && <div className="mb-6"><h3 className="font-semibold text-lg mb-2">{s.question}</h3><p className="leading-7 text-muted-foreground">{s.answer}</p></div>}
          {s.paragraphs.map(p => <p key={p} className="leading-8 text-muted-foreground mb-5"><InlineText text={p}/></p>)}
          {s.id === "facade-cost" && <div className="grid sm:grid-cols-3 gap-3 my-7">{[{area:"3,000 m²", rate:"AED 900/m²", total:"AED 2.7 million"},{area:"5,000 m²",rate:"AED 1,200/m²",total:"AED 6 million"},{area:"5,000 m²",rate:"AED 2,000/m²",total:"AED 10 million"}].map(c => <div key={c.total} className="rounded-md bg-editorial text-editorial-foreground p-5"><p className="text-xs text-editorial-foreground/75 mb-4">Planning example — not a quotation.</p><p className="text-xs">{c.area} × {c.rate}</p><p className="text-xl font-medium mt-3">{c.total}</p></div>)}</div>}
          {s.table && <div className="my-7 overflow-x-auto rounded-md border border-border" role="region" aria-label={`${s.title} comparison table`} tabIndex={0} data-lenis-prevent><table className="w-full min-w-[600px] text-sm text-left"><thead className="bg-editorial text-editorial-foreground"><tr>{s.table.headings.map(h => <th key={h} scope="col" className="px-4 py-4 font-medium">{h}</th>)}</tr></thead><tbody>{s.table.rows.map(row => <tr key={row[0]} className="border-t border-border even:bg-surface">{row.map((cell,j) => j === 0 ? <th key={j} scope="row" className="px-4 py-4 font-medium align-top">{cell}</th> : <td key={j} className="px-4 py-4 text-muted-foreground align-top leading-relaxed">{cell}</td>)}</tr>)}</tbody></table></div>}
          {s.list && <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 my-6">{s.list.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="text-editorial-accent" aria-hidden="true">—</span>{item}</li>)}</ul>}
          {s.image !== undefined && <EditorialImage index={s.image}/>}
        </section>)}
        <section id="faqs" className="py-10 border-t border-border"><h2 className="text-3xl font-medium mb-8">Frequently asked questions</h2><div>{facadeFaqs.map(f => <details key={f.q} className="group border-b border-border py-5"><summary className="font-medium cursor-pointer list-none flex justify-between gap-4"><h3 className="text-base font-medium">{f.q}</h3><ChevronDown className="shrink-0 group-open:rotate-180 transition-transform" size={18}/></summary><p className="mt-4 text-muted-foreground leading-7">{f.a}</p></details>)}</div></section>
        <aside className="border-y border-border py-8 flex gap-5"><span className="bg-editorial text-editorial-foreground w-12 h-12 rounded-md flex items-center justify-center shrink-0 text-sm">GT</span><div><h2 className="text-lg font-medium mb-2">Glasser Technical Works Team</h2><p className="text-sm text-muted-foreground leading-6">Company-authored technical guidance from Glasser Technical Works LLC, Dubai. General planning information; project design, certification and approval remain with the contracted responsible parties. Last updated 8 October 2026.</p></div></aside>
        <section className="py-10"><h2 className="text-2xl font-medium mb-6">Related Glasser articles</h2><div className="grid sm:grid-cols-2 gap-4"><Link to="/blog/glass-and-aluminium-works-dubai" className="border border-border rounded-md p-5 hover:border-editorial-accent"><h3 className="text-base font-medium">Glass & aluminium works in Dubai</h3><ArrowRight size={18} className="mt-5 text-editorial-accent"/></Link><Link to="/blog/aed-200k-commercial-glass-aluminium-project-dubai" className="border border-border rounded-md p-5 hover:border-editorial-accent"><h3 className="text-base font-medium">Commercial glass & aluminium project</h3><ArrowRight size={18} className="mt-5 text-editorial-accent"/></Link></div></section>
      </div>
    </div>
    <section className="bg-editorial text-editorial-foreground py-16 md:py-24"><div className="max-w-5xl mx-auto px-5 md:px-10"><p className="text-xs uppercase mb-5 text-editorial-foreground/65">Glasser UAE / Project consultation</p><h2 className="text-3xl md:text-5xl font-medium leading-tight">Planning a High-Rise Façade Project in Dubai?</h2><p className="mt-6 text-editorial-foreground/75 leading-8 max-w-3xl">Share your drawings, approximate façade area, building type and project location with Glasser UAE. Our team can review the scope and discuss the appropriate glass, aluminium and façade system requirements for your project.</p><div className="flex flex-wrap gap-3 mt-8"><Button asChild size="lg" className="h-auto min-h-12 py-3 whitespace-normal bg-editorial-accent text-editorial-foreground hover:bg-editorial-accent/90"><a href={consultation} target="_blank" rel="noopener noreferrer">Request a Project Consultation <ArrowUpRight/></a></Button><Button asChild size="lg" variant="secondary" className="h-auto min-h-12 py-3 whitespace-normal"><a href="mailto:sales@glasseruae.com?subject=Dubai%20Facade%20Quotation">Get a Façade Quote <Mail/></a></Button><Button asChild size="lg" variant="ghost" className="h-auto min-h-12 py-3 whitespace-normal"><a href="tel:+971568400838">Speak to Glasser UAE <Phone/></a></Button></div><div className="mt-8 flex flex-wrap gap-6 text-sm"><a href="tel:+971568400838">+971 56 840 0838</a><a href="mailto:sales@glasseruae.com">sales@glasseruae.com</a></div></div></section>
  </article></Layout>;
}