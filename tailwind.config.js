/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
   bg:{
    light:"#f9fafb",
    dark:"#111827"
   },
   card:{
    light:"#ffffff",
    dark:"#1f2937"
   },
   text:{
    light:"#111827",
    dark:"#f9fafb"
   }
  }
    },
  },
  plugins: [],
};
