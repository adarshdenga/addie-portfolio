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
  plugins: [],
}