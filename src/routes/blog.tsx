import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import partition from "@/assets/service-partition.jpg";
import shower from "@/assets/service-shower.jpg";
import aluminium from "@/assets/service-aluminium.jpg";
import mirror from "@/assets/service-mirror.jpg";
import office from "@/assets/project-office.jpg";

const T = "Blog — Glass & Aluminium Insights from Dubai | Glasser UAE";
const D = "Trends, guides and design ideas for glass partitions, shower enclosures, aluminium windows and mirror installations across the UAE.";

const POSTS = [
  { slug: "glass-trends-dubai-2025", title: "Glass Trends Shaping Dubai Interiors in 2025", img: partition, cat: "Trends" },
  { slug: "frameless-glass-design-guide", title: "The Complete Guide to Frameless Glass Designs", img: shower, cat: "Guide" },
  { slug: "aluminium-windows-uae-guide", title: "Choosing Aluminium Windows for the UAE Climate", img: aluminium, cat: "Aluminium" },
  { slug: "mirror-design-ideas", title: "10 Custom Mirror Design Ideas for Luxury Homes", img: mirror, cat: "Inspiration" },
  { slug: "office-glass-partitions", title: "Office Glass Partitions: Productivity Meets Design", img: office, cat: "Office" },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Glasser UAE Blog",
          url: "https://glazer-uae-vision.lovable.app/blog",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: POSTS.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: `https://glazer-uae-vision.lovable.app/blog`,
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
            <Link key={p.slug} to="/blog" className="group rounded-2xl overflow-hidden border border-border bg-white hover:shadow-elegant transition-shadow">
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
