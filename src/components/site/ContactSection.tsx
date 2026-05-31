import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [sent, setSent] = useState(false);

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
                className="w-full h-56 grayscale contrast-110"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 bg-surface rounded-3xl p-8 md:p-12 border border-border"
          >
            <h3 className="text-2xl font-medium text-navy">Request a free quote</h3>
            <p className="text-muted-foreground mt-2 font-light">We respond within 24 hours.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label htmlFor="service" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">Service Required</label>
                <select id="service" name="service" className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20">
                  {["Frameless Glass Partitions","Aluminium Doors","Aluminium Windows","Shower Enclosures","Custom Mirrors","Glass Facades","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="details" className="block text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-2">Project Details</label>
                <textarea id="details" name="details" rows={4} className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 text-navy focus:outline-none focus:ring-2 focus:ring-navy/20 resize-none" placeholder="Tell us about your space, dimensions, timeline…" />
              </div>
            </div>

            <button type="submit" className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition">
              {sent ? "Thank you — we'll be in touch." : (<>Send Enquiry <Send size={15} /></>)}
            </button>
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
