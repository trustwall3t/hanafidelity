export type PaymentPartner = {
  name: string;
  src: string;
  width: number;
  height: number;
  wide?: boolean;
};

/** From silkroadaassets `PaymentPartners::featured()`. */
export function featuredPaymentPartners(): PaymentPartner[] {
  return [
    { name: "Visa", src: "/main/img/visa.svg", width: 96, height: 31 },
    { name: "Mastercard", src: "/main/img/mastercard.svg", width: 72, height: 58 },
    { name: "Advcash", src: "/main/img/advcash.svg", width: 158, height: 58 },
    { name: "Perfect Money", src: "/main/img/perfect_money.svg", width: 240, height: 58, wide: true },
    { name: "Alipay", src: "/main/img/partners/alipay.svg", width: 88, height: 24 },
    { name: "WeChat Pay", src: "/main/img/partners/wechat-pay.svg", width: 108, height: 24 },
    { name: "UPI", src: "/main/img/partners/upi.svg", width: 56, height: 24 },
    { name: "GrabPay", src: "/main/img/partners/grabpay.svg", width: 92, height: 24 },
    { name: "GCash", src: "/main/img/partners/gcash.svg", width: 80, height: 24 },
  ];
}
