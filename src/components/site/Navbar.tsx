import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/glasser-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-border py-3" : "py-5 bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Glasser Technical Works" className="h-10 w-auto" width={120} height={40} />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-navy/70 hover:text-navy transition-colors relative group"
              activeProps={{ className: "text-navy" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-navy transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:bg-navy/90 transition"
        >
          Get Free Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-navy"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border mt-3 mx-4 rounded-2xl p-3 flex flex-col gap-1 shadow-soft">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-navy hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-navy text-navy-foreground text-center font-medium"
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
