/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'gray-100': '#F8F8F8',
      'gray-200': '#D7D7D7',
      'gray-300': '#BBBBBB',

      'dark-green-700': '#1A1D23',

      'pink-200': '#F75A68',
    },
    margin: {
      '0-auto': ['0px', 'auto'],
      '6': '2rem',
      '3': '1rem',
      '8': '3rem',
    },
  },
  plugins: [],
}
