const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
    container: {
      center: true,
    },
  },

  plugins: [forms, typography, daisyui],
  daisyui: {
    themes: ["night"],
  },
};

module.exports = config;
