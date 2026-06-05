import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-deira",
  area: "Deira",
  landmarks: ["Deira City Centre", "Al Rigga", "Gold Souk", "Clocktower Roundabout", "Port Saeed"],
  blurb: "Glass partition contractor in Deira — fitting offices, trading companies, clinics and retail outlets across one of Dubai's oldest and most active commercial districts.",
  localContext: "Deira's mix of legacy commercial towers, trading offices and high-footfall retail makes it one of our busiest service zones. We regularly fit partitions in offices near Al Maktoum Street, Port Saeed and the Deira waterfront, working around building age and access constraints typical of older Dubai stock.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-deira")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
