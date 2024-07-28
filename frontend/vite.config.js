import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap/scss')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'bootstrap/bootstrap.scss';`
      }
    }
  }
});