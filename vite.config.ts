import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/b-v2-fe/",
  preview: {
    port: 5173,
  },
  plugins: [react(),svgr()],
  build: {
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        // Separate chunks for different vendors
        manualChunks: {
          'chart': ['chart.js'],
       
     
        },
      },
    },
    
  
  },
    // Optimize dependencies
    optimizeDeps: {
      include: ['chart.js', "react-chartjs-2"],
      // Exclude large features you don't use
      exclude: ['chart.js/auto'],
    },
  
    


    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
   


})


