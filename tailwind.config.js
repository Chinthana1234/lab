/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Oxanium", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
