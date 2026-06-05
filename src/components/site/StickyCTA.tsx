import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
      <div className="flex gap-2 rounded-full bg-navy/95 backdrop-blur-md p-2 shadow-elegant border border-white/10">
        <Link
          to="/contact"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-orange text-orange-foreground text-xs font-semibold"
        >
          <FileText size={14} /> Quote
        </Link>
        <a
          href="tel:+971568400838"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold"
        >
          <Phone size={14} /> Call
        </a>
        <a
          href="https://wa.me/971568400838"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold"
        >
          <MessageCircle size={14} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
