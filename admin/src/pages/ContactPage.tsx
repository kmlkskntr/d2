import { useEffect, useState } from 'react';
import { Save, Phone, Share2, MapPin, ShoppingBag } from 'lucide-react';
import { api } from '../lib/api';
import { useToast } from '../components/Feedback';
import { Button, Input, Textarea, Field, Spinner, PageHeader, SectionCard, Toggle } from '../components/ui';

// ---------------------------------------------------------- Tipler
interface Social {
  instagram: string;
  linkedin: string;
  youtube: string;
  twitter: string;
}
interface Store {
  enabled: boolean;
  label: string;
  url: string;
}
interface SiteSettings {
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  emailHref: string;
  address: string;
  addressTitle: string;
  workingHours: string;
  social: Social;
  store: Store;
  mapEmbed: string;
}

const DEFAULTS: SiteSettings = {
  phone: '',
  phoneHref: '',
  whatsapp: '',
  whatsappHref: '',
  email: '',
  emailHref: '',
  address: '',
  addressTitle: '',
  workingHours: '',
  social: { instagram: '', linkedin: '', youtube: '', twitter: '' },
  store: { enabled: true, label: 'ONLINE MAĞAZA', url: 'https://www.frozenconcept.com' },
  mapEmbed: '',
};

export default function ContactPage() {
  const toast = useToast();
  const [state, setState] = useState<SiteSettings | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await api.get<Partial<SiteSettings>>('/settings/site');
        setState({
          ...DEFAULTS,
          ...data,
          social: { ...DEFAULTS.social, ...(data?.social ?? {}) },
          store: { ...DEFAULTS.store, ...(data?.store ?? {}) },
        });
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
      await api.put('/settings/site', state);
      toast('success', 'Kaydedildi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Kaydedilemedi.');
    } finally {
      setSaving(false);
    }
  };

  if (!state) return <Spinner />;

  const set = (k: keyof SiteSettings, v: string) => setState((s) => (s ? { ...s, [k]: v } : s));
  const setSocial = (k: keyof Social, v: string) =>
    setState((s) => (s ? { ...s, social: { ...s.social, [k]: v } } : s));
  const setStore = (k: keyof Store, v: string | boolean) =>
    setState((s) => (s ? { ...s, store: { ...s.store, [k]: v } } : s));

  return (
    <div>
      <PageHeader
        icon={<Phone size={20} />}
        title="İletişim Bilgileri"
        subtitle="Site genelinde kullanılan iletişim ve sosyal medya bilgileri"
        actions={
          <Button icon={<Save size={15} />} loading={saving} onClick={save}>
            Kaydet
          </Button>
        }
      />

      <div className="flex flex-col gap-5 max-w-3xl">
        {/* İletişim Bilgileri */}
        <SectionCard icon={<Phone size={16} />} title="İletişim Bilgileri" description="Telefon, e-posta ve adres bilgileri">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Telefon" hint="Görünen numara">
              <Input value={state.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+90 212 000 00 00" />
            </Field>
            <Field label="Telefon Bağlantısı" hint="Örn: tel:+902120000000">
              <Input value={state.phoneHref} onChange={(e) => set('phoneHref', e.target.value)} />
            </Field>
            <Field label="WhatsApp" hint="Görünen numara">
              <Input value={state.whatsapp} onChange={(e) => set('whatsapp', e.target.value)} />
            </Field>
            <Field label="WhatsApp Bağlantısı" hint="Örn: https://wa.me/90...">
              <Input value={state.whatsappHref} onChange={(e) => set('whatsappHref', e.target.value)} />
            </Field>
            <Field label="E-posta">
              <Input value={state.email} onChange={(e) => set('email', e.target.value)} placeholder="info@d2grup.com" />
            </Field>
            <Field label="E-posta Bağlantısı" hint="Örn: mailto:info@d2grup.com">
              <Input value={state.emailHref} onChange={(e) => set('emailHref', e.target.value)} />
            </Field>
            <Field label="Adres Başlığı">
              <Input value={state.addressTitle} onChange={(e) => set('addressTitle', e.target.value)} placeholder="Merkez Ofis" />
            </Field>
            <Field label="Çalışma Saatleri">
              <Input value={state.workingHours} onChange={(e) => set('workingHours', e.target.value)} placeholder="Hafta içi 09:00 - 18:00" />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Adres">
                <Textarea rows={3} value={state.address} onChange={(e) => set('address', e.target.value)} />
              </Field>
            </div>
          </div>
        </SectionCard>

        {/* Online Mağaza */}
        <SectionCard
          icon={<ShoppingBag size={16} />}
          title="Online Mağaza"
          description="Header'daki 'ONLINE MAĞAZA' butonunu ve yönlendirmeyi yönetin"
          actions={<Toggle checked={state.store.enabled} onChange={(v) => setStore('enabled', v)} label={state.store.enabled ? 'Aktif' : 'Gizli'} />}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Buton Metni" hint="Header'da görünen yazı">
              <Input value={state.store.label} onChange={(e) => setStore('label', e.target.value)} placeholder="ONLINE MAĞAZA" />
            </Field>
            <Field label="Mağaza Adresi (URL)" hint="Tıklayınca yeni sekmede açılır">
              <Input value={state.store.url} onChange={(e) => setStore('url', e.target.value)} placeholder="https://www.frozenconcept.com" />
            </Field>
          </div>
          {!state.store.enabled && (
            <p className="text-[12px] text-app-muted mt-3">
              Buton gizliyken header'da yerine <span className="font-semibold text-app-ink">Bayi Girişi</span> gösterilir.
            </p>
          )}
        </SectionCard>

        {/* Sosyal Medya */}
        <SectionCard icon={<Share2 size={16} />} title="Sosyal Medya" description="Profil bağlantılarını girin">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Instagram">
              <Input value={state.social.instagram} onChange={(e) => setSocial('instagram', e.target.value)} placeholder="https://instagram.com/..." />
            </Field>
            <Field label="LinkedIn">
              <Input value={state.social.linkedin} onChange={(e) => setSocial('linkedin', e.target.value)} placeholder="https://linkedin.com/..." />
            </Field>
            <Field label="YouTube">
              <Input value={state.social.youtube} onChange={(e) => setSocial('youtube', e.target.value)} placeholder="https://youtube.com/..." />
            </Field>
            <Field label="Twitter / X">
              <Input value={state.social.twitter} onChange={(e) => setSocial('twitter', e.target.value)} placeholder="https://x.com/..." />
            </Field>
          </div>
        </SectionCard>

        {/* Harita */}
        <SectionCard icon={<MapPin size={16} />} title="Harita" description="Google Maps konum gösterimi">
          <Field label="Harita Kodu" hint="Google Maps embed adresi veya iframe">
            <Textarea rows={4} value={state.mapEmbed} onChange={(e) => set('mapEmbed', e.target.value)} placeholder="<iframe src=... /> veya embed URL" />
          </Field>
        </SectionCard>

        <div>
          <Button icon={<Save size={15} />} loading={saving} onClick={save}>
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  );
}
