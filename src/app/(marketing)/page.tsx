import { CorporateCertificateSection } from "@/components/public/CorporateCertificateSection";
import { HeroSection } from "@/components/public/HeroSection";
import {
  HomePageCopyTradingSection,
  HomePageCtaBand,
  HomePageStatsSection,
  HomePageWhyChooseSection,
} from "@/components/public/HomePageSections";
import { InvestmentPlans } from "@/components/public/InvestmentPlans";
import { PaymentPartnersBar } from "@/components/public/PaymentPartnersBar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { PublicHeader } from "@/components/public/PublicHeader";
import { TradingViewRegionalMarkets } from "@/components/public/TradingViewRegionalMarkets";
import { TrustpilotReviews } from "@/components/public/TrustpilotReviews";
import { getCorporateCertificate } from "@/lib/public/corporate-document";
import { getHomePayload } from "@/lib/public/home-payload";
import Script from "next/script";

export const revalidate = 60;

export default async function MarketingHomePage() {
  const data = await getHomePayload();
  const corpCert = getCorporateCertificate();

  return (
    <div className="sr-shell">
      <PublicHeader brandName={data.site.siteName} />
      <main className="sr-main">
        <HeroSection siteName={data.site.siteName} />
        <PaymentPartnersBar />
        {corpCert ? <CorporateCertificateSection cert={corpCert} /> : null}
        <HomePageWhyChooseSection site={data.site} />
        <TrustpilotReviews site={data.site} testimonials={data.testimonials} />
        <HomePageCopyTradingSection />
        <HomePageStatsSection site={data.site} stats={data.stats} />
        <InvestmentPlans plans={data.plans} site={data.site} />
        <TradingViewRegionalMarkets
          sectionTitle="Markets at a glance"
          sectionLead="American, European, and Asian stocks, crypto, and major FX — live from TradingView. Full trading is in your dashboard."
        />
        <HomePageCtaBand />
      </main>
      <PublicFooter brandName={data.site.siteName} />
      <Script src="/main/js/hero-bg.js" strategy="afterInteractive" />
      <Script src="/main/js/home-reviews-carousel.js" strategy="afterInteractive" />
    </div>
  );
}
