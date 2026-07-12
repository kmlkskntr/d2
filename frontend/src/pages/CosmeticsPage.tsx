import { motion } from 'motion/react';
import {
  Sparkles,
  Droplet,
  Leaf,
  ShieldCheck,
  FlaskConical,
  Sun,
  BadgeCheck,
  Eye,
  Layers,
} from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBanner from '../components/sections/CtaBanner';
import { LinkButton } from '../components/ui/Button';
import { SITE } from '../data/site';
import { asset } from '../lib/asset';

// Fayda kartları — kısa ikon + başlık + açıklama
const BENEFITS = [
  {
    icon: Sparkles,
    title: 'ANTI-AGING ETKİ',
    text: 'İnce çizgi ve kırışıklıkların görünümünü azaltan, cilt yoğunluğunu destekleyen ileri aktif içerikler.',
  },
  {
    icon: Droplet,
    title: 'YOĞUN NEMLENDİRME',
    text: 'Hyalüronik asit ve lipit kompleksleriyle cilt bariyerini güçlendiren derinlemesine nem desteği.',
  },
  {
    icon: Layers,
    title: 'HÜCRESEL YENİLENME',
    text: 'Peptit ve büyüme faktörü teknolojileriyle cilt yüzeyinin doğal yenilenme döngüsünü destekler.',
  },
  {
    icon: ShieldCheck,
    title: 'BİYOUYUMLU FORMÜL',
    text: 'Dermatolojik olarak test edilmiş, hassas ciltlerle uyumlu, saf ve güvenli içerik profili.',
  },
];

// Ürün serileri — profesyonel isimler + klinik destekli açıklamalar
const SERIES = [
  {
    icon: FlaskConical,
    name: 'SERUM SERİSİ',
    text: 'Yüksek konsantrasyonlu aktif içerikli konsantre serumlar; klinik tedavi sonrası etkinliği destekler.',
  },
  {
    icon: Droplet,
    name: 'NEMLENDİRİCİ KREMLER',
    text: 'Gün boyu koruyucu, bariyer onarıcı nemlendiriciler; işlem sonrası bakım protokolleri için ideal.',
  },
  {
    icon: Sparkles,
    name: 'YÜZ MASKELERİ',
    text: 'Yoğun bakım gerektiren ciltlere yönelik yenileyici ve aydınlatıcı profesyonel maske sistemleri.',
  },
  {
    icon: Leaf,
    name: 'PEELING & BAKIM',
    text: 'Kontrollü eksfoliasyon sağlayan asit tabanlı formüller; cilt tonu ve dokusunu dengeler.',
  },
  {
    icon: Sun,
    name: 'GÜNEŞ KORUYUCU',
    text: 'Geniş spektrumlu UVA/UVB koruması; medikal işlem sonrası hassas cildi güvenle korur.',
  },
  {
    icon: Eye,
    name: 'GÖZ ÇEVRESİ BAKIMI',
    text: 'İnce göz çevresine özel, koyu halka ve şişkinlik görünümünü hedefleyen yoğun bakım kremleri.',
  },
];

