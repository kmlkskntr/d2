import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Package, FolderTree, Cpu, Award, Sparkles, HelpCircle, Mail, Handshake, Plus, ArrowRight,
  Clock, ExternalLink, Star, CheckCircle2, Image as ImageIcon, Home, LayoutGrid,
} from 'lucide-react';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';
import { Card, Spinner, Badge } from '../components/ui';

const SITE_URL = 'https://d2.kcreativesunum.net';

interface Dash {
  counts: { products: number; activeProducts: number; featured: number; categories: number; technologies: number; brands: number; cosmetics: number; faq: number };
  byCategory: { title: string; subtitle: string; count: number }[];
  contact: { total: number; unread: number };
  dealers: { total: number; unread: number };
  recent: { id: number; entity: string; action: string; title: string | null; user: string | null; createdAt: string }[];
}

const ENTITY_LABEL: Record<string, string> = {
  product: 'Ürün', category: 'Kategori', technology: 'Teknoloji', brand: 'Marka', faq: 'SSS',
  cosmetic: 'Kozmetik', legal: 'Yasal', setting: 'Ayar', seo: 'SEO',
};
const ACTION_TONE: Record<string, 'green' | 'indigo' | 'red'> = { create: 'green', update: 'indigo', delete: 'red' };
const ACTION_LABEL: Record<string, string> = { create: 'eklendi', update: 'güncellendi', delete: 'silindi' };

