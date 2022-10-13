/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       colors: {
        "background": "#d3d0df",
        "surface": "#f3f5f9",
        "primary": "#7f56da",
      },
      screens:{
        'xs': '320px'
      }
    },
  },
  plugins: [],
}
