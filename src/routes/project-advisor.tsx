import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { getProjectAdvice } from "@/lib/api/project-advisor.functions";
import { ADVISOR_SERVICES, validateAdvisorInput, type AdvisorResult } from "@/lib/advisor/catalogue";

const T = "AI Glass & Aluminium Project Advisor UAE | Glasser UAE";
const D = "Describe your glass or aluminium project and get suggested services plus a ready-to-send quote enquiry for Glasser UAE. For property owners across the UAE.";
const URL = "https://www.glasseruae.com/project-advisor";

export const Route = createFileRoute("/project-advisor")({
  head: () => ({
    meta: [
      { title: T },
      { name: "description", content: D },
      { property: "og:title", content: T },
      { property: "og:description", content: D },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: AdvisorPage,
});

const PROPERTY = ["Villa", "Apartment", "Office", "Retail / shopfront", "Commercial building", "Other"];
const EMIRATES = ["Dubai", "Sharjah", "Abu Dhabi", "Ajman", "Ras Al Khaimah", "Umm Al Quwain", "Fujairah"];
const TIMELINE = ["As soon as possible", "Within 1 month", "1–3 months", "Just planning"];

const field = "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function AdvisorPage() {
  const advise = useServerFn(getProjectAdvice);
  const [form, setForm] = useState({ description: "", propertyType: PROPERTY[0], emirate: EMIRATES[0], timeline: TIMELINE[0] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AdvisorResult | null>(null);
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const err = validateAdvisorInput(form);
    if (err) return setError(err);
    setError(null); setLoading(true); setResult(null);
    try {
      const res = await advise({ data: form });
      if (res.error || !res.result) setError(res.error ?? "Something went wrong.");
      else { setResult(res.result); setMessage(res.result.enquiryMessage); }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally { setLoading(false); }
  }

  const wa = `https://wa.me/971568400838?text=${encodeURIComponent(message)}`;
  const mail = `mailto:sales@glasseruae.com?subject=${encodeURIComponent("Project enquiry via Project Advisor")}&body=${encodeURIComponent(message)}`;

  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-5 pb-20 pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">AI-powered project advisor</p>
        <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Plan your glass & aluminium project</h1>
        <p className="mt-4 text-muted-foreground">Tell us what you want to build or replace. You'll get suggested services, questions to prepare for the site survey, and a quote enquiry you can send in one tap. Suggestions are guidance only — final specifications are confirmed at survey.</p>

        <form onSubmit={submit} className="mt-10 space-y-5 rounded-lg border border-border bg-card p-6">
          <label className="block text-sm font-medium text-foreground">Describe your project
            <textarea className={`${field} mt-2 min-h-36`} maxLength={2000} value={form.description}
              placeholder="e.g. We want to replace the sliding doors to our villa garden and add a frameless glass balustrade on the upper terrace."
              onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </label>
          <div className="grid gap-4 sm:grid-cols-3">
            {([["Property type", "propertyType", PROPERTY], ["Emirate", "emirate", EMIRATES], ["Timeline", "timeline", TIMELINE]] as const).map(([label, key, opts]) => (
              <label key={key} className="block text-sm font-medium text-foreground">{label}
                <select className={`${field} mt-2`} value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })}>
                  {opts.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
            ))}
          </div>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={loading} size="lg">{loading ? "Preparing recommendations…" : "Get recommendations"}</Button>
        </form>

        {result && (
          <div className="mt-10 space-y-8" aria-live="polite">
            <div>
              <h2 className="font-display text-2xl text-foreground">Your project</h2>
              <p className="mt-2 text-muted-foreground">{result.summary}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground">Recommended services</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {result.services.map((s) => {
                  const svc = ADVISOR_SERVICES.find((x) => x.id === s.id)!;
                  return (
                    <li key={s.id} className="rounded-lg border border-border bg-card p-4">
                      <Link to={svc.to} className="font-medium text-primary hover:underline">{svc.label}</Link>
                      <p className="mt-1 text-sm text-muted-foreground">{s.reason}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground">Be ready to answer at the survey</h2>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground">
                {result.questionsForSurvey.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl text-foreground">Your quote enquiry</h2>
              <p className="mt-1 text-sm text-muted-foreground">Edit anything before sending.</p>
              <textarea aria-label="Quote enquiry" className={`${field} mt-3 min-h-40`} value={message} onChange={(e) => setMessage(e.target.value)} />
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href={wa} target="_blank" rel="noopener noreferrer">Send on WhatsApp</a></Button>
                <Button asChild size="lg" variant="outline"><a href={mail}>Send by email</a></Button>
              </div>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
