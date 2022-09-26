export function request<T>(url: string, config: RequestInit): Promise<T> {
  return fetch(url, config).then((res) => res.json());
}
