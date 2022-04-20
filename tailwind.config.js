module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#40a2d8",
          light: "#D1FAE5",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
