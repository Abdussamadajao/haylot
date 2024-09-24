/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        wendy: ["WendyOne", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        robotoBold: ["RobotoBold", "sans-serif"],
        robotoMedium: ["RobotoMedium", "sans-serif"],
        robotoLight: ["RobotoLight", "sans-serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 3px rgba(0, 0, 0, 0.3)",
        lg: "1px 1px 5px rgb(0, 0, 0)",
        none: "none",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        },
        ".text-shadow-md": {
          textShadow: "2px 2px 3px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-lg": {
          textShadow: "1px 1px 5px rgb(0, 0, 0)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
