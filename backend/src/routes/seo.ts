import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';
import { logActivity } from '../lib/activity.js';

const router = Router();

// GENEL: tüm sayfa SEO kayıtları (path -> {title,description,...})
router.get('/public', async (_req: Request, res: Response) => {
  const rows = await prisma.seoPage.findMany();
  const out: Record<string, any> = {};
  for (const r of rows) out[r.path] = { title: r.title, description: r.description, ogImage: r.ogImage, canonical: r.canonical };
  res.json(out);
});

// ADMIN: liste
router.get('/', requireAuth, async (_req: Request, res: Response) => {
  res.json(await prisma.seoPage.findMany({ orderBy: { path: 'asc' } }));
});

// ADMIN: path'e göre upsert
router.put('/', requireAuth, async (req: Request, res: Response) => {
  const { path, title, description, ogImage, canonical } = req.body;
  if (!path) return res.status(400).json({ error: 'path gerekli.' });
  const row = await prisma.seoPage.upsert({
    where: { path },
    update: { title, description, ogImage, canonical },
    create: { path, title, description, ogImage, canonical },
  });
  await logActivity('seo', 'update', path, row.id, req.user?.id);
  res.json(row);
});

router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  await prisma.seoPage.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

export default router;
