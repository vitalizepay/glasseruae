import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import staircase from "@/assets/landing/staircase.jpg";
import partition from "@/assets/landing/partition.jpg";
import shower from "@/assets/landing/shower.jpg";
import mirror from "@/assets/landing/mirror.jpg";
import railing from "@/assets/landing/railing.jpg";
import tower from "@/assets/landing/tower.jpg";
import adt1 from "@/assets/projects/abu-dhabi-terminals-1.jpg.asset.json";
import adt2 from "@/assets/projects/abu-dhabi-terminals-2.jpg.asset.json";
import adt3 from "@/assets/projects/abu-dhabi-terminals-3.jpg.asset.json";
import adc1 from "@/assets/projects/ad-curved-1.jpg.asset.json";
import adc2 from "@/assets/projects/ad-curved-2.jpg.asset.json";
import adc3 from "@/assets/projects/ad-curved-3.jpg.asset.json";
import gym1 from "@/assets/projects/al-barsha-gym-1.jpg.asset.json";
import gym2 from "@/assets/projects/al-barsha-gym-2.jpg.asset.json";
import gym3 from "@/assets/projects/al-barsha-gym-3.jpg.asset.json";

const TEAL = "#3fd0c9";

const T = "Completed Glass Projects in Dubai | Glasser Technical Works";
const D = "Browse 500+ completed glass partition, mirror, shower glass, ACP cladding and luxury villa projects across Dubai and the UAE by Glasser Technical Works.";
const URL = "https://glasseruae.com/projects";

const IMAGES = [staircase, partition, shower, mirror, railing, tower];

type Project = {
  title: string;
  location: string;
  category: string;
  scope: string;
  description: string;
  images?: string[];
};

