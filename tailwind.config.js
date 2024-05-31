/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      black: {
          100: "#d6d6d6",
          200: "#adadad",
          300: "#858585",
          400: "#5c5c5c",
          // Jet color
          500: "#333333",
          // Darker Jet color
          600: "#292929",
          700: "#1f1f1f",
          800: "#141414",
          900: "#0a0a0a"
        },
        white: {
          100: "#fefff7",
          200: "#feffef",
          300: "#fdffe6",
          400: "#fdffde",
          // Cream color
          500: "#fcffd6",
          600: "#caccab",
          700: "#979980",
          800: "#656656",
          900: "#32332b"
},
    },
  },
  plugins: [],
};
