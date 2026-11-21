import { createServerFn } from "@tanstack/react-start";
import { enquiryInsert, enquirySchema, leadUpdateSchema } from "@/lib/enquiries";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquirySchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: saved, error } = await supabaseAdmin.from("glass_enquiries").insert(enquiryInsert(data)).select("id").single();
    if (error || !saved) throw new Error("The enquiry could not be saved. Please try again or contact Glasser UAE directly.");
    return { id: saved.id };
  });

export const getOwnerLeads = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => z.object({ page: z.number().int().min(0).max(10000).default(0) }).parse(input))
  .handler(async ({ data, context }) => {
    const { data: owner, error: roleError } = await context.supabase.rpc("is_glasser_owner");
    if (roleError || !owner) throw new Error("Owner access has not been granted to this account.");
    const { data: leads, error, count } = await context.supabase.from("glass_enquiries").select("*", { count: "exact" }).order("created_at", { ascending: false }).range(data.page * 50, data.page * 50 + 49);
    if (error) throw new Error("Enquiries could not be loaded. Please try again.");
    return { leads: leads || [], total: count || 0 };
  });

export const updateOwnerLead = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((input: unknown) => leadUpdateSchema.parse(input))
  .handler(async ({ data, context }) => {
    const { data: owner, error: roleError } = await context.supabase.rpc("is_glasser_owner");
    if (roleError || !owner) throw new Error("Owner access is required.");
    const { data: lead, error } = await context.supabase.from("glass_enquiries").update({ status: data.status, owner_notes: data.owner_notes, follow_up_at: data.follow_up_at }).eq("id", data.id).select("id").single();
    if (error || !lead) throw new Error("The follow-up could not be saved.");
    return { id: lead.id };
  });