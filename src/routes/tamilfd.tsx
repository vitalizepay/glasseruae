import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Lenis from "lenis";

import biryani from "@/assets/biryani.jpg";
import dosa from "@/assets/dosa.jpg";
import idli from "@/assets/idli.jpg";
import muttonBiryani from "@/assets/mutton-biryani.jpg";
import chettinad from "@/assets/chettinad.jpg";
import noodles from "@/assets/noodles.jpg";
import crab from "@/assets/crab.jpg";
import parotta from "@/assets/parotta.jpg";
import steam from "@/assets/steam.jpg";
import thali from "@/assets/thali.jpg";
import friedRice from "@/assets/fried-rice.jpg";
import chickenCurry from "@/assets/chicken-curry.jpg";
import paneer from "@/assets/paneer.jpg";
import egg from "@/assets/egg.jpg";
import soup from "@/assets/soup.jpg";
import chai from "@/assets/chai.jpg";
import muttonCurry from "@/assets/mutton-curry.jpg";
import fish from "@/assets/fish.jpg";

const CATEGORIES = [
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
      { property: "og:type", content: "website" },
      { property: "og:image", content: biryani },
      { name: "twitter:image", content: biryani },
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

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
}

function Steam({ count = 14 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="steam-particle absolute bottom-0 block h-24 w-24 rounded-full bg-[oklch(0.95_0.04_80/0.18)] blur-3xl"
          style={{
            left: `${(i / count) * 100 + Math.random() * 5}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${5 + Math.random() * 4}s`,
          }}
        />
      ))}
    </div>
  );
}

function TamilFoodMenuPage() {
  useLenis();
  return (
    <div className="restaurant-page grain relative bg-background text-foreground">
      <Nav />
      <Hero />
      <FullMenu />
      <Services />
      <NahdaBiryani />
      <DosaShowcase />
      <ScrollFoodJourney />
      <MessPlans />
      <ChefSpecials />
      <Testimonials />
      <FinalContact />
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
      <div className="font-display text-sm tracking-[0.35em] text-gold uppercase">
        Fajr · Al Nahda
      </div>
      <a
        href="tel:+97165220875"
        className="hidden text-xs tracking-[0.3em] text-foreground/70 hover:text-gold uppercase md:block transition-colors"
      >
        +971 6 522 0875
      </a>
    </header>
  );
}

/* ---------- SECTION 1: HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={biryani}
          alt="Steaming chicken biryani in a copper pot"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.012_60/0.85)_85%)]" />
      </motion.div>
      <Steam count={18} />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 text-[10px] tracking-[0.5em] text-gold/80 uppercase md:text-xs"
        >
          Est · Al Nahda · Sharjah
        </motion.p>

        <h1 className="font-display leading-[0.85] text-balance">
          {["FAJR", "AL", "NAHDA"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.4, delay: 0.4 + i * 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="block text-[18vw] font-light text-foreground md:text-[14vw]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="mt-10 max-w-xl text-sm tracking-[0.3em] text-foreground/70 uppercase md:text-base"
        >
          Tamil · South Indian · Arabian · Chinese
        </motion.p>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] tracking-[0.4em] text-gold/70 uppercase">Scroll</span>
            <div className="scroll-indicator h-12 w-px bg-gradient-to-b from-gold to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- SECTION 3: Services ---------- */
function Services() {
  const cards = [
    { title: "Home Delivery", subtitle: "Available across Al Nahda", desc: "Hot, fresh and delivered to your door within minutes." },
    { title: "Monthly Mess", subtitle: "From AED 220", desc: "Subscribe to authentic home-style meals every single day." },
  ];
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-ember)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-display mb-20 text-center text-5xl leading-tight text-foreground md:text-7xl"
        >
          More than a restaurant <br />
          <span className="italic text-gold">an everyday ritual.</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/40 p-10 backdrop-blur-xl md:p-14"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" style={{ background: "var(--gradient-ember)" }} />
              <p className="text-xs tracking-[0.4em] text-gold uppercase">{c.subtitle}</p>
              <h3 className="font-display mt-4 text-4xl text-foreground md:text-6xl">{c.title}</h3>
              <p className="mt-6 max-w-md text-base text-foreground/60">{c.desc}</p>
              <div className="mt-10 h-px w-16 bg-gold transition-all duration-700 group-hover:w-32" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4: NAHDA biryani ---------- */
