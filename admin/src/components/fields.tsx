import { useRef, useState } from 'react';
import { Upload, Trash2, Plus, GripVertical, Image as ImageIcon } from 'lucide-react';
import { api } from '../lib/api';
import { img } from '../lib/img';
import { useToast } from './Feedback';
import { Input, Button } from './ui';

interface MediaRow { id: number; url: string; filename: string; type: string }

// Görseli backend'e yükle, URL döndür
async function uploadFile(file: File): Promise<MediaRow[]> {
  const form = new FormData();
  form.append('files', file);
  return api.upload<MediaRow[]>('/media', form);
}

// ---------------------------------------------------------- Tek görsel
export function ImageField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const toast = useToast();

  const handleFile = async (file?: File) => {
    if (!file) return;
    setBusy(true);
    try {
      const [row] = await uploadFile(file);
      onChange(row.url);
      toast('success', 'Görsel yüklendi.');
    } catch (e: any) {
      toast('error', e.message ?? 'Yükleme başarısız.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 rounded-lg border border-app-border bg-zinc-50 flex items-center justify-center overflow-hidden shrink-0">
        {value ? <img src={img(value)} alt="" className="w-full h-full object-contain" /> : <ImageIcon size={18} className="text-zinc-300" />}
      </div>
      <div className="flex-grow flex flex-col gap-2">
        <Input value={value} onChange={(e) => onChange(e.target.value)} placeholder="assets/... veya URL" />
        <div>
          <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => handleFile(e.target.files?.[0])} />
          <Button type="button" variant="secondary" icon={<Upload size={14} />} loading={busy} onClick={() => inputRef.current?.click()}>
            Yükle
          </Button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------- Galeri (çoklu görsel)
export function GalleryField({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const toast = useToast();
  const list = value ?? [];

  const handleFiles = async (files: FileList | null) => {
    if (!files?.length) return;
    setBusy(true);
    try {
      const uploaded: string[] = [];
      for (const f of Array.from(files)) {
        const [row] = await uploadFile(f);
        uploaded.push(row.url);
      }
      onChange([...list, ...uploaded]);
      toast('success', `${uploaded.length} görsel eklendi.`);
    } catch (e: any) {
      toast('error', e.message ?? 'Yükleme başarısız.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap gap-2">
        {list.map((url, i) => (
          <div key={url + i} className="relative w-20 h-20 rounded-lg border border-app-border bg-zinc-50 overflow-hidden group">
            <img src={img(url)} alt="" className="w-full h-full object-contain" />
            <button
              type="button"
              onClick={() => onChange(list.filter((_, j) => j !== i))}
              className="absolute top-1 right-1 w-5 h-5 rounded bg-white/90 border border-app-border flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100"
            >
              <Trash2 size={11} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="w-20 h-20 rounded-lg border border-dashed border-app-border flex items-center justify-center text-app-muted hover:border-emerald-400 hover:text-emerald-500"
        >
          {busy ? '...' : <Plus size={18} />}
        </button>
      </div>
      <input ref={inputRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleFiles(e.target.files)} />
      <span className="text-[11px] text-app-muted">Görselleri sürükleyip yükleyin. İlk görsel genelde kapak olarak kullanılır.</span>
    </div>
  );
}

// ---------------------------------------------------------- String listesi
export function StringListField({ value, onChange, placeholder }: { value: string[]; onChange: (v: string[]) => void; placeholder?: string }) {
  const list = value ?? [];
  const update = (i: number, v: string) => onChange(list.map((x, j) => (j === i ? v : x)));
  return (
    <div className="flex flex-col gap-1.5">
      {list.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <GripVertical size={14} className="text-zinc-300 shrink-0" />
          <Input value={item} onChange={(e) => update(i, e.target.value)} placeholder={placeholder} />
          <button type="button" onClick={() => onChange(list.filter((_, j) => j !== i))} className="text-app-muted hover:text-red-500 p-1.5">
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...list, ''])} className="self-start inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 hover:text-emerald-700 mt-1">
        <Plus size={14} /> Ekle
      </button>
    </div>
  );
}

// ---------------------------------------------------------- Spec listesi {label,value}
export function SpecListField({ value, onChange }: { value: { label: string; value: string }[]; onChange: (v: { label: string; value: string }[]) => void }) {
  const list = value ?? [];
  const update = (i: number, key: 'label' | 'value', v: string) => onChange(list.map((x, j) => (j === i ? { ...x, [key]: v } : x)));
  return (
    <div className="flex flex-col gap-1.5">
      {list.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <Input value={item.label} onChange={(e) => update(i, 'label', e.target.value)} placeholder="Özellik" className="w-1/3" />
          <Input value={item.value} onChange={(e) => update(i, 'value', e.target.value)} placeholder="Değer" />
          <button type="button" onClick={() => onChange(list.filter((_, j) => j !== i))} className="text-app-muted hover:text-red-500 p-1.5">
            <Trash2 size={14} />
          </button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...list, { label: '', value: '' }])} className="self-start inline-flex items-center gap-1.5 text-[12px] font-semibold text-emerald-600 hover:text-emerald-700 mt-1">
        <Plus size={14} /> Özellik ekle
      </button>
    </div>
  );
}
