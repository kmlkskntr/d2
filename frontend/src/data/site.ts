// ============================================================
// D2 GRUP — Site geneli sabitler: kurum bilgisi, navigasyon, iletişim
// ============================================================
import { NavMenuItem } from '../types';

export const SITE = {
  name: 'D2 GRUP',
  legalName: 'D2 Grup Medikal Estetik ve Kozmetik Teknolojileri',
  tagline: 'Medikal Estetik ve Güzellik Teknolojilerinde Lider',
  description:
    "D2 Grup, dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturan lider distribütör. Yetkin teknik servis ve klinik eğitim desteğiyle kliniklerinize değer katıyoruz.",
  foundedYear: 2004,
  phone: '+90 (216) 555 44 33',
  phoneHref: 'tel:+902165554433',
  whatsapp: '+90 (532) 555 44 33',
  whatsappHref: 'https://wa.me/905325554433',
  email: 'info@d2grup.com',
  emailHref: 'mailto:info@d2grup.com',
  addressTitle: 'GENEL MERKEZ',
  address: 'Barbaros Mah. Begonya Sok. Nida Kule Batı, Ataşehir, İstanbul, Türkiye',
  workingHours: 'Hafta içi 09:00 – 18:00',
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
    twitter: 'https://twitter.com/',
  },
  // Online mağaza (e-ticaret) yönlendirmesi — header'daki birincil aksiyon.
  // Panelden düzenlenebilir (Ayarlar › İletişim › Online Mağaza).
  store: {
    enabled: true,
    label: 'ONLINE MAĞAZA',
    url: 'https://www.frozenconcept.com',
  },
};

// Ana navigasyon — açılır menülü çoklu sayfa yapısı
export const NAV: NavMenuItem[] = [
  { label: 'ANASAYFA', to: '/' },
  { label: 'KURUMSAL', to: '/kurumsal' },
  {
    label: 'ÜRÜNLER',
    to: '/urunler',
    children: [
      { label: 'Tüm Ürünler', to: '/urunler' },
      { label: 'Yüz Teknolojileri', to: '/urunler/kategori/yuz' },
      { label: 'Vücut Teknolojileri', to: '/urunler/kategori/vucut' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
      { label: 'Global Markalar', to: '/urunler/kategori/global' },
    ],
  },
  { label: 'TEKNOLOJİLER', to: '/teknolojiler' },
  { label: 'MARKALAR', to: '/markalar' },
  { label: 'ÇÖZÜMLER', to: '/cozumler' },
  { label: 'KOZMETİK', to: '/kozmetik' },
  { label: 'İLETİŞİM', to: '/iletisim' },
];

// Footer bağlantı grupları
export const FOOTER_LINKS = {
  kurumsal: {
    title: 'KURUMSAL',
    links: [
      { label: 'Hakkımızda', to: '/kurumsal' },
      { label: 'Çözümler & Hizmetler', to: '/cozumler' },
      { label: 'Teknolojiler', to: '/teknolojiler' },
      { label: 'Markalar', to: '/markalar' },
      { label: 'İletişim', to: '/iletisim' },
    ],
  },
  urunler: {
    title: 'ÜRÜNLER',
    links: [
      { label: 'Tüm Ürünler', to: '/urunler' },
      { label: 'Yüz Teknolojileri', to: '/urunler/kategori/yuz' },
      { label: 'Vücut Teknolojileri', to: '/urunler/kategori/vucut' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
      { label: 'Kozmetik Ürünler', to: '/kozmetik' },
    ],
  },
  destek: {
    title: 'DESTEK',
    links: [
      { label: 'Sıkça Sorulan Sorular', to: '/sss' },
      { label: 'Bayi Girişi', to: '/bayi-girisi' },
      { label: 'Teknik Servis', to: '/cozumler#servis' },
      { label: 'İletişim', to: '/iletisim' },
    ],
  },
  yasal: {
    title: 'YASAL',
    links: [
      { label: 'Gizlilik Politikası', to: '/gizlilik' },
      { label: 'Kullanım Koşulları', to: '/kullanim-kosullari' },
      { label: 'KVKK Aydınlatma Metni', to: '/kvkk' },
      { label: 'Çerez Politikası', to: '/cerez-politikasi' },
    ],
  },
};

// Genel istatistikler (hero + kurumsal)
export const STATS = [
  { value: '20+', label: 'YILLIK DENEYİM', iconName: 'Award' },
  { value: '50+', label: 'GLOBAL MARKA', iconName: 'Gem' },
  { value: '150+', label: 'UZMAN EKİP', iconName: 'Users' },
  { value: '2000+', label: 'KURUMSAL PARTNER', iconName: 'Building2' },
  { value: '25+', label: 'ÜLKEYE İHRACAT', iconName: 'Globe' },
];
