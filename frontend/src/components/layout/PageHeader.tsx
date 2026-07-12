import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import Breadcrumbs, { Crumb } from './Breadcrumbs';
import { asset } from '../../lib/asset';

interface PageHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs: Crumb[];
  backgroundImage?: string;
  align?: 'left' | 'center';
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  backgroundImage,
  align = 'left',
}: PageHeaderProps) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <section className="relative bg-brand-dark pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      {/* Arka plan efektleri */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_45%)]" />
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <img
              src={asset(backgroundImage)}
              alt=""
              aria-hidden
              className="w-full h-full object-cover opacity-25"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/60" />
        </>
      )}

      <div className={`max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col ${alignCls}`}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col ${alignCls} w-full`}
        >
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} theme="dark" />
          </div>

          {eyebrow && (
            <span className="font-display font-bold text-xs tracking-[0.3em] text-white/60 block mb-4 uppercase">
              {eyebrow}
            </span>
          )}

          <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-[0.98] max-w-4xl">
            {title}
          </h1>

          {description && (
            <p
              className={`font-sans font-light text-white/70 text-sm md:text-base leading-relaxed mt-6 max-w-2xl ${
                align === 'center' ? 'mx-auto' : ''
              }`}
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
