import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
// biome-ignore lint/style/noDefaultExport: Vite expexts this
export default defineConfig({
  plugins: [react()],
})
