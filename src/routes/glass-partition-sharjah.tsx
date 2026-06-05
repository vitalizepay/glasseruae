import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-sharjah",
  area: "Sharjah",
  landmarks: ["Al Majaz Waterfront", "Sahara Centre", "University City", "Al Nahda Sharjah", "Sharjah Industrial Area"],
  blurb: "Glass partition and aluminium contractor for Sharjah — serving offices, clinics, retail outlets and villas across Al Majaz, Al Nahda, Al Qasimia and the Sharjah industrial belt.",
  localContext: "Sharjah projects are a major part of our work — particularly office partitions in Al Majaz commercial towers, clinic fit-outs around University City and shopfronts in Sahara Centre and the Al Wahda area. Our Al Qusais workshop is 15 minutes from the Sharjah border.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-sharjah")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
