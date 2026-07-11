import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CtaBanner from '../components/sections/CtaBanner';
import { useCatalog } from '../data/DataContext';

// Grup adından güvenli bir anchor id üretir
const slugify = (value: string) =>
  'grup-' +
  value
    .toLowerCase()
    .replace(/&/g, 've')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function FaqPage() {
  const { faq: FAQ, faqGroups: FAQ_GROUPS } = useCatalog();
  // Açık olan öğenin benzersiz anahtarı ("grup||index"); null ise tümü kapalı
  const [openKey, setOpenKey] = useState<string | null>('0||0');

  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="YARDIM MERKEZİ"
        title="SIKÇA SORULAN SORULAR"
        description="Ürünlerimiz, bayilik ve servis süreçleri hakkında merak edilenler."
        breadcrumbs={[{ label: 'SSS' }]}
      />

      <section className="bg-white py-20 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16 items-start">
          {/* SOL: sticky grup navigasyonu */}
          <aside className="hidden lg:block lg:sticky lg:top-28">
            <span className="font-display font-bold text-xs tracking-[0.3em] text-zinc-500 block mb-5 uppercase">
              KATEGORİLER
            </span>
            <nav className="flex flex-col gap-1">
              {FAQ_GROUPS.map((group) => (
                <a
                  key={group}
                  href={`#${slugify(group)}`}
                  className="group flex items-center gap-3 py-2.5 px-4 rounded-sm border border-transparent text-zinc-600 font-sans font-light text-sm transition-colors hover:border-zinc-200 hover:bg-zinc-50 hover:text-zinc-950"
                >
                  <HelpCircle className="w-4 h-4 shrink-0 text-zinc-400 transition-colors group-hover:text-zinc-950" />
                  <span>{group}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* SAĞ: gruplu accordion listesi */}
          <div className="flex flex-col gap-14">
            {FAQ_GROUPS.map((group, gi) => {
              const items = FAQ.filter((f) => f.group === group);
              if (items.length === 0) return null;

              return (
                <div key={group} id={slugify(group)} className="scroll-mt-28">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-mono text-[11px] tracking-widest text-zinc-400 font-bold">
                      {String(gi + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-display font-black text-2xl md:text-3xl tracking-tight text-zinc-950 uppercase leading-[1.05]">
                      {group}
                    </h2>
                  </div>

                  <div className="flex flex-col gap-3">
                    {items.map((item, ii) => {
                      const key = `${gi}||${ii}`;
                      const isOpen = openKey === key;

                      return (
                        <div
                          key={key}
                          className={`border rounded-sm transition-colors ${
                            isOpen ? 'border-zinc-300 bg-zinc-50' : 'border-zinc-200 bg-white'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => setOpenKey(isOpen ? null : key)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6"
                          >
                            <span className="font-display font-bold text-sm md:text-base text-zinc-950 tracking-tight leading-snug">
                              {item.question}
                            </span>
                            <span
                              className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-sm border transition-colors ${
                                isOpen
                                  ? 'bg-zinc-950 border-zinc-950 text-white'
                                  : 'bg-white border-zinc-200 text-zinc-950'
                              }`}
                            >
                              {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                              >
                                <p className="font-sans font-light text-zinc-600 text-sm leading-relaxed px-5 md:px-6 pb-5 md:pb-6">
                                  {item.answer}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        eyebrow="BAŞKA SORUNUZ MU VAR?"
        title="ARADIĞINIZ CEVABI BULAMADINIZ MI?"
        description="Uzman ekibimiz tüm sorularınızı yanıtlamak ve size en uygun çözümü sunmak için hazır."
        primary={{ label: 'İLETİŞİME GEÇ', to: '/iletisim' }}
      />
    </div>
  );
}
