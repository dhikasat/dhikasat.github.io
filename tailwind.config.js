/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        primer:'#1a27c9'
      },
      fontFamily: {
        lora : "Lora, serif"
      },
    },
  },
  plugins: [],
}
