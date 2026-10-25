const brandChartColors = {
  plotLineColorGrowing: "rgba(73, 179, 54, 1)",
  plotLineColorFalling: "rgba(220, 38, 38, 1)",
  gridLineColor: "rgba(14, 65, 82, 0.08)",
  scaleFontColor: "rgba(14, 65, 82, 0.65)",
  belowLineFillColorGrowing: "rgba(73, 179, 54, 0.14)",
  belowLineFillColorFalling: "rgba(220, 38, 38, 0.12)",
  symbolActiveColor: "rgba(73, 179, 54, 0.12)",
};

export function tickerTapeConfig() {
  return {
    symbols: [
      { proName: "FOREXCOM:SPXUSD", title: "S&P 500" },
      { proName: "FOREXCOM:NSXUSD", title: "Nasdaq 100" },
      { proName: "NASDAQ:AAPL", title: "Apple" },
      { proName: "NASDAQ:NVDA", title: "NVIDIA" },
      { proName: "TVC:UKX", title: "FTSE 100" },
      { proName: "TVC:DEU40", title: "DAX" },
      { proName: "TVC:NI225", title: "Nikkei 225" },
      { proName: "HKEX:700", title: "Tencent" },
      { proName: "KRX:005930", title: "Samsung" },
      { proName: "BINANCE:BTCUSDT", title: "Bitcoin" },
      { proName: "BINANCE:ETHUSDT", title: "Ethereum" },
      { proName: "FX:EURUSD", title: "EUR/USD" },
      { proName: "FX:USDJPY", title: "USD/JPY" },
    ],
    showSymbolLogo: true,
    colorTheme: "light",
    isTransparent: false,
    displayMode: "adaptive",
    locale: "en",
  };
}

export function marketOverviewConfig() {
  return {
    colorTheme: "light",
    dateRange: "6M",
    showChart: true,
    locale: "en",
    width: "100%",
    height: "480",
    largeChartUrl: "",
    isTransparent: false,
    showSymbolLogo: true,
    showFloatingTooltip: false,
    tabs: [
      {
        title: "Americas",
        symbols: [
          { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
          { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
          { s: "NASDAQ:AAPL", d: "Apple" },
          { s: "NASDAQ:MSFT", d: "Microsoft" },
          { s: "NASDAQ:NVDA", d: "NVIDIA" },
          { s: "NYSE:JPM", d: "JPMorgan" },
          { s: "AMEX:SPY", d: "SPY ETF" },
        ],
      },
      {
        title: "Europe",
        symbols: [
          { s: "TVC:UKX", d: "FTSE 100" },
          { s: "TVC:DEU40", d: "DAX" },
          { s: "TVC:FR40", d: "CAC 40" },
          { s: "AMS:ASML", d: "ASML" },
          { s: "XETR:SIE", d: "Siemens" },
          { s: "EPA:MC", d: "LVMH" },
          { s: "LSE:SHEL", d: "Shell" },
        ],
      },
      {
        title: "Asia & Pacific",
        symbols: [
          { s: "TVC:NI225", d: "Nikkei 225" },
          { s: "TVC:HSI", d: "Hang Seng" },
          { s: "HKEX:700", d: "Tencent" },
          { s: "TSE:7203", d: "Toyota" },
          { s: "KRX:005930", d: "Samsung" },
          { s: "ASX:BHP", d: "BHP" },
          { s: "NSE:TCS", d: "TCS" },
        ],
      },
      {
        title: "Crypto",
        symbols: [
          { s: "BINANCE:BTCUSDT", d: "Bitcoin" },
          { s: "BINANCE:ETHUSDT", d: "Ethereum" },
          { s: "BINANCE:BNBUSDT", d: "BNB" },
          { s: "BINANCE:SOLUSDT", d: "Solana" },
          { s: "BINANCE:XRPUSDT", d: "XRP" },
          { s: "BINANCE:DOGEUSDT", d: "Dogecoin" },
          { s: "BINANCE:ADAUSDT", d: "Cardano" },
        ],
      },
    ],
    ...brandChartColors,
  };
}

export function marketQuotesConfig() {
  return {
    width: "100%",
    height: "520",
    symbolsGroups: [
      {
        name: "Americas",
        symbols: [
          { name: "FOREXCOM:SPXUSD", displayName: "S&P 500" },
          { name: "NASDAQ:AAPL", displayName: "Apple" },
          { name: "NASDAQ:NVDA", displayName: "NVIDIA" },
          { name: "NYSE:TSLA", displayName: "Tesla" },
        ],
      },
      {
        name: "Europe",
        symbols: [
          { name: "TVC:UKX", displayName: "FTSE 100" },
          { name: "TVC:DEU40", displayName: "DAX" },
          { name: "AMS:ASML", displayName: "ASML" },
          { name: "LSE:HSBA", displayName: "HSBC" },
        ],
      },
      {
        name: "Asia & Pacific",
        symbols: [
          { name: "TVC:NI225", displayName: "Nikkei 225" },
          { name: "TVC:HSI", displayName: "Hang Seng" },
          { name: "HKEX:700", displayName: "Tencent" },
          { name: "KRX:005930", displayName: "Samsung" },
        ],
      },
      {
        name: "Crypto",
        symbols: [
          { name: "BINANCE:BTCUSDT", displayName: "Bitcoin" },
          { name: "BINANCE:ETHUSDT", displayName: "Ethereum" },
          { name: "BINANCE:SOLUSDT", displayName: "Solana" },
          { name: "BINANCE:BNBUSDT", displayName: "BNB" },
        ],
      },
      {
        name: "Forex",
        symbols: [
          { name: "FX:EURUSD", displayName: "EUR/USD" },
          { name: "FX:GBPUSD", displayName: "GBP/USD" },
          { name: "FX:USDJPY", displayName: "USD/JPY" },
          { name: "FX:AUDUSD", displayName: "AUD/USD" },
        ],
      },
    ],
    showSymbolLogo: true,
    colorTheme: "light",
    locale: "en",
    backgroundColor: "#ffffff",
  };
}
