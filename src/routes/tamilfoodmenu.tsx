import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { Phone, MessageCircle, Search, MapPin, Navigation, ArrowUp } from "lucide-react";

const PHONE_TEL = "+97165220875";
const PHONE_DISPLAY = "+971 6 522 0875";
const WA_NUM = "971544205511";
const WA_DISPLAY = "+971 54 420 5511";
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Fajr+Al+Nahda+Restaurant+Sharjah";

type Item = { name: string; price: number };
type Category = { name: string; icon: string; items: Item[] };

const CATEGORIES: Category[] = [
  {
    name: "Breakfast",
    icon: "🌅",
    items: [
      { name: "Idli Set (3 pcs)", price: 6 },
      { name: "Idli Vada (2 Idli + 1 Vada)", price: 6 },
      { name: "Vada Set (3 pcs)", price: 6 },
      { name: "Sambar Vada", price: 3 },
      { name: "Pongal + Vada", price: 6 },
      { name: "Set Dosa (2 pcs)", price: 6 },
      { name: "Poori Set", price: 7 },
      { name: "Idiyappam (3 pcs)", price: 6 },
      { name: "Plain Roast", price: 5 },
      { name: "Ghee Roast", price: 8 },
      { name: "Onion Roast", price: 8 },
      { name: "Rava Upma", price: 6 },
      { name: "Semiya Kichadi", price: 6 },
      { name: "Mysore Masala Dosa", price: 8 },
      { name: "Masala Dosa", price: 7 },
      { name: "Paper Dosa", price: 10 },
      { name: "Egg Dosa", price: 8 },
      { name: "Onion Uthappam", price: 7 },
      { name: "Tomato Uthappam", price: 7 },
      { name: "Masala Uthappam", price: 7 },
      { name: "Mix Uthappam", price: 8 },
      { name: "Podi Dosa", price: 8 },
      { name: "Ghee Masala Dosa", price: 9 },
    ],
  },
  {
    name: "Special Dosa",
    icon: "🥞",
    items: [
      { name: "Mutton Dosa", price: 14 },
      { name: "Chicken Dosa", price: 10 },
      { name: "Mushroom Dosa", price: 9 },
      { name: "Paneer Dosa", price: 9 },
      { name: "Prawn Dosa", price: 14 },
    ],
  },
  {
    name: "Thali",
    icon: "🍱",
    items: [
      { name: "South Indian Thali Veg", price: 13 },
      { name: "South Indian Thali Chicken/Fish", price: 15 },
      { name: "Variety Rice", price: 10 },
    ],
  },
  {
    name: "Biryani",
    icon: "🍚",
    items: [
      { name: "Chicken 65 Biryani", price: 19 },
      { name: "Chicken Biryani", price: 17 },
      { name: "Mutton Biryani", price: 19 },
      { name: "Egg Biryani", price: 13 },
      { name: "Prawns Biryani", price: 18 },
      { name: "Fish Biryani", price: 17 },
      { name: "Plain Biryani", price: 11 },
    ],
  },
  {
    name: "Fried Rice",
    icon: "🍛",
    items: [
      { name: "Vegetable Fried Rice", price: 12 },
      { name: "Ghee Rice", price: 11 },
      { name: "Jeera Rice", price: 11 },
      { name: "Gobi Fried Rice", price: 13 },
      { name: "Ginger Fried Rice", price: 11 },
      { name: "Egg Fried Rice", price: 13 },
      { name: "Chicken Fried Rice", price: 15 },
      { name: "Mutton Fried Rice", price: 16 },
      { name: "Mix Fried Rice", price: 19 },
      { name: "Schezwan Egg Fried Rice", price: 14 },
      { name: "Schezwan Chicken Fried Rice", price: 16 },
      { name: "Schezwan Mutton Fried Rice", price: 17 },
      { name: "Prawns Fried Rice", price: 19 },
    ],
  },
  {
    name: "Noodles",
    icon: "🍜",
    items: [
      { name: "Veg Noodles", price: 12 },
      { name: "Egg Noodles", price: 13 },
      { name: "Mix Noodles", price: 18 },
      { name: "Chicken Noodles", price: 15 },
      { name: "Mutton Noodles", price: 16 },
      { name: "Prawn Noodles", price: 16 },
      { name: "Schezwan Veg Noodles", price: 13 },
      { name: "Schezwan Egg Noodles", price: 14 },
      { name: "Schezwan Chicken Noodles", price: 16 },
      { name: "Schezwan Mutton Noodles", price: 17 },
    ],
  },
  {
    name: "Dinner",
    icon: "🫓",
    items: [
      { name: "Parotta", price: 1.5 },
      { name: "Parotta Set", price: 6 },
      { name: "Wheat Parotta", price: 2 },
      { name: "Wheat Parotta Set", price: 7 },
      { name: "Chapathi", price: 1 },
      { name: "Chapathi Set", price: 6 },
      { name: "Egg Lappa", price: 7 },
      { name: "Vege Plain Parotta", price: 4 },
      { name: "Egg Vege Parotta", price: 6 },
      { name: "Egg Kothu Parotta", price: 13 },
      { name: "Kothu Parotta Vegetable", price: 12 },
      { name: "Kothu Parotta Chicken", price: 14 },
      { name: "Kothu Parotta Mutton", price: 16 },
      { name: "Kothu Parotta Prawn", price: 17 },
      { name: "Mix Kothu Parotta", price: 16 },
      { name: "Chicken Lappa", price: 10 },
      { name: "Chicken Murtaba", price: 10 },
    ],
  },
  {
    name: "Special Items",
    icon: "⭐",
    items: [
      { name: "Kada 65", price: 12 },
      { name: "Kada Masala", price: 12 },
      { name: "Kada Pepper Dry & Masala", price: 12 },
    ],
  },
  {
    name: "FNR Special",
    icon: "👑",
    items: [
      { name: "Crab Masala", price: 15 },
      { name: "Mutton Liver", price: 13 },
      { name: "Mutton Boti", price: 13 },
      { name: "Mutton Paya", price: 11 },
      { name: "Mutton Head", price: 15 },
      { name: "Chicken 555 Dry", price: 15 },
      { name: "Chicken Chettinadu", price: 15 },
      { name: "Chicken Chinthamani", price: 17 },
      { name: "Chicken Monika Dry", price: 15 },
      { name: "Chicken Maharaja Dry", price: 15 },
      { name: "Chicken Nattukozhi", price: 15 },
      { name: "Squid Roast", price: 15 },
    ],
  },
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export const Route = createFileRoute("/tamilfoodmenu")({
  head: () => ({
    meta: [
      { title: "Fajr Al Nahda Restaurant | Tamil Restaurant in Sharjah" },
      {
        name: "description",
        content:
          "Authentic Tamil, South Indian, Arabian and Chinese Cuisine in Sharjah. Breakfast, Biryani, Dosa, Parotta, Seafood, Monthly Mess and Home Delivery Available.",
      },
      {
        name: "keywords",
        content:
          "Tamil Restaurant Sharjah, South Indian Restaurant Sharjah, Breakfast Sharjah, Biryani Sharjah, Parotta Sharjah, Tamil Food UAE, Monthly Mess Sharjah, Home Delivery Sharjah",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "theme-color", content: "#C62828" },
      { property: "og:title", content: "Fajr Al Nahda Restaurant | Tamil Restaurant in Sharjah" },
      {
        property: "og:description",
        content:
          "Authentic Tamil, South Indian, Arabian & Chinese Cuisine — Al Nahda, Sharjah. Monthly mess and home delivery available.",
      },
      { property: "og:type", content: "restaurant" },
    ],
    links: [
      { rel: "canonical", href: "https://glasseruae.com/tamilfoodmenu" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Yatra+One&family=Poppins:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Fajr Al Nahda Restaurant",
          servesCuisine: ["Tamil", "South Indian", "Arabian", "Chinese"],
          telephone: "+971 6 522 0875",
          url: "https://glasseruae.com/tamilfoodmenu",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Al Nahda",
            addressLocality: "Sharjah",
            addressCountry: "AE",
          },
          hasMenu: {
            "@type": "Menu",
            name: "Fajr Al Nahda Menu",
            hasMenuSection: CATEGORIES.map((c) => ({
              "@type": "MenuSection",
              name: c.name,
              hasMenuItem: c.items.map((i) => ({
                "@type": "MenuItem",
                name: i.name,
                offers: { "@type": "Offer", price: i.price, priceCurrency: "AED" },
              })),
            })),
          },
        }),
      },
    ],
  }),

  component: TamilFoodMenuPage,
});

function TamilFoodMenuPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(CATEGORIES[0].name);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.map((c) => ({
      ...c,
      items: c.items.filter(
        (i) => i.name.toLowerCase().includes(q) || c.name.toLowerCase().includes(q),
      ),
    })).filter((c) => c.items.length > 0);
  }, [query]);

  const jumpTo = (name: string) => {
    setActiveCat(name);
    const el = document.getElementById(`cat-${slug(name)}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 130;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const fmt = (p: number) => (p % 1 === 0 ? p.toFixed(0) : p.toFixed(2));

  return (
    <div
      className="min-h-screen pb-28"
      style={{
        background: "#FFFDF7",
        color: "#222222",
        fontFamily: "'Poppins', system-ui, sans-serif",
      }}
    >
      <style>{`
        .font-display { font-family: 'Yatra One', 'Poppins', serif; letter-spacing: 0.5px; }
        .tamil-pattern {
          background-color: #C62828;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08) 2px, transparent 3px),
            radial-gradient(circle at 80% 50%, rgba(255,152,0,0.18) 2px, transparent 3px),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.08) 2px, transparent 3px);
          background-size: 40px 40px, 60px 60px, 50px 50px;
        }
        .hero-bg {
          background:
            linear-gradient(rgba(198,40,40,0.85), rgba(198,40,40,0.75)),
            url('https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1080&q=70') center/cover;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Hero Header */}
      <header className="hero-bg text-white">
        <div className="max-w-2xl mx-auto px-4 pt-7 pb-6 text-center">
          <div className="mx-auto w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg mb-3">
            <span className="text-4xl">🍛</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight" style={{ color: "#FFFDF7" }}>
            FAJR AL NAHDA
            <br />
            <span style={{ color: "#FF9800" }}>RESTAURANT</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-white/95 italic">
            Authentic Tamil, South Indian,
            <br className="sm:hidden" /> Arabian & Chinese Cuisine
          </p>
          <div className="mt-3 flex items-start justify-center gap-1.5 text-sm text-white/95">
            <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: "#FF9800" }} />
            <span>
              Al Tohira Building, Shop No.2,
              <br className="sm:hidden" /> Al Nahda, Sharjah, UAE
            </span>
          </div>

          {/* Action buttons */}
          <div className="mt-5 grid grid-cols-3 gap-2">
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 rounded-xl bg-white/15 backdrop-blur border border-white/25 py-2.5 px-2 text-xs font-semibold text-white active:scale-95 transition"
            >
              <Navigation size={18} style={{ color: "#FF9800" }} />
              Directions
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex flex-col items-center justify-center gap-1 rounded-xl py-2.5 px-2 text-xs font-bold text-white active:scale-95 transition"
              style={{ background: "#FF9800" }}
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Hi, I'd like to place an order from Fajr Al Nahda Restaurant.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 rounded-xl py-2.5 px-2 text-xs font-bold text-white active:scale-95 transition"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Special Banner */}
      <section className="px-4 -mt-3">
        <div
          className="max-w-2xl mx-auto rounded-2xl shadow-md p-4 border"
          style={{ background: "#F5E6C8", borderColor: "#E8D4A8" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">🍛</span>
            <p className="text-sm font-bold" style={{ color: "#C62828" }}>
              HOME DELIVERY AVAILABLE
            </p>
          </div>
          <div className="border-t pt-3" style={{ borderColor: "rgba(198,40,40,0.2)" }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">🥘</span>
              <p className="text-sm font-bold" style={{ color: "#C62828" }}>
                MONTHLY MESS AVAILABLE
              </p>
            </div>
            <ul className="space-y-1 text-sm" style={{ color: "#222" }}>
              <li className="flex justify-between">
                <span>3 Times Food</span>
                <span className="font-bold" style={{ color: "#C62828" }}>AED 470</span>
              </li>
              <li className="flex justify-between">
                <span>2 Times Food</span>
                <span className="font-bold" style={{ color: "#C62828" }}>AED 370</span>
              </li>
              <li className="flex justify-between">
                <span>1 Time Food</span>
                <span className="font-bold" style={{ color: "#C62828" }}>AED 220</span>
              </li>
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold text-white"
                style={{ background: "#C62828" }}
              >
                <Phone size={13} /> Call to Subscribe
              </a>
              <a
                href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Hi, I'd like to subscribe to your monthly mess plan.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-bold text-white"
                style={{ background: "#25D366" }}
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Search + Category Nav */}
      <div
        className="sticky top-0 z-30 mt-5 tamil-pattern shadow-md"
        style={{ background: "#C62828" }}
      >
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search your favorite food..."
              className="w-full pl-9 pr-4 py-2.5 rounded-full border-0 bg-white text-sm shadow-sm focus:outline-none focus:ring-2"
              style={{ outlineColor: "#FF9800" }}
            />
          </div>
        </div>
        <nav className="max-w-2xl mx-auto px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const isActive = activeCat === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => jumpTo(cat.name)}
                  className={[
                    "shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition active:scale-95 whitespace-nowrap",
                    isActive
                      ? "text-white border-white shadow"
                      : "bg-white/10 text-white/95 border-white/30 hover:bg-white/20",
                  ].join(" ")}
                  style={isActive ? { background: "#FF9800", borderColor: "#FF9800" } : undefined}
                >
                  <span className="mr-1">{cat.icon}</span>
                  {cat.name}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Menu */}
      <main className="max-w-2xl mx-auto px-4 pt-6">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-sm" style={{ color: "#888" }}>
            No items match "{query}".
          </div>
        ) : (
          filtered.map((cat) => (
            <section key={cat.name} id={`cat-${slug(cat.name)}`} className="mb-8 scroll-mt-32">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{cat.icon}</span>
                <h2
                  className="font-display text-xl uppercase tracking-wide"
                  style={{ color: "#C62828" }}
                >
                  {cat.name}
                </h2>
                <div className="flex-1 h-px" style={{ background: "#F5E6C8" }} />
              </div>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white p-3 shadow-sm border"
                    style={{ borderColor: "#F5E6C8" }}
                  >
                    <span className="text-sm sm:text-base min-w-0 flex-1" style={{ color: "#222" }}>
                      {item.name}
                    </span>
                    <span
                      className="text-sm font-bold shrink-0 px-2.5 py-1 rounded-lg"
                      style={{ background: "#F5E6C8", color: "#C62828" }}
                    >
                      AED {fmt(item.price)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </main>

      {/* Footer */}
      <footer
        className="mt-10 pt-8 pb-6 text-center tamil-pattern text-white"
        style={{ background: "#C62828" }}
      >
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="font-display text-xl" style={{ color: "#FF9800" }}>
            FAJR AL NAHDA RESTAURANT
          </h3>
          <p className="text-xs italic mt-1 text-white/90">
            Authentic Tamil, South Indian, Arabian & Chinese Cuisine
          </p>
          <div className="mt-4 space-y-1.5 text-sm">
            <p className="flex items-center justify-center gap-1.5">
              <MapPin size={14} /> Al Nahda, Sharjah, UAE
            </p>
            <p>
              <a href={`tel:${PHONE_TEL}`} className="hover:underline">
                📞 {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a
                href={`https://wa.me/${WA_NUM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                💬 {WA_DISPLAY}
              </a>
            </p>
          </div>
          <p className="text-xs mt-5 text-white/70">
            © 2026 FAJR AL NAHDA RESTAURANT
          </p>
        </div>
      </footer>

      {/* Floating Directions */}
      <a
        href={DIRECTIONS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Directions"
        className="fixed right-4 bottom-24 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-white active:scale-95"
        style={{ background: "#FF9800" }}
      >
        <Navigation size={20} />
      </a>

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed left-4 bottom-24 z-40 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white active:scale-95"
          style={{ background: "#222" }}
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Sticky bottom Call / WhatsApp */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 border-t shadow-2xl"
        style={{ background: "#FFFDF7", borderColor: "#F5E6C8" }}
      >
        <div className="max-w-2xl mx-auto px-3 py-2.5 grid grid-cols-2 gap-2">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white active:scale-95"
            style={{ background: "#C62828" }}
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href={`https://wa.me/${WA_NUM}?text=${encodeURIComponent("Hi, I'd like to place an order from Fajr Al Nahda Restaurant.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white active:scale-95"
            style={{ background: "#25D366" }}
          >
            <MessageCircle size={16} /> WhatsApp Order
          </a>
        </div>
      </div>
    </div>
  );
}
