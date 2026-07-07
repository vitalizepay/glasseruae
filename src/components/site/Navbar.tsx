import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/glasser-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/glass-services", label: "Glass Services" },
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock (iOS-safe) + ESC + focus trap
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    // Focus first focusable
    const focusables = () =>
      panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) ?? ([] as unknown as NodeListOf<HTMLElement>);
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const list = Array.from(focusables());
        if (list.length === 0) return;
        const first = list[0];
        const last = list[list.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
      // Restore focus to trigger
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl border-b border-border py-3" : "py-5 bg-white/40 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img src={logo} alt="Glasser Technical Works" className="h-10 w-auto shrink-0" width={120} height={40} />
          <span className="hidden sm:flex flex-col leading-tight min-w-0">
            <span className="font-display text-navy text-base md:text-lg font-semibold tracking-tight truncate">Glasser</span>
            <span className="text-navy/60 text-[10px] md:text-[11px] font-light tracking-[0.18em] uppercase truncate">Technical Works LLC</span>
          </span>
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

        <a
          href="https://wa.me/971568400838?text=Hi%20Glasser%2C%20I%27d%20like%20a%20free%20quote."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-navy text-navy-foreground text-sm font-medium hover:bg-navy/90 transition"
        >
          Get Free Quote
        </a>

        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 text-navy"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile fullscreen drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="absolute inset-0 w-full h-full bg-black/30"
        />
        {/* Panel */}
        <div
          id="mobile-nav"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          data-lenis-prevent
          className={`absolute inset-0 h-[100dvh] w-full overflow-y-auto overscroll-contain bg-white/80 [backdrop-filter:blur(28px)_saturate(180%)] flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <img src={logo} alt="Glasser Technical Works" className="h-9 w-auto" width={120} height={36} />
            </Link>
            <button
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
              className="p-2 rounded-full text-navy hover:bg-navy/5 transition"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-4 rounded-2xl text-2xl font-display text-navy hover:bg-navy/5 transition"
                activeProps={{ className: "bg-navy/5" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-8 pt-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-6 py-4 rounded-full bg-navy text-navy-foreground font-medium hover:bg-navy/90 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
