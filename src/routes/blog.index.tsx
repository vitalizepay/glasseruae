import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import partition from "@/assets/service-partition.jpg";
import shower from "@/assets/service-shower.jpg";
import aluminium from "@/assets/service-aluminium.jpg";
import office from "@/assets/project-office.jpg";
import hotel from "@/assets/project-hotel.jpg";
import villa from "@/assets/project-villa.jpg";
import hero from "@/assets/hero-dubai.jpg";

const T = "Blog — Glass & Aluminium Insights from Dubai | Glasser UAE";
const D = "Trends, guides and design ideas for glass partitions, shower enclosures, aluminium windows and mirror installations across the UAE.";
const URL = "https://glasseruae.com/blog";

const POSTS = [
  { slug: "glass-partitions-dubai-office-guide", title: "How to Choose the Right Glass Partition for Your Dubai Office", img: partition, alt: "Frameless glass partition in a Dubai office", cat: "Guide", to: "/blog/glass-partitions-dubai-office-guide" as const },
  { slug: "frameless-shower-enclosures-dubai-guide", title: "Frameless Shower Enclosures Dubai: What to Expect from Installation", img: shower, alt: "Frameless tempered glass shower enclosure", cat: "Guide", to: "/blog/frameless-shower-enclosures-dubai-guide" as const },
  { slug: "best-glass-partition-company-dubai", title: "Best Glass Partition Company in Dubai (2026 Guide)", img: office, alt: "Corporate Dubai office with glass partition rooms", cat: "Guide", to: "/blog/best-glass-partition-company-dubai" as const },
  { slug: "office-glass-partition-cost-dubai", title: "Office Glass Partition Cost in Dubai (2026)", img: hotel, alt: "Premium office interior with glass partitions", cat: "Pricing", to: "/blog/office-glass-partition-cost-dubai" as const },
  { slug: "shower-glass-installation-guide-dubai", title: "Shower Glass Installation Guide Dubai", img: villa, alt: "Luxury villa bathroom shower glass installation", cat: "Guide", to: "/blog/shower-glass-installation-guide-dubai" as const },
  { slug: "glass-shopfront-installation-guide", title: "Glass Shopfront Installation Guide Dubai", img: aluminium, alt: "Glass shopfront installation at a Dubai retail unit", cat: "Retail", to: "/blog/glass-shopfront-installation-guide" as const },
  { slug: "aluminium-fabrication-services-dubai", title: "Aluminium Fabrication Services in Dubai", img: hero, alt: "Aluminium fabrication for architectural projects in Dubai", cat: "Aluminium", to: "/blog/aluminium-fabrication-services-dubai" as const },
];


export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: URL },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Glasser UAE Blog",
          url: URL,
          mainEntity: {
            "@type": "ItemList",
            itemListElement: POSTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://glasseruae.com${p.to}`,
            })),
          },
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Layout>
      <div className="pt-32 pb-12 bg-surface text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Insights</span>
        <h1 className="text-5xl md:text-7xl text-navy mt-3">Blog &amp; ideas</h1>
      </div>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p) => (
            <Link key={p.slug} to={p.to} className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-elegant transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs uppercase tracking-widest text-orange font-semibold">{p.cat}</span>
                <h3 className="mt-2 text-xl font-semibold text-navy group-hover:text-orange transition-colors">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
