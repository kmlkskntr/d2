// ============================================================
// D2 GRUP — Seed: frontend/src/data içeriğini veritabanına taşır
// ============================================================
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { ENV } from '../src/lib/env.js';

// Mevcut frontend veri dosyaları (tek doğruluk kaynağı)
import { PRODUCTS } from '../../frontend/src/data/products.ts';
import { CATEGORIES } from '../../frontend/src/data/categories.ts';
import { TECHNOLOGIES } from '../../frontend/src/data/technologies.ts';
import { BRANDS } from '../../frontend/src/data/brands.ts';
import { FAQ } from '../../frontend/src/data/faq.ts';
import { LEGAL_DOCS } from '../../frontend/src/data/legal.ts';
import { SITE, STATS } from '../../frontend/src/data/site.ts';

const prisma = new PrismaClient();
const S = (v: unknown) => JSON.stringify(v ?? []);

async function main() {
  console.log('→ Seed başlıyor...');

  // -------------------------------------------------- Kategoriler
  for (let i = 0; i < CATEGORIES.length; i++) {
    const c = CATEGORIES[i];
    await prisma.category.upsert({
      where: { slug: c.slug },
      update: {
        title: c.title,
        subtitle: c.subtitle,
        description: c.description,
        longDescription: c.longDescription,
        image: c.image,
        highlights: S(c.highlights),
        order: i,
        seoTitle: `${c.title} ${c.subtitle} — D2 Grup`,
        seoDescription: c.description,
      },
      create: {
        slug: c.slug,
        title: c.title,
        subtitle: c.subtitle,
        description: c.description,
        longDescription: c.longDescription,
        image: c.image,
        highlights: S(c.highlights),
        order: i,
        seoTitle: `${c.title} ${c.subtitle} — D2 Grup`,
        seoDescription: c.description,
      },
    });
  }
  console.log(`  ✔ ${CATEGORIES.length} kategori`);

  // -------------------------------------------------- Teknolojiler
  for (let i = 0; i < TECHNOLOGIES.length; i++) {
    const t = TECHNOLOGIES[i];
    await prisma.technology.upsert({
      where: { key: t.id },
      update: {
        title: t.title,
        shortTitle: t.shortTitle,
        iconName: t.iconName,
        description: t.description,
        applications: S(t.applications),
        order: i,
      },
      create: {
        key: t.id,
        title: t.title,
        shortTitle: t.shortTitle,
        iconName: t.iconName,
        description: t.description,
        applications: S(t.applications),
        order: i,
      },
    });
  }
  console.log(`  ✔ ${TECHNOLOGIES.length} teknoloji`);

  // -------------------------------------------------- Markalar
  for (let i = 0; i < BRANDS.length; i++) {
    const b = BRANDS[i];
    await prisma.brand.upsert({
      where: { key: b.id },
      update: {
        name: b.name,
        logo: b.logo,
        tagline: b.tagline,
        origin: b.origin,
        description: b.description,
        focus: S(b.focus),
        order: i,
      },
      create: {
        key: b.id,
        name: b.name,
        logo: b.logo,
        tagline: b.tagline,
        origin: b.origin,
        description: b.description,
        focus: S(b.focus),
        order: i,
      },
    });
  }
  console.log(`  ✔ ${BRANDS.length} marka`);

  // -------------------------------------------------- Ürünler (ilişkilerle)
  for (let i = 0; i < PRODUCTS.length; i++) {
    const p = PRODUCTS[i];
    const category = await prisma.category.findUnique({ where: { slug: p.category } });
    const brand = await prisma.brand.findUnique({ where: { key: p.brandId } });
    if (!category || !brand) {
      console.warn(`  ! ${p.slug} için kategori/marka bulunamadı, atlandı`);
      continue;
    }
    const techs = await prisma.technology.findMany({ where: { key: { in: p.technologies ?? [] } } });

    const techIds = techs.map((t) => ({ id: t.id }));
    const base = {
      name: p.name,
      series: p.series ?? null,
      tagline: p.tagline,
      description: p.description,
      longDescription: p.longDescription ?? null,
      image: p.image,
      gallery: S(p.gallery),
      tags: S(p.tags),
      features: S(p.features),
      indications: S(p.indications),
      specs: S(p.specs),
      variants: S(p.variants ?? []),
      beforeAfter: S(p.beforeAfter ?? []),
      priceLabel: p.priceLabel,
      priceNote: p.priceNote,
      featured: !!p.featured,
      isNew: !!p.isNew,
      order: i,
      seoTitle: `${p.name} — ${p.brand} | D2 Grup`,
      seoDescription: p.tagline,
      category: { connect: { id: category.id } },
      brand: { connect: { id: brand.id } },
    };

    await prisma.product.upsert({
      where: { slug: p.slug },
      update: { ...base, technologies: { set: techIds } },
      create: { slug: p.slug, ...base, technologies: { connect: techIds } },
    });
  }
  console.log(`  ✔ ${PRODUCTS.length} ürün`);

  // -------------------------------------------------- Kozmetik (başlangıç kataloğu)
  const COSMETICS = [
    { slug: 'yenileyici-serum', name: 'Yenileyici Serum Serisi', category: 'Serum', description: 'Hyalüronik asit ve peptit kompleksi ile yoğun nem ve yaşlanma karşıtı etki sunan profesyonel serum serisi.', images: ['assets/renders/cosmetics-set.jpg'] },
    { slug: 'nemlendirici-krem', name: 'Nemlendirici Krem', category: 'Krem', description: 'Cilt bariyerini güçlendiren, uzun süreli nem sağlayan hafif dokulu bakım kremi.', images: ['assets/renders/cosmetics-bottles.png'] },
    { slug: 'yuz-maskesi', name: 'Onarıcı Yüz Maskesi', category: 'Maske', description: 'Klinik uygulamalar sonrası cildi yatıştıran ve onaran yoğun bakım maskesi.', images: ['assets/renders/cosmetics-set.jpg'] },
    { slug: 'goz-cevresi-bakim', name: 'Göz Çevresi Bakım Kremi', category: 'Göz Bakımı', description: 'Göz çevresindeki ince çizgileri ve koyu halkaları hedefleyen konsantre bakım kremi.', images: ['assets/renders/cosmetics-bottles.png'] },
  ];
  for (let i = 0; i < COSMETICS.length; i++) {
    const c = COSMETICS[i];
    await prisma.cosmeticProduct.upsert({
      where: { slug: c.slug },
      update: { name: c.name, category: c.category, description: c.description, images: S(c.images), order: i },
      create: { slug: c.slug, name: c.name, category: c.category, description: c.description, images: S(c.images), order: i },
    });
  }
  console.log(`  ✔ ${COSMETICS.length} kozmetik ürün`);

  // -------------------------------------------------- SSS
  for (let i = 0; i < FAQ.length; i++) {
    const f = FAQ[i];
    const existing = await prisma.faq.findFirst({ where: { question: f.question } });
    if (existing) {
      await prisma.faq.update({ where: { id: existing.id }, data: { answer: f.answer, group: f.group, order: i } });
    } else {
      await prisma.faq.create({ data: { question: f.question, answer: f.answer, group: f.group, order: i } });
    }
  }
  console.log(`  ✔ ${FAQ.length} SSS`);

  // -------------------------------------------------- Yasal metinler
  for (const [key, doc] of Object.entries(LEGAL_DOCS)) {
    await prisma.legalDoc.upsert({
      where: { key },
      update: { title: doc.title, eyebrow: doc.eyebrow, updated: doc.updated, intro: doc.intro, sections: S(doc.sections) },
      create: { key, title: doc.title, eyebrow: doc.eyebrow, updated: doc.updated, intro: doc.intro, sections: S(doc.sections) },
    });
  }
  console.log(`  ✔ ${Object.keys(LEGAL_DOCS).length} yasal metin`);

  // -------------------------------------------------- Ayarlar (site / home / about / contact / integrations)
  const siteSettings = {
    name: SITE.name,
    legalName: SITE.legalName,
    tagline: SITE.tagline,
    description: SITE.description,
    foundedYear: SITE.foundedYear,
    phone: SITE.phone,
    phoneHref: SITE.phoneHref,
    whatsapp: SITE.whatsapp,
    whatsappHref: SITE.whatsappHref,
    email: SITE.email,
    emailHref: SITE.emailHref,
    address: SITE.address,
    addressTitle: SITE.addressTitle,
    workingHours: SITE.workingHours,
    social: SITE.social,
  };
  const homeSettings = {
    hero: {
      eyebrow: 'TEKNOLOJİ. GÜVEN. SONUÇ.',
      titleLine1: 'TEKNOLOJİDE',
      titleLine2: 'LİDER.',
      description: 'D2 Grup, dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturur.',
      image: 'assets/renders/hero-device.jpg',
      primaryCtaLabel: 'ÜRÜNLERİ KEŞFET',
      primaryCtaTo: '/urunler',
    },
    stats: STATS,
    video: {
      eyebrow: 'D2 GRUP KLİNİK SİMÜLASYONU',
      title: 'TEKNOLOJİ VE BİLİMİN KUSURSUZ UYUMU.',
      description: 'En yeni nesil medikal estetik sistemlerimizle tanışın. Kliniklerinizin başarısını artıran teknolojilerimizi video tanıtımımızdan izleyin.',
      points: ['FDA ONAYLI PATENTLİ SİSTEMLER', 'MÜKEMMEL SERVİS VE YEDEK PARÇA GARANTİSİ', 'MEDİKAL UYGULAMA VE KLİNİK EĞİTİMLERİ'],
      youtubeId: 'dQw4w9WgXcQ',
      duration: 'SÜRE: 2:45 DAKİKA',
    },
    sections: { video: true, categories: true, featured: true, technologies: true, cosmetics: true, cta: true },
    cta: {
      eyebrow: 'KLİNİĞİNİZE DEĞER KATIN',
      title: 'GELECEĞİN ESTETİK TEKNOLOJİLERİ İLE TANIŞIN',
      description: 'Cihaz demoları, klinik veriler ve size özel finansman modelleri için uzman ekibimizle iletişime geçin.',
    },
  };
  const aboutSettings = {
    eyebrow: 'KURUMSAL',
    title: 'BİZ KİMİZ',
    description: `${SITE.foundedYear}'ten bu yana, dünyanın öncü medikal estetik ve güzellik teknolojilerini Türkiye'ye taşıyan D2 Grup; 20+ yıllık deneyimi, yetkin teknik servisi ve klinik eğitim desteğiyle sektörün lider distribütörüdür.`,
    story: SITE.description,
    stats: STATS,
    seoTitle: 'Kurumsal — D2 Grup',
    seoDescription: SITE.description,
  };
  const integrations = {
    googleAnalyticsId: '',
    googleTagManagerId: '',
    metaPixelId: '',
    googleAdsConversion: '',
    searchConsoleVerification: '',
    headerScripts: '',
    footerScripts: '',
    robotsTxt: 'User-agent: *\nAllow: /',
  };

  for (const [key, value] of Object.entries({ site: siteSettings, home: homeSettings, about: aboutSettings, integrations })) {
    await prisma.setting.upsert({
      where: { key },
      update: { value: JSON.stringify(value) },
      create: { key, value: JSON.stringify(value) },
    });
  }
  console.log('  ✔ ayarlar (site, home, about, integrations)');

  // -------------------------------------------------- İlk admin kullanıcı
  const passwordHash = await bcrypt.hash(ENV.ADMIN_PASSWORD, 10);
  await prisma.user.upsert({
    where: { email: ENV.ADMIN_EMAIL.toLowerCase() },
    update: {},
    create: { email: ENV.ADMIN_EMAIL.toLowerCase(), passwordHash, name: 'Yönetici', role: 'ADMIN' },
  });
  console.log(`  ✔ admin kullanıcı: ${ENV.ADMIN_EMAIL}`);

  console.log('✓ Seed tamamlandı.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
