import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, FolderTree, Cpu, Award, Mail, Handshake, Plus, ArrowRight, Clock } from 'lucide-react';
import { api } from '../lib/api';
import { Card, Spinner, PageHeader, Badge } from '../components/ui';

interface Dash {
  counts: { products: number; categories: number; technologies: number; brands: number; cosmetics: number; faq: number };
  contact: { total: number; unread: number };
  dealers: { total: number; unread: number };
  recent: { id: number; entity: string; action: string; title: string | null; user: string | null; createdAt: string }[];
}

const ENTITY_LABEL: Record<string, string> = {
  product: 'Ürün', category: 'Kategori', technology: 'Teknoloji', brand: 'Marka', faq: 'SSS',
  cosmetic: 'Kozmetik', legal: 'Yasal', setting: 'Ayar', seo: 'SEO',
};
const ACTION_LABEL: Record<string, string> = { create: 'oluşturuldu', update: 'güncellendi', delete: 'silindi' };

export default function DashboardPage() {
  const [data, setData] = useState<Dash | null>(null);

  useEffect(() => {
    api.get<Dash>('/dashboard').then(setData).catch(() => {});
  }, []);

  if (!data) return <Spinner />;

  const stats = [
    { label: 'Toplam Ürün', value: data.counts.products, icon: Package, to: '/urunler', tone: 'indigo' },
    { label: 'Kategori', value: data.counts.categories, icon: FolderTree, to: '/kategoriler', tone: 'green' },
    { label: 'Teknoloji', value: data.counts.technologies, icon: Cpu, to: '/teknolojiler', tone: 'amber' },
    { label: 'Marka', value: data.counts.brands, icon: Award, to: '/markalar', tone: 'gray' },
  ];

  return (
    <>
      <PageHeader title="Dashboard" subtitle="D2 Grup içerik yönetimine genel bakış" />

      {/* Sayaçlar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link key={s.label} to={s.to}>
              <Card className="p-4 hover:border-indigo-200 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-app-muted"><Icon size={16} /></span>
                  <ArrowRight size={14} className="text-zinc-300" />
                </div>
                <div className="text-[24px] font-bold text-app-ink leading-none">{s.value}</div>
                <div className="text-[12px] text-app-muted mt-1">{s.label}</div>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Talepler + hızlı işlemler */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <Link to="/mesajlar" className="lg:col-span-1">
          <Card className="p-4 h-full hover:border-indigo-200 transition-colors">
            <div className="flex items-center gap-2 text-app-muted mb-3"><Mail size={15} /> <span className="text-[12px] font-semibold">İletişim Mesajları</span></div>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-bold text-app-ink leading-none">{data.contact.total}</span>
              {data.contact.unread > 0 && <Badge tone="red">{data.contact.unread} yeni</Badge>}
            </div>
          </Card>
        </Link>
        <Link to="/bayi-basvurulari" className="lg:col-span-1">
          <Card className="p-4 h-full hover:border-indigo-200 transition-colors">
            <div className="flex items-center gap-2 text-app-muted mb-3"><Handshake size={15} /> <span className="text-[12px] font-semibold">Bayi Başvuruları</span></div>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-bold text-app-ink leading-none">{data.dealers.total}</span>
              {data.dealers.unread > 0 && <Badge tone="red">{data.dealers.unread} yeni</Badge>}
            </div>
          </Card>
        </Link>
        <Card className="p-4 lg:col-span-1">
          <span className="text-[12px] font-semibold text-app-muted">Hızlı İşlemler</span>
          <div className="flex flex-col gap-2 mt-3">
            <Link to="/urunler" className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 hover:text-indigo-700"><Plus size={14} /> Yeni ürün ekle</Link>
            <Link to="/anasayfa" className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 hover:text-indigo-700"><ArrowRight size={14} /> Ana sayfayı düzenle</Link>
            <Link to="/medya" className="inline-flex items-center gap-2 text-[13px] font-semibold text-indigo-600 hover:text-indigo-700"><ArrowRight size={14} /> Medya yükle</Link>
          </div>
        </Card>
      </div>

      {/* Son düzenlenen içerikler */}
      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4"><Clock size={15} className="text-app-muted" /><h2 className="text-[14px] font-bold text-app-ink">Son Düzenlenen İçerikler</h2></div>
        {data.recent.length === 0 ? (
          <p className="text-[13px] text-app-muted py-4">Henüz işlem yok.</p>
        ) : (
          <div className="flex flex-col divide-y divide-app-border">
            {data.recent.map((r) => (
              <div key={r.id} className="flex items-center justify-between py-2.5 text-[13px]">
                <span className="text-app-ink">
                  <Badge tone="gray">{ENTITY_LABEL[r.entity] ?? r.entity}</Badge>{' '}
                  <span className="font-medium">{r.title ?? '—'}</span> {ACTION_LABEL[r.action] ?? r.action}
                </span>
                <span className="text-app-muted text-[11px]">{new Date(r.createdAt).toLocaleString('tr-TR')}</span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}
