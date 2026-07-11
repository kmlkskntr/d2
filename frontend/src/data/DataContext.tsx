import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { apiGet } from '../lib/apiClient';
import type { Product, Category, Technology, Brand, FaqItem, CategoryId } from '../types';

// Statik veriler (fallback — backend erişilemezse veya ilk render'da kullanılır)
import { PRODUCTS as STATIC_PRODUCTS } from './products';
import { CATEGORIES as STATIC_CATEGORIES } from './categories';
import { TECHNOLOGIES as STATIC_TECHNOLOGIES } from './technologies';
import { BRANDS as STATIC_BRANDS } from './brands';
import { FAQ as STATIC_FAQ } from './faq';
import { LEGAL_DOCS as STATIC_LEGAL } from './legal';
import { SITE as STATIC_SITE, STATS as STATIC_STATS } from './site';

interface DataState {
  products: Product[];
  categories: Category[];
  technologies: Technology[];
  brands: Brand[];
  faq: FaqItem[];
  cosmetics: any[];
  legal: Record<string, any>;
  site: typeof STATIC_SITE & Record<string, any>;
  home: Record<string, any>;
  about: Record<string, any>;
  stats: typeof STATIC_STATS;
  loading: boolean;
  source: 'api' | 'static';
}

const FALLBACK: DataState = {
  products: STATIC_PRODUCTS,
  categories: STATIC_CATEGORIES,
  technologies: STATIC_TECHNOLOGIES,
  brands: STATIC_BRANDS,
  faq: STATIC_FAQ,
  cosmetics: [],
  legal: STATIC_LEGAL,
  site: STATIC_SITE,
  home: {},
  about: {},
  stats: STATIC_STATS,
  loading: true,
  source: 'static',
};

const Ctx = createContext<DataState>(FALLBACK);

export function DataProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DataState>(FALLBACK);

  useEffect(() => {
    // Statik dağıtımda (backend adresi yok ve localhost değil) API denemesi yapma,
    // doğrudan bundle içindeki statik verilerle çal.
    const host = typeof location !== 'undefined' ? location.hostname : '';
    const isLocal = host === 'localhost' || host === '127.0.0.1';
    if (!import.meta.env.VITE_API_URL && !isLocal) {
      setState((s) => ({ ...s, loading: false, source: 'static' }));
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const [products, categories, technologies, brands, faq, cosmetics, legal, settings] = await Promise.all([
          apiGet<Product[]>('/products/public'),
          apiGet<Category[]>('/categories/public'),
          apiGet<Technology[]>('/technologies/public'),
          apiGet<Brand[]>('/brands/public'),
          apiGet<FaqItem[]>('/faq/public'),
          apiGet<any[]>('/cosmetics/public'),
          apiGet<Record<string, any>>('/legal/public'),
          apiGet<Record<string, any>>('/settings/public'),
        ]);
        if (cancelled) return;
        const site = { ...STATIC_SITE, ...(settings.site ?? {}) };
        setState({
          products: products.length ? products : STATIC_PRODUCTS,
          categories: categories.length ? categories : STATIC_CATEGORIES,
          technologies: technologies.length ? technologies : STATIC_TECHNOLOGIES,
          brands: brands.length ? brands : STATIC_BRANDS,
          faq: faq.length ? faq : STATIC_FAQ,
          cosmetics: cosmetics ?? [],
          legal: legal && Object.keys(legal).length ? legal : STATIC_LEGAL,
          site,
          home: settings.home ?? {},
          about: settings.about ?? {},
          stats: settings.home?.stats?.length ? settings.home.stats : STATIC_STATS,
          loading: false,
          source: 'api',
        });
      } catch {
        // Backend yok / hata → statik veriyle devam
        if (!cancelled) setState((s) => ({ ...s, loading: false, source: 'static' }));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export const useData = () => useContext(Ctx);

// ---------------------------------------------------------- Türetilmiş yardımcı hook'lar
export function useCatalog() {
  const d = useData();
  return useMemo(() => {
    const getProduct = (slug: string) => d.products.find((p) => p.slug === slug);
    const getProductsByCategory = (cat: CategoryId) => d.products.filter((p) => p.category === cat);
    const getFeaturedProducts = () => d.products.filter((p) => p.featured);
    const getRelatedProducts = (product: Product, limit = 3) =>
      d.products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, limit);
    const getCategory = (slug: string) => d.categories.find((c) => c.slug === slug);
    const getTechnology = (id: string) => d.technologies.find((t) => (t as any).key === id || t.id === id);
    const getBrand = (id: string) => d.brands.find((b) => (b as any).key === id || b.id === id);
    const allTags = Array.from(new Set(d.products.flatMap((p) => p.tags))).sort();
    const allBrands = Array.from(new Set(d.products.map((p) => p.brand))).sort();
    const faqGroups = Array.from(new Set(d.faq.map((f) => f.group)));
    return {
      ...d,
      getProduct,
      getProductsByCategory,
      getFeaturedProducts,
      getRelatedProducts,
      getCategory,
      getTechnology,
      getBrand,
      allTags,
      allBrands,
      faqGroups,
    };
  }, [d]);
}
