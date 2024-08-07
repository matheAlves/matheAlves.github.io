const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        monumentRegular: ['Monument Regular'],
        monumentBlack: ['Monument Black']
      },
      colors: {
        primary: '#e1ffe9',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: { '2000-pattern': "url('/src/assets/2000sbg.jpg')" }
    }
  },
  plugins: [addVariablesForColors]
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'))
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars
  })
}
