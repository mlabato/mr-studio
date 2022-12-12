/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "414px",
      md: "768px",
      lg: "1024px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "1px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      fontFamily: {
        lato: ["lato"],
      },
      keyframes: {
        transDown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
          '75%': { transform: 'translateY(10px)' },
        },
        swing: {
          "20%": {transform: "rotate(15deg)"},
          "40%": {transform: "rotate(-10deg)"},
          "60%": {transform: "rotate(5deg)"},
          "80%": {transform: "rotate(-5deg)"},
          "to":  {transform: "rotate(0deg)"}
      }
      },
      animation: {
        transDown: "transDown 1s ease-in-out ",
        swing: "swing 1s ease-in-out"
      },
      screens: {
        'mobile': '400px',
        'notebook': '1024px',
        'desktop': '1920px',
        
      }
    },
  },
  plugins: [],
};
