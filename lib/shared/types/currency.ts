import type { btc, bch, ltc, eth, JPY, Pair } from 'cryptocurrency-types'

type BTCBOXSymbol = btc | bch | ltc | eth

type BTCBOXPair = Pair<Uppercase<BTCBOXSymbol>, JPY>

export type { BTCBOXSymbol, BTCBOXPair }
