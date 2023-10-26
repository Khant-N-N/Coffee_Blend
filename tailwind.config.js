/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "coffee-cup": "url('/src/assets/bg_2.jpg')",
        "coffee-seeds": "url('/src/assets/bg_1.jpg')",
      },
      screens: {
        xs: "450px",
      },
    },

  },
  plugins: [],
}
