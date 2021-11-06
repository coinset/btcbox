// eslint-disable-next-line import/no-unresolved
import { expectTicker } from '@test/api/public/ticker.spec'

import { fetchTickers } from '@/api/public/tickers'
import { ALL_BTCBOX_PAIRS } from '@/constants/pair'

describe('fetchTickers', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchTickers()

    expect(result).toContainKeys(ALL_BTCBOX_PAIRS)

    ALL_BTCBOX_PAIRS.forEach((pair) => {
      expectTicker(result[pair])
    })
  })
})
