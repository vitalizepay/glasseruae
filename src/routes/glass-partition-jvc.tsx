import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-jvc",
  area: "JVC",
  landmarks: ["Circle Mall", "JVC District", "Al Khail Road", "JSS International School"],
  blurb: "Glass partition and shower glass specialists for Jumeirah Village Circle (JVC). We service residential villas, low-rise apartment communities and ground-floor commercial units across the JVC district.",
  localContext: "JVC has grown into one of Dubai's most popular mid-market residential communities. Our local work mix includes villa shower glass, balcony glass railings, ground-floor retail shopfronts and small-office partitions in JVC's commercial buildings.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-jvc")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
