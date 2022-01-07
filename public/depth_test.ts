import { fetchDepth } from "./depth.ts";
import { BTCBOX_SYMBOLS } from "./constants.ts";
import { anyArray, anyNumber, expect, test } from "../dev_deps.ts";
import type { BTCBOXSymbol } from "./types.ts";

test("fetchDepth", async () => {
  const testCase = async (coin: BTCBOXSymbol) => {
    await expect(fetchDepth({ coin })).resolves.toEqual({
      asks: anyArray([anyNumber(), anyNumber()]),
      bids: anyArray([anyNumber(), anyNumber()]),
    });
  };

  await Promise.all(BTCBOX_SYMBOLS.map(testCase));
});
