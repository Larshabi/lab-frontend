module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "360px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      spacing: {
        84: "21rem",
        88: "22rem",
        92: "23rem",
        100: "25rem",
        108: "27rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
      },
      colors: {
        active: '#0B9D09',
        inactive: '#AC0741'
      }
    },
  },
  variants: {
    extend: {},
  },
  // plugins: [require('@tailwindcss/line-clamp')],
};
