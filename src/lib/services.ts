export const ALL_SERVICES = [
  { slug: "frameless-glass-partitions-dubai", label: "Frameless Glass Partitions" },
  { slug: "aluminium-doors-dubai", label: "Aluminium Doors" },
  { slug: "aluminium-windows-dubai", label: "Aluminium Windows" },
  { slug: "shower-enclosures-dubai", label: "Shower Enclosures" },
  { slug: "custom-mirrors-dubai", label: "Custom Mirrors" },
  { slug: "glass-facades-dubai", label: "Glass Facades" },
] as const;

export function relatedFor(slug: string) {
  return ALL_SERVICES.filter((s) => s.slug !== slug).map((s) => ({
    to: `/services/${s.slug}`,
    label: s.label,
  }));
}
