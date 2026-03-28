import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        history: path.resolve(__dirname, 'history.html'),
        hardware: path.resolve(__dirname, 'hardware.html'),
        python: path.resolve(__dirname, 'Python.html'),
        logic: path.resolve(__dirname, 'logic.html'),
        ethics: path.resolve(__dirname, 'ethics.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
