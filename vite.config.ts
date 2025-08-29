import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@links': path.resolve(__dirname, './src/components/links'),
      '@footer': path.resolve(__dirname, './src/components/Footer'),
      '@header': path.resolve(__dirname, './src/components/Header'),
      '@body': path.resolve(__dirname, './src/components/Body')
    }
  }
})
