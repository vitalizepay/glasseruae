import { createOpenAI } from "@ai-sdk/openai";
import { Output, streamText } from "ai";
import { z } from "zod";
import { ADVISOR_SERVICES, SERVICE_IDS, type AdvisorInput, type AdvisorResult } from "./catalogue";

const schema = z.object({
  summary: z.string(),
  services: z.array(z.object({ id: z.enum(SERVICE_IDS), reason: z.string() })),
  questionsForSurvey: z.array(z.string()),
  enquiryMessage: z.string(),
});

const INSTRUCTIONS = `You help UAE property owners plan glass and aluminium work for Glasser Technical Works LLC (Glasser UAE).
Write in clear British English. Recommend 1-4 services ONLY from this list (use the id): ${ADVISOR_SERVICES.map((s) => `${s.id} = ${s.label}`).join("; ")}.
Rules: never give prices, costs, durations or guarantees; never invent certifications, approvals or past projects; say a site survey confirms specifications.
summary: 2-3 sentences restating the need. reason: one sentence per service. questionsForSurvey: 3-5 short questions the owner should be ready to answer (measurements, glass type, access, approvals).
enquiryMessage: a polite first-person quote enquiry from the owner to Glasser UAE (under 120 words) including property type, emirate, timeline and the recommended services. No placeholders for names or phone numbers.`;

export async function runAdvisor(input: AdvisorInput): Promise<AdvisorResult> {
  const apiKey = process.env.LOVABLE_API_KEY;
  if (!apiKey) throw new Error("AI is not configured.");
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });
  const result = streamText({
    model: provider.responses("openai/gpt-6-astra"),
    system: INSTRUCTIONS,
    prompt: `Property type: ${input.propertyType}\nEmirate: ${input.emirate}\nTimeline: ${input.timeline}\nProject description:\n${input.description.trim()}`,
    output: Output.object({ schema }),
    maxRetries: 0,
    providerOptions: {
      openai: {
        forceReasoning: true,
        reasoningEffort: "low",
        reasoningSummary: "auto",
        store: false,
        include: ["reasoning.encrypted_content"],
      },
    },
  });
  const out = await result.output;
  return { ...out, services: out.services.slice(0, 4) };
}
