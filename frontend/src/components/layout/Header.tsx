import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Plus, Minus, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavMenuItem } from '../../types';
import { useData } from '../../data/DataContext';
import Logo from './Logo';

function isActive(item: NavMenuItem, pathname: string): boolean {
  if (item.to === '/') return pathname === '/';
  // ÜRÜNLER: /urunler ve /urun/... alt yollarını da kapsar
  if (item.to === '/urunler') return pathname.startsWith('/urunler') || pathname.startsWith('/urun/');
  return pathname === item.to || pathname.startsWith(item.to + '/');
}

export default function Header() {
  const { pathname } = useLocation();
  const { nav: NAV, site } = useData();
  const store = (site as any)?.store;
  const showStore = Boolean(store?.enabled && store?.url);
  const storeLabel = store?.label || 'ONLINE MAĞAZA';
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rota değişince mobil menüyü kapat
  useEffect(() => {
    setIsOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/85 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Logo />

        {/* Masaüstü menü */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const active = isActive(item, pathname);
            if (item.children) {
              return (
                <div key={item.label} className="relative group/nav py-1">
                  <Link
                    to={item.to}
                    className={`relative flex items-center gap-1 text-xs font-semibold tracking-wider transition-colors duration-200 ${
                      active ? 'text-white' : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={12} className="text-white/50 group-hover/nav:rotate-180 transition-transform" />
                    {active && (
                      <motion.span
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200">
                    <div className="bg-black/95 backdrop-blur-lg border border-white/10 rounded-sm py-2 min-w-[220px] shadow-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-5 py-2.5 text-[11px] font-semibold tracking-wider text-white/75 hover:text-white hover:bg-white/5 transition-colors uppercase"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`relative text-xs font-semibold tracking-wider transition-colors duration-200 py-1 ${
                  active ? 'text-white' : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute -bottom-0 left-0 right-0 h-[2px] bg-white"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Sağ aksiyonlar */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1.5 cursor-pointer text-white/85 hover:text-white transition-colors">
            <Globe size={13} className="text-white/65" />
            <span className="text-[11px] font-bold tracking-wider">TR</span>
            <ChevronDown size={12} className="text-white/50" />
          </div>
          {showStore ? (
            <a
              href={store.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest bg-brand-teal text-white hover:bg-brand-teal-dark px-5 py-2.5 transition-all duration-300 uppercase group/store"
            >
              <ShoppingBag size={13} />
              {storeLabel}
              <ArrowUpRight size={13} className="opacity-60 group-hover/store:translate-x-0.5 group-hover/store:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <Link
              to="/bayi-girisi"
              className="text-[11px] font-bold tracking-widest text-white border border-white/30 hover:border-white px-5 py-2.5 transition-all duration-300 uppercase hover:bg-white hover:text-black"
            >
              BAYİ GİRİŞİ
            </Link>
          )}
        </div>

        {/* Mobil toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <div className="flex items-center gap-1 text-white">
            <Globe size={13} />
            <span className="text-[11px] font-bold">TR</span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-1 focus:outline-none"
            aria-label="Menüyü aç/kapat"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil çekmece */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-2">
              {NAV.map((item) => {
                const active = isActive(item, pathname);
                if (item.children) {
                  const expanded = openGroup === item.label;
                  return (
                    <div key={item.label} className="border-b border-white/5">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.to}
                          className={`flex-grow text-sm font-semibold tracking-wider py-3 ${
                            active ? 'text-white' : 'text-white/70'
                          }`}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => setOpenGroup(expanded ? null : item.label)}
                          className="p-3 text-white/60"
                          aria-label="Alt menü"
                        >
                          {expanded ? <Minus size={16} /> : <Plus size={16} />}
                        </button>
                      </div>
                      <AnimatePresence>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-4 pb-3">
                              {item.children.map((child) => (
                                <Link
                                  key={child.to}
                                  to={child.to}
                                  className="text-xs font-medium tracking-wider text-white/55 hover:text-white py-2 uppercase"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`text-sm font-semibold tracking-wider py-3 border-b border-white/5 ${
                      active ? 'text-white border-l-2 border-l-white pl-3' : 'text-white/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="flex flex-col gap-3 mt-4">
                {showStore ? (
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center inline-flex items-center justify-center gap-2 text-xs font-bold tracking-widest bg-brand-teal text-white py-3.5 hover:bg-brand-teal-dark transition-all uppercase"
                  >
                    <ShoppingBag size={15} />
                    {storeLabel}
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                ) : (
                  <Link
                    to="/bayi-girisi"
                    className="w-full text-center text-xs font-bold tracking-widest text-white border border-white/30 py-3.5 block hover:bg-white hover:text-black transition-all uppercase"
                  >
                    BAYİ GİRİŞİ
                  </Link>
                )}
                <Link
                  to="/iletisim"
                  className={`w-full text-center text-xs font-bold tracking-widest py-3.5 block transition-all uppercase ${
                    showStore
                      ? 'text-white border border-white/30 hover:bg-white hover:text-black'
                      : 'bg-white text-black hover:bg-zinc-200'
                  }`}
                >
                  İLETİŞİME GEÇ
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
