import { Link } from 'react-router-dom';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { STATS } from '../../data/site';
import Icon from '../ui/Icon';
import { asset } from '../../lib/asset';

const HERO_IMAGE = 'assets/renders/hero-device-teal.jpg';

interface HeroProps {
  onPlayVideo?: () => void;
}

export default function Hero({ onPlayVideo }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-brand-dark pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Metin (sol) */}
        <div className="flex-1 text-left xl:pl-8 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-xs tracking-[0.3em] text-white/60 block mb-4 uppercase"
          >
            TEKNOLOJİ. GÜVEN. SONUÇ.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.95] mb-6"
          >
            TEKNOLOJİDE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/60">
              LİDER.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/70 max-w-md font-sans font-light leading-relaxed mb-10"
          >
            D2 Grup, dünyanın en ileri teknolojiye sahip estetik ve güzellik cihazlarını Türkiye ile buluşturur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Link
              to="/urunler"
              className="flex items-center gap-3 bg-brand-teal text-white font-semibold text-xs tracking-widest uppercase py-4 px-8 hover:bg-brand-teal-dark transition-all duration-300"
            >
              ÜRÜNLERİ KEŞFET <ArrowRight size={14} />
            </Link>

            <button
              onClick={onPlayVideo}
              className="flex items-center gap-3 group text-white/90 hover:text-white transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/5 transition-all">
                <Play size={12} className="fill-white ml-0.5" />
              </div>
              <span className="font-semibold text-xs tracking-widest uppercase">VİDEOYU İZLE</span>
            </button>
          </motion.div>
        </div>

        {/* Cihaz görseli (sağ) */}
        <div className="flex-1 flex justify-center items-center relative py-12 lg:py-0 w-full">
          <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-brand-teal/30 flex items-center justify-center animate-[spin_100s_linear_infinite] pointer-events-none">
            <div className="absolute w-[95%] h-[95%] rounded-full border border-dashed border-white/5" />
            <div className="absolute top-0 w-2 h-2 rounded-full bg-brand-teal shadow-[0_0_12px_rgba(32,178,170,0.9)]" />
            <div className="absolute bottom-1/4 right-0 w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
          <div className="absolute w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-full bg-radial from-white/10 to-transparent blur-[60px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/80 group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
            <img
              src={asset(HERO_IMAGE)}
              alt="D2 Grup premium estetik cihazı"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm text-[10px] font-mono text-white/80 tracking-widest uppercase shadow-md">
            D2 GRUP PREMIUM SERİSİ
          </div>
        </div>
      </div>

      {/* İstatistik bandı */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 bg-zinc-950/40 backdrop-blur-md border border-white/10 p-8 md:px-10 rounded-sm relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2.5 items-start relative">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon name={stat.iconName} className="w-5 h-5 text-white/90" />
                </div>
                <span className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-white">
                  {stat.value}
                </span>
              </div>
              <span className="font-sans font-bold text-[10px] tracking-wider text-white/50 uppercase leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
