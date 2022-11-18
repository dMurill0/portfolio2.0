/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(36,36,36)",
        secondary: "#F7AB0A"
      },
      fontFamily: {

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
