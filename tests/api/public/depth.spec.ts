import { fetchDepth } from '@/api/public/depth'

describe('fetchDepth', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchDepth({
      coin: 'btc'
    })

    expect(result).toContainKeys(['asks', 'bids'])

    const { asks, bids } = result

    const forEachCase = (values: [number, number][]): void => {
      expect(values).toBeArray()
      expect(values[0]).toBeArray()
      expect(values[0]).toHaveLength(2)
      expect(values[0][0]).toBeNumber()
      expect(values[0][1]).toBeNumber()
    }

    forEachCase(asks)
    forEachCase(bids)
  })
})
