import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';

const router = Router();

router.get('/', requireAuth, async (_req: Request, res: Response) => {
  const [
    products,
    categories,
    technologies,
    brands,
    cosmetics,
    faq,
    contactTotal,
    contactUnread,
    dealerTotal,
    dealerUnread,
    recent,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.category.count(),
    prisma.technology.count(),
    prisma.brand.count(),
    prisma.cosmeticProduct.count(),
    prisma.faq.count(),
    prisma.contactMessage.count(),
    prisma.contactMessage.count({ where: { read: false } }),
    prisma.dealerApplication.count(),
    prisma.dealerApplication.count({ where: { read: false } }),
    prisma.activityLog.findMany({ orderBy: { createdAt: 'desc' }, take: 8, include: { user: true } }),
  ]);

  res.json({
    counts: { products, categories, technologies, brands, cosmetics, faq },
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
