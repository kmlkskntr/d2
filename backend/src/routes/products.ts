import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';
import { parseJson, collapse } from '../lib/serialize.js';
import { logActivity } from '../lib/activity.js';

const router = Router();

const JSON_FIELDS = ['gallery', 'tags', 'features', 'indications', 'specs', 'variants', 'beforeAfter'];

const CATEGORY_LABELS: Record<string, string> = {
  yuz: 'Yüz Teknolojileri',
  vucut: 'Vücut Teknolojileri',
  longevity: 'Longevity',
  global: 'Global Markalar',
};

const INCLUDE = { category: true, brand: true, technologies: true } as const;

// DB kaydını frontend Product şekline dönüştür
function toFrontend(p: any) {
  return {
    slug: p.slug,
    name: p.name,
    brand: p.brand?.name ?? '',
    brandId: p.brand?.key ?? '',
    category: p.category?.slug ?? '',
    categoryLabel: CATEGORY_LABELS[p.category?.slug] ?? p.category?.title ?? '',
    series: p.series ?? undefined,
    tagline: p.tagline,
    description: p.description,
    longDescription: p.longDescription ?? undefined,
    image: p.image,
    gallery: parseJson<string[]>(p.gallery, []),
    tags: parseJson<string[]>(p.tags, []),
    technologies: (p.technologies ?? []).map((t: any) => t.key),
    features: parseJson<string[]>(p.features, []),
    indications: parseJson<string[]>(p.indications, []),
    specs: parseJson<any[]>(p.specs, []),
    variants: parseJson<any[]>(p.variants, []),
    priceLabel: p.priceLabel,
    priceNote: p.priceNote,
    pdfUrl: p.pdfUrl ?? undefined,
    featured: p.featured,
    isNew: p.isNew,
    beforeAfter: parseJson<string[]>(p.beforeAfter, []),
  };
}

// Admin şekli (id'ler + ham JSON çözülmüş)
function toAdmin(p: any) {
  return {
    id: p.id,
    slug: p.slug,
    name: p.name,
    categoryId: p.categoryId,
    brandId: p.brandId,
    category: p.category ? { id: p.category.id, title: p.category.title, slug: p.category.slug } : null,
    brand: p.brand ? { id: p.brand.id, name: p.brand.name } : null,
    technologyIds: (p.technologies ?? []).map((t: any) => t.id),
    series: p.series,
    tagline: p.tagline,
    description: p.description,
    longDescription: p.longDescription,
    image: p.image,
    gallery: parseJson<string[]>(p.gallery, []),
    tags: parseJson<string[]>(p.tags, []),
    features: parseJson<string[]>(p.features, []),
    indications: parseJson<string[]>(p.indications, []),
    specs: parseJson<any[]>(p.specs, []),
    variants: parseJson<any[]>(p.variants, []),
    beforeAfter: parseJson<string[]>(p.beforeAfter, []),
    priceLabel: p.priceLabel,
    priceNote: p.priceNote,
    pdfUrl: p.pdfUrl,
    featured: p.featured,
    isNew: p.isNew,
    order: p.order,
    active: p.active,
    seoTitle: p.seoTitle,
    seoDescription: p.seoDescription,
  };
}

// Gelen body'yi Prisma verisine çevir
function buildData(body: Record<string, any>) {
  const data: any = collapse(
    {
      slug: body.slug,
      name: body.name,
      series: body.series ?? null,
      tagline: body.tagline,
      description: body.description,
      longDescription: body.longDescription ?? null,
      image: body.image,
      gallery: body.gallery,
      tags: body.tags,
      features: body.features,
      indications: body.indications,
      specs: body.specs,
      variants: body.variants,
      beforeAfter: body.beforeAfter,
      priceLabel: body.priceLabel ?? 'Bayiye Özel Fiyat',
      priceNote: body.priceNote ?? 'Klinik ve bayi fiyatlandırması için teklif alın.',
      pdfUrl: body.pdfUrl ?? null,
      featured: !!body.featured,
      isNew: !!body.isNew,
      order: Number(body.order ?? 0),
      active: body.active !== undefined ? !!body.active : true,
      seoTitle: body.seoTitle ?? null,
      seoDescription: body.seoDescription ?? null,
    },
    JSON_FIELDS,
  );
  if (body.categoryId) data.category = { connect: { id: Number(body.categoryId) } };
  if (body.brandId) data.brand = { connect: { id: Number(body.brandId) } };
  if (Array.isArray(body.technologyIds)) {
    data.technologies = { set: body.technologyIds.map((id: number) => ({ id: Number(id) })) };
  }
  return data;
}

// GENEL: frontend için aktif ürünler
router.get('/public', async (_req: Request, res: Response) => {
  const rows = await prisma.product.findMany({
    where: { active: true },
    orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
    include: INCLUDE,
  });
  res.json(rows.map(toFrontend));
});

// ADMIN: tüm ürünler (arama)
router.get('/', requireAuth, async (req: Request, res: Response) => {
  const q = (req.query.q as string)?.trim();
  const where = q
    ? { OR: [{ name: { contains: q } }, { slug: { contains: q } }, { tagline: { contains: q } }] }
    : undefined;
  const rows = await prisma.product.findMany({ where, orderBy: { order: 'asc' }, include: INCLUDE });
  res.json(rows.map(toAdmin));
});

router.get('/:id', requireAuth, async (req: Request, res: Response) => {
  const row = await prisma.product.findUnique({ where: { id: Number(req.params.id) }, include: INCLUDE });
  if (!row) return res.status(404).json({ error: 'Ürün bulunamadı.' });
  res.json(toAdmin(row));
});

router.post('/', requireAuth, async (req: Request, res: Response) => {
  try {
    const row = await prisma.product.create({ data: buildData(req.body), include: INCLUDE });
    await logActivity('product', 'create', row.name, row.id, req.user?.id);
    res.status(201).json(toAdmin(row));
  } catch (e: any) {
    res.status(400).json({ error: 'Ürün oluşturulamadı: ' + (e?.message ?? '') });
  }
});

router.put('/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    const row = await prisma.product.update({
      where: { id: Number(req.params.id) },
      data: buildData(req.body),
      include: INCLUDE,
    });
    await logActivity('product', 'update', row.name, row.id, req.user?.id);
    res.json(toAdmin(row));
  } catch (e: any) {
    res.status(400).json({ error: 'Ürün güncellenemedi: ' + (e?.message ?? '') });
  }
});

router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  try {
    const row = await prisma.product.delete({ where: { id: Number(req.params.id) } });
    await logActivity('product', 'delete', row.name, row.id, req.user?.id);
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: 'Ürün silinemedi: ' + (e?.message ?? '') });
  }
});

export default router;
