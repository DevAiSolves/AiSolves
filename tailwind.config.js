/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#040B15",
        primary: "#FF007F",
        active: "#FFF",
        textColor: "#6AF4E5"
      },
    },
  },
  plugins: [],
};
