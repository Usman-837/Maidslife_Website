/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1140px',
      },
      boxShadow: {
        'custom-light': '0 0 4px #00000040',
      },
      screens: {
        'mobile': '480px',
        'smalllaptop': '993px'
      },
      colors: {
        'blue': '#00c3ff',
      },
    },
  },
  plugins: [],
}