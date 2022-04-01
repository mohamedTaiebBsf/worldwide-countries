const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
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
