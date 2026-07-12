import { useEffect, useMemo, useState } from 'react';
import { Plus, Pencil, Trash2, Search } from 'lucide-react';
import { api } from '../lib/api';
import { useToast, useConfirm } from './Feedback';
import { Button, Card, Input, Textarea, Field, Toggle, Spinner, PageHeader, EmptyState } from './ui';
import { Modal } from './Modal';
import { ImageField, GalleryField, StringListField, SpecListField } from './fields';

export type FieldType = 'text' | 'textarea' | 'number' | 'boolean' | 'image' | 'gallery' | 'stringList' | 'specList' | 'select';

export interface FieldDef {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  hint?: string;
  full?: boolean; // formda tam genişlik
  placeholder?: string;
  options?: { value: string; label: string }[];
}

export interface ColumnDef {
  key: string;
  label: string;
  render?: (row: any) => React.ReactNode;
}

interface Props {
  title: string;
  subtitle?: string;
  endpoint: string; // ör. '/categories'
  fields: FieldDef[];
  columns: ColumnDef[];
  titleKey: string; // silme onayında gösterilecek alan
  defaults: Record<string, any>;
  searchable?: boolean;
}

export default function ResourceManager({ title, subtitle, endpoint, fields, columns, titleKey, defaults, searchable = true }: Props) {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState<any | null>(null);
  const [saving, setSaving] = useState(false);
  const toast = useToast();
  const confirm = useConfirm();

  const load = async () => {
    setLoading(true);
    try {
      setRows(await api.get<any[]>(endpoint));
    } catch (e: any) {
      toast('error', e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  const filtered = useMemo(() => {
    if (!q.trim()) return rows;
    const s = q.toLowerCase();
    return rows.filter((r) => JSON.stringify(r).toLowerCase().includes(s));
  }, [rows, q]);

  const save = async () => {
    setSaving(true);
    try {
      if (editing.id) {
        await api.put(`${endpoint}/${editing.id}`, editing);
        toast('success', 'Güncellendi.');
      } else {
        await api.post(endpoint, editing);
        toast('success', 'Oluşturuldu.');
      }
      setEditing(null);
      load();
    } catch (e: any) {
      toast('error', e.message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (row: any) => {
    const ok = await confirm({ title: 'Silinsin mi?', message: `"${row[titleKey]}" kalıcı olarak silinecek.`, danger: true, confirmLabel: 'Sil' });
    if (!ok) return;
    try {
      await api.del(`${endpoint}/${row.id}`);
      toast('success', 'Silindi.');
      load();
    } catch (e: any) {
      toast('error', e.message);
    }
  };

  const setField = (name: string, val: any) => setEditing((e: any) => ({ ...e, [name]: val }));

  return (
    <>
      <PageHeader
        title={title}
        subtitle={subtitle}
        actions={<Button icon={<Plus size={15} />} onClick={() => setEditing({ ...defaults })}>Yeni Ekle</Button>}
      />

      {searchable && (
        <div className="relative max-w-xs mb-4">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-app-muted" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ara..." className="pl-9" />
        </div>
      )}

      <Card>
        {loading ? (
          <Spinner />
        ) : filtered.length === 0 ? (
          <EmptyState title="Kayıt yok" hint="Yeni ekleyerek başlayın." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-app-border text-app-muted text-left">
                  {columns.map((c) => (
                    <th key={c.key} className="font-semibold px-4 py-3 whitespace-nowrap">{c.label}</th>
                  ))}
                  <th className="px-4 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((row) => (
                  <tr key={row.id} className="border-b border-app-border last:border-0 hover:bg-zinc-50/60">
                    {columns.map((c) => (
                      <td key={c.key} className="px-4 py-3 align-middle">{c.render ? c.render(row) : String(row[c.key] ?? '')}</td>
                    ))}
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => setEditing({ ...row })} className="p-1.5 rounded-lg text-app-muted hover:bg-zinc-100 hover:text-emerald-600" title="Düzenle">
                          <Pencil size={15} />
                        </button>
                        <button onClick={() => remove(row)} className="p-1.5 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600" title="Sil">
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
        open={!!editing}
        onClose={() => setEditing(null)}
        title={editing?.id ? `${title} — Düzenle` : `${title} — Yeni`}
        wide
        footer={
          <>
            <Button variant="secondary" onClick={() => setEditing(null)}>Vazgeç</Button>
            <Button loading={saving} onClick={save}>Kaydet</Button>
          </>
        }
      >
        {editing && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((f) => (
              <div key={f.name} className={f.full || ['textarea', 'gallery', 'stringList', 'specList', 'image'].includes(f.type) ? 'md:col-span-2' : ''}>
                <Field label={f.label} hint={f.hint} required={f.required}>
                  {f.type === 'text' && <Input value={editing[f.name] ?? ''} onChange={(e) => setField(f.name, e.target.value)} placeholder={f.placeholder} />}
                  {f.type === 'number' && <Input type="number" value={editing[f.name] ?? 0} onChange={(e) => setField(f.name, Number(e.target.value))} />}
                  {f.type === 'textarea' && <Textarea rows={4} value={editing[f.name] ?? ''} onChange={(e) => setField(f.name, e.target.value)} placeholder={f.placeholder} />}
                  {f.type === 'boolean' && <div className="pt-1"><Toggle checked={!!editing[f.name]} onChange={(v) => setField(f.name, v)} label={editing[f.name] ? 'Aktif' : 'Pasif'} /></div>}
                  {f.type === 'image' && <ImageField value={editing[f.name] ?? ''} onChange={(v) => setField(f.name, v)} />}
                  {f.type === 'gallery' && <GalleryField value={editing[f.name] ?? []} onChange={(v) => setField(f.name, v)} />}
                  {f.type === 'stringList' && <StringListField value={editing[f.name] ?? []} onChange={(v) => setField(f.name, v)} placeholder={f.placeholder} />}
                  {f.type === 'specList' && <SpecListField value={editing[f.name] ?? []} onChange={(v) => setField(f.name, v)} />}
                  {f.type === 'select' && (
                    <select
                      value={editing[f.name] ?? ''}
                      onChange={(e) => setField(f.name, e.target.value)}
                      className="w-full h-9 px-3 rounded-lg border border-app-border bg-white text-[13px] outline-none focus:border-emerald-400"
                    >
                      {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  )}
                </Field>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </>
  );
}
