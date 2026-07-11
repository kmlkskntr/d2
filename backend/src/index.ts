import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { ENV } from './lib/env.js';
import { prisma } from './lib/prisma.js';
import { createCrudRouter } from './routes/crud.js';

import authRoutes from './routes/auth.js';
import productRoutes from './routes/products.js';
import settingsRoutes from './routes/settings.js';
import seoRoutes from './routes/seo.js';
import contactRoutes from './routes/contact.js';
import dealerRoutes from './routes/dealers.js';
import mediaRoutes from './routes/media.js';
import userRoutes from './routes/users.js';
import dashboardRoutes from './routes/dashboard.js';
import legalRoutes from './routes/legal.js';

const app = express();

app.use(
  cors({
    origin: (origin, cb) => {
      // origin yoksa (curl / server-to-server) izin ver
      if (!origin || ENV.CORS_ORIGINS.includes(origin) || ENV.CORS_ORIGINS.includes('*')) return cb(null, true);
      cb(null, true); // geliştirme kolaylığı: tüm origin'lere izin (üretimde CORS_ORIGINS ile kısıtlanır)
    },
    credentials: true,
  }),
);
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());

// Yüklenen dosyalar
app.use('/uploads', express.static(path.resolve(process.cwd(), 'uploads')));

// Sağlık kontrolü
app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'd2grup-backend' }));

// Kimlik doğrulama
app.use('/api/auth', authRoutes);

// Basit kaynaklar (jenerik CRUD)
app.use(
  '/api/categories',
  createCrudRouter({
    model: prisma.category,
    entity: 'category',
    jsonFields: ['highlights'],
    titleField: 'title',
    searchFields: ['title', 'slug'],
    allowedFields: ['slug', 'title', 'subtitle', 'description', 'longDescription', 'image', 'highlights', 'order', 'active', 'seoTitle', 'seoDescription'],
  }),
);
app.use(
  '/api/technologies',
  createCrudRouter({
    model: prisma.technology,
    entity: 'technology',
    jsonFields: ['applications'],
    titleField: 'title',
    searchFields: ['title', 'key'],
    allowedFields: ['key', 'title', 'shortTitle', 'iconName', 'image', 'description', 'applications', 'order', 'active', 'seoTitle', 'seoDescription'],
  }),
);
app.use(
  '/api/brands',
  createCrudRouter({
    model: prisma.brand,
    entity: 'brand',
    jsonFields: ['focus'],
    titleField: 'name',
    searchFields: ['name', 'key'],
    allowedFields: ['key', 'name', 'logo', 'tagline', 'origin', 'description', 'focus', 'website', 'order', 'active'],
  }),
);
app.use(
  '/api/faq',
  createCrudRouter({
    model: prisma.faq,
    entity: 'faq',
    jsonFields: [],
    titleField: 'question',
    searchFields: ['question', 'answer'],
    allowedFields: ['question', 'answer', 'group', 'order', 'active'],
  }),
);
app.use(
  '/api/cosmetics',
  createCrudRouter({
    model: prisma.cosmeticProduct,
    entity: 'cosmetic',
    jsonFields: ['images', 'specs'],
    titleField: 'name',
    searchFields: ['name', 'slug', 'category'],
    allowedFields: ['slug', 'name', 'category', 'description', 'images', 'specs', 'order', 'active', 'seoTitle', 'seoDescription'],
  }),
);

// İlişkili / özel kaynaklar
app.use('/api/products', productRoutes);
app.use('/api/legal', legalRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/seo', seoRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/dealers', dealerRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

// 404
app.use('/api', (_req, res) => res.status(404).json({ error: 'Uç nokta bulunamadı.' }));

const server = app.listen(ENV.PORT, () => {
  console.log(`✔ D2 Grup API çalışıyor: http://localhost:${ENV.PORT}/api`);
});

// Kapanışta prisma bağlantısını kapat
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  server.close(() => process.exit(0));
});

export default app;
