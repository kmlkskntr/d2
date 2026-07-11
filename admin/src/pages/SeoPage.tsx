import { useEffect, useState, type ReactNode } from 'react';
import { Save, Plus, Trash2, Search, BarChart3 } from 'lucide-react';
import { api } from '../lib/api';
import { useToast, useConfirm } from '../components/Feedback';
import { Button, Card, Input, Textarea, Field, Spinner, PageHeader, EmptyState } from '../components/ui';

// ---------------------------------------------------------- Tipler
interface SeoRow {
  cid: string; // istemci tarafı anahtar
  id: number | null; // sunucudaki kayıt (yeni satırlarda null)
  path: string;
  title: string;
  description: string;
  ogImage: string;
  canonical: string;
}
interface Integrations {
  googleAnalyticsId: string;
  googleTagManagerId: string;
  metaPixelId: string;
  googleAdsConversion: string;
  searchConsoleVerification: string;
  headerScripts: string;
  footerScripts: string;
  robotsTxt: string;
}

const INTEGRATION_DEFAULTS: Integrations = {
  googleAnalyticsId: '',
  googleTagManagerId: '',
  metaPixelId: '',
  googleAdsConversion: '',
  searchConsoleVerification: '',
  headerScripts: '',
  footerScripts: '',
  robotsTxt: '',
};

let cidCounter = 0;
const nextCid = () => `row_${++cidCounter}`;

function SectionTitle({ icon, title, hint }: { icon: ReactNode; title: string; hint?: string }) {
  return (
    <div className="flex items-start gap-2.5 mb-4">
      <span className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <h2 className="text-[15px] font-bold text-app-ink">{title}</h2>
        {hint && <p className="text-[12px] text-app-muted mt-0.5">{hint}</p>}
      </div>
    </div>
  );
}

function CardHead({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="px-5 pt-5 pb-3 border-b border-app-border">
      <h2 className="text-[14px] font-bold text-app-ink">{title}</h2>
      {hint && <p className="text-[12px] text-app-muted mt-0.5">{hint}</p>}
    </div>
  );
}

