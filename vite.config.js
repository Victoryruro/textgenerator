import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/textgenerator/",
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://hipsum.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});




