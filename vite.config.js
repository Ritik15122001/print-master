import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Tailwind CSS v4 is configured through its Vite plugin and the @theme block
// in src/styles/index.css — no tailwind.config.js / postcss.config.js needed.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
