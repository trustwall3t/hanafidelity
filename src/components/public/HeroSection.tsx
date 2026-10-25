import { HERO_CAROUSEL_SLIDES } from "@/lib/public/hero-carousel";
import { authLoginUrl, authSignupUrl } from "@/lib/public/auth-links";

export function HeroSection({ siteName }: { siteName: string }) {
  return (
    <section className="sr-hero" data-sr-hero-carousel data-hero-interval="5500">
      <div className="sr-hero-bg" aria-hidden="true">
        {HERO_CAROUSEL_SLIDES.map((slide, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            className={`sr-hero-bg-slide${i === 0 ? " is-active" : ""}`}
            src={slide.src}
            alt=""
            width={slide.width}
            height={slide.height}
            decoding="async"
            loading={i === 0 ? undefined : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
          />
        ))}
      </div>
      <div className="sr-wrap sr-hero-layout">
        <div>
          <p className="sr-hero-eyebrow">{siteName}</p>
          <h1>Invest and trade with a platform your team can stand behind</h1>
          <p className="sr-hero-lead">
            Open an account to access your wallet, investment plans, market trading, and copy
            trading — the same tools your clients use inside the dashboard every day.
          </p>
          <div className="sr-actions">
            <a className="sr-btn sr-btn-primary" href={authSignupUrl}>
              Create account
            </a>
            <a className="sr-btn sr-btn-ghost" href={authLoginUrl}>
              Sign in
            </a>
          </div>
        </div>
        <aside className="sr-hero-aside">
          <div className="sr-hero-panel">
            <strong>What you get after registration</strong>
            Fund your balance, pick an investment tier or place trades on stocks and crypto, and
            optionally follow traders through copy trading. KYC and support are handled inside the
            client area.
          </div>
        </aside>
      </div>
    </section>
  );
}
