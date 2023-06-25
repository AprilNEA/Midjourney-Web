export function fetcher(url: string, init?: RequestInit) {
  const sessionToken = "";

  return fetch(url, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: sessionToken,
    },
  });
}
