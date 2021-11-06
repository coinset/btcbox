import { BASE_URL, ORDERS } from '@/constants/api'
import { jsonFetch } from '@/shared/fetch'
import type { BTCBOXSymbol } from '@/shared/types/currency'
import type { PublicAPI, Reviver } from '@/shared/types/fetch'

// eslint-disable-next-line @typescript-eslint/ban-types
type OrdersOptions = {
  coin: BTCBOXSymbol
}

type OrdersResponse = {
  date: Date
  price: number
  amount: number
  tid: string
  type: 'buy' | 'sell'
}[]

const reviver: Reviver = (key, value) => {
  if (key === 'date' && typeof value === 'string') {
    return new Date(Number(value) * 1000)
  }

  return value
}

const fetchOrders: PublicAPI<OrdersOptions, OrdersResponse> = (
  { coin },
  init
) => {
  const url = new URL(ORDERS, BASE_URL)

  url.searchParams.set('coin', coin)

  return jsonFetch(url, init, {
    parseJson: reviver
  })
}

export { fetchOrders }
export type { OrdersOptions, OrdersResponse }
