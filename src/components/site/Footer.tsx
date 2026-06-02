import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/glasser-logo.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground relative overflow-hidden">
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden>
        <path d="M0,30 C360,60 720,0 1440,30 L1440,0 L0,0 Z" fill="var(--background)" />
      </svg>
      <div className="container mx-auto px-6 pt-32 pb-10">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Glasser Technical Works LLC logo" className="h-12 bg-white rounded-md p-1 w-auto mb-4" />
            <p className="text-sm text-white/70 leading-relaxed">
              Dubai's trusted glass &amp; aluminium specialists. Premium installations across the UAE since 2019.
            </p>
            <div className="flex gap-3 mt-5">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full glass-dark flex items-center justify-center hover:bg-orange hover:text-orange-foreground transition" aria-label="social">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {[["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/projects", "Projects"], ["/blog", "Blog"], ["/contact", "Contact"]].map(([to, label]) => (
                <li key={to}><Link to={to} className="hover:text-orange">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-orange">Services</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {([
                ["Glass Partitions", "/services/frameless-glass-partitions-dubai"],
                ["Frameless Glass", "/services/frameless-glass-partitions-dubai"],
                ["Aluminium Doors", "/services/aluminium-doors-dubai"],
                ["Aluminium Windows", "/services/aluminium-windows-dubai"],
                ["Shower Enclosures", "/services/shower-enclosures-dubai"],
                ["Custom Mirrors", "/services/custom-mirrors-dubai"],
              ] as const).map(([label, to]) => (
                <li key={label}><Link to={to} className="hover:text-orange">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-orange">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><Phone size={16} className="text-orange shrink-0 mt-0.5" /><a href="tel:+971568400838">+971 56 840 0838</a></li>
              <li className="flex gap-3"><Mail size={16} className="text-orange shrink-0 mt-0.5" /><a href="mailto:sales@glasseruae.com">sales@glasseruae.com</a></li>
              <li className="flex gap-3"><MapPin size={16} className="text-orange shrink-0 mt-0.5" /><span>Al Hilal Bldg, Al Nahda St, Al Qusais, Dubai, PO 235485, UAE</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/80">
          <p>© {new Date().getFullYear()} Glasser Technical Works LLC. All rights reserved.</p>
          <p>Dubai · Abu Dhabi · Sharjah · Ajman · UAE</p>
        </div>
      </div>
    </footer>
  );
}
