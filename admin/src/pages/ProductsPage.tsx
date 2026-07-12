import { useEffect, useMemo, useRef, useState } from 'react';
import { Plus, Pencil, Trash2, Search, Star, Upload, FileText } from 'lucide-react';
import { api } from '../lib/api';
import { useToast, useConfirm } from '../components/Feedback';
import { Button, Card, Input, Textarea, Field, Toggle, Badge, Spinner, PageHeader, EmptyState } from '../components/ui';
import { Modal } from '../components/Modal';
import { ImageField, GalleryField, StringListField, SpecListField } from '../components/fields';
import { img } from '../lib/img';

interface Ref { id: number; name?: string; title?: string }

const empty = {
  name: '', slug: '', categoryId: 0, brandId: 0, technologyIds: [] as number[], series: '', tagline: '',
  description: '', longDescription: '', image: '', gallery: [] as string[], tags: [] as string[],
  features: [] as string[], indications: [] as string[], specs: [] as any[], variants: [] as any[],
  beforeAfter: [] as string[], priceLabel: 'Bayiye Özel Fiyat', priceNote: 'Klinik ve bayi fiyatlandırması için teklif alın.',
  pdfUrl: '', featured: false, isNew: false, order: 0, active: true, seoTitle: '', seoDescription: '',
};

