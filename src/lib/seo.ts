export const SERVICE_AREAS = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Al Qusais",
  "Al Nahda",
  "Deira",
  "Business Bay",
  "Dubai Marina",
  "JVC",
  "DIFC",
  "JLT",
];

export const SEO_SERVICES = [
  { to: "/glass-partition-dubai", label: "Glass Partition Dubai" },
  { to: "/office-glass-partition-dubai", label: "Office Glass Partition Dubai" },
  { to: "/aluminium-works-dubai", label: "Aluminium Works Dubai" },
  { to: "/aluminium-fabrication-dubai", label: "Aluminium Fabrication Dubai" },
  { to: "/shower-glass-dubai", label: "Shower Glass Dubai" },
  { to: "/glass-shopfront-dubai", label: "Glass Shopfront Dubai" },
  { to: "/glass-railing-dubai", label: "Glass Railing Dubai" },
  { to: "/glass-facade-dubai", label: "Glass Facade Dubai" },
  { to: "/glass-door-installation-dubai", label: "Glass Door Installation Dubai" },
  { to: "/skylight-installation-dubai", label: "Skylight Installation Dubai" },
] as const;

export const SEO_LOCATIONS = [
  { to: "/glass-partition-al-qusais", label: "Al Qusais" },
  { to: "/glass-partition-al-nahda", label: "Al Nahda" },
  { to: "/glass-partition-deira", label: "Deira" },
  { to: "/glass-partition-business-bay", label: "Business Bay" },
  { to: "/glass-partition-dubai-marina", label: "Dubai Marina" },
  { to: "/glass-partition-jvc", label: "JVC" },
  { to: "/glass-partition-sharjah", label: "Sharjah" },
  { to: "/glass-partition-ajman", label: "Ajman" },
] as const;

export const SEO_PROJECTS = [
  { to: "/projects/office-glass-partition-installation-dubai", label: "Office Glass Partition Installation — Dubai" },
  { to: "/projects/luxury-frameless-villa-glass-dubai", label: "Luxury Frameless Villa Glass — Dubai" },
  { to: "/projects/premium-waterfront-glass-palm-jumeirah", label: "Premium Waterfront Glass — Palm Jumeirah" },
  { to: "/projects/office-glass-partition-al-qusais", label: "Office Glass Partition — Al Qusais" },
  { to: "/projects/shower-glass-installation-jvc", label: "Shower Glass Installation — JVC" },
  { to: "/projects/aluminium-shopfront-sharjah", label: "Aluminium Shopfront — Sharjah" },
  { to: "/projects/glass-railing-dubai-marina", label: "Glass Railing — Dubai Marina" },
] as const;

export function serviceJsonLd(name: string, url: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "Glasser Technical Works LLC",
      url: "https://glasseruae.com",
      telephone: "+971568400838",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Al Hilal Bldg, Al Nahda Street, Al Qusais",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
    areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const SITE_ORIGIN = "https://glasseruae.com";
const PUBLISHER = {
  "@type": "Organization",
  name: "Glasser Technical Works LLC",
  url: SITE_ORIGIN,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_ORIGIN}/glasser-logo.png`,
  },
};

export interface BlogHeadInput {
  slug: string;
  title: string; // H1 / headline
  description: string; // 150–160 char meta
  image: string; // absolute or root-relative
  datePublished: string; // ISO
  dateModified?: string; // ISO
  faqs?: { q: string; a: string }[];
}

export function buildBlogHead(input: BlogHeadInput) {
  const url = `${SITE_ORIGIN}/blog/${input.slug}`;
  const image = input.image.startsWith("http") ? input.image : `${SITE_ORIGIN}${input.image}`;
  const seoTitle = `${input.title} | Glasser UAE`;
  const modified = input.dateModified ?? input.datePublished;

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image,
    url,
    mainEntityOfPage: url,
    datePublished: input.datePublished,
    dateModified: modified,
    author: PUBLISHER,
    publisher: PUBLISHER,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_ORIGIN}/blog` },
      { "@type": "ListItem", position: 3, name: input.title, item: url },
    ],
  };

  const scripts: { type: string; children: string }[] = [
    { type: "application/ld+json", children: JSON.stringify(blogPosting) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumbs) },
  ];
  if (input.faqs?.length) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(faqJsonLd(input.faqs)) });
  }

  return {
    meta: [
      { title: seoTitle },
      { name: "description", content: input.description },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: input.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "article" },
      { property: "og:image", content: image },
      { property: "og:site_name", content: "Glasser UAE" },
      { property: "article:published_time", content: input.datePublished },
      { property: "article:modified_time", content: modified },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
