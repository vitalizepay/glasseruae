import { createFileRoute, Link } from "@tanstack/react-router";
import { queryOptions, useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Building2, CalendarClock, Check, ClipboardList, LogOut, RefreshCw, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getOwnerLeads, updateOwnerLead } from "@/lib/api/enquiries.functions";
import { LEAD_STATUSES, leadUpdateSchema } from "@/lib/enquiries";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { TRACKING_CONFIG } from "@/lib/marketing";

const title = "Private Enquiries & Follow-up | Glasser UAE";
const description = "Owner-only enquiry pipeline and marketing setup for Glasser Technical Works LLC.";
const leadsQuery = (page: number) => queryOptions({ queryKey: ["owner-leads", page], queryFn: () => getOwnerLeads({ data: { page } }), staleTime: 15000 });
export const Route = createFileRoute("/_authenticated/owner")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex,nofollow" }] }),
  loader: ({ context }) => context.queryClient.ensureQueryData(leadsQuery(0)),
  errorComponent: () => <main className="max-w-xl mx-auto px-6 py-24"><h1 className="text-3xl">Owner access required</h1><p className="mt-4 text-muted-foreground leading-7">This account cannot open company enquiries. Access must be granted to the approved company account.</p><div className="mt-6 flex gap-3"><Button variant="outline" onClick={() => void supabase.auth.signOut()}>Sign out</Button><Button asChild><Link to="/">Website</Link></Button></div></main>,
  component: OwnerDashboard,
});
function OwnerDashboard() {
  const [page, setPage] = useState(0);
  const [tab, setTab] = useState<"enquiries" | "marketing">("enquiries");
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const { data } = useSuspenseQuery(leadsQuery(page));
  const queryClient = useQueryClient();
  const rows = data.leads.filter(lead => (!status || lead.status === status) && [lead.full_name, lead.company_name, lead.service_needed, lead.project_location].some(value => value?.toLowerCase().includes(search.toLowerCase())));
  const lead = data.leads.find(item => item.id === selected);
  return <main className="min-h-svh bg-background text-foreground">
    <header className="border-b border-border"><div className="max-w-7xl mx-auto px-5 py-5 flex flex-wrap justify-between items-center gap-4"><Link to="/" className="font-medium">Glasser Technical Works LLC</Link><div className="flex gap-2"><Button asChild variant="ghost"><Link to="/">Website <ArrowRight size={16} /></Link></Button><Button variant="outline" onClick={() => void supabase.auth.signOut()}><LogOut size={16} />Sign out</Button></div></div></header>
    <div className="max-w-7xl mx-auto px-5 py-10">
      <p className="text-xs text-muted-foreground uppercase">Private company workspace</p><div className="flex flex-wrap items-center justify-between gap-4 mt-3"><h1 className="text-4xl md:text-5xl">Enquiries & follow-up</h1><Button variant="outline" onClick={() => void queryClient.invalidateQueries({ queryKey: ["owner-leads"] })}><RefreshCw size={16} />Refresh</Button></div>
      <nav aria-label="Owner views" className="flex gap-2 border-b border-border mt-8 pb-3"><Button variant={tab === "enquiries" ? "default" : "ghost"} onClick={() => setTab("enquiries")}><ClipboardList />Enquiries</Button><Button variant={tab === "marketing" ? "default" : "ghost"} onClick={() => setTab("marketing")}><Building2 />Marketing</Button></nav>
      {tab === "marketing" ? <MarketingOverview leads={data.leads} total={data.total} /> : <>
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-border py-8 gap-6">
          {[["Total stored enquiries", data.total], ["New on this page", data.leads.filter(l => l.status === "New").length], ["Qualified on this page", data.leads.filter(l => l.status === "Qualified").length], ["Won on this page", data.leads.filter(l => l.status === "Won").length]].map(([label, value]) => <div key={label}><p className="text-xs text-muted-foreground">{label}</p><p className="text-3xl font-medium mt-2">{value}</p></div>)}
        </div>
        <div className="flex flex-wrap gap-3 py-6"><input aria-label="Search displayed enquiries" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, company or service" className="border border-input rounded-md px-3 py-2 min-w-0 w-full sm:w-80 bg-background" /><select aria-label="Filter displayed enquiry status" value={status} onChange={e => setStatus(e.target.value)} className="border border-input rounded-md px-3 py-2 bg-background"><option value="">All statuses</option>{LEAD_STATUSES.map(s => <option key={s}>{s}</option>)}</select><span className="self-center text-xs text-muted-foreground">{rows.length} shown · Page {page + 1}</span></div>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8">
          <div className="min-w-0">
            {rows.length ? <div className="overflow-x-auto"><table className="w-full text-sm text-left"><thead><tr className="border-b border-border text-muted-foreground"><th className="py-3 pr-4 font-medium">Enquiry</th><th className="py-3 pr-4 font-medium">Service / location</th><th className="py-3 pr-4 font-medium">Source</th><th className="py-3 font-medium">Status</th></tr></thead><tbody>{rows.map(item => <tr key={item.id} className="border-b border-border"><td className="py-4 pr-4"><Button variant="link" className="px-0 h-auto text-left whitespace-normal justify-start" onClick={() => setSelected(item.id)}>{item.full_name}</Button><p className="text-xs text-muted-foreground mt-1">{item.company_name || item.project_type || "—"}</p><p className="text-xs text-muted-foreground mt-1">{new Date(item.created_at).toLocaleDateString("en-GB", { timeZone: "Asia/Dubai" })}</p></td><td className="py-4 pr-4">{item.service_needed || "Not specified"}<p className="text-xs text-muted-foreground mt-1">{item.project_location || "—"}</p></td><td className="py-4 pr-4">{item.referral_source || "Not recorded"}<p className="text-xs text-muted-foreground mt-1">{item.campaign || ""}</p></td><td className="py-4">{item.status}</td></tr>)}</tbody></table></div> : <div className="border-y border-border py-16 text-center"><ClipboardList className="mx-auto text-muted-foreground" size={30} /><h2 className="text-2xl mt-5">No enquiries to show</h2><p className="text-muted-foreground mt-3 text-sm">{search || status ? "No matches on this page." : "Saved website enquiries will appear here."}</p></div>}
            <div className="flex items-center justify-between gap-3 mt-6"><Button variant="outline" disabled={page === 0} onClick={() => { setPage(p => p - 1); setSelected(null); }}><ArrowLeft />Previous</Button><p className="text-xs text-muted-foreground">{data.total} stored enquiries</p><Button variant="outline" disabled={(page + 1) * 50 >= data.total} onClick={() => { setPage(p => p + 1); setSelected(null); }}>Next <ArrowRight /></Button></div>
          </div>
          <aside className="border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-6">{lead ? <LeadDetail key={lead.id} lead={lead} /> : <p className="text-sm text-muted-foreground leading-7">Select an enquiry to view the project details and record follow-up.</p>}</aside>
        </div>
      </>}
    </div>
  </main>;
}
function LeadDetail({ lead }: { lead: Tables<"glass_enquiries"> }) {
  const update = useServerFn(updateOwnerLead);
  const queryClient = useQueryClient();
  const [status, setStatus] = useState(lead.status);
  const [notes, setNotes] = useState(lead.owner_notes || "");
  const [date, setDate] = useState(lead.follow_up_at ? new Date(lead.follow_up_at).toISOString().slice(0, 16) : "");
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function save(event: React.FormEvent) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const payload = leadUpdateSchema.parse({ id: lead.id, status, owner_notes: notes, follow_up_at: date ? new Date(`${date}:00Z`).toISOString() : null });
      await update({ data: payload }); await queryClient.invalidateQueries({ queryKey: ["owner-leads"] }); setMessage("Follow-up saved");
    } catch { setMessage("Follow-up could not be saved. Please try again."); }
    finally { setBusy(false); }
  }
  return <div><h2 className="text-2xl">{lead.full_name}</h2><p className="text-sm text-muted-foreground mt-2">{lead.company_name || lead.project_type}</p><div className="space-y-3 py-5 text-sm"><p><a href={`tel:${lead.phone}`} className="underline underline-offset-4">{lead.phone}</a></p>{lead.email && <p className="break-all"><a href={`mailto:${lead.email}`} className="underline underline-offset-4">{lead.email}</a></p>}<p>{lead.service_needed} · {lead.project_location}</p>{lead.project_scope && <p>{lead.project_scope}</p>}<p className="whitespace-pre-wrap leading-7">{lead.project_details || "No project message"}</p><dl className="text-xs text-muted-foreground space-y-2"><div><dt>Self-reported source</dt><dd className="text-foreground mt-1">{lead.referral_source || "Not recorded"}</dd></div><div><dt>Visit source / campaign</dt><dd className="text-foreground mt-1">{[lead.traffic_source, lead.traffic_medium, lead.campaign].filter(Boolean).join(" / ") || "Not recorded"}</dd></div><div><dt>Landing / enquiry page</dt><dd className="text-foreground mt-1 break-all">{lead.landing_page || "Not recorded"} / {lead.submitted_page || "Not recorded"}</dd></div></dl></div>
    <form onSubmit={save} className="border-t border-border pt-5 space-y-4"><label className="block text-sm">Status<select value={status} onChange={e => setStatus(e.target.value)} className="w-full border border-input rounded-md px-3 py-2 mt-2 bg-background">{LEAD_STATUSES.map(s => <option key={s}>{s}</option>)}</select></label><label className="block text-sm"><span className="flex items-center gap-2"><CalendarClock size={15} />Follow-up date (UTC)</span><input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} className="w-full min-w-0 border border-input rounded-md px-3 py-2 mt-2 bg-background" /></label><label className="block text-sm">Private notes<textarea value={notes} maxLength={2000} onChange={e => setNotes(e.target.value)} rows={4} className="w-full border border-input rounded-md px-3 py-2 mt-2 bg-background" /></label><Button type="submit" disabled={busy}><Save />{busy ? "Saving…" : "Save follow-up"}</Button>{message && <p role="status" className="text-sm text-muted-foreground">{message}</p>}</form>
  </div>;
}
function MarketingOverview({ leads, total }: { leads: Tables<"glass_enquiries">[]; total: number }) {
  const sources = [...new Set(leads.map(l => l.referral_source || "Not recorded"))];
  return <div className="py-8 space-y-10"><section><h2 className="text-2xl">Stored enquiry sources</h2><p className="text-sm text-muted-foreground mt-2">{total} total enquiries · Breakdown below covers the {leads.length} enquiries on the current page.</p><dl className="mt-5 grid sm:grid-cols-3 gap-6">{sources.map(source => <div key={source} className="border-t border-border pt-4"><dt className="text-sm text-muted-foreground">{source}</dt><dd className="text-3xl mt-2">{leads.filter(l => (l.referral_source || "Not recorded") === source).length}</dd></div>)}</dl></section>
    <section><h2 className="text-2xl">Visitor and click reports</h2><div className="grid sm:grid-cols-3 gap-6 mt-5">{["Visitors", "WhatsApp clicks", "Website conversion rate"].map(label => <div key={label} className="border-t border-border pt-4"><p className="text-sm text-muted-foreground">{label}</p><p className="mt-3 text-lg">Not connected</p></div>)}</div><p className="text-sm text-muted-foreground leading-7 mt-5">The browser-tracking connection sends consented events; it does not provide reporting access. Clicks are not confirmed conversations or sales.</p></section>
    <section><h2 className="text-2xl">Integration readiness</h2><dl className="divide-y divide-border mt-4">{[["Google Analytics browser events", TRACKING_CONFIG.measurementId ? "Configured · consent required" : "Not configured"], ["Google Tag Manager", TRACKING_CONFIG.gtmId ? "Configured · separate tag review required" : "Not configured"], ["Search Console", "Domain verification required"], ["Meta Pixel", "Inactive"], ["LinkedIn Insight Tag", "Inactive"], ["Owner email notifications", "Awaiting sender-domain verification"], ["Apify research", "Not enabled · no paid runs"]].map(([name, state]) => <div key={name} className="py-4 flex flex-wrap justify-between gap-3"><dt className="text-sm">{name}</dt><dd className="text-sm text-muted-foreground flex items-center gap-2">{name === "Google Analytics browser events" && TRACKING_CONFIG.measurementId && <Check size={14} />}{state}</dd></div>)}</dl></section>
  </div>;
}