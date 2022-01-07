import { fetchOrders } from "./orders.ts";
import {
  any,
  anyArray,
  anyNumber,
  anyOf,
  anyString,
  expect,
  test,
} from "../dev_deps.ts";
import type { BTCBOXSymbol } from "./types.ts";

test("fetchOrders", async () => {
  const testCase = async (coin: BTCBOXSymbol) => {
    await expect(fetchOrders({ coin })).resolves.toEqual(anyArray({
      date: any(Date),
      price: anyNumber(),
      amount: anyNumber(),
      tid: anyString(),
      type: anyOf(["buy", "sell"]),
    }));
  };

  await testCase("bch");
});
