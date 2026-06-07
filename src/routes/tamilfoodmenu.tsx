import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Phone, MessageCircle, Search, MapPin } from "lucide-react";

const CATEGORIES = [
  {
    name: "Breakfast",
    items: [
      { name: "Idli Set (3 Pcs)", price: 6 },
      { name: "Mini Tiffin", price: 6 },
      { name: "Vada Set (3 Pcs)", price: 6 },
      { name: "Sambar Vada", price: 3 },
      { name: "Poori Masala", price: 6 },
      { name: "Set Dosa", price: 6 },
      { name: "Plain Dosa", price: 4 },
      { name: "Idiyappam", price: 6 },
      { name: "Ghee Roast", price: 8 },
      { name: "Plain Roast", price: 8 },
      { name: "Onion Roast", price: 8 },
      { name: "Rava Roast", price: 8 },
      { name: "Semiya Kichadi", price: 6 },
      { name: "Rava Masala Dosa", price: 8 },
      { name: "Masala Dosa", price: 7 },
      { name: "Onion Dosa", price: 7 },
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
    items: [
      { name: "Chicken Dosa", price: 10 },
      { name: "Mushroom Dosa", price: 9 },
      { name: "Mutton Dosa", price: 14 },
      { name: "Fish Dosa", price: 14 },
      { name: "Prawn Dosa", price: 14 },
    ],
  },
  {
    name: "South Indian Thali",
    items: [
      { name: "Veg Thali", price: 13 },
      { name: "South Indian Thali", price: 15 },
      { name: "Variety Rice + Chicken Curry", price: 10 },
    ],
  },
  {
    name: "Special Dum Biryani",
    items: [
      { name: "Chicken Biryani", price: 17 },
      { name: "Mutton Biryani", price: 19 },
      { name: "Egg Biryani", price: 13 },
      { name: "Fish Biryani", price: 17 },
      { name: "Prawn Biryani", price: 17 },
      { name: "Plain Biryani", price: 11 },
    ],
  },
  {
    name: "Fried Rice",
    items: [
      { name: "Vegetable Fried Rice", price: 12 },
      { name: "Chicken Fried Rice", price: 15 },
      { name: "Egg Fried Rice", price: 13 },
      { name: "Ginger Fried Rice", price: 11 },
      { name: "Gobi Fried Rice", price: 13 },
      { name: "Mutton Fried Rice", price: 16 },
      { name: "Mixed Fried Rice", price: 19 },
      { name: "Schezwan Egg Fried Rice", price: 14 },
      { name: "Schezwan Chicken Fried Rice", price: 17 },
      { name: "Schezwan Mutton Fried Rice", price: 17 },
      { name: "Prawn Fried Rice", price: 19 },
    ],
  },
  {
    name: "Noodles",
    items: [
      { name: "Vegetable Noodles", price: 13 },
      { name: "Egg Noodles", price: 13 },
      { name: "Chicken Noodles", price: 15 },
      { name: "Mutton Noodles", price: 16 },
      { name: "Prawn Noodles", price: 16 },
    ],
  },
  {
    name: "Dinner & Parotta",
    items: [
      { name: "Parotta", price: 1.5 },
      { name: "Parotta Set", price: 2 },
      { name: "Wheat Parotta", price: 1 },
      { name: "Egg Kothu Parotta", price: 13 },
      { name: "Chicken Kothu Parotta", price: 16 },
      { name: "Mutton Kothu Parotta", price: 16 },
      { name: "Mix Kothu Parotta", price: 16 },
    ],
  },
  {
    name: "Vegetable Dishes",
    items: [
      { name: "Green Peas Masala", price: 8 },
      { name: "Gobi 65", price: 13 },
      { name: "Mix Vegetable", price: 8 },
      { name: "Paneer Masala", price: 14 },
      { name: "Mushroom Masala", price: 13 },
      { name: "Kadai Paneer", price: 14 },
      { name: "Butter Paneer", price: 13 },
      { name: "Dal Fry", price: 10 },
    ],
  },
  {
    name: "Chicken Dishes",
    items: [
      { name: "Chicken Chilli", price: 14 },
      { name: "Chicken Curry", price: 14 },
      { name: "Chicken Masala", price: 14 },
      { name: "Chicken 65", price: 14 },
      { name: "Chicken Garlic", price: 14 },
      { name: "Chicken Butter", price: 14 },
      { name: "Chicken Pepper", price: 14 },
    ],
  },
  {
    name: "Mutton Dishes",
    items: [
      { name: "Mutton Curry", price: 16 },
      { name: "Mutton Masala", price: 16 },
      { name: "Mutton Sukka", price: 16 },
      { name: "Mutton Pepper Fry", price: 16 },
    ],
  },
  {
    name: "Seafood",
    items: [
      { name: "Fish Fry", price: 12 },
      { name: "Fish Chilli", price: 14 },
      { name: "Fish Masala", price: 16 },
      { name: "Prawns Masala", price: 16 },
      { name: "Prawns Ginger", price: 16 },
      { name: "Prawns Sukka", price: 16 },
    ],
  },
  {
    name: "Egg Dishes",
    items: [
      { name: "Egg Roast", price: 6 },
      { name: "Egg Curry", price: 6 },
      { name: "Single Omelette", price: 3 },
      { name: "Double Omelette", price: 6 },
      { name: "Half Boil", price: 2 },
      { name: "Egg Kalakki", price: 3 },
    ],
  },
  {
    name: "Soups",
    items: [
      { name: "Vegetable Soup", price: 6 },
      { name: "Chicken Soup", price: 8 },
      { name: "Mutton Soup", price: 7 },
      { name: "Nandu Soup", price: 15 },
    ],
  },
  {
    name: "Hot & Cold Drinks",
    items: [
      { name: "Fresh Milk", price: 1 },
      { name: "Coffee", price: 3 },
      { name: "Tea", price: 1 },
      { name: "Soft Drinks", price: 3 },
      { name: "Badam Milk", price: 3 },
      { name: "Sukku Milk", price: 2 },
    ],
  },
  {
    name: "Chef Special",
    items: [
      { name: "Crab Roast", price: 15 },
      { name: "Mutton Liver", price: 13 },
      { name: "Mutton Brain", price: 13 },
      { name: "Mutton Paya", price: 11 },
      { name: "Chicken 555", price: 15 },
      { name: "Chicken Chettinad", price: 17 },
    ],
  },
];

export const Route = createFileRoute("/tamilfoodmenu")({
  head: () => ({
    meta: [
      { title: "FAJR AL NAHDA RESTAURANT — Tamil, South Indian, Arabian & Chinese Cuisine" },
      { name: "description", content: "Menu for FAJR AL NAHDA RESTAURANT in Al Nahda, Sharjah. Breakfast, Biryani, Fried Rice, Parotta, Chicken, Mutton, Seafood & more." },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#ffffff" },
      { property: "og:title", content: "FAJR AL NAHDA RESTAURANT" },
      { property: "og:description", content: "Authentic Tamil, South Indian, Arabian & Chinese Cuisine — Al Nahda, Sharjah" },
    ],
    links: [{ rel: "canonical", href: "https://glasseruae.com/tamilfoodmenu" }],
  }),
  component: TamilFoodMenuPage,
});

function TamilFoodMenuPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return CATEGORIES;
    const q = query.toLowerCase();
    return CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          cat.name.toLowerCase().includes(q)
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [query]);

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    const el = document.getElementById(`cat-${name}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 116; // offset for sticky header
      window.scrollTo({ top: y, behavior: "instant" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-3xl mx-auto px-4 pt-5 pb-3">
          <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            FAJR AL NAHDA RESTAURANT
          </h1>
          <p className="text-center text-sm sm:text-base text-gray-600 mt-1">
            Authentic Tamil, South Indian, Arabian & Chinese Cuisine
          </p>
          <div className="mt-3 flex flex-col items-center gap-1 text-sm text-gray-700">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-red-600" />
              <span>Al Tohira Building, Shop No. 2, Al Nahda, Sharjah, UAE</span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-1">
              <a href="tel:+97165220875" className="flex items-center gap-1 text-gray-800 hover:text-red-600">
                <Phone size={14} />
                <span>+971 6 522 0875</span>
              </a>
              <a href="https://wa.me/971544205511" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-800 hover:text-green-600">
                <MessageCircle size={14} />
                <span>+971 54 420 5511</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-3xl mx-auto px-4 pb-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search menu items..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Category Nav */}
        <nav className="max-w-3xl mx-auto px-4 pb-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.name;
              const hasResults = filteredCategories.some((c) => c.name === cat.name);
              return (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  disabled={!hasResults && !!query.trim()}
                  className={[
                    "shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition",
                    isActive
                      ? "bg-red-600 text-white border-red-600"
                      : hasResults
                      ? "bg-white text-gray-700 border-gray-300 hover:border-red-500 hover:text-red-600"
                      : "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed",
                  ].join(" ")}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Menu Content */}
      <main className="max-w-3xl mx-auto px-4 pt-6">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-12 text-gray-500 text-sm">
            No items match your search.
          </div>
        ) : (
          filteredCategories.map((cat) => (
            <section
              key={cat.name}
              id={`cat-${cat.name}`}
              className="mb-8 scroll-mt-32"
            >
              <h2 className="text-lg font-bold text-gray-900 border-b-2 border-red-600 pb-1 mb-3 uppercase tracking-wide">
                {cat.name}
              </h2>
              <ul className="divide-y divide-gray-100">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between py-2.5"
                  >
                    <span className="text-sm sm:text-base text-gray-800 pr-4">
                      {item.name}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-red-700 shrink-0 whitespace-nowrap">
                      AED {item.price.toFixed(item.price % 1 !== 0 ? 2 : 0)}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-8 py-6 text-center text-sm text-gray-700">
        <p className="font-semibold text-gray-900">FAJR AL NAHDA RESTAURANT</p>
        <p className="mt-1">Al Tohira Building, Shop No. 2, Al Nahda, Sharjah, UAE</p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a href="tel:+97165220875" className="hover:text-red-600">☎ +971 6 522 0875</a>
          <a href="https://wa.me/971544205511" target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            📱 +971 54 420 5511
          </a>
        </div>
      </footer>

      {/* Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-2.5 flex gap-3">
          <a
            href="tel:+97165220875"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-red-600 text-white py-2.5 text-sm font-semibold hover:bg-red-700"
          >
            <Phone size={16} /> Call
          </a>
          <a
            href="https://wa.me/971544205511"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-green-600 text-white py-2.5 text-sm font-semibold hover:bg-green-700"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
