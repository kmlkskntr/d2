// ============================================================
// D2 GRUP — Site geneli sabitler: kurum bilgisi, navigasyon, iletişim
// ============================================================
import { NavMenuItem } from '../types';

export const SITE = {
  name: 'D2 GRUP',
  legalName: 'D2 Grup Medikal Tic. Ltd. Şti.',
  tagline: 'Medikal Estetik ve Güzellik Teknolojilerinde Lider',
  description:
    "D2 Grup Medikal, dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturan lider distribütör. Yetkin teknik servis ve klinik eğitim desteğiyle klinik ve güzellik merkezlerinize değer katıyoruz.",
  foundedYear: 2012,
  phone: '0533 048 27 71',
  phoneHref: 'tel:+905330482771',
  whatsapp: '0533 048 27 71',
  whatsappHref: 'https://wa.me/905330482771',
  email: 'website@frozenconcept.com',
  emailHref: 'mailto:website@frozenconcept.com',
  addressTitle: 'GENEL MERKEZ',
  address: 'Merkez Mah. Begonvil Sk. NEF03 No: 1/1, Kağıthane, İstanbul',
  workingHours: 'Hafta içi 09:00 – 18:00',
  // Resmi firma / vergi bilgileri
  authorizedPerson: 'Fuat Dinçyılmaz',
  taxNo: '2650663897',
  taxOffice: 'Kağıthane',
  city: 'İstanbul',
  district: 'Kağıthane',
  country: 'Türkiye',
  social: {
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/',
    youtube: 'https://youtube.com/',
    twitter: 'https://twitter.com/',
  },
  // Departman iletişim hatları (İletişim sayfasında listelenir).
  // Boş phone/phoneHref alanları, numara girilene kadar "yakında" olarak gösterilir.
  departments: [
    {
      id: 'satis',
      label: 'SATIŞ',
      contactName: 'Mustafa',
      phone: '+90 543 532 20 08',
      phoneHref: 'tel:+905435322008',
    },
    {
      id: 'teknik-destek',
      label: 'TEKNİK DESTEK',
      contactName: 'Mercan',
      phone: '+90 533 273 06 03',
      phoneHref: 'tel:+905332730603',
    },
    {
      id: 'egitim',
      label: 'EĞİTİM',
      contactName: '',
      phone: '',
      phoneHref: '',
    },
  ],
  // Sosyal medya hesapları — linkler daha sonra eklenecek (boş bırakıldı).
  instagramAccounts: [
    { id: 'd2grup', label: 'D2 Grup', href: '' },
    { id: 'frozen-face-concept', label: 'Frozen Face Concept', href: '' },
    { id: 'caci-turkiye', label: 'Caci Türkiye', href: '' },
  ],
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
  { label: 'HAKKINDA', to: '/kurumsal' },
  {
    label: 'CİHAZLAR',
    to: '/urunler',
    children: [
      { label: 'Bölgesel Vücut Şekillendirme', to: '/urunler/kategori/vucut' },
      { label: 'Yüz Bakım', to: '/urunler/kategori/yuz' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
    ],
  },
  { label: 'KOZMETİKLER', to: '/kozmetik' },
  { label: 'KURUMSAL ÇÖZÜMLER', to: '/cozumler' },
  { label: 'İLETİŞİM', to: '/iletisim' },
];

// Footer bağlantı grupları
export const FOOTER_LINKS = {
  kurumsal: {
    title: 'KURUMSAL',
    links: [
      { label: 'Hakkında', to: '/kurumsal' },
      { label: 'Kurumsal Çözümler', to: '/cozumler' },
      { label: 'Teknolojiler', to: '/teknolojiler' },
      { label: 'Markalar', to: '/markalar' },
      { label: 'İletişim', to: '/iletisim' },
    ],
  },
  urunler: {
    title: 'CİHAZLAR',
    links: [
      { label: 'Tüm Cihazlar', to: '/urunler' },
      { label: 'Bölgesel Vücut Şekillendirme', to: '/urunler/kategori/vucut' },
      { label: 'Yüz Bakım', to: '/urunler/kategori/yuz' },
      { label: 'Longevity', to: '/urunler/kategori/longevity' },
      { label: 'Kozmetikler', to: '/kozmetik' },
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
  { value: '10+', label: 'YILLIK DENEYİM', iconName: 'Award' },
  { value: '7', label: 'GLOBAL MARKA', iconName: 'Gem' },
  { value: '2000+', label: 'KURUMSAL PARTNER', iconName: 'Building2' },
  { value: '15', label: 'ÜLKEYE İHRACAT', iconName: 'Globe' },
];
