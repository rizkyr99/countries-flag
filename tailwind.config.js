/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: 'hsl(209, 23%, 22%)',
        verydarkblue: 'hsl(207, 26%, 17%)',
        dark: 'hsl(200, 15%, 8%)',
        darkgray: 'hsl(0, 0%, 52%)',
        verylightgray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
