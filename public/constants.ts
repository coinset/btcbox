import type { BTCBOXSymbol } from "./types.ts";
export const BASE_URL = "https://www.btcbox.co.jp/api/v1/";
export const BTCBOX_SYMBOLS = Array.from(
  new Set<BTCBOXSymbol>([
    "bch",
    "btc",
    "eth",
    "ltc",
  ]),
);
