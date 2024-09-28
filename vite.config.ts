import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/baseer-v2/",
  plugins: [react(),svgr(),],
  build: {
    chunkSizeWarningLimit: 1000,
  },


    define: {
      // By default, Vite doesn't include shims for NodeJS/
      // necessary for segment analytics lib to work
      global: {},
    },
    server: {
      proxy: {
      
        // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
        '/gradio': {
    
          target:'https://58984b15f35aa029c3.gradio.live',
        changeOrigin:false, 
        rewrite: (path) => path.replace(/gradio/, ''),
        },}}


})


