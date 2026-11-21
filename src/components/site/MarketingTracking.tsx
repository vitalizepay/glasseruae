import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { onConsentChange, readChoice } from "@/lib/consent";
import { analyticsAllowed, captureAttribution, clearAttribution, measurementWindow, serviceKey, TRACKING_CONFIG, trackMarketing } from "@/lib/marketing";
import { publicPagePath } from "@/lib/marketing-rules";

let initialised = false;
export function MarketingTracking() {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const trackedPath = useRef("");
  useEffect(() => {
    let active = true;
    const privatePage = /^\/(auth|owner|tamilfd|tamilfoodmenu|lovable|api)(\/|$)/.test(pathname);
    async function sync() {
      const allowed = !privatePage && await analyticsAllowed();
      if (!active) return;
      if (!allowed) {
        clearAttribution();
        trackedPath.current = "";
        const win = measurementWindow();
        if (TRACKING_CONFIG.measurementId) (win as unknown as Record<string, unknown>)[`ga-disable-${TRACKING_CONFIG.measurementId}`] = true;
        // Remove known analytics cookies on withdrawal; the tag's sends are also disabled.
        document.cookie.split(";").forEach(cookie => { const name = cookie.split("=")[0]?.trim(); if (name?.startsWith("_ga")) { for (const domain of ["", location.hostname, `.${location.hostname.replace(/^www\./, "")}`]) document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ""}`; } });
        return;
      }
      const win = measurementWindow();
      (win as unknown as Record<string, unknown>)[`ga-disable-${TRACKING_CONFIG.measurementId}`] = false;
      captureAttribution();
      if (!initialised && /^G-[A-Z0-9]+$/.test(TRACKING_CONFIG.measurementId) && !TRACKING_CONFIG.gtmId) {
        win.dataLayer ||= [];
        win.gtag ||= function () { win.dataLayer?.push(arguments); };
        win.gtag("set", "developer_id.dZjgwMW", true);
        win.gtag("js", new Date());
        win.gtag("config", TRACKING_CONFIG.measurementId, { send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, page_location: `https://www.glasseruae.com${publicPagePath(pathname)}`, page_referrer: "" });
        const script = document.createElement("script");
        script.id = "glasser-ga4"; script.async = true; script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_CONFIG.measurementId}`;
        document.head.append(script);
        initialised = true;
      }
      if (!initialised && /^GTM-[A-Z0-9]+$/.test(TRACKING_CONFIG.gtmId) && readChoice("advertising") === "granted") {
        win.dataLayer ||= []; win.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
        const script = document.createElement("script"); script.id = "glasser-gtm"; script.async = true; script.src = `https://www.googletagmanager.com/gtm.js?id=${TRACKING_CONFIG.gtmId}`; document.head.append(script); initialised = true;
      }
      if (!initialised || trackedPath.current === pathname) return;
      trackedPath.current = pathname;
      void trackMarketing("page_view", { page_path: pathname });
      const service = serviceKey(pathname);
      if (service) void trackMarketing("service_page_view", { service_name: service });
      if (pathname === "/contact") void trackMarketing("contact_page_view");
    }
    void sync();
    const unsubscribe = onConsentChange(() => { void sync(); });
    return () => { active = false; unsubscribe(); };
  }, [pathname]);
  useEffect(() => {
    if (/^\/(auth|owner|tamilfd|tamilfoodmenu|lovable|api)(\/|$)/.test(pathname)) return;
    const milestones = new Set<number>();
    let galleryTracked = false;
    function click(event: MouseEvent) {
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute("href") || "";
      const properties = { service_name: serviceKey(pathname) };
      if (/^https:\/\/(wa.me|api.whatsapp.com)\//.test(href)) void trackMarketing("whatsapp_click", properties);
      else if (href.startsWith("tel:")) void trackMarketing("phone_click", properties);
      else if (href.startsWith("mailto:")) void trackMarketing("email_click", properties);
      else if (anchor.hasAttribute("download") && /\.pdf(?:\?|$)/i.test(href)) void trackMarketing("brochure_download");
    }
    async function scroll() {
      if (!await analyticsAllowed()) return;
      const height = document.documentElement.scrollHeight - innerHeight;
      if (height <= 0) return;
      const percent = Math.round(scrollY / height * 100);
      for (const step of [25, 50, 75, 100]) if (percent >= step && !milestones.has(step)) { milestones.add(step); void trackMarketing("scroll_depth", { percent_scrolled: step }); }
    }
    const observer = new IntersectionObserver(entries => {
      if (!galleryTracked && entries.some(e => e.isIntersecting)) void analyticsAllowed().then(allowed => { if (allowed && !galleryTracked) { galleryTracked = true; void trackMarketing("project_gallery_view"); } });
    }, { threshold: 0.2 });
    document.querySelectorAll('[data-project-gallery], #projects').forEach(element => observer.observe(element));
    document.addEventListener("click", click); window.addEventListener("scroll", scroll, { passive: true });
    return () => { document.removeEventListener("click", click); window.removeEventListener("scroll", scroll); observer.disconnect(); };
  }, [pathname]);
  return null;
}