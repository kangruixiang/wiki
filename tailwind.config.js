const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["docs/**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Concourse"],
      serif: ["Equity"],
    },
    extend: {
      colors: {
        ember: "#f8f2eb",
        emberdark: "#f0e8de",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
