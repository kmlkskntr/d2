# D2 GRUP — Kurumsal Web Sitesi + Yönetim Paneli

Medikal estetik ve güzellik teknolojileri distribütörü **D2 Grup** için full-stack proje.
Tek repo içinde üç uygulama:

| Klasör | Uygulama | Teknoloji | Port (dev) |
|--------|----------|-----------|------------|
| [`frontend/`](frontend/) | Kurumsal web sitesi (public) | React 19 + Vite + Tailwind v4 + react-router | `3000` |
| [`backend/`](backend/) | REST API + veritabanı | Express + Prisma + SQLite + JWT | `4000` |
| [`admin/`](admin/) | Yönetim paneli | React 19 + Vite + Tailwind v4 | `5174` |

> **Not:** Frontend tasarımı korunmuştur. Yönetim paneli, `frontend/src/data` içindeki
> içerikleri (ürün, kategori, teknoloji, marka, SSS, kozmetik, yasal metin, ayarlar)
> düzenlenebilir hâle getirir. Frontend içeriği API'den çeker; **API erişilemezse
> statik verilere düşer** (fallback), böylece site her koşulda çalışır.

---

## Hızlı Başlangıç

Üç terminal (veya arka planda) açın:

### 1) Backend (API + veritabanı)
```bash
cd backend
cp .env.example .env          # değerleri düzenleyin (JWT_SECRET vb.)
npm install
npm run setup                 # prisma generate + migrate + seed (src/data -> DB)
npm run dev                   # http://localhost:4000/api
```
Seed, ilk admin kullanıcısını `.env` içindeki `ADMIN_EMAIL` / `ADMIN_PASSWORD` ile oluşturur
(varsayılan: `admin@d2grup.com` / `D2grup!2026`).

### 2) Admin paneli
```bash
cd admin
npm install
npm run dev                   # http://localhost:5174
```
Giriş: yukarıdaki admin e-posta / şifresi. (Dev'de API istekleri backend'e proxy'lenir.)

### 3) Frontend (web sitesi)
```bash
cd frontend
npm install
npm run dev                   # http://localhost:3000
```
Dev'de içerik `/api` üzerinden backend'den gelir (Vite proxy). Backend kapalıysa statik veri kullanılır.

---

## Ortam Değişkenleri

### backend/.env
`backend/.env.example` dosyasına bakın: `PORT`, `DATABASE_URL` (SQLite ya da PostgreSQL),
`JWT_SECRET`, `CORS_ORIGINS`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `PUBLIC_URL`.

### frontend/.env (opsiyonel — üretim)
```
VITE_API_URL=https://api.d2grup.com   # backend'in yayında olduğu adres
```
Boşsa (GitHub Pages gibi statik dağıtımda) frontend, bundle içindeki statik verilerle çalışır.

### admin/.env (opsiyonel)
```
VITE_FRONTEND_URL=http://localhost:3000   # göreli görsel önizlemeleri için
```

---

## Yönetim Paneli Modülleri
Dashboard · Ana Sayfa · Kurumsal · Ürünler · Kategoriler · Teknolojiler · Markalar ·
Kozmetik · SSS · İletişim Bilgileri · Yasal Metinler · İletişim Mesajları ·
Bayi Başvuruları · Medya · SEO & Entegrasyonlar · Kullanıcılar (ADMIN) · Hesap Ayarları

- **Ürün / kategori / teknoloji / marka / kozmetik / SSS:** tam CRUD (ekle/düzenle/sil, sıralama, aktif-pasif, SEO).
- **Ürün detayı:** galeri, teknik özellikler, varyant, PDF/katalog yükleme, öne çıkan, kullanım alanları.
- **Medya:** çoklu görsel/PDF yükleme, alt metin, silme.
- **İletişim & Bayi:** frontend formlarından gelen gerçek kayıtlar; okundu/durum/not/silme.
- **Güvenlik:** JWT oturum, bcrypt şifre, `ADMIN` / `EDITOR` rolleri, korumalı rotalar.

## Veritabanı
SQLite (varsayılan) — `backend/prisma/dev.db`. Şema: `backend/prisma/schema.prisma`.
İlişkiler: Ürün → Kategori / Marka (FK), Ürün ↔ Teknoloji (çoklu-çoklu).
PostgreSQL'e geçmek için `DATABASE_URL`'i değiştirip `schema.prisma` içindeki `provider`'ı
`postgresql` yapın ve yeniden migrate edin.

## Üretim Derlemesi
```bash
cd backend  && npm run build && npm start          # dist/ + API sunucu
cd frontend && npm run build                        # frontend/dist (statik)
cd admin    && npm run build                        # admin/dist (statik)
```
Backend, `/uploads` altındaki yüklenen dosyaları da sunar. Frontend ve admin statik olarak
herhangi bir sunucuda (veya frontend GitHub Pages'te) barındırılabilir; admin ve frontend'in
API'ye ulaşabilmesi için backend'in yayında olması ve `VITE_API_URL` verilmesi gerekir.
