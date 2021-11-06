import { fetchOrders } from '@/api/public/orders'

describe('fetchOrders', () => {
  it('should return currency pairs info', async () => {
    const result = await fetchOrders({
      coin: 'btc'
    })

    expect(result).toBeArray()

    result.forEach(({ amount, date, price, tid, type }) => {
      expect(amount).toBeNumber()
      expect(price).toBeNumber()
      expect(tid).toBeString()
      expect(type).toBeOneOf(['buy', 'sell'])
      expect(date).toBeValidDate()
    })
  })
})
