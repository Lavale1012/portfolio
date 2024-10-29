/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      Color: {
        "js-color": "#F7DF1E",
      },
    },
  },
  plugins: [],
};
