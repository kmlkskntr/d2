import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { BRANDS } from '../../data/brands';
import { asset } from '../../lib/asset';

const COSMETICS_IMAGE = 'assets/renders/cosmetics-set.jpg';

export default function CosmeticsBrands() {
  const brands = BRANDS.slice(0, 5);

  return (
    <section className="bg-white py-24 px-6 md:px-12 border-b border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Sol: Kozmetik */}
          <div className="flex-1 bg-zinc-950 text-white p-10 md:p-14 flex flex-col justify-between rounded-sm relative overflow-hidden group min-h-[580px]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent z-10 pointer-events-none" />
            <img
              src={asset(COSMETICS_IMAGE)}
              alt="D2 Grup premium kozmetik ürünler"
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-102 transition-transform duration-1000"
            />
            <div className="relative z-20">
              <span className="font-display font-bold text-xs tracking-[0.3em] text-white/50 block mb-4 uppercase">
                KOZMETİK ÜRÜNLER
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-white uppercase leading-[1.05] max-w-sm mb-6">
                BİLİMSEL FORMÜLLER,
                <br />
                GÖZLE GÖRÜLÜR ETKİ.
              </h2>
              <p className="font-sans font-light text-white/70 text-xs leading-relaxed max-w-xs mb-8">
                Hücresel düzeyde yaşlanma karşıtı ve yenileyici etki sunan formüllerimiz, klinik tedavilerin etkinliğini
                desteklemek üzere tasarlanmıştır.
              </p>
            </div>
            <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <Link
                to="/kozmetik"
                className="flex items-center gap-3 bg-white text-black font-semibold text-xs tracking-widest uppercase py-4 px-8 hover:bg-zinc-200 transition-all duration-300"
              >
                KOZMETİK ÜRÜNLERİ İNCELE <ArrowRight size={14} />
              </Link>
              <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2.5 rounded-sm">
                <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-[9px] tracking-widest font-bold uppercase text-white/80">
                  %100 BİYOUYUMLU
                </span>
              </div>
            </div>
          </div>

          {/* Sağ: Markalar */}
          <div className="flex-1 bg-zinc-50 p-10 md:p-14 flex flex-col justify-between rounded-sm border border-zinc-100 min-h-[580px]">
            <div>
              <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-4 uppercase">
                ORTAKLARIMIZ
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl tracking-tight text-zinc-950 uppercase leading-[1.05] mb-12">
                DÜNYANIN LİDER
                <br />
                MARKALARI
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {brands.map((brand) => (
                  <Link
                    to="/markalar"
                    key={brand.id}
                    className="flex flex-col p-6 bg-white border border-zinc-100/80 hover:shadow-md hover:border-zinc-200 transition-all duration-300 rounded-sm group"
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="font-display font-black text-2xl tracking-tighter text-zinc-800 group-hover:text-zinc-950 transition-colors">
                        {brand.logo}
                      </span>
                      <span className="font-mono text-[8px] text-zinc-400 font-bold tracking-widest uppercase">
                        PREMİUM
                      </span>
                    </div>
                    <span className="font-sans font-light text-zinc-400 text-[10px] tracking-wide uppercase">
                      {brand.tagline}
                    </span>
                  </Link>
                ))}
                <Link
                  to="/markalar"
                  className="flex items-center justify-center p-6 border-2 border-dashed border-zinc-200 rounded-sm hover:bg-zinc-100/50 transition-all group"
                >
                  <span className="font-display font-bold text-xs tracking-wider text-zinc-400 group-hover:text-zinc-600 transition-colors uppercase">
                    + DİĞER GLOBAL PARTNERLER
                  </span>
                </Link>
              </div>
            </div>

            <Link
              to="/markalar"
              className="flex items-center justify-center gap-3 bg-zinc-950 text-white font-semibold text-xs tracking-widest uppercase py-4 px-8 hover:bg-zinc-800 transition-all duration-300 w-full sm:w-auto sm:inline-flex"
            >
              TÜM MARKALAR <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
