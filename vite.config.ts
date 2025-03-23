import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // This is the plugin that enables React support

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser
    port: 3000,  // Set the port to 3000
    host: '0.0.0.0',  // Make sure it's accessible externally
  },
})
