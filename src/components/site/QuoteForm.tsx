import { useState } from "react";
import { Send } from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
  defaultLocation?: string;
}

export function QuoteForm({ defaultService = "", defaultLocation = "" }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim().slice(0, 100);
    const phone = String(fd.get("phone") || "").trim().slice(0, 30);
    const email = String(fd.get("email") || "").trim().slice(0, 120);
    const service = String(fd.get("service") || "").trim().slice(0, 80);
    const location = String(fd.get("location") || "").trim().slice(0, 80);
    const message = String(fd.get("message") || "").trim().slice(0, 800);

    const text = `New Quote Request%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0AService: ${encodeURIComponent(service)}%0ALocation: ${encodeURIComponent(location)}%0A%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/971568400838?text=${text}`, "_blank", "noopener");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl border border-border bg-surface text-center">
        <h3 className="text-navy text-xl font-medium">Thank you — we'll be in touch shortly.</h3>
        <p className="mt-2 text-muted-foreground text-sm">If WhatsApp didn't open, please call +971 56 840 0838.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 p-6 md:p-8 rounded-2xl border border-border bg-surface">
      <h3 className="text-2xl text-navy font-medium">Get a free quote</h3>
      <p className="text-sm text-muted-foreground -mt-1">Reply within 1 business hour. Free site survey across the UAE.</p>
      <div className="grid sm:grid-cols-2 gap-3 mt-2">
        <input required name="name" aria-label="Full name" placeholder="Full name" maxLength={100} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
        <input required name="phone" aria-label="Phone number" placeholder="Phone (+971…)" maxLength={30} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
      </div>
      <input name="email" type="email" aria-label="Email address" placeholder="Email" maxLength={120} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="service" aria-label="Service required" defaultValue={defaultService} placeholder="Service" maxLength={80} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
        <input name="location" aria-label="Project location" defaultValue={defaultLocation} placeholder="Location" maxLength={80} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />
      </div>
      <textarea name="message" aria-label="Project details" rows={4} placeholder="Project details…" maxLength={800} className="px-4 py-3 rounded-xl border border-border bg-background text-sm" />

      <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition">
        Send request <Send size={14} />
      </button>
    </form>
  );
}
