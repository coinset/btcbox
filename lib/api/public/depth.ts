import { BASE_URL, DEPTH } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BTCBOXSymbol } from '@/shared/types/currency'
import type { PublicAPI } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type DepthOptions = {
  coin: BTCBOXSymbol
}

type DepthResponse = {
  asks: [number, number][]
  bids: [number, number][]
}

const fetchDepth: PublicAPI<DepthOptions, DepthResponse> = ({ coin }, init) => {
  const url = new URL(DEPTH, BASE_URL)

  url.searchParams.set('coin', coin)

  return jsonFetch(url, init)
}

export { fetchDepth }
export type { DepthOptions, DepthResponse }
