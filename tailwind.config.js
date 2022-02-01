const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["docs/**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Concourse"],
      serif: ["Equity"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
