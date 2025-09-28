import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()  
  ],
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 75392f955d789c47d4cdda85c01493242f9823e7
})
