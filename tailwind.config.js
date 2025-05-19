 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
 theme: {
    extend: {
      colors: {
        coral: {
          500: '#FF6B6B',
          600: '#FF5252',
          700: '#FF3D3D',
        },
        teal: {
          600: '#4DB6AC',
          700: '#26A69A',
          800: '#00897B',
        },
      },
    },
  },
  plugins: [],
}
