/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    daisyui: {
      themes: [
        {
          mytheme: {

            "primary": "#1d4ed8",

            "secondary": "#10b981",

            "accent": "#e879f9",

            "neutral": "#1E1E24",

            "base-100": "#F0F1F4",

            "info": "#67e8f9",

            "success": "#22c55e",

            "warning": "#eab308",

            "error": "#dc2626",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}