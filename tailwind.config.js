/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./assets/hero.png')",
      },

      fontFamily: {
        'head': ['"Titillium Web"','sans-serif'],
        'body': ['Roboto','sans-serif'],
      }
    },
  },
  plugins: [],
}
