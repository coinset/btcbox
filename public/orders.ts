import { BASE_URL } from "./constants.ts";
import { jsonFetch, Reviver } from "./fetch.ts";
import type { BTCBOXSymbol } from "./types.ts";

const ORDERS = "orders";

export type OrdersOptions = {
  coin: BTCBOXSymbol;
};

export type OrdersResponse = {
  date: Date;
  price: number;
  amount: number;
  tid: string;
  type: "buy" | "sell";
}[];

const reviver: Reviver = (key, value) => {
  if (key === "date" && typeof value === "string") {
    return new Date(Number(value) * 1000);
  }

  return value;
};

export function fetchOrders(
  { coin }: OrdersOptions,
  init?: RequestInit,
): Promise<OrdersResponse> {
  const url = new URL(ORDERS, BASE_URL);

  url.searchParams.set("coin", coin);

  return jsonFetch(url.toString(), init, {
    parseJson: reviver,
  });
}
