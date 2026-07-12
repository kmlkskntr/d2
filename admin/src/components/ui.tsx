import type { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

// ---------------------------------------------------------- Button
type BtnVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
const BTN: Record<BtnVariant, string> = {
  primary: 'bg-emerald-600 text-white hover:bg-emerald-700 border border-transparent shadow-sm shadow-emerald-900/15 focus:ring-emerald-200',
  secondary: 'bg-white text-app-ink hover:bg-zinc-50 border border-app-border shadow-sm shadow-zinc-900/[0.03] focus:ring-zinc-200',
  danger: 'bg-red-600 text-white hover:bg-red-700 border border-transparent shadow-sm shadow-red-900/15 focus:ring-red-200',
  ghost: 'bg-transparent text-app-muted hover:bg-zinc-100 border border-transparent focus:ring-zinc-200',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BtnVariant;
  loading?: boolean;
  icon?: ReactNode;
}
export function Button({ variant = 'primary', loading, icon, children, className = '', disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 h-9 px-3.5 rounded-[10px] text-[13px] font-semibold transition-all outline-none focus:ring-2 active:scale-[.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 ${BTN[variant]} ${className}`}
    >
      {loading ? <Loader2 size={15} className="animate-spin" /> : icon}
      {children}
    </button>
  );
}

// ---------------------------------------------------------- Input / Textarea / Field
export function Input({ className = '', ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...rest}
      className={`w-full h-9 px-3 rounded-[10px] border border-app-border bg-white text-[13px] text-app-ink placeholder-zinc-400 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition ${className}`}
    />
  );
}

export function Textarea({ className = '', ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...rest}
      className={`w-full px-3 py-2.5 rounded-[10px] border border-app-border bg-white text-[13px] text-app-ink placeholder-zinc-400 outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 transition resize-y ${className}`}
    />
  );
}

export function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[12px] font-semibold text-app-ink">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      {children}
      {hint && <span className="text-[11px] text-app-muted">{hint}</span>}
    </label>
  );
}

// ---------------------------------------------------------- Toggle
export function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label?: string }) {
  return (
    <button type="button" onClick={() => onChange(!checked)} className="inline-flex items-center gap-2.5 select-none">
      <span className={`relative w-9 h-5 rounded-full transition-colors ${checked ? 'bg-emerald-600' : 'bg-zinc-300'}`}>
        <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-4' : ''}`} />
      </span>
      {label && <span className="text-[13px] text-app-ink">{label}</span>}
    </button>
  );
}

// ---------------------------------------------------------- Card / Badge / Spinner
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-app-panel border border-app-border rounded-2xl shadow-[0_1px_2px_rgba(16,24,40,0.04),0_1px_3px_rgba(16,24,40,0.05)] ${className}`}>
      {children}
    </div>
  );
}

export function Badge({ children, tone = 'gray' }: { children: ReactNode; tone?: 'gray' | 'green' | 'red' | 'amber' | 'indigo' }) {
  const tones: Record<string, string> = {
    gray: 'bg-zinc-100 text-zinc-600',
    green: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
    red: 'bg-red-50 text-red-600 ring-1 ring-red-600/10',
    amber: 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/10',
    indigo: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/10',
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${tones[tone]}`}>{children}</span>;
}

export function Spinner() {
  return (
    <div className="flex items-center justify-center py-20 text-app-muted">
      <Loader2 className="animate-spin" size={22} />
    </div>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
      <div>
        <h1 className="text-[21px] font-bold text-app-ink tracking-tight">{title}</h1>
        {subtitle && <p className="text-[13px] text-app-muted mt-1">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}

export function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="text-center py-16 text-app-muted">
      <p className="text-[14px] font-semibold text-app-ink">{title}</p>
      {hint && <p className="text-[12px] mt-1">{hint}</p>}
    </div>
  );
}
