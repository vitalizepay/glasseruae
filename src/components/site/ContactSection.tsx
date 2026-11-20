import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { enquiryInsert, enquirySchema, enquiryWhatsAppUrl, REFERRAL_SOURCES } from "@/lib/enquiries";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message || "Please check your enquiry details.");
      return;
    }
    const url = enquiryWhatsAppUrl(parsed.data);
    // Reserve a tab during the click, before saving, to avoid async popup blocking.
    const handoff = window.open("about:blank", "_blank");
    if (handoff) handoff.opener = null;
    setSubmitting(true);
    try {
      const { error: dbErr } = await supabase
        .from("glass_enquiries")
        .insert(enquiryInsert(parsed.data));
      if (dbErr) throw dbErr;
      setWhatsappUrl(url);
      if (handoff) handoff.location.replace(url);
      setSent(true);
    } catch {
      handoff?.close();
      setError("Could not submit right now. Please call +971 56 840 0838.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 md:py-36 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Get in touch</span>
          <h2 className="text-4xl md:text-6xl mt-4 text-navy text-balance font-light">Plan your project with us</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: MapPin, title: "Address", text: "Al Hilal Bldg, Al Nahda St, Al Qusais, Dubai, PO 235485, UAE" },
              { icon: Phone, title: "Phone", text: "+971 56 840 0838", href: "tel:+971568400838" },
              { icon: Mail, title: "Email", text: "sales@glasseruae.com", href: "mailto:sales@glasseruae.com" },
              { icon: Clock, title: "Hours", text: "Saturday – Thursday · 8:00 AM – 7:00 PM" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 pb-8 border-b border-border last:border-b-0">
                <div className="w-11 h-11 rounded-full bg-stone flex items-center justify-center text-navy shrink-0">
                  <c.icon size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{c.title}</p>
                  {c.href ? (
                    <a href={c.href} className="text-navy hover:text-orange text-lg font-light">{c.text}</a>
                  ) : (
                    <p className="text-navy text-lg font-light leading-snug">{c.text}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Glasser UAE Location"
                src="https://maps.google.com/maps?q=Al+Nahda+Al+Qusais+Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-56"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-surface rounded-3xl p-8 md:p-12 border border-border"
          >
            <h3 className="text-2xl font-medium text-navy">Request a free quote</h3>
            <p className="text-muted-foreground mt-2 font-light">We respond within 24 hours.</p>

            {sent ? (
              <div className="mt-8 p-6 rounded-2xl border border-border bg-white">
                <p className="text-navy text-lg font-light">
                  Your enquiry is saved. Send the prepared message in WhatsApp to contact Glasser UAE.
                </p>
                {whatsappUrl && <Button asChild className="mt-4"><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Continue to WhatsApp <Send size={15} /></a></Button>}
              </div>
            ) : (
              <>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" name="full_name" required />
                  <Field label="Mobile Number *" name="phone" type="tel" required />
                  <div>
                    <label htmlFor="service_needed" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">Service Needed</label>
                    <select id="service_needed" name="service_needed" defaultValue="" className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20">
                      <option value="" disabled>Select a service</option>
                      <option>Frameless Glass Partitions</option>
                      <option>Office Glass Partitions</option>
                      <option>Shower Enclosures</option>
                      <option>Aluminium Doors</option>
                      <option>Aluminium Windows</option>
                      <option>Glass Facades</option>
                      <option>Custom Mirrors</option>
                      <option>Glass Shopfront</option>
                      <option>Glass Railing</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="project_location" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">Project Location</label>
                    <select id="project_location" name="project_location" defaultValue="" className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20">
                      <option value="" disabled>Select a location</option>
                      <option>Dubai</option>
                      <option>Sharjah</option>
                      <option>Abu Dhabi</option>
                      <option>Ajman</option>
                      <option>Ras Al Khaimah</option>
                      <option>Fujairah</option>
                      <option>Umm Al Quwain</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="referral_source" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">How did you find us? *</label>
                    <select id="referral_source" name="referral_source" required defaultValue="" className="w-full bg-background border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20">
                      <option value="" disabled>Select an option</option>
                      {REFERRAL_SOURCES.map(source => <option key={source} value={source}>{source}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="project_details" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">Project Details</label>
                    <textarea
                      id="project_details"
                      name="project_details"
                      rows={4}
                      maxLength={1500}
                      className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
                      placeholder="Glass partition for office, villa glass works, mirror installation, dimensions, timeline, etc."
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 text-sm text-red-600">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : (<>Send Enquiry <Send size={15} /></>)}
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "" }: { label: string; name: string; type?: string; required?: boolean; className?: string }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} maxLength={name === "full_name" ? 120 : 40} className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20" />
    </div>
  );
}
