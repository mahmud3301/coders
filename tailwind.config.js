/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    daisyui: {
      themes: [
        "forest", "dark",
      ],
    },
  plugins: [require("daisyui")],
}