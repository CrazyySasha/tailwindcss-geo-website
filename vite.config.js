
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'nested/home': resolve(__dirname, 'pages/home.html'),
        'nested/responsive': resolve(__dirname, 'pages/responsive.html'),
      }
    }
  }
})