import type { bch, btc, eth, JPY, ltc, Pair } from "../deps.ts";

type BTCBOXSymbol = btc | bch | ltc | eth;

type BTCBOXPair = Pair<Uppercase<BTCBOXSymbol>, JPY>;

export type { BTCBOXPair, BTCBOXSymbol };
