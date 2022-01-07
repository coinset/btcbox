import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./fetch.ts";
import type { BTCBOXSymbol } from "./types.ts";

const TICKER = "ticker";

export type TickerOptions = {
  coin: BTCBOXSymbol;
};

export type TickerResponse = {
  high: number;
  low: number;
  buy: number;
  sell: number;
  last: number;
  vol: number;
};

export function fetchTicker(
  { coin }: TickerOptions,
  init?: RequestInit,
): Promise<TickerResponse> {
  const url = new URL(TICKER, BASE_URL);

  url.searchParams.set("coin", coin);

  return jsonFetch(url.toString(), init);
}
