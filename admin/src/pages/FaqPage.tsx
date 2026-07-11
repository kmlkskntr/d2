import ResourceManager from '../components/ResourceManager';
import { Badge } from '../components/ui';

const GROUPS = ['Ürünler & Teknoloji', 'Satış & Bayilik', 'Servis & Destek'];

export default function FaqPage() {
  return (
    <ResourceManager
      title="Sıkça Sorulan Sorular"
      subtitle="Soru-cevapları kategorilere göre yönetin"
      endpoint="/faq"
      titleKey="question"
      defaults={{ question: '', answer: '', group: GROUPS[0], order: 0, active: true }}
      columns={[
        { key: 'question', label: 'Soru', render: (r) => <span className="font-semibold text-app-ink line-clamp-1 max-w-md block">{r.question}</span> },
        { key: 'group', label: 'Kategori', render: (r) => <Badge tone="indigo">{r.group}</Badge> },
        { key: 'order', label: 'Sıra' },
        { key: 'active', label: 'Durum', render: (r) => (r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>) },
      ]}
      fields={[
        { name: 'question', label: 'Soru', type: 'text', required: true, full: true },
        { name: 'answer', label: 'Cevap', type: 'textarea', required: true },
        { name: 'group', label: 'Kategori', type: 'select', options: GROUPS.map((g) => ({ value: g, label: g })) },
        { name: 'order', label: 'Sıralama', type: 'number' },
        { name: 'active', label: 'Aktif/Pasif', type: 'boolean' },
      ]}
    />
  );
}
