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
