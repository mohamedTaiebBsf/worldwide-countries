const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Nunito Sans'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#111517", // Light Mode Text
        white: "#fff", // Dark Mode Text & Light Mode Elements
        primary: {
          600: "#2b3945", // Dark Mode Elements
          800: "#202c37", // Dark Mode Background
        },
        secondary: {
          200: "#fafafa", // Light Mode Background
          600: "#858585", // Light Mode Input
        },
      },
    },
  },
  plugins: [],
};
