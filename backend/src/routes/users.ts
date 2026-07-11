import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { requireAuth, requireRole } from '../auth/middleware.js';

const router = Router();

// Yalnızca ADMIN kullanıcı yönetimi yapabilir
router.use(requireAuth, requireRole('ADMIN'));

const pub = (u: any) => ({ id: u.id, email: u.email, name: u.name, role: u.role, active: u.active, createdAt: u.createdAt });

router.get('/', async (_req: Request, res: Response) => {
  const rows = await prisma.user.findMany({ orderBy: { createdAt: 'asc' } });
  res.json(rows.map(pub));
});

const createSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalı.'),
  name: z.string().optional(),
  role: z.enum(['ADMIN', 'EDITOR']).default('EDITOR'),
});

router.post('/', async (req: Request, res: Response) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.errors[0]?.message });
  const exists = await prisma.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
  if (exists) return res.status(400).json({ error: 'Bu e-posta zaten kayıtlı.' });
  const passwordHash = await bcrypt.hash(parsed.data.password, 10);
  const row = await prisma.user.create({
    data: { email: parsed.data.email.toLowerCase(), passwordHash, name: parsed.data.name, role: parsed.data.role },
  });
  res.status(201).json(pub(row));
});

router.put('/:id', async (req: Request, res: Response) => {
  const { name, role, active, password } = req.body;
  const data: any = {};
  if (name !== undefined) data.name = name;
  if (role !== undefined) data.role = role;
  if (active !== undefined) data.active = !!active;
  if (password) data.passwordHash = await bcrypt.hash(password, 10);
  const row = await prisma.user.update({ where: { id: Number(req.params.id) }, data });
  res.json(pub(row));
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (id === req.user!.id) return res.status(400).json({ error: 'Kendi hesabınızı silemezsiniz.' });
  await prisma.user.delete({ where: { id } });
  res.json({ ok: true });
});

export default router;
