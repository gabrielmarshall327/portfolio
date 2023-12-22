/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        custombg: "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
      },
      backgroundColor: {
        darkbg: "#2d3436",
      },
      animation: {
        blob1: "blob 7s infinite",
        blob2: "blob 7s infinite 2s",
        blob3: "blob 7s infinite 4s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.1)",
          },
          "66%": {
            transform: "scale(0.9)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
