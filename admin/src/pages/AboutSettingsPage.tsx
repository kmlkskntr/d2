import { useEffect, useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';
import { api } from '../lib/api';
import { useToast } from '../components/Feedback';
import { Button, Card, Input, Textarea, Field, Spinner, PageHeader } from '../components/ui';
import { ImageField } from '../components/fields';

// ---------------------------------------------------------- Tipler
interface StatItem {
  value: string;
  label: string;
  iconName: string;
}
interface AboutSettings {
  eyebrow: string;
  title: string;
  description: string;
  story: string;
  heroImage: string;
  stats: StatItem[];
  seoTitle: string;
  seoDescription: string;
}

const STAT_ICONS = ['Award', 'Gem', 'Users', 'Building2', 'Globe'];

const DEFAULTS: AboutSettings = {
  eyebrow: '',
  title: '',
  description: '',
  story: '',
  heroImage: '',
  stats: [],
  seoTitle: '',
  seoDescription: '',
};

// ---------------------------------------------------------- Kart başlığı
function CardHead({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="px-5 pt-5 pb-3 border-b border-app-border">
      <h2 className="text-[14px] font-bold text-app-ink">{title}</h2>
      {hint && <p className="text-[12px] text-app-muted mt-0.5">{hint}</p>}
    </div>
  );
}

export default function AboutSettingsPage() {
  const toast = useToast();
  const [state, setState] = useState<AboutSettings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get<Partial<AboutSettings>>('/settings/about');
        setState({ ...DEFAULTS, ...data, stats: data?.stats ?? [] });
      } catch (e: any) {
        toast('error', e.message ?? 'Yüklenemedi.');
        setState(DEFAULTS);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const save = async () => {
    if (!state) return;
    setSaving(true);
    try {
      await api.put('/settings/about', state);
      toast('success', 'Kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSaving(false);
    }
  };

  if (!state) return <Spinner />;

  const set = (k: keyof AboutSettings, v: string) => setState((s) => (s ? { ...s, [k]: v } : s));

  const setStat = (i: number, k: keyof StatItem, v: string) =>
    setState((s) => (s ? { ...s, stats: s.stats.map((x, j) => (j === i ? { ...x, [k]: v } : x)) } : s));
  const addStat = () =>
    setState((s) => (s ? { ...s, stats: [...s.stats, { value: '', label: '', iconName: STAT_ICONS[0] }] } : s));
  const removeStat = (i: number) =>
    setState((s) => (s ? { ...s, stats: s.stats.filter((_, j) => j !== i) } : s));

  return (
    <div>
      <PageHeader
        title="Hakkımızda Ayarları"
        subtitle="Hakkımızda sayfasının içeriğini yönetin"
        actions={
          <Button icon={<Save size={15} />} loading={saving} onClick={save}>
            Kaydet
          </Button>
        }
      />

      <div className="flex flex-col gap-6 max-w-3xl">
        {/* Başlık bilgileri */}
        <Card>
          <CardHead title="Başlık Bilgileri" />
          <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Üst Etiket (Eyebrow)">
              <Input value={state.eyebrow} onChange={(e) => set('eyebrow', e.target.value)} />
            </Field>
            <Field label="Başlık">
              <Input value={state.title} onChange={(e) => set('title', e.target.value)} />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Açıklama">
                <Textarea rows={3} value={state.description} onChange={(e) => set('description', e.target.value)} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field label="Hikayemiz">
                <Textarea rows={5} value={state.story} onChange={(e) => set('story', e.target.value)} />
              </Field>
            </div>
          </div>
        </Card>

        {/* Görsel */}
        <Card>
          <CardHead title="Görsel" />
          <div className="p-5">
            <Field label="Hero Görseli">
              <ImageField value={state.heroImage} onChange={(v) => set('heroImage', v)} />
            </Field>
          </div>
        </Card>

        {/* İstatistikler */}
        <Card>
          <CardHead title="İstatistikler" hint="Hakkımızda sayfasındaki sayısal vurgular" />
          <div className="p-5 flex flex-col gap-2.5">
            {state.stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-2">
                <Input
                  value={stat.value}
                  onChange={(e) => setStat(i, 'value', e.target.value)}
                  placeholder="Değer (örn: 25+)"
                  className="w-32"
                />
                <Input value={stat.label} onChange={(e) => setStat(i, 'label', e.target.value)} placeholder="Etiket" />
                <select
                  value={stat.iconName}
                  onChange={(e) => setStat(i, 'iconName', e.target.value)}
                  className="h-9 px-2 rounded-lg border border-app-border bg-white text-[13px] text-app-ink outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition shrink-0"
                >
                  {STAT_ICONS.map((ic) => (
                    <option key={ic} value={ic}>
                      {ic}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => removeStat(i)}
                  className="text-app-muted hover:text-red-500 p-1.5 shrink-0"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addStat}
              className="self-start inline-flex items-center gap-1.5 text-[12px] font-semibold text-indigo-600 hover:text-indigo-700 mt-1"
            >
              <Plus size={14} /> İstatistik ekle
            </button>
          </div>
        </Card>

        {/* SEO */}
        <Card>
          <CardHead title="SEO" hint="Arama motorları için başlık ve açıklama" />
          <div className="p-5 grid grid-cols-1 gap-4">
            <Field label="SEO Başlığı">
              <Input value={state.seoTitle} onChange={(e) => set('seoTitle', e.target.value)} />
            </Field>
            <Field label="SEO Açıklaması">
              <Textarea rows={3} value={state.seoDescription} onChange={(e) => set('seoDescription', e.target.value)} />
            </Field>
          </div>
        </Card>

        <div>
          <Button icon={<Save size={15} />} loading={saving} onClick={save}>
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  );
}
