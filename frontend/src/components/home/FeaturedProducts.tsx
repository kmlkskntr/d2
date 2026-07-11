import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCatalog } from '../../data/DataContext';

export default function FeaturedProducts() {
  const { getFeaturedProducts } = useCatalog();
  const DEVICES = getFeaturedProducts();
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => setActiveIndex((p) => (p + 1) % DEVICES.length);
  const prev = () => setActiveIndex((p) => (p - 1 + DEVICES.length) % DEVICES.length);
  const active = DEVICES[activeIndex];
  const featureIcons = [ShieldCheck, Zap, Sparkles];

  return (
    <section className="bg-zinc-50 py-24 px-6 md:px-12 relative overflow-hidden border-t border-zinc-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.02),transparent_40%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">
          {/* Sol metin paneli */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-3 uppercase">
                ÖNE ÇIKAN TEKNOLOJİLER
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 uppercase leading-[1.05] mb-6">
                EN İLERİ TEKNOLOJİLER,
                <br />
                EN ETKİLİ SONUÇLAR.
              </h2>
              <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed mb-8 max-w-sm">
                Alanında lider markaların gelişmiş cihazları ile kliniklerinize ve hastalarınıza değer katın.
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-zinc-100 p-8 rounded-sm shadow-sm max-w-sm mb-10"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                    {active.brand}
                  </span>
                  <span className="bg-zinc-100 text-zinc-800 text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase">
                    {active.categoryLabel}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-xl tracking-tight text-zinc-950 uppercase mb-3">
                  {active.name}
                </h3>
                <p className="text-zinc-600 font-sans text-xs font-light leading-relaxed mb-6">{active.tagline}</p>
                <div className="flex flex-col gap-2.5">
                  {active.features.slice(0, 3).map((feature, i) => {
                    const FIcon = featureIcons[i] ?? ShieldCheck;
                    return (
                      <div key={i} className="flex items-center gap-2.5 text-zinc-800">
                        <FIcon className="w-4 h-4 text-zinc-600 shrink-0" />
                        <span className="text-xs font-medium font-sans">{feature}</span>
                      </div>
                    );
                  })}
                </div>
                <Link
                  to={`/urun/${active.slug}`}
                  className="inline-flex items-center gap-2 mt-6 font-display font-bold text-[11px] tracking-widest text-zinc-950 hover:text-zinc-600 uppercase transition-colors"
                >
                  DETAYLARI GÖR <ArrowRight size={13} />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-6">
              <Link
                to="/urunler"
                className="flex items-center gap-3 bg-zinc-950 text-white font-semibold text-xs tracking-widest uppercase py-4 px-8 hover:bg-zinc-800 transition-all duration-300"
              >
                TÜM CİHAZLAR <ArrowRight size={14} />
              </Link>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 transition-all"
                  aria-label="Önceki ürün"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-800 hover:bg-zinc-100 transition-all"
                  aria-label="Sonraki ürün"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sağ carousel */}
          <div className="w-full lg:w-7/12 flex flex-col items-center justify-center relative min-h-[480px]">
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[120%] h-48 bg-gradient-to-t from-zinc-200/50 to-transparent blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-200 to-transparent pointer-events-none" />

            <div className="w-full flex items-center justify-center gap-6 relative px-12">
              <AnimatePresence mode="popLayout">
                {DEVICES.map((device, index) => {
                  const isCenter = index === activeIndex;
                  const isLeft = index === (activeIndex - 1 + DEVICES.length) % DEVICES.length;
                  const isRight = index === (activeIndex + 1) % DEVICES.length;
                  if (!isCenter && !isLeft && !isRight) return null;

                  return (
                    <motion.div
                      key={device.slug}
                      onClick={() => setActiveIndex(index)}
                      initial={{ scale: isCenter ? 0.9 : 0.75, opacity: 0, x: isLeft ? -120 : isRight ? 120 : 0 }}
                      animate={{
                        scale: isCenter ? 1.05 : 0.85,
                        opacity: isCenter ? 1 : 0.45,
                        x: isLeft ? -100 : isRight ? 100 : 0,
                        zIndex: isCenter ? 20 : 10,
                      }}
                      exit={{ scale: 0.7, opacity: 0, x: isLeft ? -150 : isRight ? 150 : 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                      className="cursor-pointer w-[240px] md:w-[280px] shrink-0 flex flex-col items-center relative"
                    >
                      <div
                        className={`w-full aspect-[3/4] bg-white rounded-xl overflow-hidden p-6 border transition-all duration-500 flex items-center justify-center ${
                          isCenter ? 'border-zinc-200/80 shadow-xl shadow-zinc-200/50' : 'border-zinc-100 shadow-sm scale-95'
                        }`}
                      >
                        <img
                          src={device.image}
                          alt={device.name}
                          className="max-h-full max-w-full object-contain mix-blend-multiply"
                        />
                      </div>
                      {isCenter && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 text-center">
                          <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-zinc-400 block mb-1">
                            {device.brand}
                          </span>
                          <span className="font-display font-extrabold text-sm tracking-widest text-zinc-950 uppercase">
                            {device.name}
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
