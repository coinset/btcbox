// eslint-disable-next-line import/no-unresolved

import { fetchTickers } from "./tickers.ts";
import { anyNumber, expect, test } from "../dev_deps.ts";

test("fetchTickers", async () => {
  const testCase = {
    high: anyNumber(),
    low: anyNumber(),
    buy: anyNumber(),
    sell: anyNumber(),
    last: anyNumber(),
    vol: anyNumber(),
  };

  await expect(fetchTickers()).resolves.toEqual({
    "BTC_JPY": testCase,
    "BCH_JPY": testCase,
    "LTC_JPY": testCase,
    "ETH_JPY": testCase,
  });
});
