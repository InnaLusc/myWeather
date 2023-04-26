import svgr from "vite-plugin-svgr";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(),svgr()],
  base: './',
  optimizeDeps: {
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port:3000,
}
});
