/** @type {import('tailwindcss').Config} */
const secondary_50 = "#50bfc2"

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "#1a1a1a",
        active: "rgba(80, 191, 194, 0.3)",
        secondary: {
          50: secondary_50,
          100: "#1a84b2"
        },
      },
      boxShadow: {
        button: `0 2px 0 inset ${secondary_50}`,
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
    },
  },
  plugins: [],
}

