import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Index" },
  { to: "/about", label: "Studio" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Journal" },
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
        scrolled
          ? "bg-paper/85 backdrop-blur-xl border-b border-foreground/10 py-3"
          : "py-5 bg-paper/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-display italic text-2xl leading-none text-ink tracking-[-0.03em] group-hover:opacity-70 transition-opacity">
            Glasser
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-medium">
            Dubai
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] uppercase tracking-[0.25em] font-medium text-foreground/70 hover:text-ink transition-colors relative group"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center text-[11px] uppercase tracking-[0.25em] font-medium text-ink pb-1 border-b border-ink hover:opacity-60 transition-opacity"
        >
          Free Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-paper border-t border-foreground/10 mt-3 mx-4 p-4 flex flex-col gap-1 shadow-soft">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 text-[11px] uppercase tracking-[0.25em] text-ink hover:bg-surface"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-ink text-paper text-[11px] uppercase tracking-[0.25em] text-center font-medium"
          >
            Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}
