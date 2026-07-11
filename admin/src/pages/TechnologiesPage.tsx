import ResourceManager from '../components/ResourceManager';
import { Badge } from '../components/ui';

const ICONS = ['Zap', 'Waves', 'Target', 'Sun', 'Activity', 'Snowflake', 'Dumbbell', 'AudioWaveform'];

export default function TechnologiesPage() {
  return (
    <ResourceManager
      title="Teknolojiler"
      subtitle="Lazer, RF, HIFU, IPL, ultrason, soğutma, EMS, akustik dalga"
      endpoint="/technologies"
      titleKey="title"
      defaults={{ key: '', title: '', shortTitle: '', iconName: 'Zap', image: '', description: '', applications: [], order: 0, active: true }}
      columns={[
        { key: 'title', label: 'Ad', render: (r) => <span className="font-semibold text-app-ink">{r.title}</span> },
        { key: 'shortTitle', label: 'Kısa Ad' },
        { key: 'iconName', label: 'İkon' },
        { key: 'order', label: 'Sıra' },
        { key: 'active', label: 'Durum', render: (r) => (r.active ? <Badge tone="green">Aktif</Badge> : <Badge tone="gray">Pasif</Badge>) },
      ]}
      fields={[
        { name: 'title', label: 'Teknoloji Adı', type: 'text', required: true },
        { name: 'shortTitle', label: 'Kısa Ad', type: 'text', hint: 'Kartlarda görünen kısa isim' },
        { name: 'key', label: 'Anahtar (key)', type: 'text', required: true, hint: 'ör. lazer, rf, hifu' },
        { name: 'iconName', label: 'İkon', type: 'select', options: ICONS.map((i) => ({ value: i, label: i })) },
        { name: 'image', label: 'Görsel (opsiyonel)', type: 'image' },
        { name: 'order', label: 'Sıralama', type: 'number' },
        { name: 'description', label: 'Açıklama', type: 'textarea', required: true },
        { name: 'applications', label: 'Uygulama Alanları', type: 'stringList' },
        { name: 'active', label: 'Aktif/Pasif', type: 'boolean' },
      ]}
    />
  );
}
