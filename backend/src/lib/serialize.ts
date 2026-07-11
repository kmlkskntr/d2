// JSON string alanlarını çıktı için parse eden yardımcılar.

export function parseJson<T>(value: string | null | undefined, fallback: T): T {
  if (value == null) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export function stringifyJson(value: unknown): string {
  return JSON.stringify(value ?? null);
}

// Verilen alan adlarını JSON string -> değer olarak açar
export function expand<T extends Record<string, any>>(row: T, jsonFields: string[]): T {
  const out: Record<string, any> = { ...row };
  for (const f of jsonFields) {
    if (typeof out[f] === 'string') out[f] = parseJson(out[f], []);
  }
  return out as T;
}

export function expandMany<T extends Record<string, any>>(rows: T[], jsonFields: string[]): T[] {
  return rows.map((r) => expand(r, jsonFields));
}

// Gelen body'deki JSON alanlarını DB için string'e çevirir
export function collapse(body: Record<string, any>, jsonFields: string[]): Record<string, any> {
  const out: Record<string, any> = { ...body };
  for (const f of jsonFields) {
    if (out[f] !== undefined && typeof out[f] !== 'string') out[f] = stringifyJson(out[f]);
  }
  return out;
}
