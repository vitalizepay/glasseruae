import { z } from "zod";

export const COMPANY_WHATSAPP_NUMBER = "971568400838";
export const REFERRAL_SOURCES = ["Facebook", "LinkedIn", "Google / search", "Instagram", "Referral / word of mouth", "Existing customer", "Other", "Prefer not to say"] as const;

export const enquirySchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your full name.").max(120),
  phone: z.string().trim().min(1, "Please enter your mobile number.").max(40),
  service_needed: z.string().trim().max(80),
  project_location: z.string().trim().max(80),
  project_details: z.string().trim().max(1500),
  referral_source: z.enum(REFERRAL_SOURCES),
});

type Enquiry = z.infer<typeof enquirySchema>;

export function enquiryInsert(input: Enquiry) {
  const enquiry = enquirySchema.parse(input);
  return {
    full_name: enquiry.full_name,
    phone: enquiry.phone,
    project_location: enquiry.project_location || null,
    project_details: [enquiry.service_needed && `Service: ${enquiry.service_needed}`, enquiry.project_details].filter(Boolean).join("\n\n") || null,
    referral_source: enquiry.referral_source,
  };
}

export function enquiryWhatsAppUrl(input: Enquiry) {
  const enquiry = enquirySchema.parse(input);
  const lines = [
    "New Glass & Aluminium Enquiry – Glasser UAE", "",
    `Name: ${enquiry.full_name}`, `Mobile: ${enquiry.phone}`,
    `Service Needed: ${enquiry.service_needed || "-"}`,
    `Location: ${enquiry.project_location || "-"}`,
    `Project Details: ${enquiry.project_details || "-"}`,
    `How did you find us?: ${enquiry.referral_source}`, "",
    "Submitted From: https://www.glasseruae.com/contact",
  ].join("\n");
  return `https://wa.me/${COMPANY_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
}