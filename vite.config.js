import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chivent-technical/',  // make sure this matches your GitHub repo name
  plugins: [react()],
  build:{
    rollupOptions:{
      input:{
        main: './index.html',
      },
    },
  },
})
