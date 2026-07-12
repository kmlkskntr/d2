import { useEffect, useState } from 'react';
import { Mail, Phone, Trash2, Eye, MessageSquare, User } from 'lucide-react';
import { api } from '../lib/api';
import { useToast, useConfirm } from '../components/Feedback';
import { Button, Card, Badge, Spinner, PageHeader, EmptyState } from '../components/ui';
import { Modal } from '../components/Modal';

interface ContactMessage {
  id: number;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

const fmtDate = (v: string) => new Date(v).toLocaleString('tr-TR');

export default function MessagesPage() {
  const [rows, setRows] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState<ContactMessage | null>(null);
  const toast = useToast();
  const confirm = useConfirm();

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get<ContactMessage[]>('/contact');
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

  const open = async (row: ContactMessage) => {
    setActive(row);
    if (!row.read) {
      try {
        await api.patch<ContactMessage>('/contact/' + row.id, { read: true });
        setRows((rs) => rs.map((r) => (r.id === row.id ? { ...r, read: true } : r)));
      } catch (e) {
        toast('error', (e as Error).message);
      }
    }
  };

  const remove = async (row: ContactMessage) => {
    const ok = await confirm({
      title: 'Mesaj silinsin mi?',
      message: `"${row.name}" adlı kişiden gelen mesaj kalıcı olarak silinecek.`,
      danger: true,
      confirmLabel: 'Sil',
    });
    if (!ok) return;
    try {
      await api.del('/contact/' + row.id);
      toast('success', 'Mesaj silindi.');
      if (active?.id === row.id) setActive(null);
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  return (
    <>
      <PageHeader
        title="İletişim Mesajları"
        subtitle={unread > 0 ? `${unread} okunmamış mesaj` : 'Tüm mesajlar okundu'}
      />

      <Card>
        {loading ? (
          <Spinner />
        ) : rows.length === 0 ? (
          <EmptyState title="Mesaj yok" hint="Henüz iletişim formu üzerinden mesaj gelmedi." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-app-border text-app-muted text-left">
                  <th className="font-semibold px-4 py-3">Ad</th>
                  <th className="font-semibold px-4 py-3">E-posta</th>
                  <th className="font-semibold px-4 py-3">Telefon</th>
                  <th className="font-semibold px-4 py-3">Konu</th>
                  <th className="font-semibold px-4 py-3">Tarih</th>
                  <th className="font-semibold px-4 py-3">Durum</th>
                  <th className="px-4 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.id}
                    onClick={() => open(r)}
                    className="border-b border-app-border last:border-0 hover:bg-zinc-50/60 cursor-pointer"
                  >
                    <td className="px-4 py-3">
                      <span className={`text-app-ink ${r.read ? '' : 'font-bold'}`}>{r.name}</span>
                    </td>
                    <td className="px-4 py-3 text-app-muted">{r.email}</td>
                    <td className="px-4 py-3 text-app-muted">{r.phone}</td>
                    <td className="px-4 py-3 text-app-muted">{r.subject}</td>
                    <td className="px-4 py-3 text-app-muted whitespace-nowrap">{fmtDate(r.createdAt)}</td>
                    <td className="px-4 py-3">
                      {r.read ? <Badge tone="gray">Okundu</Badge> : <Badge tone="red">Yeni</Badge>}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            open(r);
                          }}
                          title="Görüntüle"
                          className="p-1.5 rounded-lg text-app-muted hover:bg-zinc-100 hover:text-emerald-600"
                        >
                          <Eye size={15} />
                        </button>
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
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Modal
        open={!!active}
        onClose={() => setActive(null)}
        title="Mesaj Detayı"
        footer={
          active ? (
            <>
              <Button variant="secondary" onClick={() => setActive(null)}>
                Kapat
              </Button>
              <Button variant="danger" icon={<Trash2 size={14} />} onClick={() => remove(active)}>
                Sil
              </Button>
            </>
          ) : undefined
        }
      >
        {active && (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[15px] font-bold text-app-ink">
              <User size={16} className="text-app-muted" />
              {active.name}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
              <div className="text-[12px] font-semibold text-app-muted mb-1">Konu</div>
              <div className="text-[13px] text-app-ink">{active.subject}</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-app-muted mb-1">
                <MessageSquare size={14} /> Mesaj
              </div>
              <div className="text-[13px] text-app-ink whitespace-pre-wrap leading-relaxed rounded-lg border border-app-border bg-zinc-50/60 px-3 py-2.5">
                {active.message}
              </div>
            </div>
            <div className="text-[11px] text-app-muted">{fmtDate(active.createdAt)}</div>
          </div>
        )}
      </Modal>
    </>
  );
}
