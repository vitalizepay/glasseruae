import { createFileRoute } from "@tanstack/react-router";
import { LocationPage, locationHead } from "@/components/site/LocationPage";

const PROPS = {
  slug: "glass-partition-business-bay",
  area: "Business Bay",
  landmarks: ["Bay Square", "Executive Towers", "The Opus", "Business Bay Metro", "JW Marriott Marquis"],
  blurb: "Premium glass partition specialists for Business Bay offices — frameless single-glazed, acoustic double-glazed and demountable systems for tenants across Bay Square, Executive Towers and the entire Business Bay tower cluster.",
  localContext: "Business Bay is Dubai's densest commercial address — home to thousands of corporate tenants from emerging fintechs to global firms. Landlord fit-out approvals here are detailed and time-sensitive. Our team manages submittals, DCD documentation and out-of-hours building access so your office is ready on time.",
};
const meta = locationHead(PROPS);

export const Route = createFileRoute("/glass-partition-business-bay")({
  head: meta.head,
  component: () => <LocationPage {...PROPS} />,
});
