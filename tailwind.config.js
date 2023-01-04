const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        code: {
          red: "#EB5757",
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
                color: theme("colors.code.red"),
                backgroundColor: theme("colors.code.gray"),
                padding: "0.2rem 0.4rem",
                borderRadius: "3px",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
