import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

const copy404Plugin = () => {
  return {
    name: 'copy-404',
    writeBundle() {
      const distIndexPath = path.resolve(__dirname, 'dist/index.html');
      const dist404Path = path.resolve(__dirname, 'dist/404.html');
      
      if (fs.existsSync(distIndexPath)) {
        fs.copyFileSync(distIndexPath, dist404Path);
      }
    }
  };
};

export default defineConfig(() => {
  return {
    base: process.env.BASE_URL || '/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react(), copy404Plugin()],
    envPrefix: 'VITE_',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;

            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('@emailjs')) return 'emailjs';
            if (id.includes('react-router')) return 'router';
            if (id.includes('react-dom') || id.includes('/react/')) return 'react';
          },
        },
      },
    },
  };
});
