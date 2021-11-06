import { BASE_URL, TICKER } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BTCBOXSymbol } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

type TickerOptions = {
  coin: BTCBOXSymbol
}

type TickerData = {
  high: number
  low: number
  buy: number
  sell: number
  last: number
  vol: number
}

type TickerResponse = TickerData

const fetchTicker: PublicAPI<TickerOptions, TickerResponse> = (
  { coin },
  init
) => {
  const url = new URL(TICKER, BASE_URL)

  url.searchParams.set('coin', coin)

  return jsonFetch(url, init)
}

export { fetchTicker }
export type { TickerData, TickerOptions, TickerResponse }
