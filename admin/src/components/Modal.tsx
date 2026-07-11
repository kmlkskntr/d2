import type { ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  wide?: boolean;
}

export function Modal({ open, onClose, title, children, footer, wide }: ModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center p-4 md:p-8 bg-black/30 overflow-y-auto" onClick={onClose}>
      <div
        className={`bg-white rounded-xl border border-app-border shadow-2xl w-full ${wide ? 'max-w-3xl' : 'max-w-lg'} my-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-app-border sticky top-0 bg-white rounded-t-xl">
          <h2 className="text-[15px] font-bold text-app-ink">{title}</h2>
          <button onClick={onClose} className="text-app-muted hover:text-app-ink p-1">
            <X size={18} />
          </button>
        </div>
        <div className="px-5 py-5">{children}</div>
        {footer && <div className="flex justify-end gap-2 px-5 py-4 border-t border-app-border bg-zinc-50/60 rounded-b-xl">{footer}</div>}
      </div>
    </div>
  );
}
