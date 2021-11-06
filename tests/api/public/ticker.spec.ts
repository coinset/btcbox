import { fetchTicker } from '@/api/public/ticker'
import type { TickerData } from '@/api/public/ticker'

const expectTicker = ({ buy, high, low, sell, last, vol }: TickerData) => {
  expect(buy).toBeNumber()
  expect(high).toBeNumber()
  expect(low).toBeNumber()
  expect(sell).toBeNumber()
  expect(last).toBeNumber()
  expect(vol).toBeNumber()
}

describe('fetchTicker', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTicker({
      coin: 'btc'
    })

    expect(result).toContainKeys(['buy', 'high', 'low', 'sell', 'last', 'vol'])

    expectTicker(result)
  })
})

export { expectTicker }
