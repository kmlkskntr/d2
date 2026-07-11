import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import ProductCard from '../components/ui/ProductCard';
import CtaBanner from '../components/sections/CtaBanner';
import { useCatalog } from '../data/DataContext';
import { CategoryId } from '../types';

type SortKey = 'default' | 'name-asc' | 'name-desc' | 'brand';

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'default', label: 'Öne Çıkanlar' },
  { key: 'name-asc', label: 'İsim (A → Z)' },
  { key: 'name-desc', label: 'İsim (Z → A)' },
  { key: 'brand', label: 'Marka' },
];

export default function ProductsPage() {
  const { products, categories: CATEGORIES, allBrands: ALL_BRANDS } = useCatalog();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [brand, setBrand] = useState<string>('all');
  const [sort, setSort] = useState<SortKey>('default');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...products];

    if (category !== 'all') list = list.filter((p) => p.category === category);
    if (brand !== 'all') list = list.filter((p) => p.brand === brand);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.description.toLowerCase().includes(q),
      );
    }

    switch (sort) {
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
        break;
      case 'name-desc':
        list.sort((a, b) => b.name.localeCompare(a.name, 'tr'));
        break;
      case 'brand':
        list.sort((a, b) => a.brand.localeCompare(b.brand, 'tr'));
        break;
      default:
        list.sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    }
    return list;
  }, [products, query, category, brand, sort]);

  const resetFilters = () => {
    setQuery('');
    setCategory('all');
    setBrand('all');
    setSort('default');
  };

  const hasActiveFilters = category !== 'all' || brand !== 'all' || query.trim() !== '';

  const FilterControls = () => (
    <div className="flex flex-col gap-8">
      {/* Kategoriler */}
      <div>
        <h3 className="font-display font-bold text-[11px] tracking-widest text-zinc-950 uppercase mb-4">
          KATEGORİ
        </h3>
        <div className="flex flex-col gap-1">
          <FilterRadio label="Tümü" active={category === 'all'} onClick={() => setCategory('all')} />
          {CATEGORIES.map((c) => (
            <FilterRadio
              key={c.id}
              label={c.id === 'global' ? 'Global Markalar' : `${c.title} Teknolojileri`}
              active={category === c.id}
              onClick={() => setCategory(c.id)}
            />
          ))}
        </div>
      </div>

      {/* Markalar */}
      <div>
        <h3 className="font-display font-bold text-[11px] tracking-widest text-zinc-950 uppercase mb-4">MARKA</h3>
        <div className="flex flex-col gap-1 max-h-64 overflow-y-auto pr-2">
          <FilterRadio label="Tümü" active={brand === 'all'} onClick={() => setBrand('all')} />
          {ALL_BRANDS.map((b) => (
            <FilterRadio key={b} label={b} active={brand === b} onClick={() => setBrand(b)} />
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={resetFilters}
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest text-zinc-500 hover:text-zinc-950 uppercase transition-colors"
        >
          <X size={13} /> FİLTRELERİ TEMİZLE
        </button>
      )}
    </div>
  );

  return (
    <>
      <PageHeader
        eyebrow="ÜRÜN KATALOĞU"
        title="TÜM ÜRÜNLER"
        description="FROZEN serisinden global markalara; yüz, vücut ve longevity alanlarında ileri medikal estetik cihazlarının tamamı."
        breadcrumbs={[{ label: 'Ürünler' }]}
        backgroundImage="assets/renders/device-white-tower.jpg"
      />

      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Sol filtre (masaüstü) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <FilterControls />
            </div>
          </aside>

          {/* Sağ içerik */}
          <div className="flex-grow">
            {/* Arama + sıralama + sonuç */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-8 pb-6 border-b border-zinc-100">
              <div className="relative flex-grow max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ürün, marka veya teknoloji ara..."
                  className="w-full bg-zinc-50 border border-zinc-200 focus:border-zinc-400 text-zinc-900 placeholder-zinc-400 font-sans text-sm pl-11 pr-4 py-3 outline-none transition-colors"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-2 border border-zinc-200 px-4 py-3 text-xs font-bold tracking-widest text-zinc-800 uppercase hover:bg-zinc-50"
                >
                  <SlidersHorizontal size={14} /> FİLTRE
                </button>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="bg-zinc-50 border border-zinc-200 focus:border-zinc-400 text-zinc-800 font-sans text-xs font-semibold tracking-wider uppercase px-4 py-3 outline-none cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.key} value={o.key}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="font-mono text-[11px] tracking-widest text-zinc-500 uppercase mb-6">
              {filtered.length} ÜRÜN LİSTELENİYOR
            </p>

            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((p, i) => (
                  <ProductCard key={p.slug} product={p} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 border border-dashed border-zinc-200 rounded-sm">
                <p className="font-display font-bold text-lg text-zinc-900 uppercase mb-2">Sonuç bulunamadı</p>
                <p className="font-sans text-sm text-zinc-500 mb-6">
                  Arama kriterlerinize uygun ürün bulunamadı.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 bg-zinc-950 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-zinc-800 transition-colors"
                >
                  FİLTRELERİ TEMİZLE
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobil filtre çekmecesi */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white p-8 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display font-bold text-sm tracking-widest text-zinc-950 uppercase">FİLTRELER</span>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Kapat">
                <X size={22} className="text-zinc-700" />
              </button>
            </div>
            <FilterControls />
          </div>
        </div>
      )}

      <CtaBanner
        title={<>ARADIĞINIZ ÇÖZÜMÜ<br />BULAMADINIZ MI?</>}
        description="Uzman ekibimiz, kliniğinizin ihtiyacına en uygun cihaz ve teknolojiyi belirlemenize yardımcı olur."
        primary={{ label: 'DANIŞMANLIK AL', to: '/iletisim' }}
      />
    </>
  );
}

function FilterRadio({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 text-left py-2 group transition-colors ${
        active ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-800'
      }`}
    >
      <span
        className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-colors ${
          active ? 'border-zinc-950' : 'border-zinc-300 group-hover:border-zinc-400'
        }`}
      >
        {active && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
      </span>
      <span className="font-sans text-sm font-medium">{label}</span>
    </button>
  );
}
