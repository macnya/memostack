/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          600: '#FF8A80',
          700: '#FF5F5F',
        },
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-summer': 'linear-gradient(to bottom right, #FFEB3B, #FF8A80)',
      },
    },
  },
  plugins: [],
}
