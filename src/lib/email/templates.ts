import {
  getAdminNotificationEmail,
  getAppUrl,
  getEmailSiteName,
} from "@/lib/email/config";
import { escapeHtml } from "@/lib/email/escape";
import { renderHanaEmailLayout } from "@/lib/email/layout";

export type EmailTemplate = {
  subject: string;
  html: string;
};

function money(amount: number): string {
  return `$${amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

const site = () => getEmailSiteName();
const verifyUrl = (email: string) =>
  `${getAppUrl()}/auth/verify?email=${encodeURIComponent(email)}`;

export const emailTemplates = {
  welcome: (name: string, email: string, token: string): EmailTemplate => ({
    subject: `Welcome to ${site()}`,
    html: renderHanaEmailLayout({
      preheader: `Your verification code is ${token}`,
      headline: `Welcome, ${name.split(" ")[0] || name}`,
      bodyHtml: `
        <p style="margin:0 0 16px;">Thank you for opening an account with <strong>${escapeHtml(site())}</strong>. You are one step away from accessing your wallet, investment plans, and trading tools.</p>
        <p style="margin:0 0 8px;">Your verification code:</p>
        <p style="margin:0 0 20px;font-size:28px;font-weight:800;letter-spacing:0.2em;color:#49b336;">${escapeHtml(token)}</p>
        <p style="margin:0;">This code expires in 10 minutes. If you did not create an account, you can ignore this message.</p>
      `,
      cta: { label: "Verify email", href: verifyUrl(email) },
    }),
  }),

  resetPassword: (data: { link: string }): EmailTemplate => ({
    subject: "Reset your password",
    html: renderHanaEmailLayout({
      preheader: "Password reset request for your account",
      headline: "Password reset",
      bodyHtml: `
        <p style="margin:0 0 16px;">We received a request to reset the password for your ${escapeHtml(site())} account.</p>
        <p style="margin:0;">If you made this request, use the button below. Otherwise, ignore this email — your password will stay the same.</p>
      `,
      cta: { label: "Reset password", href: data.link },
    }),
  }),

  deposit: (data: { amount: number }): EmailTemplate => ({
    subject: "Deposit request received",
    html: renderHanaEmailLayout({
      preheader: `Deposit request for ${money(data.amount)}`,
      headline: "Deposit request submitted",
      bodyHtml: `
        <p style="margin:0 0 16px;">We have received your request to deposit <strong style="color:#49b336;">${money(data.amount)}</strong>.</p>
        <p style="margin:0;">Our team will review and confirm the transaction. You will receive another email once it is processed.</p>
      `,
      cta: { label: "View dashboard", href: `${getAppUrl()}/dashboard/deposit` },
    }),
  }),

  confirmDeposit: (data: { amount: number }): EmailTemplate => ({
    subject: "Deposit confirmed",
    html: renderHanaEmailLayout({
      preheader: `Your deposit of ${money(data.amount)} was confirmed`,
      headline: "Deposit confirmed",
      bodyHtml: `
        <p style="margin:0 0 16px;">Your deposit of <strong style="color:#49b336;">${money(data.amount)}</strong> has been credited to your account.</p>
        <p style="margin:0;">You can review the updated balance and transaction history in your client area.</p>
      `,
      cta: { label: "Open dashboard", href: `${getAppUrl()}/dashboard` },
    }),
  }),

  withdraw: (data: { amount: number }): EmailTemplate => ({
    subject: "Withdrawal request received",
    html: renderHanaEmailLayout({
      preheader: `Withdrawal request for ${money(data.amount)}`,
      headline: "Withdrawal request submitted",
      bodyHtml: `
        <p style="margin:0 0 16px;">We have received your request to withdraw <strong style="color:#49b336;">${money(data.amount)}</strong>.</p>
        <p style="margin:0;">Processing times may vary while we verify the request. We will notify you when it is complete.</p>
      `,
      cta: { label: "Track withdrawal", href: `${getAppUrl()}/dashboard/withdraw` },
    }),
  }),

  confirmWithdraw: (data: { amount: number }): EmailTemplate => ({
    subject: "Withdrawal processed",
    html: renderHanaEmailLayout({
      preheader: `Withdrawal of ${money(data.amount)} processed`,
      headline: "Withdrawal confirmed",
      bodyHtml: `
        <p style="margin:0 0 16px;">Your withdrawal of <strong style="color:#49b336;">${money(data.amount)}</strong> has been processed.</p>
        <p style="margin:0;">If you did not authorize this withdrawal, contact support immediately.</p>
      `,
      cta: { label: "Transaction history", href: `${getAppUrl()}/dashboard/transaction-history` },
    }),
  }),

  trade: (data: { amount: number; symbol: string; type: string }): EmailTemplate => ({
    subject: `Trade executed — ${data.symbol}`,
    html: renderHanaEmailLayout({
      preheader: `${data.type} order on ${data.symbol}`,
      headline: "Trade confirmation",
      bodyHtml: `
        <p style="margin:0 0 16px;">Your <strong>${escapeHtml(data.type)}</strong> order on <strong>${escapeHtml(data.symbol)}</strong> for <strong style="color:#49b336;">${money(data.amount)}</strong> has been executed.</p>
        <p style="margin:0;">Review open positions and history in your trading dashboard.</p>
      `,
      cta: { label: "View trades", href: `${getAppUrl()}/dashboard/trading-history` },
    }),
  }),

  AdminNotification: (data: {
    amount: number;
    type: "deposit" | "withdraw";
  }): EmailTemplate => ({
    subject: `[Admin] New ${data.type} — ${money(data.amount)}`,
    html: renderHanaEmailLayout({
      preheader: `User ${data.type} pending review`,
      headline: `${data.type === "deposit" ? "Deposit" : "Withdrawal"} notification`,
      bodyHtml: `
        <p style="margin:0 0 16px;">A client submitted a <strong>${escapeHtml(data.type)}</strong> of <strong style="color:#49b336;">${money(data.amount)}</strong>.</p>
        <p style="margin:0;">Sign in to the admin panel to approve or decline the request.</p>
      `,
      cta: {
        label: "Open admin",
        href: `${getAppUrl()}/admin/dashboard/transactions`,
      },
      footnote: "Internal operations notice — not sent to clients.",
    }),
  }),

  referralBonus: (data: { amount: number }): EmailTemplate => ({
    subject: "Referral bonus credited",
    html: renderHanaEmailLayout({
      preheader: `You earned ${money(data.amount)} referral bonus`,
      headline: "Referral reward",
      bodyHtml: `
        <p style="margin:0 0 16px;">A referral bonus of <strong style="color:#49b336;">${money(data.amount)}</strong> has been added to your account.</p>
        <p style="margin:0;">Thank you for growing the ${escapeHtml(site())} community.</p>
      `,
      cta: { label: "Invite friends", href: `${getAppUrl()}/dashboard/invite-friends` },
    }),
  }),

  resendToken: (data: { token: string; email: string }): EmailTemplate => ({
    subject: "Your verification code",
    html: renderHanaEmailLayout({
      preheader: `Verification code ${data.token}`,
      headline: "Verify your email",
      bodyHtml: `
        <p style="margin:0 0 8px;">Use this code to verify <strong>${escapeHtml(data.email)}</strong>:</p>
        <p style="margin:0 0 20px;font-size:28px;font-weight:800;letter-spacing:0.2em;color:#49b336;">${escapeHtml(data.token)}</p>
        <p style="margin:0;">The code expires in 10 minutes.</p>
      `,
      cta: { label: "Continue verification", href: verifyUrl(data.email) },
    }),
  }),
};

export type EmailData = {
  welcome: { name: string; email: string; token: string };
  resetPassword: { link: string };
  deposit: { amount: number };
  confirmDeposit: { amount: number };
  withdraw: { amount: number };
  confirmWithdraw: { amount: number };
  trade: { amount: number; symbol: string; type: string };
  AdminNotification: { amount: number; type: "deposit" | "withdraw" };
  referralBonus: { amount: number };
  resendToken: { token: string; email: string };
};

export function resolveEmailTemplate<T extends keyof EmailData>(
  template: T,
  data: EmailData[T],
): EmailTemplate {
  switch (template) {
    case "welcome": {
      const d = data as EmailData["welcome"];
      return emailTemplates.welcome(d.name, d.email, d.token);
    }
    case "resetPassword":
      return emailTemplates.resetPassword(data as EmailData["resetPassword"]);
    case "deposit":
      return emailTemplates.deposit(data as EmailData["deposit"]);
    case "confirmDeposit":
      return emailTemplates.confirmDeposit(data as EmailData["confirmDeposit"]);
    case "withdraw":
      return emailTemplates.withdraw(data as EmailData["withdraw"]);
    case "confirmWithdraw":
      return emailTemplates.confirmWithdraw(data as EmailData["confirmWithdraw"]);
    case "trade":
      return emailTemplates.trade(data as EmailData["trade"]);
    case "AdminNotification":
      return emailTemplates.AdminNotification(data as EmailData["AdminNotification"]);
    case "referralBonus":
      return emailTemplates.referralBonus(data as EmailData["referralBonus"]);
    case "resendToken": {
      const d = data as EmailData["resendToken"];
      return emailTemplates.resendToken(d);
    }
    default:
      throw new Error(`Unsupported email template: ${String(template)}`);
  }
}

export function getAdminInbox(): string | undefined {
  return getAdminNotificationEmail();
}
