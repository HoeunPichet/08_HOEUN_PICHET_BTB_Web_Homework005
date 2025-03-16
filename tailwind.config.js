/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        radius: {
          small: "4px",
          medium: "8px",
          large: "12px",
        },
      },
      themes: {
        light: {
          colors: {
            default: "#47A992",
            primary: "#47A992",
            secondary: "#25A244",
            foreground: "#324C5B",
            success: "#17c964",
            warning: "#f5a524",
            danger: "#f31260",
          },
        },
        dark: {
          colors: {
            default: "#47A992",
            primary: "#47A992",
            secondary: "#25A244",
            foreground: "#324C5B",
            success: "#17c964",
            warning: "#f5a524",
            danger: "#f31260",
          },
        },
      },
    }),
  ],
};
