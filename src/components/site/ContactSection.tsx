import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const WHATSAPP_NUMBER = "971588190839";

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const full_name = String(fd.get("full_name") || "").trim().slice(0, 120);
    const phone = String(fd.get("phone") || "").trim().slice(0, 40);
    const project_location = String(fd.get("project_location") || "").trim().slice(0, 160);
    const project_details = String(fd.get("project_details") || "").trim().slice(0, 1500);

    if (!full_name || !phone) {
      setError("Please enter your full name and mobile number.");
      return;
    }

    setSubmitting(true);
    try {
      const { error: dbErr } = await supabase
        .from("glass_enquiries")
        .insert({ full_name, phone, project_location: project_location || null, project_details: project_details || null });
      if (dbErr) throw dbErr;

      const lines = [
        "New Glass & Aluminium Enquiry – Glasser UAE",
        "",
        `Name: ${full_name}`,
        `Mobile: ${phone}`,
        `Location: ${project_location || "-"}`,
        `Project Details: ${project_details || "-"}`,
        "",
        "Submitted From: https://glasseruae.com/contact",
        `Date: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })}`,
      ].join("\n");

      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`,
        "_blank",
        "noopener",
      );
      setSent(true);
    } catch (err) {
      console.error("enquiry submit failed", err);
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
              { icon: Mail, title: "Email", text: "senthil@glasseruae.com", href: "mailto:senthil@glasseruae.com" },
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
                  Thank you for contacting Glasser UAE. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" name="full_name" required />
                  <Field label="Mobile Number *" name="phone" type="tel" required />
                  <Field label="Project Location" name="project_location" className="sm:col-span-2" />
                  <div className="sm:col-span-2">
                    <label htmlFor="project_details" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">Project Details</label>
                    <textarea
                      id="project_details"
                      name="project_details"
                      rows={4}
                      className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none"
                      placeholder="Glass partition for office, villa glass works, mirror installation, dimensions, timeline, etc."
                    />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : (<>Send Enquiry <Send size={15} /></>)}
                </button>
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
      <input id={name} name={name} type={type} required={required} className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20" />
    </div>
  );
}
