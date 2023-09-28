import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    strictPort :true,
    port: 8080, // Set the desired port number here
  },
  plugins: [react()],
})
