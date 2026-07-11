import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, User } from 'lucide-react';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { useToast, useConfirm } from '../components/Feedback';
import { Button, Card, Input, Field, Toggle, Badge, Spinner, PageHeader, EmptyState } from '../components/ui';
import { Modal } from '../components/Modal';

type Role = 'ADMIN' | 'EDITOR';

interface AppUser {
  id: number;
  email: string;
  name: string;
  role: Role;
  active: boolean;
  createdAt: string;
}

const fmtDate = (v: string) => new Date(v).toLocaleDateString('tr-TR');

export default function UsersPage() {
  const { user } = useAuth();
  const [rows, setRows] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState<AppUser | null>(null);
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const confirm = useConfirm();

  // Create form state
  const [cEmail, setCEmail] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [cName, setCName] = useState('');
  const [cRole, setCRole] = useState<Role>('EDITOR');

  // Edit form state
  const [eName, setEName] = useState('');
  const [eRole, setERole] = useState<Role>('EDITOR');
  const [eActive, setEActive] = useState(true);
  const [ePassword, setEPassword] = useState('');

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get<AppUser[]>('/users');
      setRows(data);
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user?.role === 'ADMIN') load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.role]);

  if (user?.role !== 'ADMIN') {
    return (
      <>
        <PageHeader title="Kullanıcılar" />
        <Card className="p-8 text-center">
          <p className="text-[14px] font-semibold text-app-ink">Bu bölüme erişim yetkiniz yok.</p>
          <p className="text-[12px] text-app-muted mt-1">Kullanıcı yönetimi yalnızca yöneticiler tarafından yapılabilir.</p>
        </Card>
      </>
    );
  }

  const openCreate = () => {
    setCEmail('');
    setCPassword('');
    setCName('');
    setCRole('EDITOR');
    setCreating(true);
  };

  const submitCreate = async () => {
    if (!cEmail.trim() || !cPassword.trim()) {
      toast('error', 'E-posta ve şifre zorunludur.');
      return;
    }
    setSaving(true);
    try {
      await api.post<AppUser>('/users', {
        email: cEmail.trim(),
        password: cPassword,
        name: cName.trim(),
        role: cRole,
      });
      toast('success', 'Kullanıcı oluşturuldu.');
      setCreating(false);
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const openEdit = (row: AppUser) => {
    setEditing(row);
    setEName(row.name ?? '');
    setERole(row.role);
    setEActive(row.active);
    setEPassword('');
  };

  const submitEdit = async () => {
    if (!editing) return;
    setSaving(true);
    try {
      const body: { name: string; role: Role; active: boolean; password?: string } = {
        name: eName.trim(),
        role: eRole,
        active: eActive,
      };
      if (ePassword.trim()) body.password = ePassword;
      await api.put<AppUser>('/users/' + editing.id, body);
      toast('success', 'Kullanıcı güncellendi.');
      setEditing(null);
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (row: AppUser) => {
    const ok = await confirm({
      title: 'Kullanıcı silinsin mi?',
      message: `"${row.name || row.email}" kalıcı olarak silinecek.`,
      danger: true,
      confirmLabel: 'Sil',
    });
    if (!ok) return;
    try {
      await api.del('/users/' + row.id);
      toast('success', 'Kullanıcı silindi.');
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  return (
    <>
      <PageHeader
        title="Kullanıcılar"
        subtitle="Panel kullanıcılarını ve rollerini yönetin"
        actions={
          <Button icon={<Plus size={15} />} onClick={openCreate}>
            Yeni Kullanıcı
          </Button>
        }
      />

      <Card>
        {loading ? (
          <Spinner />
        ) : rows.length === 0 ? (
          <EmptyState title="Kullanıcı yok" hint="Yeni kullanıcı ekleyerek başlayın." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-app-border text-app-muted text-left">
                  <th className="font-semibold px-4 py-3">Ad</th>
                  <th className="font-semibold px-4 py-3">E-posta</th>
                  <th className="font-semibold px-4 py-3">Rol</th>
                  <th className="font-semibold px-4 py-3">Durum</th>
                  <th className="font-semibold px-4 py-3">Kayıt</th>
                  <th className="px-4 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b border-app-border last:border-0 hover:bg-zinc-50/60">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-2 font-semibold text-app-ink">
                        <User size={14} className="text-app-muted" />
                        {r.name || '—'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-app-muted">{r.email}</td>
                    <td className="px-4 py-3">
                      {r.role === 'ADMIN' ? <Badge tone="indigo">Yönetici</Badge> : <Badge tone="gray">Editör</Badge>}
                    </td>
                    <td className="px-4 py-3">
                      {r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>}
                    </td>
                    <td className="px-4 py-3 text-app-muted whitespace-nowrap">{fmtDate(r.createdAt)}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openEdit(r)}
                          title="Düzenle"
                          className="p-1.5 rounded-lg text-app-muted hover:bg-zinc-100 hover:text-indigo-600"
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => remove(r)}
                          title="Sil"
                          className="p-1.5 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Create modal */}
      <Modal
        open={creating}
        onClose={() => setCreating(false)}
        title="Yeni Kullanıcı"
        footer={
          <>
            <Button variant="secondary" onClick={() => setCreating(false)}>
              Vazgeç
            </Button>
            <Button loading={saving} onClick={submitCreate}>
              Oluştur
            </Button>
          </>
        }
      >
        <div className="flex flex-col gap-4">
          <Field label="E-posta" required>
            <Input type="email" value={cEmail} onChange={(e) => setCEmail(e.target.value)} placeholder="ornek@d2grup.com" />
          </Field>
          <Field label="Şifre" required>
            <Input type="password" value={cPassword} onChange={(e) => setCPassword(e.target.value)} placeholder="••••••••" />
          </Field>
          <Field label="Ad Soyad">
            <Input value={cName} onChange={(e) => setCName(e.target.value)} placeholder="Ad Soyad" />
          </Field>
          <Field label="Rol">
            <select
              value={cRole}
              onChange={(e) => setCRole(e.target.value as Role)}
              className="w-full h-9 px-3 rounded-lg border border-app-border bg-white text-[13px] text-app-ink outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
            >
              <option value="EDITOR">Editör</option>
              <option value="ADMIN">Yönetici</option>
            </select>
          </Field>
        </div>
      </Modal>

      {/* Edit modal */}
      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title="Kullanıcıyı Düzenle"
        footer={
          <>
            <Button variant="secondary" onClick={() => setEditing(null)}>
              Vazgeç
            </Button>
            <Button loading={saving} onClick={submitEdit}>
              Kaydet
            </Button>
          </>
        }
      >
        {editing && (
          <div className="flex flex-col gap-4">
            <Field label="E-posta">
              <Input value={editing.email} disabled />
            </Field>
            <Field label="Ad Soyad">
              <Input value={eName} onChange={(e) => setEName(e.target.value)} placeholder="Ad Soyad" />
            </Field>
            <Field label="Rol">
              <select
                value={eRole}
                onChange={(e) => setERole(e.target.value as Role)}
                className="w-full h-9 px-3 rounded-lg border border-app-border bg-white text-[13px] text-app-ink outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
              >
                <option value="EDITOR">Editör</option>
                <option value="ADMIN">Yönetici</option>
              </select>
            </Field>
            <Field label="Durum">
              <Toggle checked={eActive} onChange={setEActive} label={eActive ? 'Aktif' : 'Pasif'} />
            </Field>
            <Field label="Yeni şifre (opsiyonel)" hint="Boş bırakılırsa şifre değişmez.">
              <Input type="password" value={ePassword} onChange={(e) => setEPassword(e.target.value)} placeholder="••••••••" />
            </Field>
          </div>
        )}
      </Modal>
    </>
  );
}
