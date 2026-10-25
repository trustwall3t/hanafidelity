import Link from "next/link";
import {
  FOOTER_RISK_WARNING,
  FOOTER_TAGLINE_TEMPLATE,
  withBrand,
} from "@/lib/public/homepage-content";

type Props = { brandName: string };

export function PublicFooter({ brandName }: Props) {
  const year = new Date().getFullYear();
  const tagline = withBrand(FOOTER_TAGLINE_TEMPLATE, brandName);

  return (
    <footer className="sr-footer">
      <div className="sr-wrap sr-footer-grid">
        <div>
          <h2>{tagline}</h2>
        </div>
        <div>
          <h2>Mirror Trading</h2>
          <ul>
            <li>
              <Link href="/optioncopytrading">Options copy trading</Link>
            </li>
            <li>
              <Link href="/advancetrading">Advanced trading account above PDT</Link>
            </li>
            <li>
              <Link href="/livetrading">Live trading interface</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Trading Categories</h2>
          <ul>
            <li>
              <Link href="/futures">Futures Trading</Link>
            </li>
            <li>
              <Link href="/stocks">Stock Trading</Link>
            </li>
            <li>
              <Link href="/forex">Forex Trading</Link>
            </li>
            <li>
              <Link href="/oilandgas">Oil and gas stock trading</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contacts</Link>
            </li>
            <li>
              <Link href="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="/investments">Insight</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sr-wrap sr-copy">
        <p className="sr-risk">{FOOTER_RISK_WARNING}</p>
        <p>
          © {year} {brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
