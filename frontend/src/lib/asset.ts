// Görsel/asset yollarını uygulamanın temel yoluna (base) göre mutlaklaştırır.
// Böylece BrowserRouter ile derin sayfalarda (ör. /urunler/kategori/vucut)
// göreli 'assets/...' yolları kırılmaz. Mutlak URL / data / blob dokunulmaz.
export function asset(p?: string): string {
  if (!p) return '';
  if (/^(https?:)?\/\//.test(p) || p.startsWith('data:') || p.startsWith('blob:')) return p;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${p.replace(/^\/+/, '')}`;
}
