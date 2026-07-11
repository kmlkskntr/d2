import { useState } from 'react';
import { User, Lock, LogOut, ShieldCheck, Check } from 'lucide-react';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useToast } from '../components/Feedback';
import { Button, Card, Input, Field, Badge, PageHeader } from '../components/ui';

export default function AccountPage() {
  const { user, logout } = useAuth();
  const toast = useToast();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [saving, setSaving] = useState(false);

  const submitPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword.trim()) {
      toast('error', 'Mevcut şifrenizi girin.');
      return;
    }
    if (newPassword.length < 6) {
      toast('error', 'Yeni şifre en az 6 karakter olmalıdır.');
      return;
    }
    if (newPassword !== newPasswordConfirm) {
      toast('error', 'Yeni şifreler eşleşmiyor.');
      return;
    }
    setSaving(true);
    try {
      await api.post('/auth/change-password', { currentPassword, newPassword });
      toast('success', 'Şifreniz güncellendi.');
      setCurrentPassword('');
      setNewPassword('');
      setNewPasswordConfirm('');
    } catch (err) {
      toast('error', (err as Error).message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <PageHeader title="Hesap Ayarları" subtitle="Profil bilgilerinizi ve şifrenizi yönetin" />

      <div className="flex flex-col gap-5 max-w-2xl">
        {/* Profil */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <User size={16} className="text-app-muted" />
            <h2 className="text-[14px] font-bold text-app-ink">Profil</h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-app-border pb-3">
              <span className="text-[12px] font-semibold text-app-muted">Ad Soyad</span>
              <span className="text-[13px] text-app-ink">{user?.name || '—'}</span>
            </div>
            <div className="flex items-center justify-between border-b border-app-border pb-3">
              <span className="text-[12px] font-semibold text-app-muted">E-posta</span>
              <span className="text-[13px] text-app-ink">{user?.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-app-muted">Rol</span>
              {user?.role === 'ADMIN' ? <Badge tone="indigo">Yönetici</Badge> : <Badge tone="gray">Editör</Badge>}
            </div>
          </div>
        </Card>

        {/* Şifre değiştir */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Lock size={16} className="text-app-muted" />
            <h2 className="text-[14px] font-bold text-app-ink">Şifre Değiştir</h2>
          </div>
          <form onSubmit={submitPassword} className="flex flex-col gap-4">
            <Field label="Mevcut Şifre" required>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </Field>
            <Field label="Yeni Şifre" required hint="En az 6 karakter.">
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </Field>
            <Field label="Yeni Şifre (Tekrar)" required>
              <Input
                type="password"
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </Field>
            <div>
              <Button type="submit" loading={saving} icon={<Check size={15} />}>
                Şifreyi Güncelle
              </Button>
            </div>
          </form>
        </Card>

        {/* Oturum */}
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={16} className="text-app-muted" />
            <h2 className="text-[14px] font-bold text-app-ink">Oturum</h2>
          </div>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <p className="text-[13px] text-app-muted">Bu cihazdaki oturumunuzu sonlandırın.</p>
            <Button variant="danger" icon={<LogOut size={15} />} onClick={logout}>
              Çıkış Yap
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
