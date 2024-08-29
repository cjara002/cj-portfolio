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
      backgroundImage: {
        'desertLandscape': "url('./assets/img/road.jpg')",
        'darkLizards': "url('./assets/img/darkLizards.png')",
      },
      // keyframes: {
      //   spin: {
      //     '0%, 100%': { content: '""' },
      //     '10%': { content: '"A DEVELOPER"' },
      //     '20%': { content: '"A CRITICAL THINKER"' },
      //     '40%': { content: '"A TENNIS PLAYER"' },
      //     '50%': { content: '"AN ARTIST"' },
      //     '70%': { content: '"A PROBLEM SOLVER"' },
      //     '80%': { content: '"A CHEF"' },
      //   },
      // },
      // animation: {
      //   spin: 'spin 13s linear infinite',
      // },
    },
  },
  plugins: [],
}