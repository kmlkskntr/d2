import { Play, Trophy, CheckCircle2 } from 'lucide-react';
import { asset } from '../../lib/asset';

interface IntroVideoProps {
  onPlay: () => void;
}

const VIDEO_THUMB = 'assets/renders/hero-device.jpg';

const POINTS = [
  'FDA ONAYLI PATENTLİ SİSTEMLER',
  'MÜKEMMEL SERVİS VE YEDEK PARÇA GARANTİSİ',
  'MEDİKAL UYGULAMA VE KLİNİK EĞİTİMLERİ',
];

export default function IntroVideo({ onPlay }: IntroVideoProps) {
  return (
    <section className="bg-zinc-50 text-zinc-950 py-24 px-6 md:px-12 relative overflow-hidden border-b border-zinc-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.015),transparent_40%)]" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex-1 text-left max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-4 h-4 text-zinc-500" />
            <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">
              D2 GRUP KLİNİK SİMÜLASYONU
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl tracking-tight text-zinc-950 uppercase leading-none mb-6">
            TEKNOLOJİ VE BİLİMİN <br />
            KUSURSUZ UYUMU.
          </h2>
          <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed mb-8">
            En yeni nesil medikal estetik sistemlerimizle tanışın. Kliniklerinizin başarısını artıran, hastalarınıza en
            güvenli ve en konforlu deneyimi sunan teknolojilerimizi video tanıtımımızdan izleyin.
          </p>
          <div className="flex flex-col gap-3">
            {POINTS.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-zinc-800 shrink-0" />
                <span className="text-zinc-800 font-medium font-sans text-xs uppercase tracking-wider">{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full max-w-xl">
          <button
            onClick={onPlay}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group shadow-2xl shadow-zinc-300 w-full block"
            aria-label="Tanıtım videosunu oynat"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-300 z-10" />
            <img src={asset(VIDEO_THUMB)} alt="D2 Grup video tanıtımı" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative">
                <div className="absolute inset-0 rounded-full bg-white/35 animate-ping" />
                <Play size={20} className="fill-black ml-1 text-black" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 z-20 bg-zinc-950 text-white font-mono text-[9px] tracking-widest font-bold uppercase px-3 py-1.5">
              SÜRE: 2:45 DAKİKA
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
