import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const PHONE = "971568400838";

const QUICK = [
  "I need a quote for frameless glass partitions",
  "I want shower enclosure installation",
  "Aluminium doors & windows for my villa",
  "Office glass partition project",
  "Custom mirror installation",
  "Glass maintenance & repair service",
];

export function WhatsAppBot() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");

  const send = (text: string) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} />}
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)] glass rounded-2xl shadow-elegant overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-[#075E54] text-white p-4">
            <p className="font-semibold">Glasser UAE Support</p>
            <p className="text-xs opacity-80">Typically replies within minutes</p>
          </div>
          <div className="p-4 max-h-80 overflow-y-auto bg-surface/50">
            <p className="text-sm text-foreground mb-3">👋 Hi! How can we help you today? Pick a quick query or type your own:</p>
            <div className="flex flex-col gap-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  onClick={() => send(q)}
                  className="text-left text-sm bg-white hover:bg-orange hover:text-orange-foreground transition px-3 py-2 rounded-lg border border-border"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); if (msg.trim()) { send(msg); setMsg(""); }}}
            className="flex gap-2 p-3 border-t border-border bg-white"
          >
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 px-3 py-2 rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <button type="submit" className="w-10 h-10 rounded-lg bg-[#25D366] text-white flex items-center justify-center" aria-label="Send">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
