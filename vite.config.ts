import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sjvvs/', // 👈 detta är viktigt för både dev & production
  plugins: [react()],
  server: {
    fs: {
      strict: false,
    },
  },
});
