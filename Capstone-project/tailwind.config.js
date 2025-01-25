/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // You can set it to 'media' or 'class' if needed
  theme: {
    extend: {
      colors: {
        primary: "#0287a8",
        secondary: "#00c3c7",
        dark:"#ffcf22",
      },
      container: {
        padding: {
          center: true,
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem"
        }
      }
    }
  },
  plugins: []
};
