/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx}", "./public/**/*.html"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        body: ["Verdana", "Geneva", "Tahoma", "sans-serif"],
        headers: ["Georgia", "Times", "Times New Roman", "serif"],
      },
      width: { "5xl": "64rem" },
    },
  },
};
