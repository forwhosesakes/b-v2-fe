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
  css: {
    // Enable CSS modules if you're using them
    modules: {
      localsConvention: 'camelCaseOnly',
      scopeBehaviour: 'local',
    },
 
  },
  build: {
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          chart: ['chart.js', 'react-chartjs-2']
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    cssCodeSplit: true,
    
  
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


