module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/projects/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purp: {
          100: "#deccf0",
          200: "#be99e1",
          300: "#9d66d1",
          400: "#7d33c2",
          500: "#5c00b3",
          600: "#4a008f",
          700: "#37006b",
          800: "#250048",
          900: "#120024",
        },
      },

      animation: {
        hover: "hover 7s infinite",
        imageblurslide: "imageblurslide 1s infinite",
      },

      keyframes: {
        hover: {
          "0%": {
            transform: "translate(0%, 0%)",
          },
          "20%": {
            transform: "translate(2%, 1%)",
          },
          "40%": {
            transform: "translate(1%, -1%)",
          },
          "60%": {
            transform: "translate(-1%, 1%)",
          },
          "40%": {
            transform: "translate(0%, 0%)",
          },
        },
        imageblurslide: {
          "0%": {
            filter: "blur(0)",
            opacity: 0,
          },
          "1%": {
            opacity: 100,
          },
          "10%": {
            filter: "blur(2rem)",
          },
          "50%": {
            filter: "blur(1rem)",
            transform: "translateX(0%)",
          },
          "100%": {
            filter: "blur(2rem)",
            transform: "translateX(-500%)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
