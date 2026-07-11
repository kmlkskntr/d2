import ResourceManager from '../components/ResourceManager';
import { Badge } from '../components/ui';

export default function BrandsPage() {
  return (
    <ResourceManager
      title="Markalar"
      subtitle="Partner ve global markaları yönetin"
      endpoint="/brands"
      titleKey="name"
      defaults={{ key: '', name: '', logo: '', tagline: '', origin: '', description: '', focus: [], website: '', order: 0, active: true }}
      columns={[
        { key: 'name', label: 'Marka', render: (r) => <span className="font-semibold text-app-ink">{r.name}</span> },
        { key: 'logo', label: 'Logo (wordmark)' },
        { key: 'origin', label: 'Menşe' },
        { key: 'order', label: 'Sıra' },
        { key: 'active', label: 'Durum', render: (r) => (r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>) },
      ]}
      fields={[
        { name: 'name', label: 'Marka Adı', type: 'text', required: true },
        { name: 'key', label: 'Anahtar (key)', type: 'text', required: true, hint: 'ör. fotona, lumenis' },
        { name: 'logo', label: 'Logo Metni (wordmark)', type: 'text', hint: 'ör. Lumenis®, FROZEN®' },
        { name: 'tagline', label: 'Slogan', type: 'text' },
        { name: 'origin', label: 'Menşe', type: 'text', placeholder: 'ör. ABD, İsrail' },
        { name: 'website', label: 'Web Sitesi', type: 'text', placeholder: 'https://...' },
        { name: 'order', label: 'Sıralama', type: 'number' },
        { name: 'description', label: 'Açıklama', type: 'textarea', required: true },
        { name: 'focus', label: 'Odak Alanları', type: 'stringList' },
        { name: 'active', label: 'Aktif/Pasif', type: 'boolean' },
      ]}
    />
  );
}
