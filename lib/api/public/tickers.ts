import type { TickerData } from '@/api/public/ticker'
import { BASE_URL, TICKERS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BTCBOXPair } from '@/shared/types/currency'
import type { SimplePublicAPI } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type TickersOptions = {}

type TickersResponse = Record<BTCBOXPair, TickerData> & Record<string, unknown>

const fetchTickers: SimplePublicAPI<TickersOptions, TickersResponse> = (
  _,
  init
) => {
  const url = new URL(TICKERS, BASE_URL)

  return jsonFetch(url, init)
}

export { fetchTickers }
export type { TickersOptions, TickersResponse }
