// Admin önizlemelerinde göreli asset yollarını (ör. 'assets/...') frontend
// adresine göre çözer. Yüklenen medya zaten mutlak URL olduğu için dokunulmaz.
const FRONTEND = (import.meta.env.VITE_FRONTEND_URL ?? 'http://localhost:3000').replace(/\/$/, '');

export function img(url?: string): string {
  if (!url) return '';
  if (/^(https?:)?\/\//.test(url) || url.startsWith('data:')) return url;
  return `${FRONTEND}/${url.replace(/^\//, '')}`;
}
