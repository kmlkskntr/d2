import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Headphones, GraduationCap, FileText, ChevronRight } from 'lucide-react';
import Breadcrumbs from '../components/layout/Breadcrumbs';
import ProductCard from '../components/ui/ProductCard';
import CtaBanner from '../components/sections/CtaBanner';
import { LinkButton } from '../components/ui/Button';
import { useCatalog } from '../data/DataContext';
import { asset } from '../lib/asset';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { getProduct, getRelatedProducts, getTechnology } = useCatalog();
  const product = slug ? getProduct(slug) : undefined;
  const [activeImg, setActiveImg] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);

  if (!product) return <Navigate to="/urunler" replace />;

  const related = getRelatedProducts(product);
  const gallery = product.gallery.length ? product.gallery : [product.image];

  const trustBadges = [
    { icon: ShieldCheck, label: 'Garanti & Sertifika' },
    { icon: Headphones, label: '7/24 Teknik Servis' },
    { icon: GraduationCap, label: 'Klinik Eğitim Desteği' },
  ];

  return (
    <>
      {/* İnce koyu üst şerit — header'ın okunur kalması için (breadcrumb) */}
      <section className="bg-brand-dark pt-28 md:pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs
            theme="dark"
            items={[
              { label: 'Ürünler', to: '/urunler' },
              { label: product.categoryLabel, to: `/urunler/kategori/${product.category}` },
              { label: product.name },
            ]}
          />
        </div>
      </section>

      {/* Ana ürün bölümü (açık) */}
      <section className="bg-white pb-16 pt-12 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Galeri */}
          <div>
            <motion.div
              key={activeImg}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden flex items-center justify-center p-10 mb-4"
            >
              <img
                src={asset(gallery[activeImg])}
                alt={product.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </motion.div>
            <div className="grid grid-cols-5 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img + i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square bg-zinc-50 rounded-sm overflow-hidden flex items-center justify-center p-2 border-2 transition-all ${
                    activeImg === i ? 'border-zinc-950' : 'border-zinc-100 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={asset(img)} alt={`${product.name} önizleme ${i + 1}`} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Bilgi paneli */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                {product.brand}
              </span>
              {product.series && (
                <span className="bg-zinc-100 text-zinc-700 text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
                  {product.series}
                </span>
              )}
              {product.isNew && (
                <span className="bg-brand-teal text-white text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
                  YENİ
                </span>
              )}
            </div>

            <h1 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 uppercase leading-none mb-4">
              {product.name}
            </h1>
            <p className="font-sans font-light text-zinc-600 text-base leading-relaxed mb-8">{product.tagline}</p>

            {/* Öne çıkan özellikler */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {product.features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-zinc-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} />
                  </span>
                  <span className="font-sans text-zinc-700 text-xs leading-relaxed">{f}</span>
                </div>
              ))}
            </div>

            {/* Varyantlar */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase font-bold block mb-3">
                  KONFİGÜRASYON
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((v, i) => (
                    <button
                      key={v.name}
                      onClick={() => setActiveVariant(i)}
                      className={`flex flex-col items-start px-4 py-3 border rounded-sm text-left transition-all ${
                        activeVariant === i
                          ? 'border-zinc-950 bg-zinc-50'
                          : 'border-zinc-200 hover:border-zinc-400'
                      }`}
                    >
                      <span className="font-display font-bold text-xs text-zinc-900 uppercase tracking-wider">
                        {v.name}
                      </span>
                      {v.note && <span className="font-sans text-[10px] text-zinc-500 mt-0.5">{v.note}</span>}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Fiyat + CTA (koyu vurgu kartı) */}
            <div className="bg-zinc-950 border border-zinc-900 rounded-sm p-6 mb-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
                  <div>
                    <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase block mb-1">
                      {product.priceLabel}
                    </span>
                    <span className="font-display font-black text-2xl text-white uppercase tracking-tight">
                      Teklife Özel
                    </span>
                    <p className="font-sans text-white/50 text-[11px] mt-1">{product.priceNote}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <LinkButton to="/iletisim" variant="light" withArrow className="flex-1">
                    TEKLİF AL
                  </LinkButton>
                  <LinkButton to="/bayi-girisi" variant="outline" className="flex-1">
                    BAYİ GİRİŞİ
                  </LinkButton>
                </div>
              </div>
            </div>

            {/* Güven rozetleri */}
            <div className="grid grid-cols-3 gap-3">
              {trustBadges.map(({ icon: BIcon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-2 bg-zinc-50 border border-zinc-100 p-4 rounded-sm">
                  <BIcon size={18} className="text-zinc-700" />
                  <span className="font-sans text-[9px] text-zinc-500 uppercase tracking-wider leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Açıklama + özellikler + kullanım alanları (zinc-50) */}
      <section className="bg-zinc-50 py-20 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-4 uppercase">
            ÜRÜN HAKKINDA
          </span>
          <h2 className="font-display font-black text-3xl tracking-tight text-zinc-950 uppercase leading-tight mb-6">
            {product.name} NEDİR?
          </h2>
          <p className="font-sans font-light text-zinc-600 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
            {product.longDescription || product.description}
          </p>

          {/* Alt başlıklı açıklama blokları (üretici içeriği) */}
          {product.sections && product.sections.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-10 max-w-5xl">
              {product.sections.map((sec) => (
                <div key={sec.title} className="border-l-2 border-brand-teal/60 pl-5">
                  <h3 className="font-display font-bold text-sm tracking-wide text-zinc-950 uppercase mb-2.5">
                    {sec.title}
                  </h3>
                  <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed">{sec.body}</p>
                </div>
              ))}
            </div>
          )}

          {/* Teknoloji etiketleri */}
          {product.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-10">
              {product.technologies.map((tid) => {
                const t = getTechnology(tid);
                if (!t) return null;
                return (
                  <Link
                    key={tid}
                    to="/teknolojiler"
                    className="text-[10px] font-bold tracking-widest uppercase text-zinc-700 bg-white border border-zinc-200 hover:bg-zinc-950 hover:text-white hover:border-zinc-950 px-3 py-2 transition-colors"
                  >
                    {t.shortTitle}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Eşit yükseklikte iki kart: özellikler + kullanım alanları */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Öne çıkan özellikler */}
            <div className="bg-white border border-zinc-100 rounded-sm p-8">
              <h3 className="font-display font-bold text-sm tracking-wider text-zinc-950 uppercase mb-6">
                ÖNE ÇIKAN ÖZELLİKLER
              </h3>
              <div className="flex flex-col gap-4">
                {product.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} />
                    </span>
                    <span className="font-sans text-zinc-700 text-sm leading-relaxed">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Kullanım alanları (koyu vurgu) */}
            <div className="bg-zinc-950 text-white rounded-sm p-8">
              <h3 className="font-display font-bold text-sm tracking-wider uppercase mb-6">KULLANIM ALANLARI</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.indications.map((ind) => (
                  <div
                    key={ind}
                    className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-sm px-3.5 py-3"
                  >
                    <ChevronRight size={14} className="text-white/40 shrink-0" />
                    <span className="font-sans text-white/85 text-sm leading-tight">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik özellikler (beyaz) */}
      <section className="bg-white py-20 px-6 md:px-12 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText size={18} className="text-zinc-500" />
            <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-zinc-950 uppercase">
              CİHAZ SPESİFİKASYONLARI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-t border-zinc-200">
            {product.specs.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between gap-4 py-4 border-b border-zinc-100"
              >
                <span className="font-display font-bold text-[11px] tracking-widest text-zinc-500 uppercase shrink-0">
                  {s.label}
                </span>
                <span className="font-sans text-sm text-zinc-800 text-right">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After (varsa) — zinc-50 */}
      {product.beforeAfter && product.beforeAfter.length > 0 && (
        <section className="bg-zinc-50 py-20 px-6 md:px-12 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-4 uppercase">
                KLİNİK SONUÇLAR
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-zinc-950 uppercase">
                GÖZLE GÖRÜLÜR FARK
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.beforeAfter.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                  className="relative rounded-sm overflow-hidden aspect-[4/3] group border border-zinc-100"
                >
                  <img src={asset(img)} alt={`${product.name} öncesi ve sonrası ${i + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 bg-black/70 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                    Öncesi
                  </span>
                  <span className="absolute top-3 right-3 bg-brand-teal text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                    Sonrası
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="font-sans text-zinc-400 text-[11px] text-center mt-8 max-w-2xl mx-auto leading-relaxed">
              * Sonuçlar kişiden kişiye değişkenlik gösterebilir. Görseller temsili klinik uygulama örnekleridir.
            </p>
          </div>
        </section>
      )}

      {/* Benzer ürünler (beyaz) */}
      {related.length > 0 && (
        <section className="bg-white py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-3 uppercase">
                  BENZER ÜRÜNLER
                </span>
                <h2 className="font-display font-black text-3xl tracking-tight text-zinc-950 uppercase">
                  BUNLAR DA İLGİNİZİ ÇEKEBİLİR
                </h2>
              </div>
              <Link
                to={`/urunler/kategori/${product.category}`}
                className="hidden sm:inline-flex items-center gap-2 font-display font-bold text-[11px] tracking-widest text-zinc-950 hover:text-zinc-600 uppercase transition-colors"
              >
                TÜMÜNÜ GÖR <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        eyebrow={product.name}
        title={<>BU CİHAZ HAKKINDA<br />DAHA FAZLA BİLGİ ALIN</>}
        description="Demo talebi, klinik protokolleri ve size özel fiyatlandırma için uzman ekibimizle iletişime geçin."
        primary={{ label: 'TEKLİF AL', to: '/iletisim' }}
        secondary={{ label: 'TÜM ÜRÜNLER', to: '/urunler' }}
      />
    </>
  );
}
