/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "soft-card": "3px 3px 5px #ededed,-2px -2px 2px #ffffff",
        "soft-cardso": "3px 3px 5px #edca98,-2px -2px 2px #ffffff",
        "soft-cardsp": "3px 3px 5px #d1c6d9,-2px -2px 2px #ffffff",
        "soft-cardo": "3px 3px 5px #f9b62d,-3px -3px 2px #ffffff",
        "soft-cardp": "2px 3px 5px #9c2cf5,-3px -3px 2px #ffffff",
      },
      colors: {
        transparent: "transparent",
        bg: "#FAFAFA",
        wbtn: "#F5F6F6",
        obtn: "#FCB82D",
        pbtn: "#9E2CF7",
        b2: "#C7D1D6",
        sobtn: "#F5F0E4",
        spbtn: "#E1D5E9",
        textm: "#56626C",
      },
    },
  },
  plugins: [],
};