const PROJECTS: Project[] = [
  { title: "Abu Dhabi Terminals Project", location: "Abu Dhabi", category: "Commercial Infrastructure", scope: "Glass Partitions • Curved Glass", description: "Premium glass partition and curved architectural glazing for one of Abu Dhabi's major terminal facilities, delivering durability, openness and a modern architectural appearance.", images: [adt1.url, adt2.url, adt3.url] },
  { title: "Abu Dhabi Terminal Curved Glass", location: "Abu Dhabi", category: "Commercial", scope: "Curved Glass Systems", description: "Specialized curved glass fabrication and installation completed with precision engineering to meet demanding architectural specifications.", images: [adc1.url, adc2.url, adc3.url] },
  { title: "Dubai Creek Harbour Luxury Bars", location: "Dubai Creek Harbour", category: "Hospitality", scope: "Golden Mirrors • Beveled Mirrors", description: "Luxury decorative mirrors designed and installed to enhance premium hospitality interiors with elegant reflective finishes." },
  { title: "Al Barsha Gym", location: "Al Barsha", category: "Fitness", scope: "Gym Mirrors • Shower Glass", description: "Complete installation of full-height gym mirrors and frameless shower glass creating a clean, modern fitness environment." },
  { title: "JLT Commercial Tower", location: "JLT", category: "Commercial", scope: "Glass Partitions • Golden Cladding • Fused Glass", description: "Contemporary commercial interiors featuring frameless partitions, decorative fused glass and premium metallic cladding finishes." },
  { title: "Khawaneej Luxury Villa", location: "Al Khawaneej", category: "Luxury Villa", scope: "Back Painted Glass • Glass Handrails", description: "Luxury villa completed with elegant back-painted glass walls, frameless handrails and bespoke architectural glazing." },
  { title: "Meydan One Villa", location: "Meydan", category: "Residential", scope: "Mirrors • Shower Glass • Handrails", description: "Premium residential glazing package combining luxury mirrors, frameless shower enclosures and elegant glass railings." },
  { title: "Dubai Khawaneej Villa", location: "Dubai", category: "Luxury Residence", scope: "Steel Handrails • Back Painted Glass", description: "Modern villa featuring decorative back-painted glass installations with custom fabricated steel and glass handrail systems." },
  { title: "Dubai Creek Restaurants", location: "Dubai Creek", category: "Restaurant", scope: "Glass Partitions • Decorative Glass", description: "Elegant restaurant interiors designed using frameless partitions and decorative back-painted glass to create a sophisticated dining atmosphere." },
  { title: "Palm Jumeirah Beauty Salon", location: "Palm Jumeirah", category: "Beauty & Wellness", scope: "Designer Mirrors", description: "Premium salon mirrors installed to maximize natural light while delivering a luxurious customer experience." },
  { title: "Back Painted Glass Project", location: "Dubai", category: "Interior Glass", scope: "Decorative Glass", description: "Custom coloured glass installations designed for kitchens, feature walls and luxury commercial interiors." },
  { title: "JVC ACP Cladding", location: "Jumeirah Village Circle", category: "Exterior", scope: "ACP Cladding", description: "Modern aluminium composite cladding providing a sleek architectural appearance with long-term durability." },
  { title: "Office Glass Partitions", location: "Dubai", category: "Corporate Office", scope: "Glass Partitions", description: "Modern office fit-out utilizing frameless glass systems that maximize natural light and workspace collaboration." },
  { title: "Dubai Hills Villa", location: "Dubai Hills", category: "Luxury Villa", scope: "Mirrors • Shower Glass", description: "Luxury residential project featuring elegant mirrors and frameless shower enclosures with premium finishing." },
  { title: "Sharjah Luxury Villa", location: "Sharjah", category: "Residential", scope: "Luxury Mirrors", description: "Custom mirror installations adding sophistication and spaciousness to luxury residential interiors." },
  { title: "Sharjah Antique Mirror Villa", location: "Sharjah", category: "Luxury Villa", scope: "Antique Mirrors", description: "Decorative antique mirror panels designed to create timeless elegance and luxury throughout the residence." },
  { title: "Jumeirah Island Villa", location: "Jumeirah Islands", category: "Luxury Residence", scope: "Mirrors • Shower Glass", description: "Contemporary villa completed with frameless glazing solutions, bespoke mirrors and luxury bathroom glass systems." },
  { title: "Palm Jumeirah Villa I", location: "Palm Jumeirah", category: "Luxury Villa", scope: "Mirrors • Shower Glass", description: "High-end villa showcasing premium frameless mirrors and precision-engineered shower enclosures." },
  { title: "Palm Jumeirah Villa II", location: "Palm Jumeirah", category: "Residential", scope: "Shower Glass • Mirrors", description: "Architectural glass solutions enhancing luxury interiors with elegant frameless glazing and custom mirrors." },
  { title: "Palm Jumeirah Luxury Villa", location: "Palm Jumeirah", category: "Luxury Villa", scope: "Decorative Mirrors", description: "Exclusive glazing package featuring bespoke designer mirrors and architectural interior glass elements." },
  { title: "Jumeirah Island Luxury Villa", location: "Jumeirah Island", category: "Luxury Villa", scope: "Shower Glass", description: "Premium frameless shower enclosures crafted for modern luxury living with exceptional detailing." },
  { title: "Jumeirah Islands Villa", location: "Jumeirah Islands", category: "Residential", scope: "Shower Glass • Mirrors", description: "Elegant villa installation combining frameless shower systems with beautifully crafted custom mirrors." },
  { title: "Al Quoz Car Showroom", location: "Al Quoz", category: "Commercial", scope: "Glass Partitions", description: "Premium showroom glass partition systems creating an open and sophisticated automotive display environment." },
  { title: "Decorative Glass Project", location: "Dubai", category: "Architectural Glass", scope: "Fused Glass • Engraved Glass", description: "Custom decorative architectural glass manufactured with intricate engraving and artistic finishes." },
  { title: "Deira ACP Project", location: "Deira", category: "Commercial", scope: "ACP Cladding", description: "Exterior façade enhancement completed using premium aluminium composite cladding systems." },
  { title: "Versace Boutique", location: "Dubai Mall", category: "Luxury Retail", scope: "Shopfront Glass", description: "High-end luxury retail glazing delivering exceptional visibility and elegant storefront presentation." },
  { title: "Dubai Mall Retail Shop", location: "Dubai Mall", category: "Retail", scope: "Frameless Shopfront Glass", description: "Premium retail glass installation designed for maximum visibility and contemporary aesthetics." },
  { title: "Deira Commercial Building", location: "Deira", category: "Commercial", scope: "ACP Cladding", description: "Commercial façade modernization using durable ACP cladding with clean architectural lines." },
  { title: "Palm Jumeirah Top Gym", location: "Palm Jumeirah", category: "Fitness", scope: "Gym Mirrors", description: "Professional full-wall mirror installation enhancing training spaces with precision alignment and premium finishing." },
  { title: "Antique Glass Doors", location: "Dubai", category: "Decorative Glass", scope: "Engraved Glass Doors", description: "Bespoke engraved decorative glass doors crafted to complement luxury residential and commercial interiors." },
  { title: "Office Framed Partitions", location: "Dubai", category: "Corporate Office", scope: "Aluminium Framed Glass Partitions", description: "Elegant framed partition systems combining privacy, functionality and premium office aesthetics." },
  { title: "Residential Shower Glass", location: "Dubai", category: "Residential", scope: "Frameless Shower Glass • Mirrors", description: "Modern residential bathroom solutions featuring premium tempered glass shower enclosures and custom-cut mirrors." },
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());
  useEffect(() => {
    if (inView) {
      const c = animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return () => c.stop();
    }
  }, [inView, to, count]);
  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[80svh] w-full overflow-hidden bg-[#0a0a0a] text-white flex items-center">
      <div className="absolute inset-0">
        <img
          src={tower}
          alt="Luxury architectural glass facade in Dubai"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.85))",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-[11px] font-mono tracking-[0.35em] uppercase"
          style={{ color: TEAL }}
        >
          Portfolio · 500+ Projects Delivered
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 md:mt-8 font-display font-medium text-white text-balance max-w-[1100px]"
          style={{ lineHeight: 1.02, letterSpacing: "-0.02em", fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          Our <span className="italic" style={{ color: TEAL }}>premium</span> projects
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="mt-7 md:mt-9 text-[15px] sm:text-[17px] font-light text-white/85 max-w-[780px] leading-[1.75]"
        >
          For over 7 years, Glasser Technical Works has delivered premium Glass &amp; Aluminium
          solutions across the UAE. From luxury villas and commercial towers to restaurants, gyms,
          retail stores and corporate offices, every project reflects our commitment to exceptional
          craftsmanship, precision engineering and customer satisfaction. Today, we are proud to
          have completed 500+ successful projects across the UAE — below is a curated collection of
          32 that showcase the quality we deliver every day.
        </motion.p>
      </div>
    </section>
  );
}

