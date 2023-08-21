/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1bc01b",
        secondaryColor: "#eae6e6",
        blackColor: "#0e0e0e",
      },
    },
  },
  plugins: [],
};
