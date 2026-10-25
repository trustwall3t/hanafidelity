import { authSignupUrl } from "@/lib/public/auth-links";
import Link from "next/link";
import type { HomeStats, SiteInfo } from "@/types/site";

function fmt(n: number) {
  return n.toLocaleString("en-US");
}

export function HomePageWhyChooseSection({ site }: { site: SiteInfo }) {
  const name = site.siteName;

  return (
    <section className="sr-section">
      <div className="sr-wrap sr-split">
        <div>
          <h2 className="sr-section-title">Why clients choose {name}</h2>
          <p className="sr-section-lead">
            The public site is the front door; the dashboard is where work happens. We keep both
            aligned so funding, plans, and trades feel like one product — not a pile of add-ons.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/main/img/about-us-modern.png" alt="" />
      </div>
      <div className="sr-wrap sr-grid" style={{ marginTop: "2rem" }}>
        <article className="sr-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sr-card-icon" src="/main/img/dignity-1.png" alt="" />
          <h3>Client dashboard</h3>
          <p>Deposits, withdrawals, plans, and account settings in one place.</p>
        </article>
        <article className="sr-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sr-card-icon" src="/main/img/dignity-2.png" alt="" />
          <h3>Trade &amp; copy</h3>
          <p>Self-directed markets plus copy trading when clients want to follow a lead trader.</p>
        </article>
        <article className="sr-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="sr-card-icon" src="/main/img/dignity-3.png" alt="" />
          <h3>Multi-market</h3>
          <p>Stocks, forex, futures, and related services linked from the main menu.</p>
        </article>
      </div>
    </section>
  );
}

export function HomePageCopyTradingSection() {
  return (
    <section className="sr-section sr-section-soft">
      <div className="sr-wrap sr-split">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/main/img/start-trading-1.png" alt="" />
        <div>
          <h2 className="sr-section-title">Copy trading</h2>
          <p className="sr-section-lead">
            Clients choose a trader, set how much of their balance to allocate, and receive signals
            inside the app. You manage trader profiles and signals from the admin side.
          </p>
          <Link className="sr-btn sr-btn-solid" href="/optioncopytrading">
            How copy trading works
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomePageStatsSection({
  site,
  stats,
}: {
  site: SiteInfo;
  stats: HomeStats | null;
}) {
  if (!stats) return null;
  const cur = site.currency;

  return (
    <section className="sr-section" style={{ paddingTop: 0 }}>
      <div className="sr-wrap sr-stats">
        <div className="sr-stat">
          <strong>{fmt(stats.totalUsers)}</strong>
          <span>Accounts</span>
        </div>
        <div className="sr-stat">
          <strong>
            {cur}
            {fmt(stats.totalDeposits)}
          </strong>
          <span>Deposits processed</span>
        </div>
        <div className="sr-stat">
          <strong>
            {cur}
            {fmt(stats.totalWithdrawals)}
          </strong>
          <span>Withdrawals processed</span>
        </div>
      </div>
    </section>
  );
}

export function HomePageCtaBand() {
  return (
    <section className="sr-cta-band">
      <div className="sr-wrap">
        <h2>Ready to open an account?</h2>
        <p>Registration is free. Complete verification when you are ready to fund and trade.</p>
        <a className="sr-btn sr-btn-primary" href={authSignupUrl}>
          Get started
        </a>
      </div>
    </section>
  );
}
