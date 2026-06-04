import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import bathroomMirror from "@/assets/luxury-bathroom-mirror.jpg.asset.json";
import officePartitionBlack from "@/assets/office-glass-partition-black.jpg.asset.json";
import vanityMirror from "@/assets/marble-vanity-mirror.jpg.asset.json";
import officeCabin from "@/assets/glass-office-cabin.jpg.asset.json";

const T = "Glass Services Dubai | Partitions, Facades, Shopfronts, Mirrors, Railings UAE";
const D = "Premium glass and aluminium services in Dubai UAE — partitions, facades, shopfronts, mirrors, enclosures, skylights, railings, cladding, windows, doors. Expert installation across all Emirates.";
const K = "glass partitions Dubai, glass facades UAE, shopfront glass Dubai, mirror installation UAE, glass railings Dubai, glass enclosures UAE, skylights Dubai, aluminium cladding UAE, aluminium windows Dubai, glass balustrades UAE";
const URL = "https://glasseruae.com/glass-services";

const NAV = [
  { id: "partitions", label: "Partitions" },
  { id: "facades", label: "Facades" },
  { id: "shopfronts", label: "Shopfronts" },
  { id: "mirrors", label: "Mirrors" },
  { id: "enclosures", label: "Enclosures" },
  { id: "railings", label: "Railings" },
  { id: "skylights", label: "Skylights" },
  { id: "canopies", label: "Canopies" },
];

const GLASS_SERVICES = [
  {
    num: "01",
    id: "partitions",
    h: "Glass Partitions Dubai",
    p: [
      "Our frameless glass office partitions and steel-frame black partitions transform workspaces across Dubai with crystal-clear sightlines and superior acoustics. From open-plan business hubs to private executive suites, every glass partition Dubai installation is engineered with toughened safety glass and precision-milled aluminium or steel framing for durability in the UAE climate.",
      "We specialise in acoustic glass partitions for boardrooms, residential glass room dividers, and double-glazed office glass partition UAE systems that comply with Dubai Civil Defence and UAE building codes. Each frameless glass wall is custom-measured, fabricated and installed by certified technicians for a flawless architectural finish.",
    ],
  },
  {
    num: "02",
    id: "facades",
    h: "Glass Facades UAE",
    p: [
      "Glasser delivers structural glazing and unitised curtain wall systems for landmark villas and commercial buildings across Dubai, Abu Dhabi and Sharjah. Our glass facades UAE projects combine Low-E solar-control glass with thermally-broken aluminium mullions to balance daylight, energy efficiency and bold architectural expression.",
      "From silicone-bonded structural glazing Dubai facades to spider-fitted point-supported curtain wall installation, we engineer every villa glass facade to withstand the region's wind loads and thermal cycles while delivering a seamless, jointless aesthetic.",
    ],
  },
  {
    num: "03",
    id: "shopfronts",
    h: "Shopfront Glass Dubai",
    p: [
      "We install retail shopfront glass and frameless glass doors for shops, malls and high-street boutiques across Dubai's commercial districts. Every shopfront glass Dubai installation uses tempered safety glass, brushed stainless steel patch fittings and floor-spring hinges sized for high-traffic retail use.",
      "Our commercial glass door and tempered glass shopfront systems are designed for mall fit-outs and street-front retail glass installation UAE — including curved corner shopfronts, full-height swing doors, and laminated security glazing.",
    ],
  },
  {
    num: "04",
    id: "mirrors",
    h: "Mirror Installation UAE",
    p: [
      "Custom mirror installation Dubai for gyms, wardrobes, hotels, spas and decorative interiors — supplied in any size with polished, bevelled or sandblasted edges. Our custom mirror UAE service covers full-wall gym mirror fitting, backlit vanity mirrors and antique decorative mirror panels.",
      "We install frameless mirror Dubai panels using concealed mechanical fixings and mirror-grade silicone, ensuring a perfectly flat, distortion-free reflection across every metre of wall.",
    ],
  },
  {
    num: "05",
    id: "enclosures",
    h: "Glass Enclosures Dubai",
    p: [
      "From frameless glass shower enclosures to glass pool fences, our glass enclosure Dubai installations bring clean, contemporary lines to UAE villas and hotels. Each shower glass enclosure UAE is built with 10mm tempered glass, premium German hinges, and anti-limescale coatings.",
      "We also install pool glass fence systems certified for child-safety codes, plus balcony glass enclosure and frameless patio glazing for indoor-outdoor villa living.",
    ],
  },
  {
    num: "06",
    id: "railings",
    h: "Glass Railings & Balustrades UAE",
    p: [
      "Glass staircase railings and frameless balcony balustrades engineered with stainless steel spigot glass railing systems, teflon glass fitting (PTFE) hardware, and spider point fittings. Every glass railing Dubai installation is structurally tested to UAE loading codes for luxury villas and commercial towers.",
      "Our glass balustrade UAE catalogue includes channel-mounted frameless rails, top-rail handrail systems, and patch-fitted glass on stairs — fabricated from 12–21.5mm tempered or laminated safety glass.",
    ],
  },
  {
    num: "07",
    id: "skylights",
    h: "Skylight Installation Dubai",
    p: [
      "Flat-roof and pyramid skylight installation Dubai for villas, atriums and commercial buildings — using solar-control laminated glazing tuned for the UAE sun. Our glass skylight UAE systems are factory-glazed with structural silicone seals and aluminium drainage profiles.",
      "We also install walk-on skylight panels and pyramid skylight Dubai structures, complete with motorised vents, integrated blinds and condensation-control detailing.",
    ],
  },
  {
    num: "08",
    id: "canopies",
    h: "Glass Canopies UAE",
    p: [
      "Entrance glass canopies and frameless glass canopy structures for villas, hotels and commercial buildings across the UAE. Our glass canopy Dubai systems use spider fittings, stainless tension rods and laminated safety glass for transparent shelter that complements modern architecture.",
      "We design and install structural glass canopy and entrance canopy UAE projects to client architectural drawings, complete with concealed drainage and LED-integrated detailing.",
    ],
  },
];

