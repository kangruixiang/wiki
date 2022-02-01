const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["docs/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