function NahdaBiryani() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const leftX = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "-60%"]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "60%"]);
  const imgScale = useTransform(scrollYProgress, [0.2, 0.7], [0.7, 1.1]);
  const imgOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  const list = ["Chicken Biryani", "Mutton Biryani", "Chicken 65 Biryani", "Prawns Biryani", "Fish Biryani"];

  return (
    <section ref={ref} className="relative h-[250vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.div style={{ scale: imgScale, opacity: imgOpacity }} className="absolute inset-0">
          <img src={muttonBiryani} alt="Premium biryani" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/40" />
        </motion.div>

        <div className="relative flex w-full items-center justify-center">
          <motion.span style={{ x: leftX }} className="font-display text-[24vw] font-light leading-none text-foreground">
            NA
          </motion.span>
          <motion.span style={{ x: rightX }} className="font-display text-[24vw] font-light leading-none text-foreground">
            HDA
          </motion.span>
        </div>

        <div className="absolute inset-x-0 bottom-16 px-6 text-center">
          <p className="font-display text-2xl italic text-gold md:text-4xl">Sharjah's Favorite Biryani</p>
        </div>
      </div>

      <div className="relative pt-32 pb-40 md:pt-48">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-10 text-center text-[10px] tracking-[0.5em] text-gold/70 uppercase md:mb-16">The Biryani Collection</p>
          <ul className="space-y-6 md:space-y-10">
            {list.map((dish, i) => (
              <motion.li
                key={dish}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline justify-between gap-6 border-b border-gold/20 pb-4"
              >
                <span className="font-display text-3xl text-foreground md:text-6xl">{dish}</span>
                <span className="text-xs tracking-[0.3em] text-gold/60 uppercase">0{i + 1}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- FULL MENU (cinematic, image swaps on scroll) ---------- */

type MenuItem = { name: string; price: string };
type MenuCategory = { id: string; title: string; tagline: string; img: string; items: MenuItem[] };

const MENU: MenuCategory[] = [
  {
    id: "breakfast",
    title: "Breakfast",
    tagline: "The morning ritual",
    img: idli,
    items: [
      { name: "Idli Set (3 pcs)", price: "6" },
      { name: "Idli Vada (2 Idli + 1 Vada)", price: "6" },
      { name: "Vada Set (3 pcs)", price: "6" },
      { name: "Sambar Vada", price: "3" },
      { name: "Pongal + Vada", price: "6" },
      { name: "Set Dosa (2 pcs)", price: "6" },
      { name: "Poori Set", price: "7" },
      { name: "Idiyappam (3 pcs)", price: "6" },
      { name: "Rava Upma", price: "6" },
      { name: "Semiya Kichadi", price: "6" },
      { name: "Plain Roast", price: "5" },
      { name: "Ghee Roast", price: "8" },
      { name: "Onion Roast", price: "8" },
      { name: "Masala Dosa", price: "7" },
      { name: "Mysore Masala Dosa", price: "8" },
      { name: "Ghee Masala Dosa", price: "9" },
      { name: "Paper Dosa", price: "10" },
      { name: "Podi Dosa", price: "8" },
      { name: "Egg Dosa", price: "8" },
      { name: "Onion Uthappam", price: "7" },
      { name: "Tomato Uthappam", price: "7" },
      { name: "Masala Uthappam", price: "7" },
      { name: "Mix Uthappam", price: "8" },
    ],
  },
  {
    id: "special-dosa",
    title: "Special Dosa",
    tagline: "Crisp. Folded. Iconic.",
    img: dosa,
    items: [
      { name: "Mutton Dosa", price: "14" },
      { name: "Chicken Dosa", price: "10" },
      { name: "Prawn Dosa", price: "14" },
      { name: "Paneer Dosa", price: "9" },
      { name: "Mushroom Dosa", price: "9" },
    ],
  },
  {
    id: "thali",
    title: "Thali · Lunch",
    tagline: "A complete south Indian moment",
    img: thali,
    items: [
      { name: "South Indian Thali (Veg)", price: "13" },
      { name: "South Indian Thali (Chicken / Fish)", price: "15" },
      { name: "Variety Rice", price: "10" },
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    tagline: "Sharjah's favorite",
    img: biryani,
    items: [
      { name: "Chicken Biryani", price: "17" },
      { name: "Chicken 65 Biryani", price: "19" },
      { name: "Mutton Biryani", price: "19" },
      { name: "Prawns Biryani", price: "18" },
      { name: "Fish Biryani", price: "17" },
      { name: "Egg Biryani", price: "13" },
      { name: "Plain Biryani", price: "11" },
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    tagline: "Wok-fired aromatics",
    img: friedRice,
    items: [
      { name: "Vegetable Fried Rice", price: "12" },
      { name: "Ghee Rice", price: "11" },
      { name: "Jeera Rice", price: "11" },
      { name: "Gobi Fried Rice", price: "13" },
      { name: "Ginger Fried Rice", price: "11" },
      { name: "Egg Fried Rice", price: "13" },
      { name: "Chicken Fried Rice", price: "15" },
      { name: "Mutton Fried Rice", price: "16" },
      { name: "Prawns Fried Rice", price: "19" },
      { name: "Mix Fried Rice", price: "19" },
      { name: "Schezwan Egg Fried Rice", price: "14" },
      { name: "Schezwan Chicken Fried Rice", price: "16" },
      { name: "Schezwan Mutton Fried Rice", price: "17" },
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    tagline: "Tossed at high heat",
    img: noodles,
    items: [
      { name: "Veg Noodles", price: "12" },
      { name: "Egg Noodles", price: "13" },
      { name: "Chicken Noodles", price: "15" },
      { name: "Mutton Noodles", price: "16" },
      { name: "Prawn Noodles", price: "16" },
      { name: "Mix Noodles", price: "18" },
      { name: "Schezwan Veg Noodles", price: "13" },
      { name: "Schezwan Egg Noodles", price: "14" },
      { name: "Schezwan Chicken Noodles", price: "16" },
      { name: "Schezwan Mutton Noodles", price: "17" },
    ],
  },
  {
    id: "dinner",
    title: "Dinner · Parotta",
    tagline: "Flaky layers, late-night soul",
    img: parotta,
    items: [
      { name: "Parotta", price: "1.50" },
      { name: "Parotta Set (2 pcs)", price: "6" },
      { name: "Wheat Parotta", price: "2" },
      { name: "Wheat Parotta Set", price: "7" },
      { name: "Chapathi", price: "1" },
      { name: "Chapathi Set (2 pcs)", price: "6" },
      { name: "Bun Parotta Set (2 pcs)", price: "7" },
      { name: "Vege Plain Parotta", price: "4" },
      { name: "Egg Vege Parotta", price: "6" },
      { name: "Egg Lappa", price: "7" },
      { name: "Chicken Lappa", price: "10" },
      { name: "Chicken Murtaba", price: "10" },
      { name: "Kothu Parotta Vegetable", price: "12" },
      { name: "Egg Kothu Parotta", price: "13" },
      { name: "Kothu Parotta Chicken", price: "14" },
      { name: "Kothu Parotta Mutton", price: "16" },
      { name: "Kothu Parotta Prawn", price: "17" },
      { name: "Mix Kothu Parotta", price: "16" },
      { name: "Chilli Parotta Vegetable", price: "12" },
      { name: "Chilli Parotta Chicken", price: "14" },
      { name: "Chilli Parotta Mutton", price: "16" },
    ],
  },
  {
    id: "veg",
    title: "Vegetable",
    tagline: "Garden to flame",
    img: paneer,
    items: [
      { name: "Green Peas Masala", price: "8" },
      { name: "Chana Masala", price: "8" },
      { name: "Mix Vegetable", price: "8" },
      { name: "Dal Fry", price: "10" },
      { name: "Dal Kichadi", price: "10" },
      { name: "Dal Tadka", price: "12" },
      { name: "Gobi Masala", price: "13" },
      { name: "Gobi 65", price: "13" },
      { name: "Gobi Manchurian Dry", price: "13" },
      { name: "Gobi Manchurian Gravy", price: "13" },
      { name: "Chilli Gobi Dry", price: "13" },
      { name: "Chilli Gobi Gravy", price: "13" },
      { name: "Mushroom Masala", price: "13" },
      { name: "Mushroom Chilli", price: "13" },
      { name: "Mushroom Manchurian", price: "14" },
      { name: "Mutter Paneer", price: "13" },
      { name: "Kadai Paneer", price: "14" },
      { name: "Butter Paneer", price: "14" },
      { name: "Paneer Masala", price: "14" },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    tagline: "Slow spice, deep heat",
    img: chickenCurry,
    items: [
      { name: "Chicken Curry", price: "14" },
      { name: "Chicken Masala", price: "14" },
      { name: "Chicken Roast Dry", price: "14" },
      { name: "Chicken Chilly Dry", price: "14" },
      { name: "Chicken Chilly Gravy", price: "14" },
      { name: "Chicken 65", price: "14" },
      { name: "Chicken 65 Boneless", price: "14" },
      { name: "Chicken Pallipalayam", price: "14" },
      { name: "Chicken Sukka", price: "14" },
      { name: "Chicken Kadai (Indian Style)", price: "14" },
      { name: "Chicken Garlic", price: "14" },
      { name: "Chicken Pepper", price: "14" },
      { name: "Chicken Butter Gravy", price: "14" },
      { name: "Chicken Manchurian", price: "14" },
    ],
  },
  {
    id: "mutton",
    title: "Mutton",
    tagline: "Bold, slow-cooked, untamed",
    img: muttonCurry,
    items: [
      { name: "Mutton Curry", price: "16" },
      { name: "Mutton Masala", price: "16" },
      { name: "Mutton Sukka", price: "16" },
      { name: "Mutton Kadai", price: "16" },
      { name: "Mutton Pepper Fry", price: "16" },
      { name: "Mutton Pepper Gravy", price: "16" },
      { name: "Mutton Chilli", price: "16" },
      { name: "Mutton Chettinadu", price: "17" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    tagline: "From coast to clay",
    img: fish,
    items: [
      { name: "Fish Masala", price: "12" },
      { name: "Fish Chilly (Dry / Gravy)", price: "14" },
      { name: "Fish Manchurian (Gravy)", price: "15" },
      { name: "Nethili Fish Fry", price: "12" },
      { name: "Prawns Masala", price: "16" },
      { name: "Prawns 65", price: "16" },
      { name: "Prawns Ginger", price: "16" },
      { name: "Prawns Sukka", price: "16" },
      { name: "Fish Fry (King Fish)", price: "—" },
      { name: "Sherry Fry", price: "—" },
      { name: "Ayala Fish Fry", price: "—" },
    ],
  },
  {
    id: "egg",
    title: "Egg",
    tagline: "Simple. Sizzling.",
    img: egg,
    items: [
      { name: "Single Omelette", price: "3" },
      { name: "Double Omelette", price: "6" },
      { name: "Half Boil", price: "2" },
      { name: "Boiled Egg", price: "2" },
      { name: "Kalakki", price: "3" },
      { name: "Onion Kalakki", price: "3" },
      { name: "Egg Roast", price: "4 / 8" },
      { name: "Egg Masala", price: "4 / 8" },
      { name: "Egg Bhurji", price: "6" },
    ],
  },
  {
    id: "soup",
    title: "Soup",
    tagline: "Warmth in a bowl",
    img: soup,
    items: [
      { name: "Vegetable Soup", price: "6" },
      { name: "Chicken Soup", price: "6" },
      { name: "Mutton Soup", price: "7" },
      { name: "Nandu Soup", price: "15" },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    tagline: "Pour. Pause. Repeat.",
    img: chai,
    items: [
      { name: "Tea", price: "1 / 2" },
      { name: "Sukku Coffee", price: "2" },
      { name: "Coffee Fresh Milk", price: "3" },
      { name: "Badam Milk (Hot)", price: "3" },
      { name: "Soft Drinks", price: "3" },
      { name: "Mineral Water (Small / Large)", price: "1 / 2" },
    ],
  },
  {
    id: "fnr",
    title: "FNR Special",
    tagline: "The house signatures",
    img: crab,
    items: [
      { name: "Crab Masala (Nandu)", price: "15" },
      { name: "Mutton Liver", price: "13" },
      { name: "Mutton Boti", price: "13" },
      { name: "Mutton Paya", price: "11" },
      { name: "Mutton Head", price: "15" },
      { name: "Chicken 555 Dry", price: "15" },
      { name: "Chicken Chettinadu", price: "15" },
      { name: "Chicken Chinthamani", price: "17" },
      { name: "Chicken Monika Dry", price: "15" },
      { name: "Chicken Maharaja Dry", price: "15" },
      { name: "Chicken Nattukozhi", price: "15" },
      { name: "Squid Roast (Kanava)", price: "15" },
    ],
  },
];

function FullMenu() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number((entry.target as HTMLElement).dataset.index);
            setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-background">
      {/* Intro */}
      <div className="relative overflow-hidden py-32 text-center md:py-48">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-ember)" }} />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="text-[10px] tracking-[0.5em] text-gold uppercase">The Full Menu</p>
          <h2 className="font-display mt-6 text-5xl leading-[0.9] md:text-8xl">
            Every craving, <br />
            <span className="italic text-gold">answered.</span>
          </h2>
          <p className="mt-8 text-sm tracking-[0.25em] text-foreground/60 uppercase">All prices in AED · Dine-in · Delivery</p>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-0 px-6 pb-40 md:grid-cols-2 md:px-12 md:gap-16">
        {/* Sticky image panel */}
        <div className="hidden md:block">
          <div className="sticky top-24 h-[80vh] overflow-hidden rounded-sm">
            {MENU.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={false}
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.05 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img src={cat.img} alt={cat.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-10">
                  <p className="text-[10px] tracking-[0.5em] text-gold uppercase">0{i + 1} / {MENU.length}</p>
                  <p className="font-display mt-3 text-5xl leading-none text-foreground">{cat.title}</p>
                  <p className="font-display mt-2 text-xl italic text-gold/80">{cat.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-32 md:space-y-40">
          {MENU.map((cat, i) => (
            <div
              key={cat.id}
              data-index={i}
              ref={(el) => { sectionRefs.current[i] = el; }}
              className="scroll-mt-24"
            >
              {/* Mobile image */}
              <div className="relative mb-8 aspect-[4/5] overflow-hidden rounded-sm md:hidden">
                <img src={cat.img} alt={cat.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] tracking-[0.5em] text-gold uppercase">0{i + 1}</p>
                  <p className="font-display mt-2 text-4xl text-foreground">{cat.title}</p>
                </div>
              </div>

              <div className="hidden md:block">
                <p className="text-[10px] tracking-[0.5em] text-gold uppercase">0{i + 1} · Section</p>
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display mt-3 text-6xl leading-none text-foreground"
                >
                  {cat.title}
                </motion.h3>
                <p className="font-display mt-3 text-xl italic text-gold/80">{cat.tagline}</p>
                <div className="mt-8 h-px w-20 bg-gold" />
              </div>

              <ul className="mt-8 space-y-4">
                {cat.items.map((item, idx) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: Math.min(idx, 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-baseline gap-4 border-b border-gold/10 pb-3"
                  >
                    <span className="font-display text-lg text-foreground/90 transition-colors group-hover:text-gold md:text-2xl">
                      {item.name}
                    </span>
                    <span className="flex-1 translate-y-[-4px] border-b border-dotted border-gold/20" />
                    <span className="font-display text-base text-gold md:text-xl tabular-nums">
                      {item.price}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 5: DOSA showcase ---------- */
function DosaShowcase() {
  const items = ["Mutton Dosa", "Chicken Dosa", "Paneer Dosa", "Prawn Dosa", "Mushroom Dosa"];
  const images = [dosa, chettinad, dosa, noodles, dosa];

  return (
    <section className="relative bg-background">
      {items.map((name, i) => (
        <DosaSlide key={name} name={name} img={images[i]} index={i} />
      ))}
    </section>
  );
}

function DosaSlide({ name, img, index }: { name: string; img: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1]);
  const isReverse = index % 2 === 1;

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={img} alt={name} loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-background/55" />
      </motion.div>
      <motion.div
        style={{ y }}
        className={`relative flex h-full items-center px-6 md:px-20 ${isReverse ? "justify-end text-right" : ""}`}
      >
        <div>
          <p className="text-[10px] tracking-[0.5em] text-gold/70 uppercase">Dosa Collection · 0{index + 1}</p>
          <h3 className="font-display mt-4 text-7xl leading-none text-foreground md:text-[12rem]">
            {name.split(" ")[0]}
          </h3>
          <h3 className="font-display -mt-4 text-7xl italic leading-none text-gold md:text-[12rem]">
            {name.split(" ")[1]}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- SECTION 6: Scroll Food journey ---------- */
function ScrollFoodJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const items = [
    { name: "Fried Rice", img: noodles },
    { name: "Noodles", img: noodles },
    { name: "Parotta", img: parotta },
    { name: "Kothu Parotta", img: parotta },
    { name: "Chapathi", img: parotta },
  ];

  return (
    <section ref={ref} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mb-12 px-6 md:px-20">
          <p className="text-[10px] tracking-[0.5em] text-gold/70 uppercase">An immersive food journey</p>
          <h2 className="font-display mt-2 text-5xl text-foreground md:text-7xl">
            Course <span className="italic text-gold">by course.</span>
          </h2>
        </div>
        <motion.div style={{ x }} className="flex gap-6 px-6 md:gap-12 md:px-20">
          {items.map((it) => (
            <div key={it.name} className="relative h-[60vh] w-[80vw] flex-shrink-0 overflow-hidden rounded-sm md:w-[55vw]">
              <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="font-display text-4xl text-foreground md:text-7xl">{it.name}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- SECTION 7: Mess Plans ---------- */
function MessPlans() {
  const plans = [
    { num: 470, title: "3 Times Food", desc: "Breakfast, Lunch & Dinner — daily." },
    { num: 370, title: "2 Times Food", desc: "Lunch & Dinner — every day of the month." },
    { num: 220, title: "1 Time Food", desc: "Choose either lunch or dinner." },
  ];

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-center text-[10px] tracking-[0.5em] text-gold uppercase">Monthly Mess Plans</p>
        <h2 className="font-display mt-4 text-center text-5xl leading-tight md:text-7xl">
          Every day, <span className="italic text-gold">handled.</span>
        </h2>

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          {plans.map((p, i) => (
            <PlanCard key={p.num} plan={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index }: { plan: { num: number; title: string; desc: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * plan.num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, plan.num]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/40 p-10 backdrop-blur-xl"
    >
      <p className="text-[10px] tracking-[0.4em] text-gold/70 uppercase">AED</p>
      <p className="font-display mt-2 text-[8rem] leading-none text-foreground md:text-[10rem] shimmer-gold">
        {count}
      </p>
      <div className="mt-6 h-px w-12 bg-gold transition-all duration-700 group-hover:w-full" />
      <p className="font-display mt-6 text-3xl text-foreground">{plan.title}</p>
      <p className="mt-3 text-sm text-foreground/60">{plan.desc}</p>
    </motion.div>
  );
}

/* ---------- SECTION 8: Chef Specials ---------- */
function ChefSpecials() {
  const dishes = [
    { name: "Crab Masala", img: crab },
    { name: "Chicken Chettinadu", img: chettinad },
    { name: "Chicken Chinthamani", img: chettinad },
    { name: "Mutton Paya", img: muttonBiryani },
    { name: "Squid Roast", img: crab },
  ];

  return (
    <section className="relative bg-[oklch(0.08_0.008_60)]">
      <div className="relative py-32 text-center md:py-40">
        <p className="text-[10px] tracking-[0.5em] text-gold/70 uppercase">Chef's Spotlight</p>
        <h2 className="font-display mt-4 text-5xl md:text-7xl">
          One dish. <span className="italic text-gold">One moment.</span>
        </h2>
      </div>
      {dishes.map((d, i) => (
        <ChefSlide key={d.name} dish={d} index={i} />
      ))}
    </section>
  );
}

function ChefSlide({ dish, index }: { dish: { name: string; img: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.18_0.02_60)_0%,oklch(0.08_0.008_60)_70%)]" />
      <motion.div style={{ scale, opacity }} className="relative grid w-full max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <div className={`relative aspect-square overflow-hidden rounded-sm shadow-2xl ${index % 2 ? "md:order-2" : ""}`}>
          <img src={dish.img} alt={dish.name} loading="lazy" className="h-full w-full object-cover" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.008 60 / 0.7) 100%)" }}
          />
        </div>
        <div className={index % 2 ? "md:order-1 md:text-right" : ""}>
          <p className="text-[10px] tracking-[0.5em] text-gold uppercase">Signature · 0{index + 1}</p>
          <h3 className="font-display mt-6 text-6xl leading-[0.9] md:text-8xl">
            {dish.name.split(" ").map((w, i) => (
              <span key={i} className={`block ${i % 2 ? "italic text-gold" : ""}`}>{w}</span>
            ))}
          </h3>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- SECTION 9: Testimonials ---------- */
function Testimonials() {
  const reviews = [
    { quote: "The best biryani I have eaten in all of Sharjah. The aroma alone is worth the visit.", author: "Rahul M.", role: "Regular guest" },
    { quote: "Their monthly mess saved my routine. Home-style food every single day, never boring.", author: "Aisha K.", role: "Subscriber" },
    { quote: "Crispy dosa, hot sambar, and the Chettinadu chicken — pure South Indian soul.", author: "Vignesh P.", role: "Food blogger" },
    { quote: "Late-night cravings? Their delivery is unbelievably fast and the food still steams.", author: "Mariam A.", role: "Al Nahda resident" },
  ];

  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <p className="text-[10px] tracking-[0.5em] text-gold uppercase">Words from our table</p>
        <h2 className="font-display mt-4 text-5xl leading-tight md:text-8xl">
          Loved <br />
          <span className="italic text-gold">across Sharjah.</span>
        </h2>
      </div>

      <div className="mt-20 overflow-x-auto no-scrollbar">
        <div className="flex gap-6 px-6 pb-8 md:gap-10 md:px-12">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="flex w-[85vw] flex-shrink-0 flex-col justify-between rounded-2xl border border-gold/20 bg-card/40 p-10 backdrop-blur-xl md:w-[40vw] md:p-14"
            >
              <p className="font-display text-7xl leading-none text-gold">"</p>
              <p className="font-display mt-4 text-2xl leading-snug text-foreground md:text-3xl">{r.quote}</p>
              <div className="mt-10 border-t border-gold/20 pt-6">
                <p className="text-sm font-medium tracking-wide text-foreground">{r.author}</p>
                <p className="mt-1 text-xs tracking-[0.3em] text-gold/60 uppercase">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 10: Final Contact ---------- */
function FinalContact() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src={steam} alt="" className="h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] tracking-[0.6em] text-gold uppercase">Est · Al Nahda · Sharjah</p>
          <h2 className="font-display mt-8 text-[14vw] leading-[0.85] md:text-[10rem]">
            <span className="block">FAJR</span>
            <span className="block italic text-gold">AL NAHDA</span>
          </h2>
          <p className="mt-8 text-xs tracking-[0.35em] text-foreground/60 uppercase md:text-sm">
            Tamil · South Indian · Arabian · Chinese
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 grid w-full max-w-4xl gap-10 md:grid-cols-2 md:text-left"
        >
          <div>
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase">Visit Us</p>
            <p className="font-display mt-4 text-2xl leading-snug text-foreground md:text-3xl">
              Al Tohira Building, Shop No.2 <br />
              Al Nahda, Sharjah, UAE
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.4em] text-gold uppercase">Reach Us</p>
            <p className="font-display mt-4 text-2xl leading-snug text-foreground md:text-3xl">
              +971 6 522 0875 <br />
              WhatsApp +971 54 420 5511
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:gap-6"
        >
          <a
            href="tel:+97165220875"
            className="group relative w-full overflow-hidden rounded-full bg-gold px-10 py-5 text-sm font-medium tracking-[0.3em] text-primary-foreground uppercase shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02] md:w-auto"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/971544205511"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-gold/50 px-10 py-5 text-sm font-medium tracking-[0.3em] text-gold uppercase transition-colors hover:bg-gold/10 md:w-auto"
          >
            WhatsApp Order
          </a>
          <a
            href="https://maps.google.com/?q=Al+Tohira+Building+Al+Nahda+Sharjah"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-foreground/20 px-10 py-5 text-sm font-medium tracking-[0.3em] text-foreground/80 uppercase transition-colors hover:border-gold/50 hover:text-gold md:w-auto"
          >
            Get Directions
          </a>
        </motion.div>

        <p className="mt-24 text-[10px] tracking-[0.4em] text-foreground/40 uppercase">
          © {new Date().getFullYear()} Fajr Al Nahda Restaurant
        </p>
      </div>
    </section>
  );
}
