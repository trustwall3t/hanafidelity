import {
  getAppUrl,
  getEmailLogoUrl,
  getEmailRiskDisclaimer,
  getEmailSiteName,
} from "@/lib/email/config";
import { escapeHtml } from "@/lib/email/escape";

export type EmailCta = {
  label: string;
  href: string;
};

export type HanaEmailLayoutOptions = {
  preheader?: string;
  headline: string;
  bodyHtml: string;
  cta?: EmailCta;
  footnote?: string;
};

/** Table-based HTML layout aligned with Hana Fidelity marketing (green + deep teal). */
export function renderHanaEmailLayout(options: HanaEmailLayoutOptions): string {
  const siteName = escapeHtml(getEmailSiteName());
  const logoUrl = escapeHtml(getEmailLogoUrl());
  const appUrl = escapeHtml(getAppUrl());
  const headline = escapeHtml(options.headline);
  const preheader = options.preheader ? escapeHtml(options.preheader) : headline;
  const footnote = options.footnote
    ? escapeHtml(options.footnote)
    : escapeHtml(getEmailRiskDisclaimer());

  const ctaBlock = options.cta
    ? `<a href="${escapeHtml(options.cta.href)}" style="display:inline-block;background:#49b336;color:#ffffff;font-weight:700;font-size:15px;line-height:1;padding:14px 28px;border-radius:8px;text-decoration:none;margin:8px 0 20px;">${escapeHtml(options.cta.label)}</a>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="supported-color-schemes" content="light" />
  <title>${headline}</title>
  <style>
    @media (max-width: 620px) {
      .hl-shell { width: 100% !important; }
      .hl-pad { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:'Segoe UI',system-ui,-apple-system,BlinkMacSystemFont,'Helvetica Neue',Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preheader}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f3f4f6;padding:32px 12px;">
    <tr>
      <td align="center">
        <table class="hl-shell" role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:600px;max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 4px 24px rgba(14,65,82,0.08);">
          <tr>
            <td style="background:#0e4152;padding:24px 32px;" class="hl-pad">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <img src="${logoUrl}" alt="${siteName}" width="140" style="display:block;max-width:140px;height:auto;border:0;" />
                  </td>
                  <td align="right" style="vertical-align:middle;font-size:12px;color:#c8ecc0;letter-spacing:0.04em;text-transform:uppercase;font-weight:700;">
                    Client notification
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td class="hl-pad" style="padding:32px 32px 8px;">
              <h1 style="margin:0 0 16px;font-size:24px;line-height:1.35;color:#0e4152;font-weight:800;">${headline}</h1>
              <div style="font-size:16px;line-height:1.65;color:#243041;">${options.bodyHtml}</div>
            </td>
          </tr>
          ${
            ctaBlock
              ? `<tr><td class="hl-pad" style="padding:0 32px 8px;">${ctaBlock}</td></tr>`
              : ""
          }
          <tr>
            <td class="hl-pad" style="padding:8px 32px 28px;font-size:14px;line-height:1.6;color:#6b7280;">
              <p style="margin:0 0 12px;">Need help? Reply to this email or visit your dashboard.</p>
              <p style="margin:0;font-size:12px;line-height:1.5;color:#9ca3af;">${footnote}</p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:20px 32px;" class="hl-pad">
              <p style="margin:0 0 6px;font-size:13px;color:#4a5568;font-weight:600;">${siteName}</p>
              <p style="margin:0;font-size:12px;color:#9ca3af;">
                <a href="${appUrl}" style="color:#49b336;text-decoration:none;">${appUrl.replace(/^https?:\/\//, "")}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
