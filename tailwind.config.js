/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#0E6FFF',
        secondary: '#FFC928',
        dark: '#23242A',
        pastel: '#D1DCE5',
        light: '#fff',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
