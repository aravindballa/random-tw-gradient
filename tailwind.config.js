const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    { pattern: /bg-gradient-to-.*/ },
    {
      pattern: /(from|to)-.*/,
    },
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
