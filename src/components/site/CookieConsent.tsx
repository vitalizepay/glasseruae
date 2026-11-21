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
    {visible && !settings && <div ref={panel} tabIndex={-1} role="region" aria-label="Privacy choices" className="consent-theme fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-32px)] max-w-[360px] max-h-[85svh] overflow-y-auto z-[80] rounded-lg border border-border bg-background p-5 shadow-elegant focus:outline-none">
      <h2 className="font-sans text-base font-medium tracking-normal text-foreground">Your privacy choices</h2>
      <p className="mt-2 text-xs leading-5 text-muted-foreground">Visits are counted without cookies. Accept analytics cookies to measure service interest and enquiries. Advertising stays off until configured.</p>
      <Link to="/privacy" className="inline-block mt-2 text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground">Privacy Notice</Link>
      <div className="grid grid-cols-2 gap-2 mt-4"><Button variant="outline" size="sm" onClick={() => answer(true)}>Accept All</Button><Button variant="outline" size="sm" onClick={() => answer(false)}>Reject All</Button></div>
      <Button variant="ghost" size="sm" className="w-full mt-1 text-xs text-muted-foreground" onClick={() => { setAnalytics(readChoice("analytics") === "granted"); setAdvertising(readChoice("advertising") === "granted"); setSettings(true); }}>Cookie Settings</Button>
    </div>}
    <Dialog open={settings} onOpenChange={setSettings}><DialogContent className="consent-theme w-[calc(100%-32px)] sm:max-w-[380px] max-h-[85svh] overflow-y-auto gap-3 p-5 shadow-elegant"><DialogHeader><DialogTitle className="font-sans text-base tracking-normal">Cookie Settings</DialogTitle><DialogDescription className="text-xs leading-5">Choose optional measurement. Necessary functions stay on.</DialogDescription></DialogHeader>
      {gpc && <p className="text-sm text-muted-foreground">Your browser’s Global Privacy Control signal applies. Optional measurement is off.</p>}
      <div className="flex justify-between gap-4 border-b border-border py-3"><div><p className="text-sm font-medium">Necessary</p><p className="text-xs text-muted-foreground mt-1">Enquiries, security and saved choices</p></div><span className="text-xs text-muted-foreground shrink-0">Always on</span></div>
      <div className="flex justify-between items-center gap-4 border-b border-border py-3"><label htmlFor="consent-analytics"><span className="text-sm font-medium">Analytics</span><span className="block text-xs text-muted-foreground mt-1">Lovable and Google Analytics</span></label><Switch id="consent-analytics" checked={!gpc && analytics} disabled={gpc} onCheckedChange={setAnalytics} /></div>
      <div className="flex justify-between items-center gap-4 py-3"><label htmlFor="consent-advertising"><span className="text-sm font-medium">Advertising</span><span className="block text-xs text-muted-foreground mt-1">Meta and LinkedIn — inactive</span></label><Switch id="consent-advertising" checked={!gpc && advertising} disabled={gpc} onCheckedChange={setAdvertising} /></div>
      <Button onClick={() => { saveChoices({ analytics: !gpc && analytics ? "granted" : "denied", advertising: !gpc && advertising ? "granted" : "denied" }); setVisible(false); setSettings(false); }}>Save choices</Button>
    </DialogContent></Dialog>
  </>;
}