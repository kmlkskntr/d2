import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';

const router = Router();

router.get('/', requireAuth, async (_req: Request, res: Response) => {
  const [
    products,
    activeProducts,
    featured,
    categories,
    technologies,
    brands,
    cosmetics,
    faq,
    contactTotal,
    contactUnread,
    dealerTotal,
    dealerUnread,
    categoryRows,
    recent,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.product.count({ where: { active: true } }),
    prisma.product.count({ where: { featured: true } }),
    prisma.category.count(),
    prisma.technology.count(),
    prisma.brand.count(),
    prisma.cosmeticProduct.count(),
    prisma.faq.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.dealerApplication.count(),
    prisma.dealerApplication.count({ where: { read: false } }),
    prisma.category.findMany({
      select: { title: true, subtitle: true, _count: { select: { products: true } } },
      orderBy: { order: 'asc' },
    }),
    prisma.activityLog.findMany({ orderBy: { createdAt: 'desc' }, take: 8, include: { user: true } }),
  ]);

  res.json({
    counts: { products, activeProducts, featured, categories, technologies, brands, cosmetics, faq },
    byCategory: categoryRows.map((c) => ({ title: c.title, subtitle: c.subtitle, count: c._count.products })),
    contact: { total: contactTotal, unread: contactUnread },
    dealers: { total: dealerTotal, unread: dealerUnread },
    recent: recent.map((r) => ({
      id: r.id,
      entity: r.entity,
      action: r.action,
      title: r.title,
      user: r.user?.name ?? r.user?.email ?? null,
      createdAt: r.createdAt,
    })),
  });
});

export default router;
