import { defineConfig } from 'vite';
// import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3210,
    open: true,
  },
  preview: {
    // Allow Render's host so `vite preview` accepts requests to that hostname, also, localhost for local testing
    allowedHosts: ['tascadoalfredo.onrender.com', 'localhost', '0.0.0.0'],
  },
});
