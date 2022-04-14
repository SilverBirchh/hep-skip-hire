module.exports = {
  daisyui: {
    themes: [
      {
        hep: {
          primary: "#3b82f6",
          secondary: "#292524",
          accent: "#fde047",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("daisyui")],
};
