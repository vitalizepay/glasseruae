import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, CheckCircle2, Layers3, Ruler, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { buildBlogHead } from "@/lib/seo";
import office from "@/assets/projects/office-glass-partitions-corporate.jpg.asset.json";
import cladding from "@/assets/projects/jvc-acp-cladding-1.jpg.asset.json";
import curtainWall from "@/assets/blog/aluminium-facade-dubai.jpg.asset.json";
import curved from "@/assets/projects/ad-curved-1.jpg.asset.json";
import backPainted from "@/assets/projects/back-painted-glass-1.jpg.asset.json";
import retail from "@/assets/projects/jlt-tower-1.jpg.asset.json";

const SLUG = "aed-200k-commercial-glass-aluminium-project-dubai";
const TITLE = "AED 200K+ Commercial Glass & Aluminium Project Dubai";
const DESCRIPTION =
  "Explore a 400 m², AED 200,000+ commercial glass and aluminium project in Dubai covering partitions, cladding, curtain walls and architectural glazing.";
const DATE = "2026-10-06";

const FAQS = [
  {
    q: "What was the scale of this commercial glass and aluminium project?",
    a: "The verified project scope was approximately 400 m² with a contract value above AED 200,000 in Dubai, UAE. The value belongs to this project and should not be treated as a standard market rate.",
  },
  {
    q: "What work can be included in a commercial architectural glass package?",
    a: "A coordinated package can include aluminium cladding, glass partitions, curtain wall systems, balustrade glass, back-painted and curved glass, shop fronts, long-span glazing, large-format panels and associated architectural aluminium works.",
  },
  {
    q: "How is a commercial glass and aluminium project priced in Dubai?",
    a: "Pricing follows measured quantities, approved drawings, glass make-up, aluminium system, finishes, hardware, access, logistics and installation requirements. A site survey and coordinated scope are needed before a reliable quotation can be prepared.",
  },
  {
    q: "Can one contractor coordinate the glass, aluminium and cladding works?",
    a: "Yes. A specialist contractor can coordinate compatible glass, framing, shopfront and cladding packages through one survey, drawing and installation workflow, subject to the final design and contract responsibilities.",
  },
  {
    q: "What should architects and consultants provide for quotation?",
    a: "Useful tender information includes plans, elevations, panel sizes, glass performance, aluminium finishes, door and hardware schedules, interface details, access requirements and the target construction programme.",
  },
  {
    q: "Are long-span and curved glass systems suitable for every building?",
    a: "No. Feasibility depends on panel geometry, support conditions, loads, fabrication limits, access and the approved engineering design. These systems should be reviewed before final dimensions are released for manufacture.",
  },
  {
    q: "Which commercial sectors can use an integrated architectural glazing package?",
    a: "The approach can suit offices, retail, hospitality, showrooms, mixed-use developments and other commercial interiors or façades where the project team needs coordinated glass and aluminium works.",
  },
];

