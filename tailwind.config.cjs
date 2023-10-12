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
    themes: [{
      mytheme: {
      
"primary": "#fc354c",
      
"secondary": "#3b82f6",
      
"accent": "#f3f4f6",
      
"neutral": "#2a323c",
      
"base-100": "#1f2937",
      
"info": "#a21caf",
      
"success": "#36d399",
      
"warning": "#fbbd23",
      
"error": "#dc2626",
      },
    },],
  },
};

module.exports = config;
