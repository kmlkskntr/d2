import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');
  // BrowserRouter (subdomain/kök dağıtım) MUTLAK base '/' gerektirir; aksi halde
  // /urun/slug gibi çok segmentli rotalarda göreli 'assets/...' yolu /urun/assets/...'e
  // çözülür ve JS + görseller kırılır (beyaz sayfa). HashRouter (GitHub Pages alt-yol)
  // için göreli './' doğrudur (gerçek yol daima /d2/index.html'de kalır).
  const base = env.VITE_ROUTER === 'browser' ? '/' : './';
  return {
    base,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
      // Geliştirmede içerik API'sini backend'e yönlendir (üretimde VITE_API_URL kullanılır)
      proxy: {
        '/api': 'http://localhost:4000',
        '/uploads': 'http://localhost:4000',
      },
    },
  };
});
