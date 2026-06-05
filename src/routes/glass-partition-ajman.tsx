import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-ajman",
  area: "Ajman",
  landmarks: ["Ajman Corniche", "City Centre Ajman", "Ajman University", "Al Jurf"],
  blurb: "Glass and aluminium contractor serving Ajman — frameless partitions, shower glass, aluminium doors and windows for residential and commercial clients across the emirate.",
  localContext: "Our Ajman work covers residential villa glass and aluminium retrofits, small-office partitions and retail shopfronts. We service Ajman from our Al Qusais workshop with a typical 24-hour survey response.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-ajman")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