export default function DashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState<Dash | null>(null);

  useEffect(() => {
    api.get<Dash>('/dashboard').then(setData).catch(() => {});
  }, []);

  if (!data) return <Spinner />;

  const today = new Date().toLocaleDateString('tr-TR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const maxCat = Math.max(1, ...data.byCategory.map((c) => c.count));

  const stats = [
    { label: 'Ürün', value: data.counts.products, icon: Package, to: '/urunler', sub: `${data.counts.featured} öne çıkan` },
    { label: 'Kategori', value: data.counts.categories, icon: FolderTree, to: '/kategoriler' },
    { label: 'Teknoloji', value: data.counts.technologies, icon: Cpu, to: '/teknolojiler' },
    { label: 'Marka', value: data.counts.brands, icon: Award, to: '/markalar' },
    { label: 'Kozmetik', value: data.counts.cosmetics, icon: Sparkles, to: '/kozmetik' },
    { label: 'SSS', value: data.counts.faq, icon: HelpCircle, to: '/sss' },
  ];

  const quick = [
    { label: 'Yeni ürün ekle', to: '/urunler', icon: Plus },
    { label: 'Ana sayfayı düzenle', to: '/anasayfa', icon: Home },
    { label: 'Medya yükle', to: '/medya', icon: ImageIcon },
    { label: 'İçerik kategorileri', to: '/kategoriler', icon: LayoutGrid },
  ];

  return (
    <>
      {/* Karşılama */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
        <div>
          <h1 className="text-[22px] font-bold text-app-ink tracking-tight">
            Hoş geldiniz, {user?.name ?? 'Yönetici'} 👋
          </h1>
          <p className="text-[13px] text-app-muted mt-1 capitalize">{today}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={SITE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-9 px-3.5 rounded-lg text-[13px] font-semibold bg-white border border-app-border text-app-ink hover:bg-zinc-50 transition-colors"
          >
            Siteyi Görüntüle <ExternalLink size={14} />
          </a>
          <Link
            to="/urunler"
            className="inline-flex items-center gap-2 h-9 px-3.5 rounded-lg text-[13px] font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            <Plus size={15} /> Yeni Ürün
          </Link>
        </div>
      </div>

      {/* İstatistik kartları (6) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.label} to={s.to}>
              <Card className="p-4 h-full hover:border-indigo-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"><Icon size={15} /></span>
                  <ArrowRight size={13} className="text-zinc-300" />
                </div>
                <div className="text-[22px] font-bold text-app-ink leading-none">{s.value}</div>
                <div className="text-[12px] text-app-muted mt-1">{s.label}</div>
                {s.sub && <div className="text-[10px] text-amber-600 mt-1.5 flex items-center gap-1"><Star size={9} className="fill-amber-500 text-amber-500" />{s.sub}</div>}
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* İçerik dağılımı */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[14px] font-bold text-app-ink">İçerik Dağılımı</h2>
            <span className="text-[11px] text-app-muted">{data.counts.activeProducts}/{data.counts.products} ürün aktif</span>
          </div>
          <div className="flex flex-col gap-4">
            {data.byCategory.map((c) => (
              <div key={c.title}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[12px] font-medium text-app-ink">{c.title} <span className="text-app-muted font-normal">{c.subtitle}</span></span>
                  <span className="text-[12px] font-semibold text-app-ink">{c.count}</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                  <div className="h-full rounded-full bg-indigo-500" style={{ width: `${(c.count / maxCat) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Talepler + hızlı işlemler */}
        <div className="flex flex-col gap-4">
          <Link to="/mesajlar">
            <Card className="p-4 hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-app-muted"><Mail size={15} /><span className="text-[12px] font-semibold">İletişim Mesajları</span></div>
                {data.contact.unread > 0 && <Badge tone="red">{data.contact.unread} yeni</Badge>}
              </div>
              <div className="text-[22px] font-bold text-app-ink mt-2 leading-none">{data.contact.total}</div>
            </Card>
          </Link>
          <Link to="/bayi-basvurulari">
            <Card className="p-4 hover:border-indigo-200 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-app-muted"><Handshake size={15} /><span className="text-[12px] font-semibold">Bayi Başvuruları</span></div>
                {data.dealers.unread > 0 && <Badge tone="red">{data.dealers.unread} yeni</Badge>}
              </div>
              <div className="text-[22px] font-bold text-app-ink mt-2 leading-none">{data.dealers.total}</div>
            </Card>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Son işlemler */}
        <Card className="lg:col-span-2 p-5">
          <div className="flex items-center gap-2 mb-4"><Clock size={15} className="text-app-muted" /><h2 className="text-[14px] font-bold text-app-ink">Son Düzenlenen İçerikler</h2></div>
          {data.recent.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <CheckCircle2 size={26} className="text-zinc-300 mb-2" />
              <p className="text-[13px] text-app-muted">Henüz bir işlem yapılmadı.</p>
              <p className="text-[11px] text-app-muted mt-0.5">İçerik ekleyip düzenledikçe burada görünecek.</p>
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-app-border">
              {data.recent.map((r) => (
                <div key={r.id} className="flex items-center justify-between py-2.5 text-[13px] gap-3">
                  <span className="flex items-center gap-2 min-w-0">
                    <Badge tone={ACTION_TONE[r.action] ?? 'gray'}>{ENTITY_LABEL[r.entity] ?? r.entity}</Badge>
                    <span className="text-app-ink truncate"><span className="font-medium">{r.title ?? '—'}</span> {ACTION_LABEL[r.action] ?? r.action}</span>
                  </span>
                  <span className="text-app-muted text-[11px] shrink-0">{new Date(r.createdAt).toLocaleString('tr-TR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              ))}
            </div>
          )}
        </Card>

        {/* Hızlı işlemler */}
        <Card className="p-5">
          <h2 className="text-[14px] font-bold text-app-ink mb-4">Hızlı İşlemler</h2>
          <div className="flex flex-col gap-1">
            {quick.map((q) => {
              const Icon = q.icon;
              return (
                <Link key={q.label} to={q.to} className="flex items-center gap-2.5 px-2.5 h-10 rounded-lg text-[13px] font-medium text-app-ink hover:bg-zinc-50 transition-colors group">
                  <span className="w-7 h-7 rounded-md bg-indigo-50 text-indigo-600 flex items-center justify-center"><Icon size={14} /></span>
                  {q.label}
                  <ArrowRight size={14} className="ml-auto text-zinc-300 group-hover:text-indigo-500 transition-colors" />
                </Link>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}
