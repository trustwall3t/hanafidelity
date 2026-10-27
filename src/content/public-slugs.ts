/** URL slugs matching Zenith Growth `routes/home.php`. */
export const PUBLIC_SLUGS = [
  "about",
  "terms",
  "privacy",
  "futures",
  "forex",
  "stocks",
  "advancetrading",
  "oilandgas",
  "livetrading",
  "softwares",
  "optioncopytrading",
  "capital-insurance",
  "contact",
  "faq",
  "statistic",
  "investments",
] as const;

export type PublicSlug = (typeof PUBLIC_SLUGS)[number];

export function isPublicSlug(value: string): value is PublicSlug {
  return (PUBLIC_SLUGS as readonly string[]).includes(value);
}

export type SlugMeta = {
  title: string;
  kicker: string;
  lead?: string;
};

export const SLUG_META: Record<PublicSlug, SlugMeta> = {
  about: {
    title: "About us",
    kicker: "About",
    lead: "Asia-Pacific asset management with a consulting-based approach to private investing.",
  },
  terms: {
    title: "Terms and conditions",
    kicker: "Terms",
    lead: "Rules governing use of this website and member services.",
  },
  privacy: {
    title: "Privacy policy",
    kicker: "Privacy",
    lead: "How we collect, use, and protect your personal information.",
  },
  futures: {
    title: "Futures trading",
    kicker: "Futures",
    lead: "Index, energy, metal, and agricultural contracts, with links to related markets.",
  },
  forex: {
    title: "Forex trading",
    kicker: "Forex",
    lead: "60+ currency pairs, transparent spreads, and professional-grade execution.",
  },
  stocks: {
    title: "Stock trading",
    kicker: "Stocks",
    lead: "Active and day trading on APAC and global listings with live charts and dashboard execution.",
  },
  advancetrading: {
    title: "Commodities",
    kicker: "Commodities",
    lead: "Metals, energy, and agricultural markets with education and risk controls.",
  },
  oilandgas: {
    title: "Oil and gas",
    kicker: "Oil and gas",
    lead: "Energy sector expertise, stewardship, and structured member participation.",
  },
  livetrading: {
    title: "Live trading",
    kicker: "Live trading",
    lead: "Professional terminal with charts, live quotes, and timed self-trade positions.",
  },
  softwares: {
    title: "Trading software",
    kicker: "Software",
    lead: "Platforms and integrations members use for research and order execution.",
  },
  "capital-insurance": {
    title: "Capital Insurance Scheme",
    kicker: "Protection",
    lead: "How qualifying member balances may be covered under published program terms.",
  },
  optioncopytrading: {
    title: "Options copy trading",
    kicker: "Options copy trading",
    lead: "Understand options, then mirror experienced traders with defined allocation.",
  },
  contact: {
    title: "Contact",
    kicker: "Contact",
    lead: "Write to us using the address below. This page also holds our mutual funds note, which is the service linked from the menu.",
  },
  faq: {
    title: "Frequently asked questions",
    kicker: "FAQ",
    lead: "Answers about live trading, forex, stocks, commodities, the Capital Insurance Scheme, and support.",
  },
  statistic: {
    title: "Our latest news",
    kicker: "Insight",
    lead: "A selection of market and business headlines. Each item opens the original source.",
  },
  investments: {
    title: "Agriculture",
    kicker: "Agriculture",
    lead: "Financing and investment solutions for modern farming and agribusiness.",
  },
};
