const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        code: {
          dark: "#1e1f22",
          gray: "rgba(135,131,120,0.15)",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "700",
            },
            p: {
              code: {
                color: theme("colors.blue.400"),
                backgroundColor: theme("colors.code.gray"),
                padding: "0.2rem 0.4rem",
                borderRadius: "3px",
              },
            },
            img: {
              margin: "auto",
              padding: "20px",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
