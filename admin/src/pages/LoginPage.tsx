import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useAuth } from '../lib/auth';
import { Button, Input, Field } from '../components/ui';
import { AGENCY } from '../lib/brand';

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
          <img src={AGENCY.logo} alt={AGENCY.name} className="h-9 w-auto object-contain mb-5" />
          <h1 className="text-[16px] font-bold text-app-ink">D2 Grup Yönetim Paneli</h1>
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
        <a
          href={AGENCY.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 group mt-6"
        >
          <span className="text-[11px] text-app-muted">Tasarım &amp; Geliştirme</span>
          <img
            src={AGENCY.logo}
            alt={AGENCY.name}
            className="h-3.5 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </div>
  );
}
