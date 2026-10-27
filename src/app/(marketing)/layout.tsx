import { GoogleTranslateBar } from "@/components/public/GoogleTranslateBar";
import { MarketingHtmlClass } from "@/components/public/MarketingHtmlClass";
import { MarketingThemeGuard } from "@/components/public/MarketingThemeGuard";
import { PublicBootGate } from "@/components/public/PublicBootGate";
import { isGoogleTranslateEnabled } from "@/lib/public/google-translate-enabled";
import { getPublicSite } from "@/lib/public/home-payload";
import { SITE_LOGO_URL } from "@/lib/public/site-logo";
import type { Metadata } from "next";
import "../public-marketing.css";
import type { ReactNode } from "react";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getPublicSite();
  return {
    title: {
      default: `${site.siteName} | Welcome`,
      template: `%s | ${site.siteName}`,
    },
    description:
      site.description ||
      site.welcomeMessage ||
      "Online trading, investments, and copy trading.",
    icons: { icon: SITE_LOGO_URL },
  };
}

const SR_CRITICAL_CSS = `
html.sr-desktop-lock .sr-nav-toggle{display:none!important}
html.sr-desktop-lock .sr-nav{display:flex!important;position:static!important;flex-direction:row!important;flex-wrap:nowrap!important;align-items:center!important;padding:0!important;border-bottom:none!important}
html.sr-desktop-lock .sr-header-inner{flex-wrap:nowrap!important;position:static!important}
html.sr-desktop-lock .sr-hero-aside{display:block!important}
html.sr-desktop-lock .sr-hero-layout,html.sr-desktop-lock .sr-split{display:grid!important;grid-template-columns:1fr 1fr!important;gap:2.5rem!important;align-items:center!important}
html.sr-desktop-lock .sr-plan-grid{display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:1.25rem!important}
html.sr-desktop-lock .sr-stats{grid-template-columns:repeat(3,1fr)!important}
html.sr-desktop-lock .sr-footer-grid{grid-template-columns:repeat(4,minmax(160px,1fr))!important}
html.sr-desktop-lock .sr-trust-bar-strip{flex-direction:row!important;flex-wrap:nowrap!important;text-align:left!important}
html.sr-desktop-lock .sr-tp-track{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;overflow:visible!important;scroll-snap-type:none!important}
html.sr-desktop-lock .sr-tp-reviews-shell{max-height:37.5rem!important;overflow-y:auto!important;width:auto!important;margin-inline:0!important}
html.sr-desktop-boot:not(.sr-desktop-ready) body{visibility:hidden}
html.sr-desktop-lock,html.sr-desktop-lock body.sr-public{max-width:none;overflow-x:hidden}
body.sr-public{min-width:0;margin:0}
`;

export default async function MarketingLayout({ children }: { children: ReactNode }) {
  const site = await getPublicSite();

  return (
    <>
      <style id="sr-desktop-lock-critical" dangerouslySetInnerHTML={{ __html: SR_CRITICAL_CSS }} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
      />
      <link rel="stylesheet" href="/main/css/site-modern.css" />
      <link rel="stylesheet" href="/main/css/desktop-lock.css" />
      <noscript>
        <style>{`html.sr-desktop-boot body{visibility:visible!important}`}</style>
      </noscript>
      <MarketingThemeGuard>
        <PublicBootGate />
        <MarketingHtmlClass />
        {isGoogleTranslateEnabled(site.googleTranslate) ? (
          <GoogleTranslateBar />
        ) : null}
        {children}
      </MarketingThemeGuard>
    </>
  );
}
