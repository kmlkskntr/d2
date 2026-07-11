import { Router, type Request, type Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';
import { parseJson } from '../lib/serialize.js';
import { logActivity } from '../lib/activity.js';

const router = Router();

// GENEL: bir ayar grubunu getir (site, home, about, contact, integrations)
router.get('/public/:key', async (req: Request, res: Response) => {
  const row = await prisma.setting.findUnique({ where: { key: req.params.key } });
  res.json(row ? parseJson(row.value, {}) : {});
});

// GENEL: tüm ayar gruplarını tek seferde getir
router.get('/public', async (_req: Request, res: Response) => {
  const rows = await prisma.setting.findMany();
  const out: Record<string, any> = {};
  for (const r of rows) out[r.key] = parseJson(r.value, {});
  res.json(out);
});

// ADMIN: bir ayar grubunu getir
router.get('/:key', requireAuth, async (req: Request, res: Response) => {
  const row = await prisma.setting.findUnique({ where: { key: req.params.key } });
  res.json(row ? parseJson(row.value, {}) : {});
});

// ADMIN: bir ayar grubunu kaydet (upsert)
router.put('/:key', requireAuth, async (req: Request, res: Response) => {
  const value = JSON.stringify(req.body ?? {});
  const row = await prisma.setting.upsert({
    where: { key: req.params.key },
    update: { value },
    create: { key: req.params.key, value },
  });
  await logActivity('setting', 'update', req.params.key, row.id, req.user?.id);
  res.json(parseJson(row.value, {}));
});

export default router;