const CAPABILITIES = [
  {
    eyebrow: "Façade envelope",
    title: "Aluminium cladding and curtain wall coordination",
    copy: "Clean cladding lines depend on disciplined setting-out. Panel modules, aluminium joints, perimeter interfaces and glazing grids must align with the architectural elevation and the substrate behind it. Curtain wall framing introduces another layer of coordination around drainage, glass support and adjoining finishes. Treating the façade as one connected package helps prevent misaligned joints and awkward transitions between solid and glazed zones.",
    detail: "For this category of Dubai project, design review should happen before fabrication. The contractor checks available drawings, surveys buildable dimensions, prepares coordinated details and confirms the intended finish through approved samples. Any structural, thermal, waterproofing or fire-performance requirement must be defined by the responsible project consultant rather than assumed from appearance alone.",
    image: cladding.url,
    alt: "Commercial aluminium cladding in Dubai with clean panel joints and precise façade detailing",
    link: "/aluminium-works-dubai" as const,
    linkLabel: "Explore aluminium works",
  },
  {
    eyebrow: "Commercial interiors",
    title: "Glass partitions that preserve daylight and privacy",
    copy: "Corporate interiors use glass partitions to distribute daylight, create visual continuity and keep meeting rooms connected to the wider workplace. The specification can combine frameless fronts, slim aluminium framing, clear or laminated glass, privacy manifestation and coordinated door sets. Room use—not fashion—should determine whether a partition needs enhanced acoustic seals, a framed door or a more transparent treatment.",
    detail: "On a substantial fit-out, repetitive accuracy is critical. Floor and ceiling tolerances, panel widths, door clearances, access-control interfaces and junctions with solid walls are resolved before glass is ordered. This is how a premium office installation maintains straight sightlines and reliable operation across multiple rooms rather than looking like a collection of individual partitions.",
    image: office.url,
    alt: "Premium corporate office glass partitions with aluminium framing in Dubai",
    link: "/office-glass-partition-dubai" as const,
    linkLabel: "View office partition solutions",
  },
  {
    eyebrow: "Architectural glazing",
    title: "Curved, long-span and large-format glass",
    copy: "Curved and large-format glass can give a commercial project a clear architectural identity, but the geometry must remain physically achievable. Radius, pane dimensions, edgework, glass make-up, supports and transport limits all influence the final design. Long uninterrupted surfaces also make tolerances more visible, so survey control and consistent joints matter as much as the glass itself.",
    detail: "Early specialist input gives architects time to test panelisation without weakening the visual concept. Practical coordination covers fabrication limits, lifting routes, temporary storage, installation sequence and replaceability. The aim is not an exaggerated glass effect; it is a refined feature whose reflections, curvature and connections make sense in the completed building.",
    image: curved.url,
    alt: "Realistic professionally fabricated curved glass installation for a UAE commercial project",
    link: "/blog/curved-glass-dubai" as const,
    linkLabel: "Read the curved glass guide",
  },
  {
    eyebrow: "Interior finishes",
    title: "Back-painted glass and balustrade detailing",
    copy: "Back-painted glass introduces a durable, uniform colour surface for reception walls, executive interiors, signage zones and commercial feature panels. Its polished appearance depends on accurate colour approval, prepared backgrounds, compatible fixing methods and clean junctions. Used beside clear glass, metal and stone, it can reinforce a brand palette without adding visual clutter.",
    detail: "Balustrade glass has a different responsibility: it is a safety-critical element that must follow the project engineer's approved design and applicable requirements. Glass make-up, height, support, handrail or capping detail, edge protection and fixing conditions cannot be selected from appearance alone. Minimal profiles can create a premium result only when the underlying system is correctly designed and installed.",
    image: backPainted.url,
    alt: "Professionally finished back-painted glass used in a premium commercial interior",
    link: "/glass-railing-dubai" as const,
    linkLabel: "Explore glass balustrades",
  },
  {
    eyebrow: "Retail and hospitality",
    title: "Shop fronts and architectural aluminium entrances",
    copy: "A premium shop front must deliver visibility, clean entrance detailing and dependable daily operation. Large glass panes, aluminium framing, door hardware, thresholds, signage and surrounding finishes need to read as one elevation. Retail and hospitality programmes can also impose restricted delivery windows and tightly sequenced fit-out work, making logistics part of the technical solution.",
    detail: "Architectural aluminium works can connect shop fronts to internal screens, feature framing and adjoining façade elements. Consistent powder-coated or anodised finishes help the project retain one visual language. Glasser Technical Works LLC coordinates measured openings and approved details so glass, profiles and hardware arrive as a compatible installation package.",
    image: retail.url,
    alt: "Premium Dubai retail shop front with large glass panels and aluminium entrance framing",
    link: "/glass-shopfront-dubai" as const,
    linkLabel: "Explore glass shop fronts",
  },
];

export const Route = createFileRoute("/blog/aed-200k-commercial-glass-aluminium-project-dubai")({
  head: () =>
    buildBlogHead({
      slug: SLUG,
      title: TITLE,
      description: DESCRIPTION,
      image: curtainWall.url,
      datePublished: DATE,
      dateModified: DATE,
      faqs: FAQS,
    }),
  component: CommercialCaseStudy,
});

