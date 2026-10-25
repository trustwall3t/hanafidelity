"use client";

import Script from "next/script";

const LANGUAGE_OPTIONS: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  pt: "Português",
  ru: "Русский",
  "zh-CN": "中文 (简体)",
  "zh-TW": "中文 (繁體)",
  ja: "日本語",
  ko: "한국어",
  ar: "العربية",
  hi: "हिन्दी",
  id: "Indonesia",
  th: "ไทย",
  vi: "Tiếng Việt",
  tr: "Türkçe",
  pl: "Polski",
  uk: "Українська",
  ms: "Bahasa Melayu",
  bn: "বাংলা",
  fa: "فارسی",
  nl: "Nederlands",
  sv: "Svenska",
  ro: "Română",
  el: "Ελληνικά",
  cs: "Čeština",
  da: "Dansk",
  fi: "Suomi",
  hu: "Magyar",
  nb: "Norsk",
  he: "עברית",
};

const PAGE_LANG = "en";
const includedLanguages = Object.keys(LANGUAGE_OPTIONS).join(",");

export function GoogleTranslateBar() {
  return (
    <>
      <aside
        className="sr-gtranslate-float"
        data-sr-lang-picker
        data-page-lang={PAGE_LANG}
        aria-label="Translate this page"
      >
        <p className="sr-gtranslate-float__title">Language</p>
        <select id="sr-gtranslate-select" className="sr-gtranslate-select" aria-label="Choose language">
          {Object.entries(LANGUAGE_OPTIONS).map(([code, label]) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
        <p className="sr-gtranslate-float__hint">Page reloads after you pick a language.</p>
      </aside>
      <div id="google_translate_element" className="sr-gtranslate-engine" aria-hidden="true" />
      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            if (!window.google || !google.translate || !google.translate.TranslateElement) return;
            new google.translate.TranslateElement(
              {
                pageLanguage: ${JSON.stringify(PAGE_LANG)},
                includedLanguages: ${JSON.stringify(includedLanguages)},
                autoDisplay: false,
              },
              'google_translate_element'
            );
          }
        `}
      </Script>
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      <Script src="/main/js/google-translate-picker.js" strategy="afterInteractive" />
    </>
  );
}
