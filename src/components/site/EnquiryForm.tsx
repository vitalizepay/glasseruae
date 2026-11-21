import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ENQUIRY_SERVICES, PROJECT_TYPES, REFERRAL_SOURCES, enquirySchema, enquiryWhatsAppUrl } from "@/lib/enquiries";
import { submitEnquiry } from "@/lib/api/enquiries.functions";
import { enquiryAttribution, serviceKey, trackMarketing } from "@/lib/marketing";

const control = "w-full min-w-0 rounded-md border border-input bg-background px-3 py-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
export function EnquiryForm({ defaultService = "", defaultLocation = "", formType = "service" }: { defaultService?: string | undefined; defaultLocation?: string | undefined; formType?: "main" | "service" }) {
  const submit = useServerFn(submitEnquiry);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<{ id: string; whatsapp: string } | null>(null);
  const started = useRef(false);
  const inFlight = useRef(false);
  const prefix = `enquiry-${formType}`;
  const serviceDefault = ENQUIRY_SERVICES.find(s => defaultService.toLowerCase().includes(s.toLowerCase())) || defaultService;
  function track(event: Parameters<typeof trackMarketing>[0], extra: Record<string, unknown> = {}) {
    void trackMarketing(event, { form_type: formType, service_name: serviceKey(location.pathname), ...extra });
  }
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    setError("");
    track("quote_form_submit");
    const form = new FormData(event.currentTarget);
    const parsed = enquirySchema.safeParse({ ...Object.fromEntries(form), ...enquiryAttribution() });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "Please check your project details.");
      track("quote_form_error", { error_type: "validation" });
      return;
    }
    const whatsapp = enquiryWhatsAppUrl(parsed.data);
    const handoff = window.open("about:blank", "_blank");
    if (handoff) handoff.opener = null;
    inFlight.current = true;
    setBusy(true);
    try {
      const result = await submit({ data: parsed.data });
      setSaved({ id: result.id, whatsapp });
      track("quote_form_success");
      if (handoff) { handoff.location.replace(whatsapp); track("whatsapp_click"); }
    } catch {
      handoff?.close();
      setError("Your enquiry could not be saved. Please try again, or call +971 56 840 0838.");
      track("quote_form_error", { error_type: "save" });
    } finally {
      inFlight.current = false;
      setBusy(false);
    }
  }
  if (saved) return <div role="status" className="rounded-lg border border-border bg-surface p-6 md:p-8">
    <CheckCircle2 className="text-primary mb-4" size={28} /><h3 className="text-2xl text-foreground">Your enquiry is saved</h3>
    <p className="mt-3 text-muted-foreground leading-7">You can also send the prepared message to Glasser UAE on WhatsApp. Opening WhatsApp does not send it automatically.</p>
    <p className="mt-3 text-xs text-muted-foreground break-all">Reference: {saved.id}</p>
    <Button asChild size="lg" className="mt-5 h-auto min-h-11 whitespace-normal"><a href={saved.whatsapp} target="_blank" rel="noopener noreferrer">Continue to WhatsApp <ArrowUpRight /></a></Button>
    <Button variant="ghost" className="mt-3 ml-2" onClick={() => { setSaved(null); started.current = false; }}>New enquiry</Button>
  </div>;
  const services = serviceDefault && !ENQUIRY_SERVICES.some(s => s === serviceDefault) ? [serviceDefault, ...ENQUIRY_SERVICES] : [...ENQUIRY_SERVICES];
  return <form onSubmit={onSubmit} onFocus={() => { if (!started.current) { started.current = true; track("quote_form_start"); } }} className="rounded-lg border border-border bg-surface p-6 md:p-8" aria-label="Project enquiry">
    <h3 className="text-2xl md:text-3xl text-foreground">Request a project quotation</h3>
    <p className="mt-2 text-sm leading-6 text-muted-foreground">Tell us about your glass or aluminium scope.</p>
    <fieldset disabled={busy} className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
      <Input label="Full name *" name="full_name" prefix={prefix} required maxLength={120} autoComplete="name" />
      <Input label="Phone number *" name="phone" prefix={prefix} required type="tel" maxLength={40} autoComplete="tel" />
      <Input label="Company (optional)" name="company_name" prefix={prefix} maxLength={160} autoComplete="organization" />
      <Input label="Email (optional)" name="email" prefix={prefix} type="email" maxLength={254} autoComplete="email" />
      <Select label="Service required" name="service_needed" prefix={prefix} options={services} defaultValue={serviceDefault} />
      <Select label="Project location" name="project_location" prefix={prefix} options={["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", ...(defaultLocation && !["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].includes(defaultLocation) ? [defaultLocation] : [])]} defaultValue={defaultLocation} />
      <Select label="Project type (optional)" name="project_type" prefix={prefix} options={PROJECT_TYPES} />
      <Select label="How did you find us? *" name="referral_source" prefix={prefix} options={REFERRAL_SOURCES} required />
      <div className="sm:col-span-2"><Input label="Scope or budget (optional)" name="project_scope" prefix={prefix} maxLength={250} placeholder="Approximate area, quantities or budget" /></div>
      <div className="sm:col-span-2"><label htmlFor={`${prefix}-project_details`} className="block text-sm text-foreground mb-2">Project details</label><textarea id={`${prefix}-project_details`} name="project_details" maxLength={1500} rows={4} className={control} placeholder="Package requirements, dimensions, programme and site constraints" /></div>
    </fieldset>
    <p className="mt-4 text-xs leading-6 text-muted-foreground">Your details are used to handle this enquiry. <Link to="/privacy" className="underline underline-offset-4">Privacy notice</Link></p>
    {error && <p role="alert" className="mt-4 text-sm text-destructive">{error}</p>}
    <Button disabled={busy} type="submit" size="lg" className="mt-5 h-auto min-h-11 whitespace-normal">{busy ? "Saving enquiry…" : "Send enquiry"}<Send size={16} /></Button>
  </form>;
}
function Input({ label, name, prefix, ...props }: { label: string; name: string; prefix: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <div><label htmlFor={`${prefix}-${name}`} className="block text-sm text-foreground mb-2">{label}</label><input id={`${prefix}-${name}`} name={name} className={control} {...props} /></div>;
}
function Select({ label, name, prefix, options, defaultValue = "", required = false }: { label: string; name: string; prefix: string; options: readonly string[]; defaultValue?: string; required?: boolean }) {
  return <div><label htmlFor={`${prefix}-${name}`} className="block text-sm text-foreground mb-2">{label}</label><select id={`${prefix}-${name}`} name={name} defaultValue={defaultValue} required={required} className={control}><option value="">Select an option</option>{options.map(o => <option key={o} value={o}>{o}</option>)}</select></div>;
}