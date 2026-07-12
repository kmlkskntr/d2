import { motion } from 'motion/react';
import { Target, Eye, Compass } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBanner from '../components/sections/CtaBanner';
import { LinkButton } from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import { SITE, STATS } from '../data/site';
import { asset } from '../lib/asset';

const PILLARS = [
  {
    icon: Target,
    eyebrow: 'MİSYON',
    title: 'MİSYONUMUZ',
    text: 'Dünyanın en ileri medikal estetik ve güzellik teknolojilerini, yetkin teknik servis ve klinik eğitim güvencesiyle Türkiye pazarına kazandırmak; kliniklerin ve uzmanların başarısına ölçülebilir değer katmak.',
  },
  {
    icon: Eye,
    eyebrow: 'VİZYON',
    title: 'VİZYONUMUZ',
    text: 'Medikal estetik cihaz distribütörlüğünde bölgesel referans marka olmak; teknoloji, güven ve klinik sonuç odaklı hizmet anlayışımızla sektörün standartlarını belirleyen kurum konumunu sürdürmek.',
  },
  {
    icon: Compass,
    eyebrow: 'DEĞERLER',
    title: 'DEĞERLERİMİZ',
    text: 'Şeffaflık, uzun vadeli iş ortaklığı ve bilimsel doğruluk. Sattığımız her cihazın arkasında durur; sertifikalı ürünler, sürdürülebilir servis ve dürüst danışmanlıkla iş ortaklarımızın güvenini kazanırız.',
  },
];

