import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/FANDI_S/**',
        '**/*.mp4',
        '**/*.MP4',
        '**/*.avi',
        '**/*.mov',
      ]
    }
  }
})