// Güven / bilimsel formül vurguları
const TRUST = [
  { title: 'DERMATOLOJİK TEST', text: 'Tüm ürünler bağımsız dermatolojik testlerden geçirilir.' },
  { title: 'KLİNİK DESTEK', text: 'Medikal estetik protokolleriyle uyumlu, kanıta dayalı formülasyon.' },
  { title: 'PARABEN İÇERMEZ', text: 'Paraben, sülfat ve gereksiz katkı maddelerinden arındırılmış içerik.' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function CosmeticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="KOZMETİK ÜRÜNLER"
        title="KOZMETİK"
        description="Bilimsel formüller, gözle görülür etki. Klinik tedavilerin etkinliğini destekleyen profesyonel cilt bakım ürünleri."
        backgroundImage="assets/renders/cosmetics-set.jpg"
        breadcrumbs={[{ label: 'Kozmetik' }]}
      />

      {/* Tanıtım — 2 kolon: metin + büyük görsel */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionHeading
            eyebrow="PROFESYONEL CİLT BAKIMI"
            title={
              <>
                HÜCRESEL DÜZEYDE
                <br />
                YENİLENME
              </>
            }
            description="D2 Grup kozmetik serisi, medikal estetik cihazlarının etkinliğini tamamlamak üzere geliştirildi. Hücresel yaşlanmayı hedefleyen aktif içerikler, yoğun nemlendirme ve bariyer onarımıyla cildin doğal yenilenme sürecini destekler. Her formül, klinik protokollerle uyumlu ve profesyonel kullanıma uygun olarak tasarlanmıştır."
            theme="light"
          />

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="relative">
            <div className="relative overflow-hidden rounded-sm border border-zinc-200 bg-zinc-50">
              <img
                src={asset('assets/renders/cosmetics-bottles.png')}
                alt="D2 Grup kozmetik ürün serisi şişe grubu"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            {/* Biyouyumlu emerald rozet */}
            <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 flex items-center gap-2 bg-white border border-zinc-200 rounded-sm px-4 py-3 shadow-sm">
              <BadgeCheck size={18} className="text-emerald-500" />
              <span className="font-mono text-[11px] tracking-widest text-zinc-950 uppercase">
                %100 BİYOUYUMLU
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fayda kartları */}
      <section className="bg-zinc-50 py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="NEDEN D2 KOZMETİK"
            title="BİLİMLE DESTEKLENEN ETKİ"
            description="Klinik sonuçları destekleyen dört temel fayda; her formül, kanıta dayalı içeriklerle geliştirildi."
            align="center"
            theme="light"
            className="mb-16 mx-auto"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex flex-col bg-white border border-zinc-100 rounded-sm p-8 hover:border-zinc-200 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-zinc-200 rounded-sm mb-6">
                    <Icon size={20} className="text-zinc-950" />
                  </div>
                  <h3 className="font-display font-bold text-sm tracking-widest text-zinc-950 uppercase mb-3">
                    {b.title}
                  </h3>
                  <p className="font-sans font-light text-sm leading-relaxed text-zinc-600">{b.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ürün serileri grid */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="ÜRÜN SERİLERİ"
            title="EKSİKSİZ BAKIM PROTOKOLÜ"
            description="Temizlikten koruyucu bakıma; profesyonel cilt bakımının her aşaması için klinik destekli seriler."
            theme="light"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERIES.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="group flex flex-col bg-zinc-50 border border-zinc-100 rounded-sm p-8 hover:bg-white hover:border-zinc-200 transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-brand-dark rounded-sm">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="font-mono text-[11px] tracking-widest text-zinc-400 uppercase">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base tracking-wide text-zinc-950 uppercase mb-3">
                    {s.name}
                  </h3>
                  <p className="font-sans font-light text-sm leading-relaxed text-zinc-600">{s.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bilimsel formül / güven bandı — koyu zemin */}
      <section className="bg-brand-dark py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="absolute inset-0 z-0">
          <img
            src={asset('assets/renders/face-tech.jpg')}
            alt=""
            aria-hidden
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <SectionHeading
            eyebrow="BİLİMSEL FORMÜL"
            title={
              <>
                LABORATUVARDAN
                <br />
                CİLDİNİZE
              </>
            }
            description="Her ürün, dermatolojik testlerden geçirilir ve medikal estetik uzmanlarının katkısıyla geliştirilir. Kanıta dayalı içerik seçimi, kontrollü konsantrasyonlar ve güvenli formülasyon; profesyonel sonuçlar için tasarlanmıştır."
            theme="dark"
          />

          <div className="grid grid-cols-1 gap-4">
            {TRUST.map((t, i) => (
              <motion.div
                key={t.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 border border-white/10 rounded-sm p-6 bg-white/[0.02]"
              >
                <BadgeCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-sm tracking-widest text-white uppercase mb-2">
                    {t.title}
                  </h3>
                  <p className="font-sans font-light text-sm leading-relaxed text-white/70">{t.text}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-2">
              <LinkButton to="/iletisim" variant="light" withArrow>
                DANIŞMANLIK AL
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="KOZMETİK ÜRÜNLER"
        title={
          <>
            KLİNİĞİNİZE UYGUN
            <br />
            KOZMETİK ÇÖZÜMLER
          </>
        }
        description={`${SITE.name} kozmetik serisiyle klinik tedavilerin etkinliğini bir üst seviyeye taşıyın. Ürün kataloğumuzu talep edin.`}
        primary={{ label: 'ÜRÜN KATALOĞU İSTE', to: '/iletisim' }}
        secondary={{ label: 'CİHAZLARI İNCELE', to: '/urunler' }}
      />
    </>
  );
}
