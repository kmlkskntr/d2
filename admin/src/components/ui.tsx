import type { ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

// ---------------------------------------------------------- Button
type BtnVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
const BTN: Record<BtnVariant, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-700 border border-transparent',
  secondary: 'bg-white text-app-ink hover:bg-zinc-50 border border-app-border',
  danger: 'bg-red-600 text-white hover:bg-red-700 border border-transparent',
  ghost: 'bg-transparent text-app-muted hover:bg-zinc-100 border border-transparent',
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
      className={`inline-flex items-center justify-center gap-2 h-9 px-3.5 rounded-lg text-[13px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${BTN[variant]} ${className}`}
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
      className={`w-full h-9 px-3 rounded-lg border border-app-border bg-white text-[13px] text-app-ink placeholder-zinc-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition ${className}`}
    />
  );
}

export function Textarea({ className = '', ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...rest}
      className={`w-full px-3 py-2 rounded-lg border border-app-border bg-white text-[13px] text-app-ink placeholder-zinc-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-y ${className}`}
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
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="inline-flex items-center gap-2.5 select-none"
    >
      <span
        className={`relative w-9 h-5 rounded-full transition-colors ${checked ? 'bg-indigo-600' : 'bg-zinc-300'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-4' : ''}`}
        />
      </span>
      {label && <span className="text-[13px] text-app-ink">{label}</span>}
    </button>
  );
}

// ---------------------------------------------------------- Card / Badge / Spinner
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`bg-app-panel border border-app-border rounded-xl ${className}`}>{children}</div>;
}

export function Badge({ children, tone = 'gray' }: { children: ReactNode; tone?: 'gray' | 'green' | 'red' | 'amber' | 'indigo' }) {
  const tones: Record<string, string> = {
    gray: 'bg-zinc-100 text-zinc-600',
    green: 'bg-emerald-50 text-emerald-700',
    red: 'bg-red-50 text-red-600',
    amber: 'bg-amber-50 text-amber-700',
    indigo: 'bg-indigo-50 text-indigo-700',
  };
  return <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold ${tones[tone]}`}>{children}</span>;
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
        <h1 className="text-[19px] font-bold text-app-ink tracking-tight">{title}</h1>
        {subtitle && <p className="text-[13px] text-app-muted mt-0.5">{subtitle}</p>}
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
