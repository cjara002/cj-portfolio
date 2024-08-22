// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            primary: '#1e2022', // Dark Grey
            secondary: '#1E8FD5', // Light Blue TODOCARLOS: Change this one and the one below
            accent: '#1e2022', // Dark Grey
            white: '#ffffff',
      },
    },
  },
  plugins: [],
}