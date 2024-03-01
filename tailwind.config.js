/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'Sans'],
        inter: ['Inter', 'Sans'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        'gradient': {
          to: { 'background-position': '200% center' },
        }
      } 
    },
    container: {
      center: true,
    },
    colors: {
      'dark': '#151515',
      'white': '#FFFFFF',
      'gray': '#373737',
      'lightgray': "#ababab",
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}