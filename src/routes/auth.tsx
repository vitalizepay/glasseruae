import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { LovableMark } from "@lovable.dev/cloud-auth-js/react";
import { Button } from "@/components/ui/button";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";

const title = "Owner Sign-in | Glasser UAE";
const description = "Secure owner sign-in for Glasser Technical Works LLC project enquiries and commercial follow-up.";
export const Route = createFileRoute("/auth")({ head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { name: "robots", content: "noindex,nofollow" }] }), component: OwnerSignIn });
function OwnerSignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  useEffect(() => { void supabase.auth.getUser().then(({ data }) => { if (data.user) void navigate({ to: "/owner" }); }); }, [navigate]);
  async function signIn(provider: "google" | "lovable") {
    setError(""); setBusy(true);
    try {
      sessionStorage.setItem("glasser_owner_return", "/owner");
      const result = await lovable.auth.signInWithOAuth(provider, { redirect_uri: window.location.origin });
      if (result.error) throw result.error;
      if (!result.redirected) { const { data } = await supabase.auth.getUser(); if (data.user) await navigate({ to: "/owner" }); }
    } catch { setError("Sign-in could not be completed. Please try again."); }
    finally { setBusy(false); }
  }
  return <main className="min-h-svh bg-background flex items-center justify-center px-6 py-16"><div className="max-w-md w-full">
    <Link to="/" className="text-sm text-muted-foreground">Glasser Technical Works LLC</Link>
    <h1 className="text-4xl mt-6 text-foreground">Owner sign-in</h1>
    <p className="text-muted-foreground leading-7 mt-4 mb-8">Enquiries and follow-up are available only to approved company accounts.</p>
    <div className="space-y-3"><Button variant="outline" size="lg" disabled={busy} className="w-full" onClick={() => void signIn("google")}>Continue with Google</Button><Button variant="outline" size="lg" disabled={busy} className="w-full" onClick={() => void signIn("lovable")}><LovableMark />Continue with Lovable</Button></div>
    {error && <p role="alert" className="text-destructive text-sm mt-5">{error}</p>}
    <Link to="/" className="inline-block mt-8 text-sm underline underline-offset-4">Return to website</Link>
  </div></main>;
}