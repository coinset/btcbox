export type Reviver = Parameters<typeof JSON.parse>[1];

const jsonFetch = async <T>(
  url: RequestInfo,
  init?: RequestInit,
  options?: { parseJson: Reviver },
): Promise<T> => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw Error(res.statusText);
  }

  const text = await res.text();
  const parsed = JSON.parse(text, options?.parseJson);

  if ("result" in parsed && parsed.result === false) {
    throw Error(parsed.code);
  }
  return parsed;
};

export { jsonFetch };
