import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permet d'accepter d'autres hôtes que localhost
    port: 5173, // ou un autre port si besoin
  }
})
