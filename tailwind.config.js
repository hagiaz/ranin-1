/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        roboto: ['"Roboto Condensed"', 'sans-serif'],
        faculty: ['"Faculty Glyphic"', 'sans-serif'],
      },
      backgroundColor: {
        "sigrax-red": "#F08080",
        "sigrax-yellow": "#ebc364",
        "ranin-beige": "#907d5d",
        "ranin-white": "#eee9e5",
        "ranin-bold": "#74654c",
        "ranin-broken": "#F8F7F3",
        "ranin-dark": "#675b47",

      },
      colors: {
        "sigrax-red": "#F08080",
        "sigrax-yellow": "#ebc364",
        "ranin-beige": "#907d5d",
        "ranin-white": "#eee9e5",
        "ranin-broken": "#F8F7F3",
        "ranin-dark": "#675b47",
      }
    },
  },
  plugins: [],
}