export default function ProductsPage() {
  const [rows, setRows] = useState<any[]>([]);
  const [cats, setCats] = useState<Ref[]>([]);
  const [brands, setBrands] = useState<Ref[]>([]);
  const [techs, setTechs] = useState<Ref[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState<any | null>(null);
  const [saving, setSaving] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const pdfRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const confirm = useConfirm();

  const load = async () => {
    setLoading(true);
    try {
      const [p, c, b, t] = await Promise.all([
        api.get<any[]>('/products'),
        api.get<Ref[]>('/categories'),
        api.get<Ref[]>('/brands'),
        api.get<Ref[]>('/technologies'),
      ]);
      setRows(p); setCats(c); setBrands(b); setTechs(t);
    } catch (e: any) {
      toast('error', e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  const filtered = useMemo(() => {
    if (!q.trim()) return rows;
    const s = q.toLowerCase();
    return rows.filter((r) => (r.name + r.slug).toLowerCase().includes(s));
  }, [rows, q]);

  const openNew = () => setEditing({ ...empty, categoryId: cats[0]?.id ?? 0, brandId: brands[0]?.id ?? 0 });

  const save = async () => {
    if (!editing.name || !editing.slug || !editing.categoryId || !editing.brandId) {
      toast('error', 'Ad, slug, kategori ve marka zorunludur.');
      return;
    }
    setSaving(true);
    try {
      if (editing.id) { await api.put(`/products/${editing.id}`, editing); toast('success', 'Ürün güncellendi.'); }
      else { await api.post('/products', editing); toast('success', 'Ürün oluşturuldu.'); }
      setEditing(null); load();
    } catch (e: any) {
      toast('error', e.message);
    } finally {
      setSaving(false);
    }
  };

  const remove = async (row: any) => {
    const ok = await confirm({ title: 'Ürün silinsin mi?', message: `"${row.name}" kalıcı olarak silinecek.`, danger: true, confirmLabel: 'Sil' });
    if (!ok) return;
    try { await api.del(`/products/${row.id}`); toast('success', 'Ürün silindi.'); load(); }
    catch (e: any) { toast('error', e.message); }
  };

  const set = (k: string, v: any) => setEditing((e: any) => ({ ...e, [k]: v }));
  const toggleTech = (id: number) => set('technologyIds', editing.technologyIds.includes(id) ? editing.technologyIds.filter((x: number) => x !== id) : [...editing.technologyIds, id]);

  const uploadPdf = async (file?: File) => {
    if (!file) return;
    setPdfBusy(true);
    try {
      const form = new FormData(); form.append('files', file);
      const [row] = await api.upload<any[]>('/media', form);
      set('pdfUrl', row.url); toast('success', 'PDF yüklendi.');
    } catch (e: any) { toast('error', e.message); }
    finally { setPdfBusy(false); }
  };

  const selectCls = 'w-full h-9 px-3 rounded-lg border border-app-border bg-white text-[13px] outline-none focus:border-emerald-400';

  return (
    <>
      <PageHeader title="Ürünler" subtitle="Medikal cihaz kataloğunu yönetin" actions={<Button icon={<Plus size={15} />} onClick={openNew}>Yeni Ürün</Button>} />

      <div className="relative max-w-xs mb-4">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-app-muted" />
        <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ürün ara..." className="pl-9" />
      </div>

      <Card>
        {loading ? <Spinner /> : filtered.length === 0 ? <EmptyState title="Ürün yok" hint="Yeni ürün ekleyin." /> : (
          <div className="overflow-x-auto">
            <table className="w-full text-[13px]">
              <thead>
                <tr className="border-b border-app-border text-app-muted text-left">
                  <th className="font-semibold px-4 py-3">Ürün</th>
                  <th className="font-semibold px-4 py-3">Kategori</th>
                  <th className="font-semibold px-4 py-3">Marka</th>
                  <th className="font-semibold px-4 py-3">Sıra</th>
                  <th className="font-semibold px-4 py-3">Durum</th>
                  <th className="px-4 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr key={r.id} className="border-b border-app-border last:border-0 hover:bg-zinc-50/60">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img src={img(r.image)} alt="" className="w-10 h-10 rounded object-contain bg-zinc-50 border border-app-border" />
                        <div>
                          <span className="font-semibold text-app-ink flex items-center gap-1.5">{r.name} {r.featured && <Star size={12} className="text-amber-500 fill-amber-500" />}</span>
                          <span className="text-app-muted text-[11px]">{r.slug}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-app-muted">{r.category?.title}</td>
                    <td className="px-4 py-3 text-app-muted">{r.brand?.name}</td>
                    <td className="px-4 py-3">{r.order}</td>
                    <td className="px-4 py-3">{r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button onClick={() => setEditing({ ...r })} className="p-1.5 rounded-lg text-app-muted hover:bg-zinc-100 hover:text-emerald-600"><Pencil size={15} /></button>
                        <button onClick={() => remove(r)} className="p-1.5 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600"><Trash2 size={15} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <Modal open={!!editing} onClose={() => setEditing(null)} title={editing?.id ? 'Ürünü Düzenle' : 'Yeni Ürün'} wide
        footer={<><Button variant="secondary" onClick={() => setEditing(null)}>Vazgeç</Button><Button loading={saving} onClick={save}>Kaydet</Button></>}>
        {editing && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Ürün Adı" required><Input value={editing.name} onChange={(e) => set('name', e.target.value)} /></Field>
            <Field label="Slug (URL)" required><Input value={editing.slug} onChange={(e) => set('slug', e.target.value)} /></Field>
            <Field label="Kategori" required>
              <select className={selectCls} value={editing.categoryId} onChange={(e) => set('categoryId', Number(e.target.value))}>
                <option value={0} disabled>Seçin</option>
                {cats.map((c) => <option key={c.id} value={c.id}>{c.title}</option>)}
              </select>
            </Field>
            <Field label="Marka" required>
              <select className={selectCls} value={editing.brandId} onChange={(e) => set('brandId', Number(e.target.value))}>
                <option value={0} disabled>Seçin</option>
                {brands.map((b) => <option key={b.id} value={b.id}>{b.name}</option>)}
              </select>
            </Field>
            <Field label="Seri (opsiyonel)"><Input value={editing.series ?? ''} onChange={(e) => set('series', e.target.value)} placeholder="ör. FROZEN Serisi" /></Field>
            <Field label="Sıralama"><Input type="number" value={editing.order} onChange={(e) => set('order', Number(e.target.value))} /></Field>

            <div className="md:col-span-2"><Field label="Kısa Açıklama (tagline)" required><Input value={editing.tagline} onChange={(e) => set('tagline', e.target.value)} /></Field></div>
            <div className="md:col-span-2"><Field label="Açıklama"><Textarea rows={2} value={editing.description} onChange={(e) => set('description', e.target.value)} /></Field></div>
            <div className="md:col-span-2"><Field label="Detay Açıklaması"><Textarea rows={4} value={editing.longDescription ?? ''} onChange={(e) => set('longDescription', e.target.value)} /></Field></div>

            <div className="md:col-span-2"><Field label="Kapak Görseli"><ImageField value={editing.image} onChange={(v) => set('image', v)} /></Field></div>
            <div className="md:col-span-2"><Field label="Görsel Galerisi"><GalleryField value={editing.gallery} onChange={(v) => set('gallery', v)} /></Field></div>

            <div className="md:col-span-2">
              <Field label="Teknolojiler">
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => {
                    const on = editing.technologyIds.includes(t.id);
                    return (
                      <button key={t.id} type="button" onClick={() => toggleTech(t.id)}
                        className={`px-3 h-8 rounded-lg text-[12px] font-semibold border transition-colors ${on ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-app-muted border-app-border hover:border-emerald-300'}`}>
                        {t.title}
                      </button>
                    );
                  })}
                </div>
              </Field>
            </div>

            <div className="md:col-span-2"><Field label="Etiketler (tags)"><StringListField value={editing.tags} onChange={(v) => set('tags', v)} placeholder="ör. Soğutma" /></Field></div>
            <div className="md:col-span-2"><Field label="Öne Çıkan Özellikler"><StringListField value={editing.features} onChange={(v) => set('features', v)} /></Field></div>
            <div className="md:col-span-2"><Field label="Kullanım Alanları"><StringListField value={editing.indications} onChange={(v) => set('indications', v)} /></Field></div>
            <div className="md:col-span-2"><Field label="Teknik Özellikler (spesifikasyon)"><SpecListField value={editing.specs} onChange={(v) => set('specs', v)} /></Field></div>
            <div className="md:col-span-2"><Field label="Varyantlar (isim + not)"><SpecListField value={(editing.variants ?? []).map((v: any) => ({ label: v.name ?? '', value: v.note ?? '' }))} onChange={(v) => set('variants', v.map((x) => ({ name: x.label, note: x.value })))} /></Field></div>
            <div className="md:col-span-2"><Field label="Öncesi / Sonrası Görselleri"><GalleryField value={editing.beforeAfter} onChange={(v) => set('beforeAfter', v)} /></Field></div>

            <Field label="Fiyat Etiketi"><Input value={editing.priceLabel} onChange={(e) => set('priceLabel', e.target.value)} /></Field>
            <Field label="Fiyat Notu"><Input value={editing.priceNote} onChange={(e) => set('priceNote', e.target.value)} /></Field>

            <div className="md:col-span-2">
              <Field label="Doküman / Katalog (PDF)">
                <div className="flex items-center gap-2">
                  <Input value={editing.pdfUrl ?? ''} onChange={(e) => set('pdfUrl', e.target.value)} placeholder="PDF URL" />
                  <input ref={pdfRef} type="file" accept="application/pdf" className="hidden" onChange={(e) => uploadPdf(e.target.files?.[0])} />
                  <Button type="button" variant="secondary" icon={<Upload size={14} />} loading={pdfBusy} onClick={() => pdfRef.current?.click()}>PDF Yükle</Button>
                  {editing.pdfUrl && <a href={editing.pdfUrl} target="_blank" rel="noreferrer" className="text-emerald-600"><FileText size={16} /></a>}
                </div>
              </Field>
            </div>

            <div className="md:col-span-2"><Field label="SEO Başlığı"><Input value={editing.seoTitle ?? ''} onChange={(e) => set('seoTitle', e.target.value)} /></Field></div>
            <div className="md:col-span-2"><Field label="SEO Meta Açıklaması"><Textarea rows={2} value={editing.seoDescription ?? ''} onChange={(e) => set('seoDescription', e.target.value)} /></Field></div>

            <div className="flex items-center gap-6 md:col-span-2 pt-2">
              <Toggle checked={editing.featured} onChange={(v) => set('featured', v)} label="Öne çıkan" />
              <Toggle checked={editing.isNew} onChange={(v) => set('isNew', v)} label="Yeni rozeti" />
              <Toggle checked={editing.active} onChange={(v) => set('active', v)} label="Aktif" />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