const WHY = [
  {
    iconName: 'Headphones',
    title: 'YETKİN TEKNİK SERVİS',
    text: 'Sertifikalı mühendis kadromuz, kurulumdan periyodik bakıma kadar cihazlarınızın kesintisiz çalışmasını güvence altına alır.',
  },
  {
    iconName: 'Users',
    title: 'KLİNİK EĞİTİM',
    text: 'Uygulayıcı ekiplerinize protokol eğitimi vererek cihaz verimliliğini ve hasta memnuniyetini en üst düzeye çıkarırız.',
  },
  {
    iconName: 'Globe',
    title: 'GLOBAL MARKA PORTFÖYÜ',
    text: 'Dünyanın lider üreticilerinin patentli platformlarını tek çatı altında, D2 Grup güvencesiyle sunuyoruz.',
  },
  {
    iconName: 'Gem',
    title: 'ESNEK FİNANSMAN',
    text: 'Kliniğinizin nakit akışına uygun ödeme ve kiralama modelleriyle yatırımınızı kolaylaştıran çözümler geliştiririz.',
  },
  {
    iconName: 'HeartHandshake',
    title: '7/24 DESTEK',
    text: 'Yedek parça güvencesi ve hızlı müdahale ağımızla, kliniğinizin operasyonel sürekliliğini kesintisiz koruruz.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'SERTİFİKALI ÜRÜNLER',
    text: 'Portföyümüzdeki tüm cihazlar uluslararası kalite ve güvenlik standartlarına uygun, tam belgeli ve garantilidir.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="KURUMSAL"
        title="BİZ KİMİZ"
        description="2004'ten bu yana, dünyanın öncü medikal estetik ve güzellik teknolojilerini Türkiye'ye taşıyan D2 Grup; 20+ yıllık deneyimi, yetkin teknik servisi ve klinik eğitim desteğiyle sektörün lider distribütörüdür."
        backgroundImage="assets/renders/building.png"
        breadcrumbs={[{ label: 'Kurumsal' }]}
      />

      {/* Şirket hikâyesi */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading
              eyebrow="HİKÂYEMİZ"
              title={<>TÜRKİYE'NİN LİDER<br />DİSTRİBÜTÖRÜ</>}
            />
            <div className="mt-6 space-y-5 font-sans font-light text-zinc-600 text-sm md:text-base leading-relaxed max-w-xl">
              <p>
                {SITE.foundedYear} yılından bu yana faaliyet gösteren {SITE.legalName}, medikal estetik ve güzellik
                teknolojilerinde uçtan uca çözümler sunan köklü bir distribütördür. Dünyanın en saygın üreticilerinin
                patentli cihazlarını, kliniklerin ihtiyaçlarına göre kurgulanmış bir portföyle Türkiye pazarına
                kazandırıyoruz.
              </p>
              <p>
                Global markaların yerel iş ortağı olarak yalnızca cihaz tedarik etmiyor; yetkin teknik servisimiz,
                sertifikalı yedek parça güvencemiz ve klinik eğitim programlarımızla kliniklerinizin uzun vadeli
                başarısını destekliyoruz. İş yaklaşımımız, satıştan sonra da yanınızda olan sürdürülebilir bir ortaklık
                üzerine kuruludur.
              </p>
            </div>
            <div className="mt-10">
              <LinkButton to="/urunler" variant="dark" withArrow>
                ÜRÜN PORTFÖYÜ
              </LinkButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-zinc-100 shadow-2xl shadow-black/10">
              <img
                src={asset('assets/renders/experience.png')}
                alt="D2 Grup deneyimi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-brand-dark text-white px-6 py-5 rounded-sm border border-white/10 shadow-xl">
              <span className="font-display font-black text-3xl tracking-tight block leading-none">20+</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase mt-1 block">
                Yıllık Deneyim
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* İstatistik bandı */}
      <section className="bg-brand-dark py-20 md:py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_45%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading
            eyebrow="RAKAMLARLA D2 GRUP"
            title="GÜVENİN ÖLÇÜLEBİLİR KARŞILIĞI"
            description="Yılların birikimi, geniş marka portföyü ve güçlü ekibimizle sektörün her noktasında yanınızdayız."
            theme="dark"
            align="center"
            className="mx-auto"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 bg-zinc-950/40 backdrop-blur-md border border-white/10 p-8 md:px-10 rounded-sm relative overflow-hidden"
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

      {/* Misyon / Vizyon / Değerler */}
      <section className="bg-zinc-50 py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="İLKELERİMİZ"
            title="BİZİ BİZ YAPAN DEĞERLER"
            description="Kısa vadeli satışın değil, uzun vadeli iş ortaklığının peşindeyiz."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => {
              const IconCmp = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white border border-zinc-100 rounded-sm p-8 flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-sm bg-zinc-950 flex items-center justify-center mb-6">
                    <IconCmp className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 uppercase mb-3">
                    {p.eyebrow}
                  </span>
                  <h3 className="font-display font-black text-xl tracking-tight text-zinc-950 uppercase leading-[1.05] mb-4">
                    {p.title}
                  </h3>
                  <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neden D2 Grup? */}
      <section className="bg-white py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="NEDEN D2 GRUP?"
            title="CİHAZDAN FAZLASINI SUNUYORUZ"
            description="Bir cihaz satın almak bir yatırımdır. Bu yatırımın en yüksek getiriyi sağlaması için gereken her adımda yanınızdayız."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group bg-zinc-50 border border-zinc-100 rounded-sm p-8 flex flex-col h-full transition-colors duration-300 hover:bg-white hover:border-zinc-200"
              >
                <div className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center mb-6">
                  <Icon name={item.iconName} className="w-6 h-6 text-zinc-900" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-sm tracking-wide text-zinc-950 uppercase mb-3">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="D2 GRUP FARKI"
        title="SİZ DE D2 GRUP AİLESİNE KATILIN"
        description="Cihaz demoları, klinik veriler ve kliniğinize özel finansman modelleri için uzman ekibimizle iletişime geçin."
        primary={{ label: 'İLETİŞİME GEÇ', to: '/iletisim' }}
        secondary={{ label: 'ÜRÜNLER', to: '/urunler' }}
      />
    </>
  );
}
