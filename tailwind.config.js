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

module.exports = {
  plugins: [
    require('taos/plugin')
  ],
}

module.exports = {
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ]
}

module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
}
