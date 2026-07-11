import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Göreli temel yol: site alt-yolda (ör. /d2/) veya kökte sorunsuz çalışır.
    base: './',
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
