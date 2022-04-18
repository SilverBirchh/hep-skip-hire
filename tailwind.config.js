module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    animationDelay: {
      500: "500ms",
      1500: "1000ms",
      2500: "2000ms",
    },
  },
  extend: {
    animation: {
      reveal: "reveal 1s ease-in-out",
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
  variants: {
    animationDelay: ["responsive", "hover"],
  },
};
