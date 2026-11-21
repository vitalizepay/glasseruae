import { z } from "zod";

export const COMPANY_WHATSAPP_NUMBER = "971568400838";
export const REFERRAL_SOURCES = ["Facebook", "LinkedIn", "Google / search", "Instagram", "Referral / word of mouth", "Existing customer", "Other", "Prefer not to say"] as const;
export const PROJECT_TYPES = ["Residential", "Commercial", "Contractor", "Consultant", "Other"] as const;
export const LEAD_STATUSES = ["New", "Contacted", "Qualified", "Quotation Sent", "Follow-up", "Won", "Lost"] as const;
export const ENQUIRY_SERVICES = ["Frameless Glass Partitions", "Office Glass Partitions", "Curved Glass", "Acoustic Glass", "Shower Enclosures", "Aluminium Doors", "Aluminium Windows", "Aluminium Works", "Glass Facades", "Custom Mirrors", "Back Painted Glass", "Glass Shopfront", "Glass Railing", "ACP Cladding", "Skylights", "Other"] as const;
const optionalText = (max: number) => z.string().trim().max(max).optional().default("");
const path = z.string().max(200).regex(/^\/[a-zA-Z0-9/_-]*$/).optional().default("/");

export const enquirySchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name.").max(120),
  phone: z.string().trim().min(1, "Please enter your mobile number.").max(40),
  service_needed: z.string().trim().max(80),
  project_location: z.string().trim().max(80),
  project_details: z.string().trim().max(1500),
  referral_source: z.enum(REFERRAL_SOURCES),
  company_name: optionalText(160),
  email: z.union([z.string().trim().email().max(254), z.literal("")]).optional().default(""),
  project_type: z.union([z.enum(PROJECT_TYPES), z.literal("")]).optional().default(""),
  project_scope: optionalText(250),
  traffic_source: optionalText(100),
  traffic_medium: optionalText(100),
  campaign: optionalText(100),
  landing_page: path,
  submitted_page: path,
}).strict();

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryInput = z.input<typeof enquirySchema>;

export function enquiryInsert(input: EnquiryInput) {
  const enquiry = enquirySchema.parse(input);
  return {
    full_name: enquiry.full_name,
    phone: enquiry.phone,
    project_location: enquiry.project_location || null,
    project_details: [enquiry.service_needed && `Service: ${enquiry.service_needed}`, enquiry.project_details].filter(Boolean).join("\n\n") || null,
    referral_source: enquiry.referral_source,
    company_name: enquiry.company_name || null,
    email: enquiry.email || null,
    service_needed: enquiry.service_needed || null,
    project_type: enquiry.project_type || null,
    project_scope: enquiry.project_scope || null,
    traffic_source: enquiry.traffic_source || null,
    traffic_medium: enquiry.traffic_medium || null,
    campaign: enquiry.campaign || null,
    landing_page: enquiry.landing_page,
    submitted_page: enquiry.submitted_page,
  };
}

export function enquiryWhatsAppUrl(input: EnquiryInput) {
  const enquiry = enquirySchema.parse(input);
  const lines = [
    "New Glass & Aluminium Enquiry – Glasser UAE", "",
    `Name: ${enquiry.full_name}`, `Mobile: ${enquiry.phone}`,
    `Service Needed: ${enquiry.service_needed || "-"}`,
    `Location: ${enquiry.project_location || "-"}`,
    ...(enquiry.company_name ? [`Company: ${enquiry.company_name}`] : []),
    ...(enquiry.email ? [`Email: ${enquiry.email}`] : []),
    ...(enquiry.project_type ? [`Project type: ${enquiry.project_type}`] : []),
    ...(enquiry.project_scope ? [`Scope: ${enquiry.project_scope}`] : []),
    `Project Details: ${enquiry.project_details || "-"}`,
    `How did you find us?: ${enquiry.referral_source}`, "",
    `Submitted From: https://www.glasseruae.com${enquiry.submitted_page}`,
  ].join("\n");
  return `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}

export function serviceWhatsAppUrl(service: string, location = "UAE") {
  return `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Glasser Technical Works, I am interested in ${service}. I have a project in ${location}. Please contact me regarding pricing and details.`)}`;
}

export const leadUpdateSchema = z.object({
  id: z.string().uuid(), status: z.enum(LEAD_STATUSES),
  owner_notes: z.string().max(2000),
  follow_up_at: z.string().datetime({ offset: true }).nullable(),
}).strict();