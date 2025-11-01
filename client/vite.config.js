import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // Note: This should be @vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pixelSpark/', // <-- ADD THIS LINE
  plugins: [vue()],
})