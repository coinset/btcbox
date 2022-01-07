import { BASE_URL } from "./constants.ts";

import { jsonFetch } from "./fetch.ts";
import type { BTCBOXSymbol } from "./types.ts";

const DEPTH = "depth";

export type DepthOptions = {
  coin: BTCBOXSymbol;
};

export type DepthResponse = {
  asks: [number, number][];
  bids: [number, number][];
};

export function fetchDepth(
  { coin }: DepthOptions,
  init?: RequestInit,
): Promise<DepthResponse> {
  const url = new URL(DEPTH, BASE_URL);
  url.searchParams.set("coin", coin);

  return jsonFetch(url.toString(), init);
}
