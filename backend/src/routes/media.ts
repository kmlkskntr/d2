import { Router, type Request, type Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { prisma } from '../lib/prisma.js';
import { requireAuth } from '../auth/middleware.js';
import { ENV } from '../lib/env.js';

const router = Router();

const UPLOAD_DIR = path.resolve(process.cwd(), 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOAD_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const base = path
      .basename(file.originalname, ext)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 40);
    const unique = `${base || 'dosya'}-${Date.now()}${ext}`;
    cb(null, unique);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // 20 MB
  fileFilter: (_req, file, cb) => {
    const ok = /image\/(jpe?g|png|webp|gif|svg\+xml)|application\/pdf/.test(file.mimetype);
    if (!ok) {
      cb(new Error('Yalnızca görsel veya PDF yükleyebilirsiniz.'));
      return;
    }
    cb(null, true);
  },
});

function publicUrl(req: Request, filename: string) {
  const base = ENV.PUBLIC_URL || `${req.protocol}://${req.get('host')}`;
  return `${base}/uploads/${filename}`;
}

// ADMIN: medya listesi
router.get('/', requireAuth, async (_req: Request, res: Response) => {
  res.json(await prisma.media.findMany({ orderBy: { createdAt: 'desc' } }));
});

// ADMIN: çoklu yükleme
router.post('/', requireAuth, upload.array('files', 20), async (req: Request, res: Response) => {
  const files = (req.files as Express.Multer.File[]) ?? [];
  if (!files.length) return res.status(400).json({ error: 'Dosya bulunamadı.' });
  const created = [];
  for (const f of files) {
    const type = f.mimetype === 'application/pdf' ? 'pdf' : 'image';
    const row = await prisma.media.create({
      data: { filename: f.filename, url: publicUrl(req, f.filename), type, size: f.size, alt: '' },
    });
    created.push(row);
  }
  res.status(201).json(created);
});

// ADMIN: alt metin / dosya adı güncelle
router.patch('/:id', requireAuth, async (req: Request, res: Response) => {
  const row = await prisma.media.update({
    where: { id: Number(req.params.id) },
    data: { alt: req.body.alt ?? undefined },
  });
  res.json(row);
});

// ADMIN: sil (dosyayı da kaldır)
router.delete('/:id', requireAuth, async (req: Request, res: Response) => {
  const row = await prisma.media.findUnique({ where: { id: Number(req.params.id) } });
  if (row) {
    const fp = path.join(UPLOAD_DIR, row.filename);
    if (fs.existsSync(fp)) {
      try {
        fs.unlinkSync(fp);
      } catch {
        /* yoksay */
      }
    }
    await prisma.media.delete({ where: { id: row.id } });
  }
  res.json({ ok: true });
});

// Multer hata yakalayıcı
router.use((err: any, _req: Request, res: Response, _next: any) => {
  res.status(400).json({ error: err?.message ?? 'Yükleme hatası.' });
});

export default router;
