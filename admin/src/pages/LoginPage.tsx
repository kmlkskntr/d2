import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { Button, Input, Field } from '../components/ui';

export default function LoginPage() {
  const { login, user } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) nav('/', { replace: true });
  }, [user, nav]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      nav('/', { replace: true });
    } catch (err: any) {
      setError(err.message ?? 'Giriş başarısız.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-app-bg">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-8">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-app-ink text-white text-[17px] font-extrabold tracking-tight mb-3">D2</span>
          <h1 className="text-[17px] font-bold text-app-ink">D2 Grup Yönetim Paneli</h1>
          <p className="text-[13px] text-app-muted mt-1">Devam etmek için giriş yapın</p>
        </div>

        <form onSubmit={submit} className="bg-white border border-app-border rounded-xl p-6 flex flex-col gap-4 shadow-sm">
          {error && <div className="bg-red-50 border border-red-100 text-red-600 text-[12px] rounded-lg px-3 py-2.5">{error}</div>}
          <Field label="E-posta" required>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="admin@d2grup.com" required autoFocus />
          </Field>
          <Field label="Şifre" required>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" required />
          </Field>
          <Button type="submit" loading={loading} icon={<LogIn size={15} />} className="w-full h-10">
            Giriş Yap
          </Button>
        </form>
        <p className="text-center text-[11px] text-app-muted mt-4">© 2026 D2 Grup — Yönetim Paneli</p>
      </div>
    </div>
  );
}
