/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mission: {
          950: '#07111f',
          900: '#0b1727',
          800: '#112238',
          cyan: '#56d8ef',
          blue: '#5d8dff',
        },
      },
    },
  },
  plugins: [],
};