const STATS = [
  { value: 500, suffix: "+", label: "Completed Projects" },
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

function StatsSection() {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(600px circle at 20% 30%, rgba(63,208,201,0.18), transparent 60%), radial-gradient(600px circle at 80% 70%, rgba(30,107,255,0.15), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-6 md:px-10 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl p-8 md:p-10 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
              style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)" }}
            >
              <div
                className="font-display font-light text-white"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em" }}
              >
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/70">
                {s.label}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-2xl p-8 md:p-10 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            style={{ boxShadow: "0 30px 60px -30px rgba(0,0,0,0.6)" }}
          >
            <div
              className="font-display font-light text-white"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", letterSpacing: "-0.02em" }}
            >
              UAE Wide
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/70">
              Dubai • Abu Dhabi • Sharjah
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const img = IMAGES[i % IMAGES.length];
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-black/5 hover:-translate-y-1.5 transition-all duration-500"
      style={{ boxShadow: "0 20px 40px -25px rgba(10,20,40,0.25)" }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone">
        <img
          src={img}
          alt={`${p.title} — ${p.scope} in ${p.location}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        />
        {/* glass reflection sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]"
          style={{
            background:
              "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] backdrop-blur-md bg-white/85 text-navy border border-white/60"
          >
            {p.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span
            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-medium backdrop-blur-md border"
            style={{ background: `${TEAL}22`, color: TEAL, borderColor: `${TEAL}55` }}
          >
            <CheckCircle2 size={11} /> Completed
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <MapPin size={11} /> {p.location}
        </div>
        <h3 className="mt-3 text-xl font-display font-medium text-navy leading-snug text-balance">
          {p.title}
        </h3>
        <div className="mt-2 text-[12px] font-medium text-navy/70">{p.scope}</div>
        <p className="mt-3 text-sm text-muted-foreground font-light leading-relaxed line-clamp-3">
          {p.description}
        </p>
        <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.22em] text-navy/60">
            Project #{String(i + 1).padStart(2, "0")}
          </span>
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center bg-navy text-white group-hover:bg-[color:var(--teal)] transition-all duration-500 group-hover:rotate-45"
            style={{ ["--teal" as string]: TEAL }}
          >
            <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function ProjectsGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14 md:mb-20"
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            — Featured Projects
          </div>
          <h2
            className="mt-5 font-display font-light text-navy text-balance"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Featured Projects
          </h2>
          <p className="mt-6 text-muted-foreground font-light text-lg leading-relaxed">
            Explore a selection of 32 featured projects from our portfolio of more than 500
            completed projects across the UAE. Every installation demonstrates our expertise in
            luxury architectural glass, aluminium fabrication and bespoke interior solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={`${p.title}-${i}`} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] text-white py-24 md:py-36">
      <div className="absolute inset-0">
        <img src={staircase} alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.92), rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.95))",
          }}
        />
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(700px circle at 25% 40%, rgba(63,208,201,0.18), transparent 60%), radial-gradient(700px circle at 80% 70%, rgba(30,107,255,0.15), transparent 60%)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="text-[10px] font-mono tracking-[0.35em] uppercase" style={{ color: TEAL }}>
            — Start Your Project
          </div>
          <h2
            className="mt-6 font-display font-light text-white text-balance"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            Let's build your next <span className="italic" style={{ color: TEAL }}>landmark</span> project
          </h2>
          <p className="mt-8 text-white/80 font-light text-lg leading-[1.8] max-w-3xl mx-auto">
            Whether you're building a luxury villa, commercial office, retail showroom, restaurant,
            hotel, gym or corporate headquarters, Glasser Technical Works delivers premium glass and
            aluminium solutions with exceptional craftsmanship, precision engineering and timely
            execution. Join hundreds of satisfied clients across the UAE who trust us to transform
            their architectural vision into reality.
          </p>

          <div className="mt-11 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-3 h-[54px] px-8 rounded-full text-white text-[13px] font-medium tracking-wide overflow-hidden transition-transform duration-500 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #1e6bff 0%, #3fd0c9 100%)",
                boxShadow: "0 20px 50px -15px rgba(30,107,255,0.55)",
              }}
            >
              <span className="relative z-10">Get Free Quote</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1.5 transition-transform duration-500" />
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)",
                }}
              />
            </Link>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center h-[54px] px-8 rounded-full text-white text-[13px] font-medium tracking-wide backdrop-blur-xl bg-white/10 border border-white/30 hover:bg-white/15 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProjectsGrid />
      <CtaSection />
    </Layout>
  );
}

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Glasser UAE Projects",
          url: URL,
          description: D,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: PROJECTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              description: p.description,
            })),
          },
        }),
      },
    ],
  }),
  component: ProjectsPage,
});
