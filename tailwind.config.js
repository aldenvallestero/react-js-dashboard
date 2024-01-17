/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    { pattern: /col-span-./ }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
