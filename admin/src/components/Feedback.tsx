import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, X } from 'lucide-react';
import { Button } from './ui';

// ============================================================ Toast
type ToastTone = 'success' | 'error' | 'info';
interface Toast {
  id: number;
  tone: ToastTone;
  message: string;
}
const ToastCtx = createContext<(tone: ToastTone, message: string) => void>(() => {});
export const useToast = () => useContext(ToastCtx);

// ============================================================ Confirm
interface ConfirmOpts {
  title: string;
  message?: string;
  confirmLabel?: string;
  danger?: boolean;
}
const ConfirmCtx = createContext<(opts: ConfirmOpts) => Promise<boolean>>(async () => false);
export const useConfirm = () => useContext(ConfirmCtx);

let toastId = 0;

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [confirmState, setConfirmState] = useState<(ConfirmOpts & { resolve: (v: boolean) => void }) | null>(null);

  const notify = useCallback((tone: ToastTone, message: string) => {
    const id = ++toastId;
    setToasts((t) => [...t, { id, tone, message }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);

  const confirm = useCallback(
    (opts: ConfirmOpts) => new Promise<boolean>((resolve) => setConfirmState({ ...opts, resolve })),
    [],
  );

  const closeConfirm = (result: boolean) => {
    confirmState?.resolve(result);
    setConfirmState(null);
  };

  return (
    <ToastCtx.Provider value={notify}>
      <ConfirmCtx.Provider value={confirm}>
        {children}

        {/* Toasts */}
        <div className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2 w-80 max-w-[92vw]">
          {toasts.map((t) => (
            <div
              key={t.id}
              className="flex items-start gap-2.5 bg-white border border-app-border shadow-lg rounded-lg px-3.5 py-3 animate-[fadeIn_.15s_ease]"
            >
              {t.tone === 'success' && <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />}
              {t.tone === 'error' && <XCircle size={17} className="text-red-500 shrink-0 mt-0.5" />}
              {t.tone === 'info' && <AlertTriangle size={17} className="text-amber-500 shrink-0 mt-0.5" />}
              <span className="text-[13px] text-app-ink leading-snug flex-grow">{t.message}</span>
              <button onClick={() => setToasts((x) => x.filter((y) => y.id !== t.id))} className="text-app-muted hover:text-app-ink">
                <X size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Confirm dialog */}
        {confirmState && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/30" onClick={() => closeConfirm(false)}>
            <div className="bg-white rounded-xl border border-app-border shadow-2xl w-full max-w-sm p-5" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start gap-3 mb-4">
                {confirmState.danger && (
                  <span className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <AlertTriangle size={18} className="text-red-500" />
                  </span>
                )}
                <div>
                  <h3 className="text-[15px] font-bold text-app-ink">{confirmState.title}</h3>
                  {confirmState.message && <p className="text-[13px] text-app-muted mt-1">{confirmState.message}</p>}
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="secondary" onClick={() => closeConfirm(false)}>
                  Vazgeç
                </Button>
                <Button variant={confirmState.danger ? 'danger' : 'primary'} onClick={() => closeConfirm(true)}>
                  {confirmState.confirmLabel ?? 'Onayla'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </ConfirmCtx.Provider>
    </ToastCtx.Provider>
  );
}
