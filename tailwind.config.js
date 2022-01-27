module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/projects/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        roboto: ["Roboto Condensed"],
      },
      screens: {
        "3xl": "1920px",
      },
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
        hacker: {
          100: "#cdf9f5",
          200: "#9bf4eb",
          300: "#69eee0",
          400: "#37e9d6",
          500: "#05e3cc",
          600: "#04b6a3",
          700: "#03887a",
          800: "#025b52",
          900: "#012d29",
        },
        darker: {
          100: "#ccdedc",
          200: "#9abdba",
          300: "#679d97",
          400: "#357c75",
          500: "#025b52",
          600: "#024942",
          700: "#013731",
          800: "#012421",
          900: "#001210",
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
