// ============================================================
// D2 GRUP — Merkezi tip tanımları
// ============================================================

export interface NavMenuItem {
  label: string;
  to: string;
  children?: NavMenuItem[];
}

export type CategoryId = 'yuz' | 'vucut' | 'longevity' | 'global';

export interface Category {
  id: CategoryId;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  origin: string;
  description: string;
  focus: string[];
}

export interface Technology {
  id: string;
  title: string;
  shortTitle: string;
  iconName: string;
  description: string;
  applications: string[];
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ProductVariant {
  name: string;
  note?: string;
}

// Ürün detay sayfasındaki alt başlıklı açıklama blokları
export interface ProductSection {
  title: string;
  body: string;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  brandId: string;
  category: CategoryId;
  categoryLabel: string;
  series?: string;
  tagline: string;
  description: string;
  longDescription?: string;
  sections?: ProductSection[];
  image: string;
  gallery: string[];
  tags: string[];
  technologies: string[];
  features: string[];
  indications: string[];
  specs: SpecItem[];
  variants?: ProductVariant[];
  priceLabel: string;
  priceNote: string;
  featured?: boolean;
  isNew?: boolean;
  beforeAfter?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  group: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: string;
}
