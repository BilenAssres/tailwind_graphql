/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors:{
        primary: '#0070f3',
      }
    }
  },
  variants: {
    extend: {

      backgroundColor: ['active'],
    },
  },
  plugins: [],
}

