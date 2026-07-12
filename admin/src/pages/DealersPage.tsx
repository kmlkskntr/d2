import { useEffect, useState } from 'react';
import { Mail, Phone, Trash2, Check, User, Building2, MessageSquare } from 'lucide-react';
import { api } from '../lib/api';
import { useToast, useConfirm } from '../components/Feedback';
import { Button, Card, Textarea, Field, Badge, Spinner, PageHeader, EmptyState } from '../components/ui';
import { Modal } from '../components/Modal';

type DealerStatus = 'new' | 'contacted' | 'approved' | 'rejected';

interface Dealer {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
  status: DealerStatus;
  note: string;
  read: boolean;
  createdAt: string;
}

const STATUS: Record<DealerStatus, { label: string; tone: 'amber' | 'indigo' | 'green' | 'red' }> = {
  new: { label: 'Yeni', tone: 'amber' },
  contacted: { label: 'İletişime Geçildi', tone: 'indigo' },
  approved: { label: 'Onaylandı', tone: 'green' },
  rejected: { label: 'Reddedildi', tone: 'red' },
};

const STATUS_KEYS: DealerStatus[] = ['new', 'contacted', 'approved', 'rejected'];

const fmtDate = (v: string) => new Date(v).toLocaleString('tr-TR');

const selectCls =
  'w-full h-9 px-3 rounded-lg border border-app-border bg-white text-[13px] text-app-ink outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition';

export default function DealersPage() {
  const [rows, setRows] = useState<Dealer[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<Dealer | null>(null);
  const [note, setNote] = useState('');
  const [savingNote, setSavingNote] = useState(false);
  const toast = useToast();
  const confirm = useConfirm();

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get<Dealer[]>('/dealers');
      setRows(data);
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const unread = rows.filter((r) => !r.read).length;

  const markRead = async (id: number) => {
    try {
      await api.patch<Dealer>('/dealers/' + id, { read: true });
      setRows((rs) => rs.map((r) => (r.id === id ? { ...r, read: true } : r)));
      setActive((a) => (a && a.id === id ? { ...a, read: true } : a));
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  const open = (row: Dealer) => {
    setActive(row);
    setNote(row.note ?? '');
    if (!row.read) markRead(row.id);
  };

  const changeStatus = async (status: DealerStatus) => {
    if (!active) return;
    try {
      await api.patch<Dealer>('/dealers/' + active.id, { status });
      setActive({ ...active, status });
      toast('success', 'Durum güncellendi.');
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  const saveNote = async () => {
    if (!active) return;
    setSavingNote(true);
    try {
      await api.patch<Dealer>('/dealers/' + active.id, { note });
      setActive({ ...active, note });
      toast('success', 'Not kaydedildi.');
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setSavingNote(false);
    }
  };

  const markReadBtn = async () => {
    if (!active) return;
    await markRead(active.id);
    toast('success', 'Okundu işaretlendi.');
  };

  const remove = async (row: Dealer) => {
    const ok = await confirm({
      title: 'Başvuru silinsin mi?',
      message: `"${row.name}" (${row.company}) başvurusu kalıcı olarak silinecek.`,
      danger: true,
      confirmLabel: 'Sil',
    });
    if (!ok) return;
    try {
      await api.del('/dealers/' + row.id);
      toast('success', 'Başvuru silindi.');
      if (active?.id === row.id) setActive(null);
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  return (
    <>
      <PageHeader
        title="Bayi Başvuruları"
        subtitle={unread > 0 ? `${unread} okunmamış başvuru` : 'Tüm başvurular okundu'}
      />

      <Card>
        {loading ? (
          <Spinner />
        ) : rows.length === 0 ? (
          <EmptyState title="Başvuru yok" hint="Henüz bayi başvurusu gelmedi." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-app-border text-app-muted text-left">
                  <th className="font-semibold px-4 py-3">Ad</th>
                  <th className="font-semibold px-4 py-3">Firma</th>
                  <th className="font-semibold px-4 py-3">Telefon</th>
                  <th className="font-semibold px-4 py-3">E-posta</th>
                  <th className="font-semibold px-4 py-3">Durum</th>
                  <th className="font-semibold px-4 py-3">Tarih</th>
                  <th className="px-4 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const st = STATUS[r.status];
                  return (
                    <tr
                      key={r.id}
                      onClick={() => open(r)}
                      className="border-b border-app-border last:border-0 hover:bg-zinc-50/60 cursor-pointer"
                    >
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-2">
                          {!r.read && <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" title="Okunmadı" />}
                          <span className={`text-app-ink ${r.read ? '' : 'font-bold'}`}>{r.name}</span>
                        </span>
                      </td>
                      <td className="px-4 py-3 text-app-muted">{r.company}</td>
                      <td className="px-4 py-3 text-app-muted">{r.phone}</td>
                      <td className="px-4 py-3 text-app-muted">{r.email}</td>
                      <td className="px-4 py-3">
                        <Badge tone={st.tone}>{st.label}</Badge>
                      </td>
                      <td className="px-4 py-3 text-app-muted whitespace-nowrap">{fmtDate(r.createdAt)}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              remove(r);
                            }}
                            title="Sil"
                            className="p-1.5 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title="Bayi Başvurusu"
        wide
        footer={
          active ? (
            <>
              <Button variant="secondary" icon={<Check size={14} />} onClick={markReadBtn}>
                Okundu işaretle
              </Button>
              <Button variant="danger" icon={<Trash2 size={14} />} onClick={() => remove(active)}>
                Sil
              </Button>
            </>
          ) : undefined
        }
      >
        {active && (
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2 text-[13px] text-app-ink">
                <User size={15} className="text-app-muted shrink-0" />
                <span className="font-semibold">{active.name}</span>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-app-ink">
                <Building2 size={15} className="text-app-muted shrink-0" />
                {active.company}
              </div>
              <div className="flex items-center gap-2 text-[13px] text-app-ink">
                <Mail size={15} className="text-app-muted shrink-0" />
                <a href={`mailto:${active.email}`} className="text-emerald-600 hover:underline break-all">
                  {active.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[13px] text-app-ink">
                <Phone size={15} className="text-app-muted shrink-0" />
                <a href={`tel:${active.phone}`} className="text-emerald-600 hover:underline">
                  {active.phone}
                </a>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-app-muted mb-1">
                <MessageSquare size={14} /> Başvuru Mesajı
              </div>
              <div className="text-[13px] text-app-ink whitespace-pre-wrap leading-relaxed rounded-lg border border-app-border bg-zinc-50/60 px-3 py-2.5">
                {active.message}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Durum">
                <select
                  className={selectCls}
                  value={active.status}
                  onChange={(e) => changeStatus(e.target.value as DealerStatus)}
                >
                  {STATUS_KEYS.map((k) => (
                    <option key={k} value={k}>
                      {STATUS[k].label}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="flex items-end text-[11px] text-app-muted">Başvuru tarihi: {fmtDate(active.createdAt)}</div>
            </div>

            <Field label="Yönetici Notu">
              <Textarea rows={4} value={note} onChange={(e) => setNote(e.target.value)} placeholder="İç notlar..." />
            </Field>
            <div>
              <Button loading={savingNote} onClick={saveNote}>
                Notu Kaydet
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
