import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Home, Building2, Package, FolderTree, Cpu, Award, Sparkles, HelpCircle,
  Scale, Mail, Handshake, Image, Search, Users, Settings, LogOut, Menu, Phone, Navigation, ExternalLink,
} from 'lucide-react';
import { useAuth } from '../lib/auth';
import { AGENCY } from '../lib/brand';

const SITE_URL = 'https://d2.kcreativesunum.net';

interface NavItem { to: string; label: string; icon: typeof Home; adminOnly?: boolean }
interface NavGroup { title: string; items: NavItem[] }

const NAV: NavGroup[] = [
  { title: 'GENEL', items: [{ to: '/', label: 'Dashboard', icon: LayoutDashboard }] },
  {
    title: 'İÇERİK',
    items: [
      { to: '/anasayfa', label: 'Ana Sayfa', icon: Home },
      { to: '/menu', label: 'Menü Yönetimi', icon: Navigation },
      { to: '/kurumsal', label: 'Kurumsal', icon: Building2 },
      { to: '/urunler', label: 'Ürünler', icon: Package },
      { to: '/kategoriler', label: 'Kategoriler', icon: FolderTree },
      { to: '/teknolojiler', label: 'Teknolojiler', icon: Cpu },
      { to: '/markalar', label: 'Markalar', icon: Award },
      { to: '/kozmetik', label: 'Kozmetik', icon: Sparkles },
      { to: '/sss', label: 'Sıkça Sorulan Sorular', icon: HelpCircle },
      { to: '/iletisim', label: 'İletişim Bilgileri', icon: Phone },
      { to: '/yasal', label: 'Yasal Metinler', icon: Scale },
    ],
  },
  {
    title: 'TALEPLER',
    items: [
      { to: '/mesajlar', label: 'İletişim Mesajları', icon: Mail },
      { to: '/bayi-basvurulari', label: 'Bayi Başvuruları', icon: Handshake },
    ],
  },
  {
    title: 'SİSTEM',
    items: [
      { to: '/medya', label: 'Medya', icon: Image },
      { to: '/seo', label: 'SEO & Entegrasyonlar', icon: Search },
      { to: '/kullanicilar', label: 'Kullanıcılar', icon: Users, adminOnly: true },
      { to: '/ayarlar', label: 'Hesap Ayarları', icon: Settings },
    ],
  },
];

const TITLES: Record<string, string> = Object.fromEntries(NAV.flatMap((g) => g.items.map((i) => [i.to, i.label])));

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageTitle = TITLES[pathname] ?? 'Yönetim Paneli';
  const initial = (user?.name ?? user?.email ?? '?').slice(0, 1).toUpperCase();

  const SidebarContent = (
    <div className="flex flex-col h-full">
      {/* Firma — D2 Grup */}
      <div className="h-16 flex items-center gap-2.5 px-5 border-b border-app-border shrink-0">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-app-ink text-white text-[13px] font-extrabold tracking-tight">
          D2
        </span>
        <div className="leading-none">
          <span className="text-[14px] font-bold text-app-ink">D2 Grup</span>
          <span className="block text-[9px] text-app-muted tracking-[0.18em] mt-1 uppercase">Yönetim Paneli</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-grow overflow-y-auto py-4 px-3">
        {NAV.map((group) => (
          <div key={group.title} className="mb-5">
            <span className="px-3 text-[10px] font-bold tracking-[0.12em] text-app-muted/60">{group.title}</span>
            <div className="mt-2 flex flex-col gap-0.5">
              {group.items
                .filter((it) => !it.adminOnly || user?.role === 'ADMIN')
                .map((it) => {
                  const Icon = it.icon;
                  return (
                    <NavLink
                      key={it.to}
                      to={it.to}
                      end={it.to === '/'}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `relative flex items-center gap-2.5 pl-3.5 pr-2.5 h-9 rounded-[10px] text-[13px] font-medium transition-all ${
                          isActive
                            ? 'bg-emerald-50 text-emerald-700 font-semibold'
                            : 'text-app-muted hover:bg-zinc-100/70 hover:text-app-ink'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {isActive && <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-emerald-600" />}
                          <Icon size={16} className={`shrink-0 ${isActive ? 'text-emerald-600' : ''}`} />
                          {it.label}
                        </>
                      )}
                    </NavLink>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="border-t border-app-border p-3 shrink-0">
        <div className="flex items-center gap-2.5 px-2 py-1.5">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-[13px] font-bold shrink-0">
            {initial}
          </span>
          <div className="leading-tight flex-grow min-w-0">
            <span className="block text-[12px] font-semibold text-app-ink truncate">{user?.name ?? 'Yönetici'}</span>
            <span className="block text-[10px] text-app-muted truncate">{user?.role === 'ADMIN' ? 'Yönetici' : 'Editör'}</span>
          </div>
          <button onClick={logout} title="Çıkış yap" className="text-app-muted hover:text-red-600 p-1.5 rounded-lg hover:bg-zinc-100">
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 bg-white border-r border-app-border sticky top-0 h-screen z-20">{SidebarContent}</aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 bg-white border-r border-app-border h-full shadow-2xl">{SidebarContent}</aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-grow min-w-0 flex flex-col">
        {/* Topbar (app shell) */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-app-border flex items-center justify-between gap-3 px-4 md:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => setMobileOpen(true)} className="lg:hidden text-app-ink p-1.5 -ml-1.5 rounded-lg hover:bg-zinc-100">
              <Menu size={20} />
            </button>
            <div className="min-w-0">
              <div className="text-[10px] text-app-muted uppercase tracking-[0.12em] hidden sm:block leading-none mb-1">D2 Grup Yönetim</div>
              <h2 className="text-[15px] font-bold text-app-ink truncate leading-none">{pageTitle}</h2>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 h-9 px-3 rounded-[10px] text-[12px] font-semibold border border-app-border bg-white text-app-ink hover:bg-zinc-50 shadow-sm shadow-zinc-900/[0.03] transition-colors"
            >
              Siteyi Görüntüle <ExternalLink size={13} />
            </a>
            <Link to="/ayarlar" title="Hesap Ayarları" className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-[13px] font-bold hover:opacity-90 transition-opacity shrink-0">
              {initial}
            </Link>
          </div>
        </header>

        <main className="flex-grow px-5 py-6 md:px-8 md:py-8 max-w-6xl w-full mx-auto">{children}</main>

        {/* Premium ajans imzası */}
        <footer className="border-t border-app-border py-5 px-6">
          <a href={AGENCY.url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2.5 group w-fit mx-auto">
            <span className="text-[11px] text-app-muted">Tasarım &amp; Geliştirme</span>
            <img
              src={AGENCY.logo}
              alt={AGENCY.name}
              className="h-6 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            />
          </a>
        </footer>
      </div>
    </div>
  );
}
