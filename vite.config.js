import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Определение чанков
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Разделение зависимостей по папкам
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
    // Увеличение лимита для предупреждений о размере чанков
    chunkSizeWarningLimit: 1000,  // Лимит в кБ
  },
})
