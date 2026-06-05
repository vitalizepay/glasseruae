import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-al-nahda",
  area: "Al Nahda",
  landmarks: ["Sahara Centre", "Al Nahda Park", "NMC Hospital Al Nahda", "Al Nahda Metro Station", "Stadium Metro"],
  blurb: "Glass partition installation in Al Nahda, Dubai. Our workshop is minutes away on Al Nahda Street — meaning fast surveys, fast installs and direct local accountability for every project.",
  localContext: "Al Nahda straddles the Dubai–Sharjah border and is densely packed with commercial offices, medical clinics, SME workspaces and retail units. We have fitted partitions for clinics around NMC, offices in towers near Al Nahda Pond Park and shopfronts across the Al Nahda commercial strip.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-al-nahda")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
