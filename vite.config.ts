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

export default defineConfig(({ }) => {
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
      }
    };
});
