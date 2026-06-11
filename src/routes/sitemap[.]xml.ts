import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://glasseruae.com";
const LASTMOD = "2026-06-05";

const PATHS: { path: string; priority: string }[] = [
  { path: "/", priority: "1.0" },
  { path: "/about", priority: "0.8" },
  { path: "/services", priority: "0.9" },
  { path: "/glass-services", priority: "0.9" },
  { path: "/areas-we-serve", priority: "0.8" },
  { path: "/projects", priority: "0.8" },
  { path: "/blog", priority: "0.7" },
  { path: "/contact", priority: "0.8" },

  { path: "/glass-partition-dubai", priority: "0.95" },
  { path: "/office-glass-partition-dubai", priority: "0.95" },
  { path: "/aluminium-works-dubai", priority: "0.95" },
  { path: "/aluminium-fabrication-dubai", priority: "0.9" },
  { path: "/shower-glass-dubai", priority: "0.9" },
  { path: "/glass-shopfront-dubai", priority: "0.9" },
  { path: "/glass-railing-dubai", priority: "0.9" },
  { path: "/glass-facade-dubai", priority: "0.9" },
  { path: "/glass-door-installation-dubai", priority: "0.9" },
  { path: "/skylight-installation-dubai", priority: "0.85" },

  { path: "/services/frameless-glass-partitions-dubai", priority: "0.9" },
  { path: "/services/aluminium-doors-dubai", priority: "0.9" },
  { path: "/services/aluminium-windows-dubai", priority: "0.9" },
  { path: "/services/shower-enclosures-dubai", priority: "0.9" },
  { path: "/services/custom-mirrors-dubai", priority: "0.9" },
  { path: "/services/glass-facades-dubai", priority: "0.9" },

  { path: "/glass-partition-al-qusais", priority: "0.85" },
  { path: "/glass-partition-al-nahda", priority: "0.85" },
  { path: "/glass-partition-deira", priority: "0.85" },
  { path: "/glass-partition-business-bay", priority: "0.85" },
  { path: "/glass-partition-dubai-marina", priority: "0.85" },
  { path: "/glass-partition-jvc", priority: "0.85" },
  { path: "/glass-partition-sharjah", priority: "0.85" },
  { path: "/glass-partition-ajman", priority: "0.85" },

  { path: "/projects/office-glass-partition-installation-dubai", priority: "0.8" },
  { path: "/projects/luxury-frameless-villa-glass-dubai", priority: "0.8" },
  { path: "/projects/premium-waterfront-glass-palm-jumeirah", priority: "0.8" },
  { path: "/projects/office-glass-partition-al-qusais", priority: "0.7" },
  { path: "/projects/shower-glass-installation-jvc", priority: "0.7" },
  { path: "/projects/aluminium-shopfront-sharjah", priority: "0.7" },
  { path: "/projects/glass-railing-dubai-marina", priority: "0.7" },

  { path: "/blog/glass-partitions-dubai-office-guide", priority: "0.75" },
  { path: "/blog/frameless-shower-enclosures-dubai-guide", priority: "0.75" },
  { path: "/blog/best-glass-partition-company-dubai", priority: "0.75" },
  { path: "/blog/office-glass-partition-cost-dubai", priority: "0.75" },
  { path: "/blog/shower-glass-installation-guide-dubai", priority: "0.75" },
  { path: "/blog/glass-shopfront-installation-guide", priority: "0.75" },
  { path: "/blog/aluminium-fabrication-services-dubai", priority: "0.75" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${LASTMOD}</lastmod><priority>${e.priority}</priority></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
