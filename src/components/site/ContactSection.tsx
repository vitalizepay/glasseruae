import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-orange font-semibold">Get In Touch</span>
          <h2 className="text-4xl md:text-6xl mt-3 text-navy text-balance">Let's design something exceptional</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy text-white rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-orange/20 blur-3xl" />
            <h3 className="text-2xl font-semibold relative">Visit our showroom</h3>
            <p className="text-white/70 mt-2 relative">Walk-ins welcome. We'll show you samples and finishes in person.</p>

            <div className="mt-8 space-y-5 relative">
              {[
                { icon: MapPin, title: "Address", text: "Al Hilal Bldg, Al Nahda St, Al Qusais, Dubai, PO 235485, UAE" },
                { icon: Phone, title: "Phone", text: "+971 56 840 0838", href: "tel:+971568400838" },
                { icon: Mail, title: "Email", text: "sales@glasseruae.com", href: "mailto:sales@glasseruae.com" },
                { icon: Clock, title: "Hours", text: "Sat – Thu · 8:00 AM – 7:00 PM" },
              ].map((c) => (
                <div key={c.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">{c.title}</p>
                    {c.href ? <a href={c.href} className="text-white hover:text-orange">{c.text}</a> : <p className="text-white">{c.text}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 relative">
              <iframe
                title="Glasser UAE Location"
                src="https://maps.google.com/maps?q=Al+Nahda+Al+Qusais+Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-48 grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="glass rounded-3xl p-10 shadow-elegant"
          >
            <h3 className="text-2xl font-semibold text-navy">Request a free quote</h3>
            <p className="text-muted-foreground mt-2">We respond within 24 hours.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
              <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-2">Service Required</label>
                <select className="w-full bg-white/80 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange">
                  {["Frameless Glass Partitions","Glass Doors","Aluminium Doors & Windows","Shower Enclosures","Custom Mirrors","Glass Maintenance","Other"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy mb-2">Project Details</label>
                <textarea rows={4} className="w-full bg-white/80 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange resize-none" placeholder="Tell us about your space, dimensions, timeline…" />
              </div>
            </div>

            <button type="submit" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full gradient-orange text-orange-foreground font-semibold shadow-orange-glow hover:scale-[1.02] transition">
              {sent ? "Thank you — we'll be in touch." : (<>Send Enquiry <Send size={16} /></>)}
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
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-navy mb-2">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full bg-white/80 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange" />
    </div>
  );
}
