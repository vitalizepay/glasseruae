import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://glasseruae.com";
const LASTMOD = "2026-06-02";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/services", priority: "0.9" },
          { path: "/services/frameless-glass-partitions-dubai", priority: "0.9" },
          { path: "/services/aluminium-doors-dubai", priority: "0.9" },
          { path: "/services/aluminium-windows-dubai", priority: "0.9" },
          { path: "/services/shower-enclosures-dubai", priority: "0.9" },
          { path: "/services/custom-mirrors-dubai", priority: "0.9" },
          { path: "/services/glass-facades-dubai", priority: "0.9" },
          { path: "/projects", priority: "0.8" },
          { path: "/blog", priority: "0.7" },
          { path: "/contact", priority: "0.8" },
        ];
        const urls = entries
          .map((e) => `  <url><loc>${BASE_URL}${e.path}</loc><lastmod>${LASTMOD}</lastmod><priority>${e.priority}</priority></url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
