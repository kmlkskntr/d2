import ResourceManager from '../components/ResourceManager';
import { Badge } from '../components/ui';
import { img } from '../lib/img';

export default function CategoriesPage() {
  return (
    <ResourceManager
      title="Kategoriler"
      subtitle="Yüz, vücut, longevity ve global kategorileri yönetin"
      endpoint="/categories"
      titleKey="title"
      defaults={{ title: '', subtitle: 'TEKNOLOJİLERİ', slug: '', description: '', longDescription: '', image: '', highlights: [], order: 0, active: true, seoTitle: '', seoDescription: '' }}
      columns={[
        { key: 'image', label: 'Görsel', render: (r) => <img src={img(r.image)} alt="" className="w-10 h-10 rounded object-cover bg-zinc-100" /> },
        { key: 'title', label: 'Ad', render: (r) => <span className="font-semibold text-app-ink">{r.title} <span className="text-app-muted font-normal">{r.subtitle}</span></span> },
        { key: 'slug', label: 'Slug' },
        { key: 'order', label: 'Sıra' },
        { key: 'active', label: 'Durum', render: (r) => (r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>) },
      ]}
      fields={[
        { name: 'title', label: 'Kategori Adı', type: 'text', required: true },
        { name: 'subtitle', label: 'Alt Başlık', type: 'text', placeholder: 'TEKNOLOJİLERİ' },
        { name: 'slug', label: 'Slug (URL)', type: 'text', required: true, hint: 'ör. yuz, vucut, longevity, global' },
        { name: 'order', label: 'Sıralama', type: 'number' },
        { name: 'description', label: 'Kısa Açıklama', type: 'textarea', required: true },
        { name: 'longDescription', label: 'Detay Açıklama', type: 'textarea' },
        { name: 'image', label: 'Görsel', type: 'image' },
        { name: 'highlights', label: 'Öne Çıkanlar', type: 'stringList', hint: 'Kategori sayfasında rozet olarak görünür' },
        { name: 'seoTitle', label: 'SEO Başlığı', type: 'text' },
        { name: 'seoDescription', label: 'SEO Açıklaması', type: 'textarea' },
        { name: 'active', label: 'Aktif/Pasif', type: 'boolean' },
      ]}
    />
  );
}
