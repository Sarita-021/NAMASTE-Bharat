/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        deb: "1000px",
        deb1: "1400px",
      },
    },
  },
  plugins: [],
};
