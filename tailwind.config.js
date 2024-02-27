const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        "light-coffee": "#C89F94",
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#A25F4B",
          600: "#744838",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translate3d(0px,8px,0px)", opacity: 0 },
          "100%": { transform: "translate3d(0px,0px,0px)", opacity: 1 },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 100 },
        },
      },
      animation: {
        slideDown: "slideDown .5s ease-in-out",
        slideUp: "slideUp .4s ease-in-out",
        fadeIn: "fadeIn .5s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": 'url("./img/slider-bg.jpg")',
      },
    },
  },
  plugins: [],
}
