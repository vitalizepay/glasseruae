import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
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
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
