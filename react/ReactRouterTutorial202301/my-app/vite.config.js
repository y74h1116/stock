import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // ※まだ調査しきれていないが、docker コンテナ内で、localhost でリッスンしていると通信できないようだ
    host: true,
  },
})
