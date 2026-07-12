import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, Youtube, Twitter, ArrowRight } from 'lucide-react';
import { SITE, FOOTER_LINKS } from '../../data/site';
import Logo from './Logo';

export default function Footer() {
  const year = 2026;
  const columns = [FOOTER_LINKS.kurumsal, FOOTER_LINKS.urunler, FOOTER_LINKS.destek, FOOTER_LINKS.yasal];

  return (
    <footer className="bg-brand-dark text-white relative border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />

      {/* Üst bölüm: marka + link kolonları */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Marka + iletişim */}
          <div className="lg:col-span-4">
            <Logo withWordmark />
            <p className="font-sans font-light text-white/65 text-xs leading-relaxed max-w-sm mt-6 mb-8">
              {SITE.description}
            </p>
            <div className="flex flex-col gap-4">
              <a href={SITE.emailHref} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-sans text-xs">{SITE.email}</span>
              </a>
              <a href={SITE.phoneHref} className="flex items-start gap-3 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-sans text-xs">{SITE.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-sans text-xs leading-relaxed max-w-xs">{SITE.address}</span>
              </div>
            </div>
          </div>

          {/* Link kolonları */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display font-bold text-[11px] tracking-widest text-white/50 uppercase mb-5">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.to + link.label}>
                      <Link
                        to={link.to}
                        className="font-sans text-xs text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-sans text-[11px] text-white/50 font-light text-center sm:text-left">
            © {year} {SITE.name}. Tüm hakları saklıdır.
          </span>
          <div className="flex items-center gap-3">
            {[
              { href: SITE.social.instagram, Icon: Instagram, label: 'Instagram' },
              { href: SITE.social.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: SITE.social.youtube, Icon: Youtube, label: 'YouTube' },
              { href: SITE.social.twitter, Icon: Twitter, label: 'Twitter' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Premium ajans imzası — KCreative Office */}
      <div className="border-t border-white/10 relative z-10 bg-black/30">
        <a
          href="https://kcreative.com.tr"
          target="_blank"
          rel="noreferrer"
          className="max-w-7xl mx-auto px-6 md:px-12 py-9 flex flex-col items-center gap-4 group"
          aria-label="KCreative Office"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] text-white/45 uppercase group-hover:text-white/70 transition-colors">
            Tasarım &amp; Geliştirme
          </span>
          <div className="relative">
            {/* Yumuşak ışık halesi */}
            <div className="absolute -inset-8 bg-white/12 blur-3xl rounded-full opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />
            <img
              src="https://kcreative.com.tr/wp-content/uploads/2025/09/kk1.png"
              alt="KCreative Office"
              className="relative h-10 md:h-11 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_16px_rgba(255,255,255,0.4)]"
            />
          </div>
        </a>
      </div>
    </footer>
  );
}
