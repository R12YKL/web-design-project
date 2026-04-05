import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        history: path.resolve(__dirname, 'history.html'),
        hardware: path.resolve(__dirname, 'hardware.html'),
        software: path.resolve(__dirname, 'software.html'),
        appliedmaths: path.resolve(__dirname, 'Appliedmaths.html'),
        c: path.resolve(__dirname, 'C.html'),
        python: path.resolve(__dirname, 'Python.html'),
        logic: path.resolve(__dirname, 'logic.html'),
        ethics: path.resolve(__dirname, 'ethics.html'),
        references: path.resolve(__dirname, 'references.html'),
        project: path.resolve(__dirname, 'Project.html'),
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
