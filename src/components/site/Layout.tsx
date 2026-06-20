import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppBot } from "./WhatsAppBot";
import { SmoothScroll } from "./SmoothScroll";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppBot />
    </div>
  );
}
