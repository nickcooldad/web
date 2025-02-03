import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/test-task/', // Убедитесь, что base правильно настроен
  build: {
    outDir: 'dist', // Папка для выходных файлов
    emptyOutDir: true, // Очистка dist перед сборкой
    rollupOptions: {
      input: 'index.html', // Входной файл
    },
  },
});
