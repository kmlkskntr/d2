// Frontend API istemcisi.
// VITE_API_URL tanımlıysa o adrese, değilse (dev'de proxy ile) /api'ye istek atar.
// Backend erişilemezse çağıran taraf statik veriye düşer (fallback).

const BASE = import.meta.env.VITE_API_URL ?? '';

export const API_ENABLED = true; // istekler denenir; hata olursa fallback devreye girer

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}/api${path}`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`API hatası: ${res.status}`);
  return (await res.json()) as T;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${BASE}/api${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new Error(data?.error ?? 'İstek başarısız oldu.');
  return data as T;
}
