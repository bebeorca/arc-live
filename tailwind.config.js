/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js,php}'],
  theme: {
    extend: {
      colors: {
        'prim-b': '#0F102F',
        'prim-y': '#F05407',
      },
      fontFamily: {
        Archivo: 'Archivo'
      },
    },
  },
  plugins: [],
}