const ALU = [
  { t: "Aluminium Fabrication", d: "Custom fabricated aluminium structures and frames" },
  { t: "Aluminium Cladding", d: "Exterior and interior aluminium facade cladding" },
  { t: "Aluminium Windows", d: "Double-glazed, tinted, sliding and casement windows" },
  { t: "Aluminium Doors", d: "Frameless, sliding, folding and pivot aluminium doors" },
  { t: "Louvers", d: "Fixed and adjustable aluminium louvre systems" },
  { t: "Pergolas", d: "Freestanding and attached aluminium pergola structures" },
  { t: "Curtain Wall", d: "Full-height aluminium curtain wall glazing systems" },
  { t: "Shopfront Frames", d: "Aluminium shopfront door and window frames" },
];

const WHY = [
  { t: "Licensed & Insured", d: "Fully licensed contractor across all UAE Emirates" },
  { t: "500+ Projects", d: "Residential, commercial and hospitality glass installations" },
  { t: "Free Site Visit", d: "Complimentary survey and quotation across Dubai & UAE" },
  { t: "Precision Engineering", d: "Structural glass designed to UAE building standards" },
  { t: "Premium Materials", d: "Tempered, laminated, tinted and acoustic glass options" },
  { t: "End-to-End Service", d: "Design, supply, fabrication and installation" },
];

const FAQS = [
  { q: "What glass services do you offer in Dubai?", a: "We deliver the full range of glass services in Dubai and across the UAE — frameless and steel-frame partitions, structural glass facades, retail shopfronts, custom mirrors, shower and pool enclosures, glass railings and balustrades, flat and pyramid skylights, and structural glass canopies." },
  { q: "Do you install curved and structural glass in UAE?", a: "Yes. We supply and install curved tempered glass, bent glass facades, and full structural glazing systems for villas, hotels and commercial buildings. Each project is engineered to UAE wind-load and thermal codes." },
  { q: "What is Teflon or patch fitting in glass installations?", a: "PTFE (teflon) fittings, spider fittings and patch fittings are precision stainless-steel hardware sets used to support frameless glass doors, railings and facades without visible frames. They distribute load through the glass and create a clean, minimalist look." },
  { q: "Do you cover all Emirates — Abu Dhabi, Sharjah, Ajman?", a: "Yes, we deliver and install across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain." },
  { q: "How long does a glass partition or facade installation take?", a: "Scope-dependent — small office partitions are typically installed in 1–2 days, while larger facades and curtain walls take 2–4 weeks including fabrication and on-site installation." },
];

const RELATED = [
  "Top Glass Partition Trends in Dubai Offices 2025",
  "How to Choose the Right Glass Railing for Your UAE Villa",
  "Aluminium Cladding vs PVDF Cladding — What Works in UAE Climate?",
];

