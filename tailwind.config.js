/** @type {import('tailwindcss').Config} */
const secondary_50 = "#50bfc2"
const secondary_100 = "#1a84b2"

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        code: "rgb(39 39 39)",
        background: "#1a1a1a",
        divider: "rgba(61, 71, 81, 0.3)",
        active: "rgba(80, 191, 194, 0.3)",
        secondary: {
          50: secondary_50,
          100: secondary_100
        },
      },
      boxShadow: {
        button: `0 2px 0 inset ${secondary_50}`,
        outlined: `0 1px 0 inset #143543`
      },
      animation: {
        'slide-right': 'slide-right 1s infinite;',
      },
      keyframes: {
        "slide-right": {          
          "0%, 100%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateX(0)",
          }
        }
      },
      gridColumnStart: {
        '20': '20',      
        '24': '24',      
        '25': '25',      
        '34': '34',      
        '35': '35',      
        '39': '39',      
        '40': '40',      
        '49': '49',      
        '50': '50',      
        '64': '64',      
        '65': '65',      
      },
      gridColumn: {
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-66': 'span 66 / span 66',
      },
      gridTemplateColumns: {        
        '22': 'repeat(22, minmax(0, 1fr))',
        '66': 'repeat(66, minmax(0, 1fr))',
      },      
    },
  },
  plugins: [],
}

