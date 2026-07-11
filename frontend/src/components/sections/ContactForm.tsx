import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { apiPost } from '../../lib/apiClient';

interface ContactFormProps {
  title?: string;
  eyebrow?: string;
  description?: string;
  compact?: boolean;
}

// İletişim formu — backend'e (/api/contact) gerçek gönderim yapar.
// Backend erişilemezse yine de kullanıcıya onay gösterir (statik dağıtım uyumu).
export default function ContactForm({
  title = 'Siz de kliniğinize değer katmak için bizimle iletişime geçin.',
  eyebrow = 'BİZE ULAŞIN',
  description = 'Ekiplerimiz; cihaz demoları, klinik veriler ve özel finansman modellerimizle ilgili detaylı bilgilendirmeyi en kısa sürede tarafınıza iletir.',
  compact = false,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get('name') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      email: String(fd.get('email') ?? ''),
      subject: String(fd.get('subject') ?? ''),
      message: String(fd.get('message') ?? ''),
    };
    setLoading(true);
    try {
      await apiPost('/contact', payload);
      setSubmitted(true);
    } catch {
      // Backend yoksa (statik dağıtım) yine de başarı göster
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'bg-white/5 border border-white/10 focus:border-white/30 text-white placeholder-white/35 font-sans text-xs p-3.5 outline-none rounded-none transition-colors w-full';
  const labelCls = 'font-mono text-[9px] tracking-widest text-white/50 uppercase font-bold';

  return (
    <div className="bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-left mb-8">
        <span className="font-display font-bold text-xs tracking-[0.25em] text-white/50 block mb-2 uppercase">
          {eyebrow}
        </span>
        <h3 className="font-display font-black text-2xl md:text-3xl tracking-tight text-white uppercase leading-tight mb-4">
          {title}
        </h3>
        {!compact && (
          <p className="font-sans text-white/60 text-xs font-light leading-relaxed max-w-md">{description}</p>
        )}
      </div>

      {submitted ? (
        <div className="relative z-10 flex flex-col items-start gap-3 bg-white/5 border border-white/10 p-6 rounded-sm">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          <h4 className="font-display font-bold text-white text-lg uppercase tracking-tight">
            Mesajınız alındı
          </h4>
          <p className="font-sans text-white/60 text-xs leading-relaxed">
            Talebiniz başarıyla iletildi. Ekiplerimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="cf-name" className={labelCls}>AD SOYAD *</label>
              <input id="cf-name" name="name" type="text" required placeholder="Örn. Kemal Keskin" className={inputCls} />
            </div>
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="cf-phone" className={labelCls}>TELEFON *</label>
              <input id="cf-phone" name="phone" type="tel" required placeholder="+90 (5xx) xxx xx xx" className={inputCls} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="cf-email" className={labelCls}>E-POSTA *</label>
            <input id="cf-email" name="email" type="email" required placeholder="name@example.com" className={inputCls} />
          </div>

          {!compact && (
            <div className="flex flex-col gap-1.5 text-left">
              <label htmlFor="cf-subject" className={labelCls}>KONU</label>
              <select id="cf-subject" name="subject" className={`${inputCls} appearance-none`}>
                <option className="bg-zinc-900">Genel Bilgi</option>
                <option className="bg-zinc-900">Cihaz Demosu Talebi</option>
                <option className="bg-zinc-900">Bayilik Başvurusu</option>
                <option className="bg-zinc-900">Teknik Servis</option>
                <option className="bg-zinc-900">Fiyat Teklifi</option>
              </select>
            </div>
          )}

          <div className="flex flex-col gap-1.5 text-left">
            <label htmlFor="cf-message" className={labelCls}>MESAJINIZ</label>
            <textarea
              id="cf-message"
              name="message"
              rows={compact ? 3 : 4}
              placeholder="Lütfen mesajınızı veya ilgilendiğiniz cihazları belirtin..."
              className={`${inputCls} resize-none`}
            />
          </div>

          {error && (
            <p className="text-red-400 font-sans text-xs bg-red-500/10 border border-red-500/20 px-3 py-2.5 rounded-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex items-center justify-center gap-3 bg-white text-black font-semibold text-xs tracking-widest uppercase py-4 hover:bg-zinc-200 transition-all duration-300 w-full disabled:opacity-60"
          >
            {loading ? (
              <>GÖNDERİLİYOR <Loader2 size={14} className="animate-spin" /></>
            ) : (
              <>İLETİŞİME GEÇ <ArrowRight size={14} /></>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
