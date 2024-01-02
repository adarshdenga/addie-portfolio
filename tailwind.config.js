/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rozha: ['Rozha One', 'Serif'],
        montserrat: ['Montserrat','Sans'],
      }
    },
    container: {
      center: true,
    },
    colors: {
      // greens
      'sacramento' : '#162114',
      'pine': '#294122',
      'forestgreen': '#5e6c5b',
      // pinks/oranges
      'salmon': '#ffbba6',
      'tangerine': '#eb3d00',
      // beiges/off-whites
      'warmivory': '#ffefcd',
      'chiffon': '#ffedd2',
      'cloudwhite': '#fefcf6',
      'freshcream': '#f4efe6',
      'miracle': '#F8E3CC',
      // blues
      'skyblue': '#d6e0e2',
      'midnight': '#162a2c',
      // yellows
      'apricot': '#e09132',
      // reds
      'watermelon': '#951609',
      'russet': '#4d0e00',

      // the entire oliveras color palette
      'o-range': '#994500',
      'o-green': '#092E29',
      'o-grean': '#1B4838',
      'o-yellw': '#D59C41',
      'o-beige': '#F5E9E4',

    }
  },
  plugins: [],
}