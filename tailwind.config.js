module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8A600",
        secondary: "#03989E",
        darkSecondary: "#047D82",
        lightSecondary: "#00BAC1",
        darkPrimary: "#DE9500",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
