import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setup for GitHub Pages deployment using the repo name
  base: '/02-executive-movement-20260407/',
})