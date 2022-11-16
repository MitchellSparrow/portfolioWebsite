/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#405858",
        darkGreen: "#11332e",
        lightBackground: "#f0f6fa",
        darkBackground: "#1e2021",
        darkBlack: "#000000",
        grayColor: "#6B7280",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
