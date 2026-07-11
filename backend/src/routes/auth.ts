import { Router, type Request, type Response } from 'express';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';
import { signToken } from '../auth/jwt.js';
import { requireAuth } from '../auth/middleware.js';

const router = Router();

const loginSchema = z.object({
  email: z.string().email('Geçerli bir e-posta girin.'),
  password: z.string().min(1, 'Şifre gerekli.'),
});

// POST /api/auth/login
router.post('/login', async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.errors[0]?.message ?? 'Geçersiz veri.' });
  }
  const { email, password } = parsed.data;
  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  if (!user || !user.active) {
    return res.status(401).json({ error: 'E-posta veya şifre hatalı.' });
  }
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: 'E-posta veya şifre hatalı.' });

  const token = signToken({ id: user.id, email: user.email, role: user.role });
  res.json({
    token,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  });
});

// GET /api/auth/me
router.get('/me', requireAuth, async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
  if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
  res.json({ id: user.id, email: user.email, name: user.name, role: user.role });
});

// POST /api/auth/change-password
const changeSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(6, 'Yeni şifre en az 6 karakter olmalı.'),
});
router.post('/change-password', requireAuth, async (req: Request, res: Response) => {
  const parsed = changeSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.errors[0]?.message });
  const user = await prisma.user.findUnique({ where: { id: req.user!.id } });
  if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
  const ok = await bcrypt.compare(parsed.data.currentPassword, user.passwordHash);
  if (!ok) return res.status(400).json({ error: 'Mevcut şifre hatalı.' });
  const passwordHash = await bcrypt.hash(parsed.data.newPassword, 10);
  await prisma.user.update({ where: { id: user.id }, data: { passwordHash } });
  res.json({ ok: true });
});

export default router;
