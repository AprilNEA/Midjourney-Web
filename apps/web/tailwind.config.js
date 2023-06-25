/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(29, 147, 171)",
        second: "rgb(231, 248, 255)",
        "hover-color": "#f3f3f3",
        "bar-color": "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
