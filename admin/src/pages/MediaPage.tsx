import { useEffect, useRef, useState } from 'react';
import { Upload, Trash2, Copy, FileText, Image } from 'lucide-react';
import { api } from '../lib/api';
import { useToast, useConfirm } from '../components/Feedback';
import { Button, Card, Input, Spinner, PageHeader, EmptyState } from '../components/ui';

interface MediaItem {
  id: number;
  url: string;
  filename: string;
  alt: string;
  type: 'image' | 'pdf';
  size: number;
  createdAt: string;
}

const fmtSize = (bytes: number) => {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
};

export default function MediaPage() {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [altDraft, setAltDraft] = useState<Record<number, string>>({});
  const fileRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const confirm = useConfirm();

  const load = async () => {
    setLoading(true);
    try {
      const data = await api.get<MediaItem[]>('/media');
      setItems(data);
      setAltDraft(Object.fromEntries(data.map((m) => [m.id, m.alt ?? ''])));
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const form = new FormData();
    Array.from(files).forEach((f) => form.append('files', f));
    setUploading(true);
    try {
      await api.upload<MediaItem[]>('/media', form);
      toast('success', `${files.length} dosya yüklendi.`);
      await load();
    } catch (e) {
      toast('error', (e as Error).message);
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  const saveAlt = async (item: MediaItem) => {
    const alt = altDraft[item.id] ?? '';
    if (alt === (item.alt ?? '')) return;
    try {
      await api.patch<MediaItem>('/media/' + item.id, { alt });
      setItems((rs) => rs.map((r) => (r.id === item.id ? { ...r, alt } : r)));
      toast('success', 'Alt metin kaydedildi.');
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast('success', 'URL kopyalandı.');
    } catch {
      toast('error', 'URL kopyalanamadı.');
    }
  };

  const remove = async (item: MediaItem) => {
    const ok = await confirm({
      title: 'Dosya silinsin mi?',
      message: `"${item.filename}" kalıcı olarak silinecek.`,
      danger: true,
      confirmLabel: 'Sil',
    });
    if (!ok) return;
    try {
      await api.del('/media/' + item.id);
      toast('success', 'Dosya silindi.');
      load();
    } catch (e) {
      toast('error', (e as Error).message);
    }
  };

  return (
    <>
      <PageHeader
        title="Medya Yönetimi"
        subtitle="Görselleri ve PDF dosyalarını yükleyin, düzenleyin"
        actions={
          <>
            <input
              ref={fileRef}
              type="file"
              multiple
              accept="image/*,application/pdf"
              className="hidden"
              onChange={(e) => onFiles(e.target.files)}
            />
            <Button
              icon={<Upload size={15} />}
              loading={uploading}
              onClick={() => fileRef.current?.click()}
            >
              Yükle
            </Button>
          </>
        }
      />

      {loading ? (
        <Spinner />
      ) : items.length === 0 ? (
        <Card className="p-0">
          <EmptyState title="Medya yok" hint="Yüklemek için sağ üstteki Yükle butonunu kullanın." />
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {items.map((item) => (
            <Card key={item.id} className="flex flex-col overflow-hidden">
              <div className="aspect-square bg-zinc-50 border-b border-app-border flex items-center justify-center overflow-hidden">
                {item.type === 'image' ? (
                  <img src={item.url} alt={item.alt || item.filename} className="w-full h-full object-cover" />
                ) : (
                  <div className="flex flex-col items-center gap-1.5 text-app-muted">
                    <FileText size={34} strokeWidth={1.5} />
                    <span className="text-[11px] font-semibold">PDF</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 p-3">
                <div className="flex items-center gap-1.5 text-[12px] font-semibold text-app-ink" title={item.filename}>
                  {item.type === 'image' ? (
                    <Image size={13} className="text-app-muted shrink-0" />
                  ) : (
                    <FileText size={13} className="text-app-muted shrink-0" />
                  )}
                  <span className="truncate">{item.filename}</span>
                </div>
                <div className="text-[11px] text-app-muted">{fmtSize(item.size)}</div>
                <Input
                  value={altDraft[item.id] ?? ''}
                  placeholder="Alt metin"
                  onChange={(e) => setAltDraft((d) => ({ ...d, [item.id]: e.target.value }))}
                  onBlur={() => saveAlt(item)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') (e.target as HTMLInputElement).blur();
                  }}
                />
                <div className="flex items-center gap-1">
                  <Button
                    variant="secondary"
                    icon={<Copy size={13} />}
                    className="flex-1 h-8 px-2 text-[12px]"
                    onClick={() => copyUrl(item.url)}
                  >
                    URL
                  </Button>
                  <button
                    onClick={() => remove(item)}
                    title="Sil"
                    className="p-2 rounded-lg text-app-muted hover:bg-red-50 hover:text-red-600 border border-app-border"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
