import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export function ContactSection() {
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

          <div className="lg:col-span-3"><EnquiryForm formType="main" /></div>
        </div>
      </div>
    </section>
  );
}