function CommercialCaseStudy() {
  return (
    <Layout>
      <main className="bg-background">
        <header className="bg-navy text-navy-foreground pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container mx-auto px-6 md:px-10 max-w-7xl">
            <nav aria-label="Breadcrumb" className="text-xs text-navy-foreground/60 mb-10">
              <Link to="/" className="hover:text-orange">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-orange">Blog</Link>
              <span className="mx-2">/</span>
              <span aria-current="page">Commercial project case study</span>
            </nav>
            <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-12 lg:gap-20 items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Commercial project case study · Dubai</p>
                <h1 className="mt-5 text-4xl sm:text-5xl md:text-7xl font-light leading-[1.02] text-balance">
                  400 m² of integrated architectural glass and aluminium
                </h1>
                <p className="mt-7 max-w-3xl text-base md:text-lg leading-relaxed text-navy-foreground/70 font-light">
                  How a specialist commercial package brings façade cladding, curtain wall, partitions, feature glass, balustrades and shop-front systems into one coordinated delivery scope.
                </p>
              </div>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-7 border-t border-navy-foreground/20 pt-7 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
                <div><dt className="text-xs uppercase tracking-[0.2em] text-navy-foreground/50">Area</dt><dd className="mt-2 text-2xl font-display">Approx. 400 m²</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.2em] text-navy-foreground/50">Value</dt><dd className="mt-2 text-2xl font-display">AED 200,000+</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.2em] text-navy-foreground/50">Location</dt><dd className="mt-2 text-lg">Dubai, UAE</dd></div>
                <div><dt className="text-xs uppercase tracking-[0.2em] text-navy-foreground/50">Focus</dt><dd className="mt-2 text-lg">Commercial</dd></div>
              </dl>
            </div>
          </div>
        </header>

        <figure className="bg-navy">
          <img src={curtainWall.url} alt="Commercial glass curtain wall façade with aluminium framing in Dubai" className="w-full h-[48vh] min-h-[380px] max-h-[680px] object-cover" fetchPriority="high" />
        </figure>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10 max-w-5xl grid md:grid-cols-[0.65fr_1.35fr] gap-10 md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">Quick answer</p>
              <p className="mt-4 text-sm text-muted-foreground">Updated 6 October 2026 · 12 min read</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-display text-navy leading-snug">
                This Dubai project covered approximately 400 m² and carried a verified contract value above AED 200,000.
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed font-light">
                Its significance is the combined scope: architectural glass and aluminium works were treated as a connected commercial package rather than isolated supply items. That approach gives property developers, main contractors, architects, consultants and fit-out teams clearer control over measurements, interfaces, finishes and installation sequencing. The project value is specific to this scope—not a universal rate or price promise.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-surface py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10 max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">The project brief</p>
              <h2 className="mt-4 text-3xl md:text-5xl text-navy leading-tight">One commercial envelope, multiple precision trades</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed font-light">
                Substantial glass and aluminium contracts become complex at the points where one material meets another. Curtain wall grids meet cladding joints. Shop-front frames meet flooring and signage. Glass partitions meet ceilings, doors and building services. Balustrades meet structure. Coordinating these interfaces early reduces rework and protects the clean, premium result the design intends.
              </p>
            </div>
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-y border-border">
              {[
                [Building2, "Commercial scale", "A substantial package planned around the wider Dubai construction programme."],
                [Ruler, "Measured delivery", "Site dimensions and approved details guide fabrication—not assumptions."],
                [Layers3, "Integrated scope", "Glass, aluminium, cladding and specialist finishes coordinated together."],
                [ShieldCheck, "Controlled handover", "Inspection, protection and final adjustments completed by area."],
              ].map(([Icon, title, text], index) => {
                const FeatureIcon = Icon as typeof Building2;
                return (
                  <div key={title as string} className={`py-8 sm:px-7 ${index > 0 ? "sm:border-l border-border" : ""}`}>
                    <FeatureIcon className="text-orange" size={22} />
                    <h3 className="mt-5 text-xl text-navy">{title as string}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {CAPABILITIES.map((item, index) => (
          <section key={item.title} className={index % 2 === 0 ? "bg-background" : "bg-surface"}>
            <div className="grid lg:grid-cols-2 min-h-[620px]">
              <div className={`relative min-h-[420px] lg:min-h-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={item.image} alt={item.alt} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className={`flex items-center px-6 py-16 md:px-12 lg:px-16 xl:px-24 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">{item.eyebrow}</p>
                  <h2 className="mt-4 text-3xl md:text-5xl text-navy leading-tight">{item.title}</h2>
                  <p className="mt-6 text-muted-foreground leading-relaxed font-light">{item.copy}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed font-light">{item.detail}</p>
                  <Link to={item.link} className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-orange transition-colors">
                    {item.linkLabel} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="bg-navy text-navy-foreground py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10 max-w-7xl grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">Delivery framework</p>
              <h2 className="mt-4 text-3xl md:text-5xl leading-tight">From tender information to controlled handover</h2>
              <p className="mt-6 text-navy-foreground/65 leading-relaxed font-light">Every commercial package is project-specific, but the control points remain consistent.</p>
            </div>
            <ol className="border-t border-navy-foreground/20">
              {[
                ["01", "Scope review", "Review drawings, quantities, performance intent, interfaces and contract responsibilities."],
                ["02", "Survey and coordination", "Verify buildable dimensions, access, substrates and adjacent trade conditions."],
                ["03", "Shop drawings and samples", "Resolve panelisation, profiles, joints, hardware and finishes for approval."],
                ["04", "Procurement and fabrication", "Release approved glass and aluminium elements with area-based identification."],
                ["05", "Sequenced installation", "Coordinate deliveries and installation with façade, fit-out and building access programmes."],
                ["06", "Inspection and handover", "Complete alignment checks, operation tests, cleaning, protection and agreed documentation."],
              ].map(([number, title, text]) => (
                <li key={number} className="grid grid-cols-[44px_1fr] md:grid-cols-[70px_0.65fr_1.35fr] gap-4 py-6 border-b border-navy-foreground/20 items-start">
                  <span className="text-orange font-medium">{number}</span>
                  <h3 className="text-xl md:text-2xl">{title}</h3>
                  <p className="col-start-2 md:col-start-auto text-sm text-navy-foreground/65 leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 md:px-10 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">Commercial relevance</p>
                <h2 className="mt-4 text-3xl md:text-5xl text-navy leading-tight">What each project stakeholder needs to see</h2>
              </div>
              <div className="space-y-8">
                <div><h3 className="text-xl text-navy">Developers and property owners</h3><p className="mt-2 text-muted-foreground leading-relaxed font-light">A clear scope, durable finish strategy and realistic delivery sequence that protects the wider asset programme.</p></div>
                <div><h3 className="text-xl text-navy">Main and fit-out contractors</h3><p className="mt-2 text-muted-foreground leading-relaxed font-light">Defined interfaces, coordinated drawings, area releases and installation planning that reduce clashes between trades.</p></div>
                <div><h3 className="text-xl text-navy">Architects and consultants</h3><p className="mt-2 text-muted-foreground leading-relaxed font-light">Buildable detailing, representative samples and technical submissions aligned with the project's approved requirements.</p></div>
                <div><h3 className="text-xl text-navy">Retail and hospitality teams</h3><p className="mt-2 text-muted-foreground leading-relaxed font-light">High-visibility glass, entrance and feature finishes delivered around access restrictions and opening priorities.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.25em] text-orange font-semibold">Procurement guidance</p>
            <h2 className="mt-4 text-3xl md:text-5xl text-navy leading-tight">How to request a useful commercial quotation</h2>
            <p className="mt-7 text-muted-foreground leading-relaxed font-light">Send the latest plans and elevations, approximate quantities, intended glass types, aluminium finish, door and hardware schedules, performance requirements, site location and target programme. Identify whether access equipment, permits, night work, protection, removal or interface sealing belongs in the contractor's scope. A complete brief makes quotations easier to compare and limits late commercial surprises.</p>
            <p className="mt-5 text-muted-foreground leading-relaxed font-light">For complex curtain wall, balustrade, curved-glass or long-span applications, the responsible engineer and consultant must confirm the governing design criteria. Glasser Technical Works LLC can then review fabrication and installation feasibility against those approved requirements. For broader service context, see our guide to [glass and aluminium works in Dubai](/blog/glass-and-aluminium-works-dubai).</p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-6 md:px-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl text-navy">Frequently asked questions</h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {FAQS.map((faq) => (
                <details key={faq.q} className="group py-6">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 text-lg text-navy font-medium">
                    <span>{faq.q}</span><span className="text-orange text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed font-light">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy text-navy-foreground py-20 md:py-28">
          <div className="container mx-auto px-6 md:px-10 max-w-5xl text-center">
            <CheckCircle2 className="mx-auto text-orange" size={28} />
            <h2 className="mt-6 text-4xl md:text-6xl leading-tight">Planning a substantial commercial glass package?</h2>
            <p className="mt-6 mx-auto max-w-2xl text-navy-foreground/70 leading-relaxed font-light">Discuss your drawings, approximately measured scope and delivery priorities with Glasser Technical Works LLC in Dubai.</p>
            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
              <Button asChild size="lg" className="bg-orange text-orange-foreground hover:bg-orange/90">
                <Link to="/contact">Request project consultation <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground">
                <a href="https://wa.me/971568400838?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20commercial%20glass%20and%20aluminium%20project." target="_blank" rel="noopener noreferrer">Discuss on WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}