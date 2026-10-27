/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './dist/output.css'],
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primer: '#1a27c9',
      },
      fontFamily: {
        lora: ["Lora", "serif"],
      },
    },
  },
  plugins: [require('taos/plugin')],
};
