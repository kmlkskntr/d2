import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../../types';
import { asset } from '../../lib/asset';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link
        to={`/urun/${product.slug}`}
        className="group flex flex-col bg-white border border-zinc-200/80 rounded-sm overflow-hidden hover:shadow-xl hover:border-zinc-300 transition-all duration-400 h-full"
      >
        {/* Görsel */}
        <div className="relative aspect-[4/3] bg-zinc-50 overflow-hidden flex items-center justify-center p-8">
          <img
            src={asset(product.image)}
            alt={product.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
          {/* Kategori rozeti */}
          <span className="absolute top-4 left-4 bg-zinc-950 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
            {product.categoryLabel}
          </span>
          {product.isNew && (
            <span className="absolute top-4 right-4 bg-emerald-500 text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
              YENİ
            </span>
          )}
        </div>

        {/* İçerik */}
        <div className="flex flex-col flex-grow p-6 border-t border-zinc-100">
          <span className="font-mono text-[10px] font-bold tracking-widest text-zinc-400 uppercase mb-2">
            {product.brand}
          </span>
          <h3 className="font-display font-extrabold text-lg tracking-tight text-zinc-950 uppercase mb-2 leading-tight">
            {product.name}
          </h3>
          <p className="font-sans font-light text-zinc-600 text-xs leading-relaxed mb-4 flex-grow">
            {product.tagline}
          </p>

          {/* Etiketler */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-semibold tracking-wider uppercase text-zinc-500 bg-zinc-100 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-100">
            <span className="font-display font-bold text-[11px] tracking-widest text-zinc-950 uppercase group-hover:text-zinc-600 transition-colors">
              İNCELE
            </span>
            <span className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-800 group-hover:bg-zinc-950 group-hover:text-white group-hover:border-zinc-950 transition-all duration-300">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
