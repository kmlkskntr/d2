import { useMemo, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ProductCard from '../components/ui/ProductCard';
import CtaBanner from '../components/sections/CtaBanner';
import { useCatalog } from '../data/DataContext';
import type { CategoryId } from '../types';

type SortKey = 'default' | 'name-asc' | 'name-desc';

export default function CategoryPage() {
  const { cat } = useParams<{ cat: string }>();
  const { categories: CATEGORIES, getCategory, getProductsByCategory } = useCatalog();
  const category = cat ? getCategory(cat) : undefined;
  const [sort, setSort] = useState<SortKey>('default');

  const products = useMemo(() => {
    if (!category) return [];
    const list = getProductsByCategory(category.slug as CategoryId);
    if (sort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    if (sort === 'name-desc') list.sort((a, b) => b.name.localeCompare(a.name, 'tr'));
    return list;
  }, [category, sort, getProductsByCategory]);

  if (!category) return <Navigate to="/urunler" replace />;

  return (
    <>
      <PageHeader
        eyebrow="ÜRÜN KATEGORİSİ"
        title={
          <>
            {category.title} <span className="text-white/60">{category.subtitle}</span>
          </>
        }
        description={category.longDescription}
        breadcrumbs={[{ label: 'Ürünler', to: '/urunler' }, { label: `${category.title} ${category.subtitle}` }]}
        backgroundImage={category.image}
      />

      {/* Kategori öne çıkanları */}
      <section className="bg-white py-16 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {category.highlights.map((h) => (
            <div key={h} className="flex items-center gap-3 bg-zinc-50 border border-zinc-100 p-5 rounded-sm">
              <span className="w-8 h-8 rounded-full bg-zinc-950 text-white flex items-center justify-center shrink-0">
                <Check size={15} />
              </span>
              <span className="font-display font-bold text-[11px] tracking-wider text-zinc-900 uppercase leading-tight">
                {h}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Kategori kategori bağlantıları + ürünler */}
      <section className="bg-white pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Diğer kategorilere hızlı geçiş */}
          <div className="flex flex-wrap items-center gap-3 mb-10 pt-12">
            <Link
              to="/urunler"
              className="text-[11px] font-bold tracking-widest uppercase px-4 py-2.5 border border-zinc-200 text-zinc-600 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 transition-all"
            >
              TÜMÜ
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c.id}
                to={`/urunler/kategori/${c.slug}`}
                className={`text-[11px] font-bold tracking-widest uppercase px-4 py-2.5 border transition-all ${
                  c.id === category.id
                    ? 'bg-zinc-950 text-white border-zinc-950'
                    : 'border-zinc-200 text-zinc-600 hover:bg-zinc-950 hover:text-white hover:border-zinc-950'
                }`}
              >
                {c.id === 'global' ? 'GLOBAL' : c.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between mb-8 pb-6 border-b border-zinc-100">
            <p className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase">
              {products.length} ÜRÜN
            </p>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-zinc-50 border border-zinc-200 focus:border-zinc-400 text-zinc-800 font-sans text-xs font-semibold tracking-wider uppercase px-4 py-3 outline-none cursor-pointer"
            >
              <option value="default">Öne Çıkanlar</option>
              <option value="name-asc">İsim (A → Z)</option>
              <option value="name-desc">İsim (Z → A)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow={`${category.title} ${category.subtitle}`}
        title={<>DOĞRU TEKNOLOJİYİ<br />BİRLİKTE SEÇELİM</>}
        description="Kategori içindeki cihazlar ve klinik protokolleri hakkında detaylı bilgi için bizimle iletişime geçin."
        primary={{ label: 'TEKLİF AL', to: '/iletisim' }}
        secondary={{ label: 'TÜM ÜRÜNLER', to: '/urunler' }}
      />
    </>
  );
}
