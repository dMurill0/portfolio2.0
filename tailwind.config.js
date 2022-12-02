/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        oswald: ['Oswald'],
        poppins: ['Poppins'],
        roboto: ['Roboto'],
        manrope: ['Manrope']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
