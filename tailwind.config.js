/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        background: '#121212',
        white: '#fcfcfd',
        grey: '#434852',
        greyfaded: '#43485280',
        blackfaded: '#11111180',
      },
    },
  },
  plugins: [],
}