/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["src/webpage/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
  ]
}
