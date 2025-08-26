/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#f5f5f5",
        muted: "#b5b5b5",
        gold: "#FFD700",
        carbon: "#1a1a1a"
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 215, 0, 0.15)"
      }
    },
  },
  plugins: [],
}
