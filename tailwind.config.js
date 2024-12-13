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
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
