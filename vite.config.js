import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // Corrects asset paths for GitHub Pages
  build: {
    outDir: 'build',  // Specifies the output directory for the build
  },
});