const GALLERY = [
  { src: bathroomMirror.url, cap: "Backlit LED Mirror & Stone Vanity — Dubai Villa", alt: "luxury backlit LED mirror with stone vanity Dubai bathroom" },
  { src: officePartitionBlack.url, cap: "Black Steel-Frame Glass Partitions — DIFC Office", alt: "black steel frame glass office partition DIFC Dubai" },
  { src: vanityMirror.url, cap: "Frameless Backlit Mirror — Marble Bathroom", alt: "frameless backlit vanity mirror marble bathroom Dubai" },
  { src: officeCabin.url, cap: "Frameless Glass Cabin — Business Bay", alt: "frameless glass office cabin black frame Business Bay Dubai" },
];

export const Route = createFileRoute("/glass-services")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { name: "keywords", content: K },
      { property: "og:title", content: "Glass Services Dubai | UAE" },
      { property: "og:description", content: "Expert glass and aluminium installation — partitions, facades, mirrors, shopfronts, enclosures, railings, skylights across Dubai and UAE." },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Sans:wght@400;500;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Glass Services UAE",
          description: "Premium glass and aluminium services in Dubai and UAE including partitions, facades, shopfronts, mirrors, enclosures, railings, skylights, cladding, windows and doors",
          areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "UAE"],
          serviceType: ["Glass Partitions", "Glass Facades", "Shopfronts", "Mirrors", "Glass Enclosures", "Glass Railings", "Skylights", "Aluminium Cladding", "Aluminium Windows", "Aluminium Doors"],
        }),
      },
    ],
  }),
  component: GlassServicesPage,
});

const DM_SERIF = { fontFamily: "'DM Serif Display', serif" };
const DM_SANS = { fontFamily: "'DM Sans', sans-serif" };
const NAVY = "#1A1A2E";
const GOLD = "#C9A84C";
const INK = "#1C1C1C";
const SUB = "#6B7280";
const CARD_BG = "#F8F9FA";

