import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { needsAnswer, onConsentChange, readChoice, saveChoices } from "@/lib/consent";
import { privacySignal } from "@/lib/marketing";

export function openCookieSettings() { window.dispatchEvent(new Event("glasser-cookie-settings")); }
export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settings, setSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [gpc, setGpc] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let active = true;
    async function sync() {
      const required = await needsAnswer(["analytics"]);
      if (!active) return;
      setGpc(privacySignal());
      setVisible(!privacySignal() && (required || readChoice("analytics") === null));
    }
    function open() {
      setGpc(privacySignal());
      setAnalytics(readChoice("analytics") === "granted");
      setAdvertising(readChoice("advertising") === "granted");
      setSettings(true);
    }
    void sync();
    const unsubscribe = onConsentChange(() => { void sync(); });
    window.addEventListener("glasser-cookie-settings", open);
    return () => { active = false; unsubscribe(); window.removeEventListener("glasser-cookie-settings", open); };
  }, []);
  useEffect(() => { if (visible) panel.current?.focus({ preventScroll: true }); }, [visible]);
  function answer(accepted: boolean) { saveChoices({ analytics: accepted ? "granted" : "denied", advertising: accepted ? "granted" : "denied" }); setVisible(false); }
  return <>
    {visible && <div ref={panel} tabIndex={-1} role="region" aria-label="Privacy choices" className="fixed bottom-20 md:bottom-5 left-3 right-3 md:left-5 md:right-auto md:w-[460px] max-h-[65svh] overflow-y-auto z-[80] rounded-lg border border-border bg-background p-5 shadow-elegant focus:outline-none">
      <h2 className="text-xl text-foreground">Your privacy choices</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">We count visits without cookies. With your permission, we use analytics cookies to measure service interest and enquiry actions. Optional advertising stays off unless separately configured.</p>
      <Link to="/privacy" className="inline-block mt-2 text-xs underline underline-offset-4 text-foreground">Privacy notice</Link>
      <div className="grid grid-cols-2 gap-3 mt-4"><Button variant="outline" onClick={() => answer(true)}>Accept all</Button><Button variant="outline" onClick={() => answer(false)}>Reject all</Button></div>
      <Button variant="ghost" className="w-full mt-2" onClick={() => { setAnalytics(readChoice("analytics") === "granted"); setAdvertising(readChoice("advertising") === "granted"); setSettings(true); }}>Cookie settings</Button>
    </div>}
    <Dialog open={settings} onOpenChange={setSettings}><DialogContent className="w-[calc(100%-24px)] max-h-[85svh] overflow-y-auto"><DialogHeader><DialogTitle>Cookie settings</DialogTitle><DialogDescription>Choose optional measurement. Necessary website functions remain available.</DialogDescription></DialogHeader>
      {gpc && <p className="text-sm text-muted-foreground">Your browser’s Global Privacy Control signal applies. Optional measurement is off.</p>}
      <div className="flex justify-between gap-4 border-b border-border py-4"><div><p className="font-medium">Necessary</p><p className="text-xs text-muted-foreground mt-1">Enquiries, security and your saved privacy choice</p></div><span className="text-sm text-muted-foreground">Always on</span></div>
      <div className="flex justify-between gap-4 border-b border-border py-4"><label htmlFor="consent-analytics"><span className="font-medium">Analytics</span><span className="block text-xs text-muted-foreground mt-1">Provided by Lovable and Google Analytics</span></label><Switch id="consent-analytics" checked={!gpc && analytics} disabled={gpc} onCheckedChange={setAnalytics} /></div>
      <div className="flex justify-between gap-4 py-4"><label htmlFor="consent-advertising"><span className="font-medium">Advertising</span><span className="block text-xs text-muted-foreground mt-1">Meta and LinkedIn — not currently active</span></label><Switch id="consent-advertising" checked={!gpc && advertising} disabled={gpc} onCheckedChange={setAdvertising} /></div>
      <Button onClick={() => { saveChoices({ analytics: !gpc && analytics ? "granted" : "denied", advertising: !gpc && advertising ? "granted" : "denied" }); setVisible(false); setSettings(false); }}>Save choices</Button>
    </DialogContent></Dialog>
  </>;
}