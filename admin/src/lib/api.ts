// Basit fetch tabanlı API istemcisi (JWT token'lı).
const TOKEN_KEY = 'd2_admin_token';
// Üretimde backend adresi; dev'de boş (Vite proxy /api'yi yönlendirir).
const BASE = import.meta.env.VITE_API_URL ?? '';

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (t: string) => localStorage.setItem(TOKEN_KEY, t);
export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function request<T>(method: string, path: string, body?: unknown, isForm = false): Promise<T> {
  const headers: Record<string, string> = {};
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (!isForm && body !== undefined) headers['Content-Type'] = 'application/json';

  const res = await fetch(`${BASE}/api${path}`, {
    method,
    headers,
    body: isForm ? (body as FormData) : body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    clearToken();
    if (!location.hash.includes('/login')) location.hash = '#/login';
    throw new ApiError('Oturum sonlandı. Lütfen tekrar giriş yapın.', 401);
  }

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) throw new ApiError(data?.error ?? 'Bir hata oluştu.', res.status);
  return data as T;
}

export const api = {
  get: <T,>(path: string) => request<T>('GET', path),
  post: <T,>(path: string, body?: unknown) => request<T>('POST', path, body),
  put: <T,>(path: string, body?: unknown) => request<T>('PUT', path, body),
  patch: <T,>(path: string, body?: unknown) => request<T>('PATCH', path, body),
  del: <T,>(path: string) => request<T>('DELETE', path),
  upload: <T,>(path: string, form: FormData) => request<T>('POST', path, form, true),
};
