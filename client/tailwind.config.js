/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        deb: "1000px",
        deb1: "1400px",
      },
      height: {
        "80vh": "80vh",
      },
      width: {
        "90vw": "90vw",
      },
    },
  },
  plugins: [],
};
