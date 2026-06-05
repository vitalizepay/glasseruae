import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-dubai-marina",
  area: "Dubai Marina",
  landmarks: ["Marina Walk", "JBR", "Marina Mall", "Pier 7", "Dubai Marina Metro"],
  blurb: "Glass partition and glass railing specialists for Dubai Marina apartments, towers and waterfront retail. We deliver frameless balcony balustrades, walk-in shower glass, office partitions and shopfront systems across the Marina.",
  localContext: "Dubai Marina's mix of residential towers, hotels and waterfront F&B venues calls for a contractor who can move quickly through tight building access, narrow service corridors and high-footfall public areas. We have a dedicated Marina crew familiar with the major tower landlords.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-dubai-marina")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
