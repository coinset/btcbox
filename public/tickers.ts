import type { TickerResponse } from "./ticker.ts";
import { BASE_URL } from "./constants.ts";
import { jsonFetch } from "./fetch.ts";
import type { BTCBOXPair } from "./types.ts";

const TICKERS = "tickers";

export type TickersResponse =
  & Record<BTCBOXPair, TickerResponse>
  & Record<string, unknown>;

export function fetchTickers(
  // deno-lint-ignore ban-types
  _?: {},
  init?: RequestInit,
): Promise<TickersResponse> {
  const url = new URL(TICKERS, BASE_URL);

  return jsonFetch(url.toString(), init);
}
