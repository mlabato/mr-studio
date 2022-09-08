/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "sm": "414px",
      "md": "768px",
      "lg": "1024px",
    },
    extend: {
      fontFamily: {
        "lato": ["lato"],
      },
    },
  },
  plugins: [],
};
