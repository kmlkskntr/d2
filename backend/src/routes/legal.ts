import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';
import { parseJson } from '../lib/serialize.js';
import { logActivity } from '../lib/activity.js';

const router = Router();

const shape = (r: any) => ({ ...r, sections: parseJson(r.sections, []) });

// GENEL: tüm yasal metinler (key -> doc)
router.get('/public', async (_req: Request, res: Response) => {
  const rows = await prisma.legalDoc.findMany();
  const out: Record<string, any> = {};
  for (const r of rows) out[r.key] = shape(r);
  res.json(out);
});

// ADMIN: liste
router.get('/', requireAuth, async (_req: Request, res: Response) => {
  const rows = await prisma.legalDoc.findMany({ orderBy: { key: 'asc' } });
  res.json(rows.map(shape));
});

// ADMIN: key'e göre kaydet (upsert)
router.put('/:key', requireAuth, async (req: Request, res: Response) => {
  const { title, eyebrow, updated, intro, sections } = req.body;
  const data = {
    title,
    eyebrow: eyebrow ?? 'YASAL',
    updated: updated ?? '',
    intro: intro ?? '',
    sections: JSON.stringify(sections ?? []),
  };
  const row = await prisma.legalDoc.upsert({
    where: { key: req.params.key },
    update: data,
    create: { key: req.params.key, ...data },
  });
  await logActivity('legal', 'update', title ?? req.params.key, row.id, req.user?.id);
  res.json(shape(row));
});

export default router;
