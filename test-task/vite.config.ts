import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/web/',
  server: {
    port: 3000,
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },

  resolve: {
    alias: [
      { find: '@', replacement: '/src' }
    ]
  }
})
