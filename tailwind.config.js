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
      jet: {
        default: "#333333",
        dark: "#292929",
      },
      davygray:"#50514F",
      cream: "#FCFFD6",
    },
  },
  plugins: [],
};
