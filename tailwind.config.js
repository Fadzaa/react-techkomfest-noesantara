/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        milonga: ["Milonga"],
        urbanist: ["Urbanist"],
        yiBaiti: ["Microsoft Yi Baiti"],
      },
      colors: {
        primary: "#99B080",
        primaryText: "#333333",
        GreenWhite: "#FAF8ED"
      },
    },
  },
  plugins: [],
};