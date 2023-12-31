/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
  transparent: twColors.transparent,
  black:"#2e3239",
  gray: '#CDCDCD',
  white: "#fff",
  primary: "#0f8bff",
  secondary: "#324a87",
  'bg-color': '#F2F2F5',
  auth: "#fff",
  aqua: "#268697", 
  footer: "#1c1c1c",
  orange: "#d67027",
  btn: "#191b21",
  search: "#3a5391",
  yellow: "#FF8B00",
  red: twColors.red[400]
}

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {fontSize: {
      xs: '0.82rem',
      sm: '0.98rem',
      base: '1.15rem',
      lg: '1.22rem',
      xl: '1.36rem',
      '1.5xl': '1.5rem',
      '2xl': '1.725rem',
      '3xl': '2.155rem',
      '4xl': '2.58rem',
      '5xl': '3.45rem',
      '6xl': '4.3rem',
      '7xl': '5.17rem',
      '8xl': '6.9rem',
      '9xl': '9.2rem',
    },
    keyFrames: {
      animationOpacity: {
        from: { opacity: 0.2 },
        to: { opacity: 1 }
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)'
        },
        '50%': {
          opacity: 0.3,
        },
        '0%': {
          opacity: 1,
          transform: 'scale(1)'
        }
      }
    },
    animation: {
      opacity: 'animationOpacity .5s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out'
    }},
  },
  plugins: [],
}

