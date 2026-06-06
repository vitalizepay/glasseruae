import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/index.html")({
  server: {
    handlers: {
      GET: async () => {
        return new Response(null, {
          status: 301,
          headers: {
            Location: "https://glasseruae.com/",
            "Cache-Control": "public, max-age=86400",
          },
        });
      },
    },
  },
});
