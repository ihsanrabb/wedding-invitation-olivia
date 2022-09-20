const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "brown": "#634837",
      "brown-light": "#ccaa8e",
      "template-blue": "#91B0DC",
      "karat": "#e0c389",
      "gold": "#fafbed",
      "maroon": "#880f3a",
      "primary": "#C5A28E",
      "secondary": "#A6A998",
      "tertiary": "#C5A28E",
      "cyan": "#4ca1a3",
      "brown-dark": "#A9865B",
      "zoom": "#2d8cff",
      "gmeet": "#34A853",
      "otherStreaming": colors.black,
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
