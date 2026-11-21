import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { openCookieSettings } from "@/components/site/CookieConsent";

const title = "Privacy & Cookie Choices | Glasser UAE";
const description = "How Glasser Technical Works LLC handles project enquiries, analytics choices and optional advertising measurement on its UAE website.";
export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }], links: [{ rel: "canonical", href: "https://www.glasseruae.com/privacy" }] }),
  component: PrivacyPage,
});
function PrivacyPage() {
  return <Layout><article className="container mx-auto max-w-3xl px-6 pt-32 pb-24 space-y-8">
    <header><p className="text-sm text-muted-foreground">Glasser Technical Works LLC</p><h1 className="mt-4 text-4xl text-foreground">Privacy and your choices</h1></header>
    <section><h2 className="text-2xl mb-3">Project enquiries</h2><p className="text-muted-foreground leading-8">We store the contact details and project information you submit in Lovable Cloud so authorised Glasser staff can review your enquiry, prepare a quotation and follow up. Optional company, email, scope and referral information helps us handle your request. Avoid including sensitive personal documents in the message. This form does not upload files.</p></section>
    <section><h2 className="text-2xl mb-3">WhatsApp and contact links</h2><p className="text-muted-foreground leading-8">If you continue to WhatsApp, the project details you entered are included in a prepared message. You decide whether to send it. WhatsApp is provided by Meta and operates under its own privacy terms. A website click does not confirm a sent message or an actual conversation.</p></section>
    <section><h2 className="text-2xl mb-3">Visits and optional measurement</h2><p className="text-muted-foreground leading-8">Lovable counts page visits, time on page, page speed and errors without cookies or identifying visitors. Optional Google Analytics measurement uses cookies to measure page views, service interest, contact clicks, form activity and scroll milestones after you accept analytics. We do not send your name, email, phone number, enquiry text or WhatsApp message to Google Analytics. Page addresses sent to Google omit query strings. When analytics is accepted, campaign labels and the landing page may be stored for the visit and saved with an enquiry.</p></section>
    <section><h2 className="text-2xl mb-3">Advertising</h2><p className="text-muted-foreground leading-8">Meta Pixel and LinkedIn Insight are not active on this site through this upgrade. No customer matching or customer-list uploads are enabled. Any future advertising measurement or remarketing requires separate configuration and advertising consent. Google Tag Manager, if later configured, must respect each consent purpose separately.</p></section>
    <section><h2 className="text-2xl mb-3">Change your choice</h2><p className="text-muted-foreground leading-8 mb-4">Rejecting optional measurement does not prevent you from browsing or submitting a project enquiry. You can change your choice in Cookie settings. A browser Global Privacy Control signal overrides optional measurement acceptance. Withdrawal stops future optional events; it does not remove data already sent. Contact us to ask about access, corrections or deletion of your enquiry details.</p><Button variant="outline" onClick={openCookieSettings}>Cookie settings</Button></section>
    <section><h2 className="text-2xl mb-3">Contact Glasser</h2><p className="text-muted-foreground leading-8"><a href="mailto:sales@glasseruae.com" className="underline underline-offset-4">sales@glasseruae.com</a> · <Link to="/contact" className="underline underline-offset-4">Contact page</Link></p></section>
  </article></Layout>;
}