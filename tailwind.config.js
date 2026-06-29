/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg:       "#0C0C0E",
        surface:  "#131316",
        border:   "#1E1E26",
        text:     "#F0F0F2",
        muted:    "#8A8A96",
        gold:     "#C9A84C",
        "gold-dark": "#B8963E",
      },
    },
  },
  plugins: [],
};
