/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            top: "-25rem"
          },
          "100%": {
            top: "0rem"
          },
        },
      },
      animation: {
        "slide-down": "slide-down 1s"
      },
    },
  },
  plugins: [],
  darkMode: "class"
}

