import { fetchTicker } from "./ticker.ts";
import { anyNumber, expect, test } from "../dev_deps.ts";
import { BTCBOX_SYMBOLS } from "./constants.ts";
import type { BTCBOXSymbol } from "./types.ts";

test("fetchTicker", async () => {
  const testCase = async (coin: BTCBOXSymbol) => {
    await expect(fetchTicker({ coin })).resolves.toEqual({
      high: anyNumber(),
      low: anyNumber(),
      buy: anyNumber(),
      sell: anyNumber(),
      last: anyNumber(),
      vol: anyNumber(),
    });
  };

  await Promise.all(BTCBOX_SYMBOLS.map(testCase));
});
