import { Router, type Request, type Response } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';

const router = Router();

const schema = z.object({
  name: z.string().min(2, 'Ad soyad gerekli.'),
  phone: z.string().min(5, 'Telefon gerekli.'),
  email: z.string().email('Geçerli e-posta girin.'),
  subject: z.string().optional(),
  message: z.string().optional().default(''),
});

// GENEL: iletişim formu gönderimi
router.post('/', async (req: Request, res: Response) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.errors[0]?.message });
  const msg = await prisma.contactMessage.create({ data: parsed.data });

  // "Bayilik Başvurusu" konulu mesajlar aynı zamanda bayi başvurusu olarak da kaydedilir
  if ((parsed.data.subject ?? '').toLowerCase().includes('bayi')) {
    await prisma.dealerApplication.create({
      data: {
        name: parsed.data.name,
        phone: parsed.data.phone,
        email: parsed.data.email,
        message: parsed.data.message,
      },
    });
  }

  res.status(201).json({ ok: true, id: msg.id });
});

// ADMIN: mesajları listele
router.get('/', requireAuth, async (_req: Request, res: Response) => {
  res.json(await prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } }));
});

// ADMIN: okundu/okunmadı
router.patch('/:id', requireAuth, async (req: Request, res: Response) => {
  const row = await prisma.contactMessage.update({
    where: { id: Number(req.params.id) },
    data: { read: !!req.body.read },
  });
  res.json(row);
});

router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  await prisma.contactMessage.delete({ where: { id: Number(req.params.id) } });
  res.json({ ok: true });
});

export default router;
