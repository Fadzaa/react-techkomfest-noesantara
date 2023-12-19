/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'hp' : '440px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    },
    extend: {
      fontFamily: {
        milonga: ["Milonga"],
        urbanist: ["Urbanist"],
        yiBaiti: ["Microsoft Yi Baiti"],
      },
      colors: {
        primary: "#99B080",
        primaryText: "#333333",
        GreenWhite: "#FAF8ED",
        BorderGray: '#E9ECF2',
        TextSecondary: '#7D7A7A',
      },
    },
  },
  plugins: [],
};