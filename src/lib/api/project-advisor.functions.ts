import { createServerFn } from "@tanstack/react-start";
import { validateAdvisorInput, type AdvisorInput, type AdvisorResult } from "@/lib/advisor/catalogue";

export const getProjectAdvice = createServerFn({ method: "POST" })
  .inputValidator((input: AdvisorInput) => {
    const err = validateAdvisorInput(input);
    if (err) throw new Error(err);
    return input;
  })
  .handler(async ({ data }): Promise<{ result: AdvisorResult | null; error: string | null }> => {
    const { runAdvisor } = await import("@/lib/advisor/advisor.server");
    try {
      return { result: await runAdvisor(data), error: null };
    } catch (e: unknown) {
      const status = (e as { statusCode?: number; cause?: { statusCode?: number } })?.statusCode;
      console.error("project advisor failed", e);
      if (status === 429) return { result: null, error: "The assistant is busy. Please try again in a minute." };
      if (status === 402) return { result: null, error: "The assistant is temporarily unavailable. Please contact us on WhatsApp." };
      return { result: null, error: "We couldn't prepare recommendations right now. Please contact us on WhatsApp." };
    }
  });
