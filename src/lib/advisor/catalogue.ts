// Browser-safe catalogue of services the advisor may recommend.
export const ADVISOR_SERVICES = [
  { id: "frameless-glass-partitions", label: "Frameless Glass Partitions", to: "/services/frameless-glass-partitions-dubai" },
  { id: "office-glass-partitions", label: "Office Glass Partitions", to: "/office-glass-partition-dubai" },
  { id: "glass-doors", label: "Glass Door Installation", to: "/glass-door-installation-dubai" },
  { id: "aluminium-doors", label: "Aluminium Doors", to: "/services/aluminium-doors-dubai" },
  { id: "aluminium-windows", label: "Aluminium Windows", to: "/services/aluminium-windows-dubai" },
  { id: "aluminium-fabrication", label: "Aluminium Fabrication", to: "/aluminium-fabrication-dubai" },
  { id: "shower-enclosures", label: "Shower Enclosures", to: "/services/shower-enclosures-dubai" },
  { id: "custom-mirrors", label: "Custom Mirrors", to: "/services/custom-mirrors-dubai" },
  { id: "glass-facades", label: "Glass Façades", to: "/services/glass-facades-dubai" },
  { id: "glass-railings", label: "Glass Railings", to: "/glass-railing-dubai" },
  { id: "glass-shopfronts", label: "Glass Shopfronts", to: "/glass-shopfront-dubai" },
] as const;

export type AdvisorServiceId = (typeof ADVISOR_SERVICES)[number]["id"];
export const SERVICE_IDS = ADVISOR_SERVICES.map((s) => s.id) as [AdvisorServiceId, ...AdvisorServiceId[]];

export interface AdvisorInput {
  description: string;
  propertyType: string;
  emirate: string;
  timeline: string;
}

export interface AdvisorResult {
  summary: string;
  services: { id: AdvisorServiceId; reason: string }[];
  questionsForSurvey: string[];
  enquiryMessage: string;
}

export function validateAdvisorInput(input: AdvisorInput): string | null {
  const d = input.description?.trim() ?? "";
  if (d.length < 20) return "Please describe your project in at least 20 characters.";
  if (d.length > 2000) return "Please keep the description under 2,000 characters.";
  for (const v of [input.propertyType, input.emirate, input.timeline]) {
    if (typeof v !== "string" || v.length > 60) return "Please choose valid project details.";
  }
  return null;
}
