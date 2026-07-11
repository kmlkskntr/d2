import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';

const router = Router();

const schema = z.object({
  name: z.string().min(2, 'Ad soyad gerekli.'),
  company: z.string().optional(),
  phone: z.string().min(5, 'Telefon gerekli.'),
  email: z.string().email('Geçerli e-posta girin.'),
  message: z.string().optional(),
});

// GENEL: bayi başvurusu gönderimi
router.post('/', async (req: Request, res: Response) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.errors[0]?.message });
  const row = await prisma.dealerApplication.create({ data: parsed.data });
  res.status(201).json({ ok: true, id: row.id });
});

// ADMIN: başvuruları listele
router.get('/', requireAuth, async (_req: Request, res: Response) => {
  res.json(await prisma.dealerApplication.findMany({ orderBy: { createdAt: 'desc' } }));
});

router.get('/:id', requireAuth, async (req: Request, res: Response) => {
  const row = await prisma.dealerApplication.findUnique({ where: { id: Number(req.params.id) } });
  if (!row) return res.status(404).json({ error: 'Başvuru bulunamadı.' });
  res.json(row);
});

// ADMIN: durum / not / okundu güncelle
router.patch('/:id', requireAuth, async (req: Request, res: Response) => {
  const { status, note, read } = req.body;
  const row = await prisma.dealerApplication.update({
    where: { id: Number(req.params.id) },
    data: {
      ...(status !== undefined ? { status } : {}),
      ...(note !== undefined ? { note } : {}),
      ...(read !== undefined ? { read: !!read } : {}),
    },
  });
  res.json(row);
});

router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  await prisma.dealerApplication.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

export default router;
