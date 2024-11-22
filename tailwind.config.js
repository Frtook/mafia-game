/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          100: "#64BAC7",
          200: "#C05372",
          300: "#2E2D35",
          400: "#1b1b1b",
        },
      },
    },
  },
  plugins: [],
};
