import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { api, setToken, clearToken, getToken } from './api';

export interface AdminUser {
  id: number;
  email: string;
  name?: string;
  role: 'ADMIN' | 'EDITOR';
}

interface AuthCtx {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const Ctx = createContext<AuthCtx>(null as any);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!getToken()) {
      setLoading(false);
      return;
    }
    api
      .get<AdminUser>('/auth/me')
      .then(setUser)
      .catch(() => clearToken())
      .finally(() => setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post<{ token: string; user: AdminUser }>('/auth/login', { email, password });
    setToken(res.token);
    setUser(res.user);
  };

  const logout = () => {
    clearToken();
    setUser(null);
    location.hash = '#/login';
  };

  return <Ctx.Provider value={{ user, loading, login, logout }}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
