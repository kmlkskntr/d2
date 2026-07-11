import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Home, Building2, Package, FolderTree, Cpu, Award, Sparkles, HelpCircle,
  Scale, Mail, Handshake, Image, Search, Users, Settings, LogOut, Menu, Phone,
} from 'lucide-react';
import { useAuth } from '../lib/auth';

interface NavItem { to: string; label: string; icon: typeof Home; adminOnly?: boolean }
interface NavGroup { title: string; items: NavItem[] }

const NAV: NavGroup[] = [
  { title: 'GENEL', items: [{ to: '/', label: 'Dashboard', icon: LayoutDashboard }] },
  {
    title: 'İÇERİK',
    items: [
      { to: '/anasayfa', label: 'Ana Sayfa', icon: Home },
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

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const SidebarContent = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-5 border-b border-app-border shrink-0">
        <span className="flex items-center justify-center w-7 h-7 rounded-md bg-app-ink text-white text-[13px] font-extrabold tracking-tight">D2</span>
        <div className="leading-none">
          <span className="text-[13px] font-bold text-app-ink">D2 Grup</span>
          <span className="block text-[10px] text-app-muted mt-0.5">Yönetim Paneli</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-grow overflow-y-auto py-3 px-3">
        {NAV.map((group) => (
          <div key={group.title} className="mb-4">
            <span className="px-2.5 text-[10px] font-bold tracking-wider text-app-muted/70">{group.title}</span>
            <div className="mt-1.5 flex flex-col gap-0.5">
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
                        `flex items-center gap-2.5 px-2.5 h-9 rounded-lg text-[13px] font-medium transition-colors ${
                          isActive ? 'bg-indigo-50 text-indigo-700' : 'text-app-muted hover:bg-zinc-100 hover:text-app-ink'
                        }`
                      }
                    >
                      <Icon size={16} className="shrink-0" />
                      {it.label}
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
          <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-[13px] font-bold">
            {(user?.name ?? user?.email ?? '?').slice(0, 1).toUpperCase()}
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
      <aside className="hidden lg:flex w-60 shrink-0 bg-white border-r border-app-border sticky top-0 h-screen">{SidebarContent}</aside>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <aside className="relative w-64 bg-white border-r border-app-border h-full">{SidebarContent}</aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-grow min-w-0 flex flex-col">
        <header className="lg:hidden h-14 bg-white border-b border-app-border flex items-center justify-between px-4 sticky top-0 z-30">
          <button onClick={() => setMobileOpen(true)} className="text-app-ink p-1.5">
            <Menu size={20} />
          </button>
          <span className="text-[13px] font-bold text-app-ink">D2 Grup Panel</span>
          <span className="w-8" />
        </header>
        <main className="flex-grow p-5 md:p-8 max-w-6xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
