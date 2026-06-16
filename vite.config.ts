import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        sobre: resolve(__dirname, 'src/sobre.html'),
        contato: resolve(__dirname, 'src/contato.html'),
        cardapio: resolve(__dirname, 'src/cardapio.html'),
        projeto: resolve(__dirname, 'src/projeto.html'),
      },
    },
  },

  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },

  preview: {
    // Allow Render's host so `vite preview` accepts requests to that hostname, also, localhost for local testing
    allowedHosts: [
      'tascadoalfredo.onrender.com',
      'localhost',
      '0.0.0.0',
      'marcellasol.vps-kinghost.net'
    ],
  },
});