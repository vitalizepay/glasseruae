import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-al-qusais",
  area: "Al Qusais",
  landmarks: ["Al Nahda Metro", "Madina Mall", "Dubai Grand Hotel", "Sheikh Mohammed Bin Zayed Road", "Al Qusais Industrial Area"],
  blurb: "Glass partition specialists serving Al Qusais — Glasser Technical Works is headquartered in Al Qusais Industrial Area 3 and delivers free same-day site surveys across every Al Qusais street and tower.",
  localContext: "Al Qusais is one of Dubai's most active commercial and residential districts, with a growing concentration of corporate offices, clinics, retail showrooms and SME workspaces. We have completed glass partition projects for offices along Damascus Street, retail units around Madina Mall and clinic fit-outs in residential mid-rises throughout Al Qusais 1, 2 and 3.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-al-qusais")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