function GlassServicesPage() {
  const [active, setActive] = useState("partitions");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const onScroll = () => {
      for (const n of NAV) {
        const el = document.getElementById(n.id);
        if (el) {
          const r = el.getBoundingClientRect();
          if (r.top <= 140 && r.bottom > 140) {
            setActive(n.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileNavOpen(false);
    }
  };

  return (
    <Layout>
      <div style={{ ...DM_SANS, color: INK, background: "#FFFFFF", position: "relative" }}>
        {/* Glassy ambient background */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div style={{ position: "absolute", top: "-10%", left: "-10%", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.18), transparent 70%)", filter: "blur(40px)" }} />
          <div style={{ position: "absolute", top: "30%", right: "-8%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,26,46,0.12), transparent 70%)", filter: "blur(50px)" }} />
          <div style={{ position: "absolute", bottom: "-15%", left: "20%", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(125,180,220,0.15), transparent 70%)", filter: "blur(60px)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(248,249,250,0.4) 100%)", backdropFilter: "blur(2px)" }} />
        </div>
        {/* Sticky anchor nav */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b" style={{ borderColor: "#E5E7EB" }}>
          <div className="container mx-auto px-6">
            <div className="hidden md:flex items-center gap-7 py-4 overflow-x-auto">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="text-sm whitespace-nowrap pb-1 transition"
                  style={{
                    color: active === n.id ? NAVY : SUB,
                    borderBottom: active === n.id ? `2px solid ${GOLD}` : "2px solid transparent",
                    fontWeight: active === n.id ? 700 : 400,
                  }}
                >
                  {n.label}
                </button>
              ))}
            </div>
            <div className="md:hidden flex items-center justify-between py-3">
              <span className="text-sm font-medium" style={{ color: NAVY }}>Jump to section</span>
              <button onClick={() => setMobileNavOpen((v) => !v)} className="text-sm" style={{ color: GOLD }}>
                {mobileNavOpen ? "Close" : "Menu"}
              </button>
            </div>
            {mobileNavOpen && (
              <div className="md:hidden grid grid-cols-2 gap-2 pb-4">
                {NAV.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => scrollTo(n.id)}
                    className="text-left text-sm py-2 px-3 rounded"
                    style={{ background: CARD_BG, color: active === n.id ? NAVY : SUB }}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* HERO — content left, image collage right */}
        <section
          className="pt-20 pb-24"
          style={{
            opacity: fade ? 1 : 0,
            transform: fade ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 800ms ease, transform 800ms ease",
          }}
        >
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* LEFT — content */}
              <div className="lg:col-span-6">
                <span className="inline-block text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: GOLD }}>
                  Glasser UAE · Dubai
                </span>
                <h1 style={{ ...DM_SERIF, color: NAVY, fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.05 }} className="mt-4">
                  Glass Services
                </h1>
                <div style={{ height: 2, width: 80, background: GOLD, margin: "20px 0" }} />
                <p style={{ color: SUB, fontSize: 19, lineHeight: 1.6 }}>
                  Precision craftsmanship in glass &amp; aluminium across Dubai and the UAE — frameless partitions, structural facades, luxury mirrors, shopfronts, enclosures and balustrades engineered for the region's most exacting interiors.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-5 py-2 rounded-full text-sm font-medium" style={{ background: NAVY, color: "#fff" }}>
                    500+ Projects Completed
                  </span>
                  <span className="px-5 py-2 rounded-full text-sm font-medium border" style={{ borderColor: NAVY, color: NAVY, background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)" }}>
                    Licensed UAE Contractor
                  </span>
                </div>
                <div className="mt-10 flex gap-4">
                  <a href="/contact" className="px-7 py-3 rounded-full text-sm font-semibold transition hover:opacity-90" style={{ background: NAVY, color: "#fff" }}>
                    Get a Free Quote
                  </a>
                  <button onClick={() => scrollTo("partitions")} className="px-7 py-3 rounded-full text-sm font-semibold transition" style={{ border: `1px solid ${GOLD}`, color: NAVY, background: "rgba(255,255,255,0.4)", backdropFilter: "blur(8px)" }}>
                    Explore Services
                  </button>
                </div>
              </div>

              {/* RIGHT — image collage (4 attached images) */}
              <div className="lg:col-span-6">
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {GALLERY.map((g, i) => (
                      <figure
                        key={g.cap}
                        className="group relative overflow-hidden rounded-2xl shadow-lg"
                        style={{
                          aspectRatio: i % 2 === 0 ? "3/4" : "3/4",
                          transform: i === 1 ? "translateY(32px)" : i === 3 ? "translateY(32px)" : "none",
                          border: "1px solid rgba(255,255,255,0.5)",
                          background: "rgba(255,255,255,0.3)",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <img
                          src={g.src}
                          alt={g.alt}
                          loading={i < 2 ? "eager" : "lazy"}
                          width={600}
                          height={800}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <figcaption
                          className="absolute inset-x-0 bottom-0 p-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ background: "linear-gradient(to top, rgba(26,26,46,0.85), transparent)" }}
                        >
                          {g.cap}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  {/* Floating glass badge */}
                  <div
                    className="absolute -bottom-6 -left-6 px-5 py-4 rounded-2xl shadow-xl hidden md:block"
                    style={{
                      background: "rgba(255,255,255,0.65)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.6)",
                    }}
                  >
                    <div className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>Recent Work</div>
                    <div className="text-sm font-semibold mt-1" style={{ color: NAVY }}>Live UAE Installations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GLASS SERVICES */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            {GLASS_SERVICES.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-14"
                style={{ borderBottom: `1px solid ${GOLD}33`, scrollMarginTop: 140 }}
              >
                <div className="md:col-span-9 order-2 md:order-1">
                  <h2 style={{ ...DM_SERIF, color: NAVY, fontSize: "clamp(28px, 4vw, 40px)" }}>
                    {s.h}
                  </h2>
                  <div style={{ height: 2, width: 60, background: GOLD, margin: "16px 0 24px" }} />
                  {s.p.map((para, i) => (
                    <p key={i} className="mb-5 leading-relaxed" style={{ color: INK, fontSize: 16 }}>
                      {para}
                    </p>
                  ))}
                </div>
                <div className="md:col-span-3 order-1 md:order-2 flex md:justify-end items-start">
                  <span style={{ ...DM_SERIF, color: GOLD, fontSize: 72, lineHeight: 1 }}>{s.num}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ALUMINIUM SERVICES */}
        <section className="py-24" style={{ background: NAVY }}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-14">
              <h2 style={{ ...DM_SERIF, color: GOLD, fontSize: "clamp(36px, 5vw, 52px)" }}>
                Aluminium Services
              </h2>
              <div style={{ height: 2, width: 80, background: GOLD, margin: "20px auto 0" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {ALU.map((a) => (
                <div
                  key={a.t}
                  className="p-6 rounded-sm"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="1" />
                    <path d="M3 9h18M9 3v18" />
                  </svg>
                  <h3 className="mt-4 text-white font-bold" style={{ fontSize: 16 }}>{a.t}</h3>
                  <p className="mt-2 text-sm" style={{ color: "#C9C9D4" }}>{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14">
              <h2 style={{ ...DM_SERIF, color: NAVY, fontSize: "clamp(36px, 5vw, 52px)" }}>
                Why Choose Us
              </h2>
              <div style={{ height: 2, width: 80, background: GOLD, margin: "20px auto 0" }} />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHY.map((w) => (
                <div
                  key={w.t}
                  className="p-8 bg-white"
                  style={{
                    borderTop: `3px solid ${GOLD}`,
                    border: `1px solid #E5E7EB`,
                    borderTopWidth: 3,
                    borderTopColor: GOLD,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)",
                  }}
                >
                  <h3 style={{ ...DM_SERIF, color: NAVY, fontSize: 22 }}>{w.t}</h3>
                  <p className="mt-3" style={{ color: SUB, fontSize: 15 }}>{w.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <h2 style={{ ...DM_SERIF, color: NAVY, fontSize: "clamp(34px, 5vw, 46px)" }}>
                Frequently Asked Questions
              </h2>
              <div style={{ height: 2, width: 80, background: GOLD, margin: "20px auto 0" }} />
            </div>
            <div className="divide-y" style={{ borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-6 py-6 text-left"
                    >
                      <span style={{ ...DM_SERIF, color: NAVY, fontSize: 20 }}>{f.q}</span>
                      <span
                        className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xl"
                        style={{ background: isOpen ? GOLD : "transparent", color: isOpen ? "#fff" : GOLD, border: `1px solid ${GOLD}` }}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-6 pr-12 leading-relaxed" style={{ color: SUB, fontSize: 16 }}>
                        {f.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-24" style={{ background: CARD_BG }}>
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 style={{ ...DM_SERIF, color: NAVY, fontSize: "clamp(34px, 5vw, 48px)" }}>
              Get a Free Site Visit &amp; Quote
            </h2>
            <p className="mt-4" style={{ color: SUB, fontSize: 18 }}>
              Glass &amp; Aluminium Solutions Across Dubai and UAE
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/971000000000"
                className="px-7 py-3.5 rounded-full font-medium text-white transition hover:opacity-90"
                style={{ background: "#25D366" }}
              >
                WhatsApp Us
              </a>
              <a
                href="mailto:info@glasseruae.com"
                className="px-7 py-3.5 rounded-full font-medium text-white transition hover:opacity-90"
                style={{ background: NAVY }}
              >
                Send Enquiry
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 justify-center text-sm" style={{ color: SUB }}>
              <span>✓ Licensed UAE Contractor</span>
              <span>✓ Free Quotation</span>
              <span>✓ All Emirates</span>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 style={{ ...DM_SERIF, color: NAVY, fontSize: 32 }} className="text-center mb-10">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {RELATED.map((r) => (
                <div
                  key={r}
                  className="p-8 bg-white cursor-pointer transition hover:-translate-y-1"
                  style={{
                    border: "1px solid #E5E7EB",
                    borderTop: `3px solid ${GOLD}`,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                  }}
                >
                  <span className="text-xs uppercase tracking-widest" style={{ color: GOLD }}>Article</span>
                  <h3 className="mt-3" style={{ ...DM_SERIF, color: NAVY, fontSize: 20, lineHeight: 1.3 }}>
                    {r}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden SEO keywords */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
          glass partitions Dubai, glass facades UAE, shopfront glass Dubai, mirror installation UAE, glass railings Dubai, glass balustrades UAE, skylights Dubai, aluminium cladding UAE, aluminium windows Dubai, aluminium doors Dubai, glass enclosures UAE, glass canopy Dubai, curved glass UAE, structural glazing Dubai, curtain wall UAE, teflon glass fitting, spider fitting glass, patch fitting glass door, frameless glass railing, glass staircase railing Dubai, tempered glass UAE, laminated glass Dubai, acoustic glass partition, glass pool fence Dubai, glass shower enclosure UAE, glass balcony railing, gym mirror installation Dubai, wardrobe mirror UAE, glass works Dubai, glazing contractor UAE, commercial glazing Dubai, residential glass works Dubai, luxury villa glass UAE, glass company Dubai, best glass company UAE, glass fixing near me, glass installation Abu Dhabi, glass works Sharjah, glass partition Ajman, aluminium fabrication Dubai, aluminium pergola UAE, aluminium louvers Dubai, aluminium shopfront UAE, glass facade villa Dubai, glass door installation UAE, glass window replacement Dubai, glass works near me UAE, glazing services UAE, glass precision engineering Dubai, glass craftsmanship UAE, glass architecture Dubai, glass interiors UAE, glass exteriors Dubai
        </div>
      </div>
    </Layout>
  );
}
