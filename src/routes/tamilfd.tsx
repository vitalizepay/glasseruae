import { createFileRoute } from "@tanstack/react-router";

// The Tamil food menu page is no longer public. Every request for /tamilfoodmenu
// is permanently redirected to the Glasser home page, so the old URL drops out of
// search indexes while existing links, bookmarks and shared URLs still land somewhere useful.
export const Route = createFileRoute("/tamilfd")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 301,
          headers: {
            Location: "/",
            "Cache-Control": "public, max-age=86400",
            "X-Robots-Tag": "noindex, nofollow",
          },
        });
      },
    },
  },
});
