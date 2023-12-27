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
        projectsbg: "#3b4547",
      },
      animation: {
        blob1: "blob 7s infinite",
        blob2: "blob 7s infinite 2s",
        blob3: "blob 7s infinite 4s",
        float: "float 6s infinite",
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
        float: {
          "0%": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(-12px)",
          },
          "50%": {
            transform: "translateY(0px)",
          },
          "75%": {
            transform: "translateY(-8px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
