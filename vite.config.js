import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '71e2-106-214-118-244.ngrok-free.app' // <-- your ngrok domain
    ]
  }
})

 