export default function SeoPage() {
  const toast = useToast();
  const confirm = useConfirm();

  const [rows, setRows] = useState<SeoRow[] | null>(null);
  const [integrations, setIntegrations] = useState<Integrations | null>(null);
  const [savingRow, setSavingRow] = useState<string | null>(null);
  const [savingIntegrations, setSavingIntegrations] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get<Omit<SeoRow, 'cid'>[]>('/seo');
        setRows(
          data.map((r) => ({
            cid: nextCid(),
            id: r.id,
            path: r.path ?? '',
            title: r.title ?? '',
            description: r.description ?? '',
            ogImage: r.ogImage ?? '',
            canonical: r.canonical ?? '',
          })),
        );
      } catch (e: any) {
        toast('error', e.message ?? 'SEO kayıtları yüklenemedi.');
        setRows([]);
      }
      try {
        const data = await api.get<Partial<Integrations>>('/settings/integrations');
        setIntegrations({ ...INTEGRATION_DEFAULTS, ...data });
      } catch (e: any) {
        toast('error', e.message ?? 'Entegrasyonlar yüklenemedi.');
        setIntegrations(INTEGRATION_DEFAULTS);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!rows || !integrations) return <Spinner />;

  // -------------------------------------------------------- Sayfa SEO işlemleri
  const setRow = (cid: string, k: keyof Omit<SeoRow, 'cid' | 'id'>, v: string) =>
    setRows((list) => (list ? list.map((r) => (r.cid === cid ? { ...r, [k]: v } : r)) : list));

  const addRow = () =>
    setRows((list) => [
      ...(list ?? []),
      { cid: nextCid(), id: null, path: '', title: '', description: '', ogImage: '', canonical: '' },
    ]);

  const saveRow = async (row: SeoRow) => {
    if (!row.path.trim()) {
      toast('error', 'Sayfa yolu (path) zorunludur. Örn: / veya /urunler');
      return;
    }
    setSavingRow(row.cid);
    try {
      const saved = await api.put<Omit<SeoRow, 'cid'>>('/seo', {
        path: row.path,
        title: row.title,
        description: row.description,
        ogImage: row.ogImage,
        canonical: row.canonical,
      });
      // Sunucudan dönen id ile satırı senkronla
      setRows((list) => (list ? list.map((r) => (r.cid === row.cid ? { ...r, id: saved?.id ?? r.id } : r)) : list));
      toast('success', 'Sayfa SEO kaydı kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSavingRow(null);
    }
  };

  const removeRow = async (row: SeoRow) => {
    // Henüz kaydedilmemiş satır: sadece yerelden kaldır
    if (row.id === null) {
      setRows((list) => (list ? list.filter((r) => r.cid !== row.cid) : list));
      return;
    }
    const ok = await confirm({
      title: 'Sayfa SEO kaydı silinsin mi?',
      danger: true,
      confirmLabel: 'Sil',
    });
    if (!ok) return;
    try {
      await api.del('/seo/' + row.id);
      setRows((list) => (list ? list.filter((r) => r.cid !== row.cid) : list));
      toast('success', 'Kayıt silindi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Silinemedi.');
    }
  };

  // -------------------------------------------------------- Entegrasyon işlemleri
  const setInt = (k: keyof Integrations, v: string) =>
    setIntegrations((s) => (s ? { ...s, [k]: v } : s));

  const saveIntegrations = async () => {
    if (!integrations) return;
    setSavingIntegrations(true);
    try {
      await api.put('/settings/integrations', integrations);
      toast('success', 'Entegrasyon ayarları kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSavingIntegrations(false);
    }
  };

  return (
    <div>
      <PageHeader title="SEO ve Entegrasyonlar" subtitle="Sayfa meta bilgilerini ve pazarlama entegrasyonlarını yönetin" />

      {/* ==================== A) Sayfa SEO ==================== */}
      <section className="mb-10">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <SectionTitle
            icon={<Search size={16} />}
            title="Sayfa SEO"
            hint="Her sayfa için başlık, açıklama ve sosyal medya görsellerini tanımlayın"
          />
          <Button variant="secondary" icon={<Plus size={15} />} onClick={addRow}>
            Yeni sayfa ekle
          </Button>
        </div>

        {rows.length === 0 ? (
          <EmptyState title="Henüz SEO kaydı yok" hint="Yeni sayfa ekleyerek başlayın." />
        ) : (
          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <Card key={row.cid} className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Sayfa Yolu (Path)" required>
                    <Input value={row.path} onChange={(e) => setRow(row.cid, 'path', e.target.value)} placeholder="/ veya /urunler" />
                  </Field>
                  <Field label="Başlık (Title)">
                    <Input value={row.title} onChange={(e) => setRow(row.cid, 'title', e.target.value)} />
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Açıklama (Description)">
                      <Textarea rows={2} value={row.description} onChange={(e) => setRow(row.cid, 'description', e.target.value)} />
                    </Field>
                  </div>
                  <Field label="OG Görseli">
                    <Input value={row.ogImage} onChange={(e) => setRow(row.cid, 'ogImage', e.target.value)} placeholder="assets/... veya URL" />
                  </Field>
                  <Field label="Canonical URL">
                    <Input value={row.canonical} onChange={(e) => setRow(row.cid, 'canonical', e.target.value)} placeholder="https://..." />
                  </Field>
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <Button
                    variant="ghost"
                    icon={<Trash2 size={14} />}
                    onClick={() => removeRow(row)}
                    className="text-red-500 hover:bg-red-50"
                  >
                    Sil
                  </Button>
                  <Button icon={<Save size={15} />} loading={savingRow === row.cid} onClick={() => saveRow(row)}>
                    Kaydet
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* ==================== B) Entegrasyonlar & Genel SEO ==================== */}
      <section>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <SectionTitle
            icon={<BarChart3 size={16} />}
            title="Entegrasyonlar & Genel SEO"
            hint="Analitik, dönüşüm takibi ve özel script ayarları"
          />
          <Button icon={<Save size={15} />} loading={savingIntegrations} onClick={saveIntegrations}>
            Kaydet
          </Button>
        </div>

        <div className="flex flex-col gap-6 max-w-3xl">
          <Card>
            <CardHead title="Analitik & Takip Kodları" />
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Google Analytics ID">
                <Input value={integrations.googleAnalyticsId} onChange={(e) => setInt('googleAnalyticsId', e.target.value)} placeholder="G-XXXX" />
              </Field>
              <Field label="Google Tag Manager ID">
                <Input value={integrations.googleTagManagerId} onChange={(e) => setInt('googleTagManagerId', e.target.value)} placeholder="GTM-XXXX" />
              </Field>
              <Field label="Meta Pixel ID">
                <Input value={integrations.metaPixelId} onChange={(e) => setInt('metaPixelId', e.target.value)} />
              </Field>
              <Field label="Google Ads Dönüşüm">
                <Input value={integrations.googleAdsConversion} onChange={(e) => setInt('googleAdsConversion', e.target.value)} placeholder="AW-XXXX/..." />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Search Console Doğrulama">
                  <Input
                    value={integrations.searchConsoleVerification}
                    onChange={(e) => setInt('searchConsoleVerification', e.target.value)}
                    placeholder="google-site-verification içeriği"
                  />
                </Field>
              </div>
            </div>
          </Card>

          <Card>
            <CardHead title="Özel Scriptler" hint="Sayfaya eklenecek özel HTML/JS kodları" />
            <div className="p-5 grid grid-cols-1 gap-4">
              <Field label="Header Özel Script">
                <Textarea
                  rows={4}
                  value={integrations.headerScripts}
                  onChange={(e) => setInt('headerScripts', e.target.value)}
                  placeholder="&lt;script&gt;...&lt;/script&gt; — sayfa başlığına (head) eklenir"
                  className="font-mono text-[12px]"
                />
              </Field>
              <Field label="Footer Özel Script">
                <Textarea
                  rows={4}
                  value={integrations.footerScripts}
                  onChange={(e) => setInt('footerScripts', e.target.value)}
                  placeholder="&lt;script&gt;...&lt;/script&gt; — sayfa sonuna (body) eklenir"
                  className="font-mono text-[12px]"
                />
              </Field>
            </div>
          </Card>

          <Card>
            <CardHead title="robots.txt" hint="Arama motoru tarayıcıları için kurallar" />
            <div className="p-5">
              <Field label="robots.txt İçeriği">
                <Textarea
                  rows={6}
                  value={integrations.robotsTxt}
                  onChange={(e) => setInt('robotsTxt', e.target.value)}
                  placeholder={'User-agent: *\nAllow: /'}
                  className="font-mono text-[12px]"
                />
              </Field>
            </div>
          </Card>

          <div>
            <Button icon={<Save size={15} />} loading={savingIntegrations} onClick={saveIntegrations}>
              Kaydet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
