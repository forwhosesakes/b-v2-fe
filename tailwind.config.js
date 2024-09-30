/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

   
    extend: {
      backgroundImage: {
        'radial-gradient-border-navbar': 'radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)',
        'landing-page-image':"url('/src/assets/images/landing.webp')",
        'challenges-image': "url('/src/assets/images/challenges-bg.png') lightgray 50%",
        'vis-charts-before':"url('/src/assets/images/viz-charts.png')",
        'vis-charts-after':"url('/src/assets/images/viz-charts-2.png')",
        'glitter-note-gradient':'linear-gradient(180deg, rgba(229,156,255,1) 0%, rgba(186,156,255,1) 50%, rgba(156,178,255,1) 100%)',
        'bottom-black-overlay':'linear-gradient(180deg, rgba(4, 1, 21, 0.00) 0%, rgba(4, 1, 21, 0.70) 34.48%, #030014 82.36%)',
        'upper-black-overlay': 'linear-gradient(0deg, rgba(4, 1, 21, 0.00) 0%, rgba(4, 1, 21, 0.50) 34.48%, #030014 82.36%)',
        'faded-gradient':'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.00) 100%)', 
        'brightness-gradient':'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.08) 60%)',
        'card-gridlines' : "url('/src/assets/images/card-gridline.png')", 
        'map-circles' : "url('/src/assets/images/maps-circle-borders.svg')", 
        'textbox-gradient':'linear-gradient(180deg, rgba(169, 163, 194, 0.20) 0%, rgba(169, 163, 194, 0.05) 100%)',
        'union': "url('/src/assets/images/union.svg')",
        'card-effect-bottom': 'linear-gradient(to bottom,rgba(255,255,255,0.06) 0,rgba(255,255,255,0) 80%)',
        'card-effect-upper': 'linear-gradient(to top,rgba(255,255,255,0.06) 0,rgba(255,255,255,0) 80%)', 
        'detection-process':'url("/src/assets/images/detection-process-v2.png")', 
        'detection-gradient': 'linear-gradient(180deg, #0E3C4A 0%, rgba(14, 58, 73, 0.00) 100%)'

      
      
      },
      transition:{
        'indicator':  '.45s cubic-bezier(.6,.6,0,1) top, 1s cubic-bezier(.6,.6,0,1) opacity !important', 
        'text-display':'.3s cubic-bezier(.6,.6,0,1) all,.3s cubic-bezier(.6,.6,0,1) opacity;'


      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s',
        'pulse-slowest': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s',
   
      
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'translate(-50%, -50%) scale(1)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'translate(-50%, -50%) scale(1.1)',
          },
        },

        slideIn :{
         '0%': {
            width: '0%',
           
            opacity: "0",
          }
          ,
          "100%": {
            width: '100%',
           
            opacity: '1'
          }
        }

       
      },
      
      colors:{
      
        primary:"#4D2F8C",
        secondary:"#E59CFF",
        tertiary: "#3c087e",
        paragraphs_primary: "#efedfd",
        darker:"#030014", 
        capsuleoff: "#1E162C", 
        capsuleon: "#4CB7C1", 
        light:"#F9F8FC", 
        light_text:" #D2D0DD", 
        turquoise: "#009BA9"



      },

      fontFamily:{
        primary:"Saudia-sans",
    
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.bg-overlay': {
          'background': "url('/src/assets/images/challenges-bg.png') lightgray 50% / cover no-repeat",
          'background-position': 'center',
          'mix-blend-mode': 'luminosity'
        },
        '.bottom-border-gradient':{
          'border-image': 'linear-gradient(0deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%) 1',
          'border-radius':' 1px' ,
          'border-width': '1px',
          'border-style': 'solid',
        },
        '.upper-border-gradient':{
          'border-width': '1px',
          'border-style': 'solid',
          'border-radius':'16px' ,
          'border-image': 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.00) 100%) 1',
          'background-origin':' border-box',
         ' background-clip': 'content-box, border-box'

        },
        '.card-gridlines' : {
         'background-image': "url('/src/assets/images/card-gridline.png')",
        'background-size':'contain', 

        },
        '.indicator-mask-position':{
          'mask-position': "-248px 0", 
          'mask-size':"cover"

        },
        '.indicator-mask-bg':{
          "background-size": "180% 100%",
          "background-position": "0 0",
          'background-image': "url('/src/assets/images/indicator-bg.png'), url('/src/assets/images/indicator-blur-v2.png')",
          'height': "100%",
          'transition': '.45s cubic-bezier(.6,.6,0,1) background-position, .45s cubic-bezier(.6,.6,0,1) -webkit-background-position, 1s cubic-bezier(.6,.6,0,1) opacity !important'
        },
        '.indicator-border-bg':{
          "background-size": "180% 100%",
          "background-position": "0 0",
          'background-image': "url('/src/assets/images/indicator-borders.png'),url('/src/assets/images/indicator-blur.png') ",
          'height': "80%",
          "opacity":"20%",
          'transition': '.45s cubic-bezier(.6,.6,0,1) background-position, .45s cubic-bezier(.6,.6,0,1) -webkit-background-position, 1s cubic-bezier(.6,.6,0,1) opacity !important'
        }, 
        '.sustainability-chart-bg':{
          "background-size": "180% 100%",
          "background-position": "0 0",
          'background-image': "url('/src/assets/images/sustainability-chart.png'),url('/src/assets/images/sustainability-light.png') ",
          'height': "100%",
          'transition': '.45s cubic-bezier(.6,.6,0,1) background-position, .45s cubic-bezier(.6,.6,0,1) -webkit-background-position, 1s cubic-bezier(.6,.6,0,1) opacity !important'
        
        }, 

        '.gradient-text':{
          'background': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.70) 100%)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        }, 

        '.button-gradient-text': {
          'background': 'linear-gradient(90deg, #E59CFF 0.01%, #BA9CFF 50.01%, #9CB2FF 100%)',
         'background-clip': 'text',
         ' -webkit-background-clip': 'text',
         ' -webkit-text-fill-color': 'transparent'
        },

        '.magic-circles':{
          "background-size": "100% 100%",
          "background-position": "50% 0",
          'background-image': "url('/src/assets/images/maps-circle-borders.svg'),url('/src/assets/images/interactive-maps-lights.png') ",
          'height': "100%",
          'transition': '.45s cubic-bezier(.6,.6,0,1) background-size, .45s cubic-bezier(.6,.6,0,1) -webkit-background-size, 1s cubic-bezier(.6,.6,0,1) opacity !important'
        }, 


        '.button-container': {

          'border-radius': '12px',
          'border': '1px solid #15677A',
          'background': 'rgba(255, 255, 255, 0.00)',
          'box-shadow': '0px -7px 11px 0px rgba(164, 143, 255, 0.12) inset',
          'backdrop-filter':' blur(2px)',
        }




        
      
      });
    }),

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

