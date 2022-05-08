module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8A600",
        secondary: "#263238",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
