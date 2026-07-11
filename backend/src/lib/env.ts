import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: Number(process.env.PORT ?? 4000),
  JWT_SECRET: process.env.JWT_SECRET ?? 'dev-secret-degistirin',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '7d',
  CORS_ORIGINS: (process.env.CORS_ORIGINS ?? 'http://localhost:3000,http://localhost:5174')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
  ADMIN_EMAIL: process.env.ADMIN_EMAIL ?? 'admin@d2grup.com',
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ?? 'D2grup!2026',
  PUBLIC_URL: process.env.PUBLIC_URL ?? '',
};
