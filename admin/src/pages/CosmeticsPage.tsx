import ResourceManager from '../components/ResourceManager';
import { Badge } from '../components/ui';
import { img } from '../lib/img';

export default function CosmeticsPage() {
  return (
    <ResourceManager
      title="Kozmetik Ürünler"
      subtitle="Kozmetik ürün kataloğunu ayrı yönetin"
      endpoint="/cosmetics"
      titleKey="name"
      defaults={{ name: '', slug: '', category: '', description: '', images: [], specs: [], order: 0, active: true, seoTitle: '', seoDescription: '' }}
      columns={[
        { key: 'images', label: 'Görsel', render: (r) => <img src={img(r.images?.[0])} alt="" className="w-10 h-10 rounded object-cover bg-zinc-100" /> },
        { key: 'name', label: 'Ürün', render: (r) => <span className="font-semibold text-app-ink">{r.name}</span> },
        { key: 'category', label: 'Kategori', render: (r) => <Badge tone="indigo">{r.category}</Badge> },
        { key: 'order', label: 'Sıra' },
        { key: 'active', label: 'Durum', render: (r) => (r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>) },
      ]}
      fields={[
        { name: 'name', label: 'Ürün Adı', type: 'text', required: true },
        { name: 'slug', label: 'Slug (URL)', type: 'text', required: true },
        { name: 'category', label: 'Kategori', type: 'text', placeholder: 'ör. Serum, Krem, Maske' },
        { name: 'order', label: 'Sıralama', type: 'number' },
        { name: 'description', label: 'Açıklama', type: 'textarea', required: true },
        { name: 'images', label: 'Görseller', type: 'gallery' },
        { name: 'specs', label: 'Teknik Bilgiler', type: 'specList' },
        { name: 'seoTitle', label: 'SEO Başlığı', type: 'text' },
        { name: 'seoDescription', label: 'SEO Açıklaması', type: 'textarea' },
        { name: 'active', label: 'Aktif/Pasif', type: 'boolean' },
      ]}
    />
  );
}
