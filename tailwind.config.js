/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#141414",
        primary: "#3C91E6",
        secondary: "#808080",
      },
    },
  },
  plugins: [],
};
