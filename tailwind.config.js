/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ajusta según la ubicación real de tus archivos fuente
  ],
  darkMode: false, // o 'media' o 'class'
  theme: {
    extend: {
      colors: {
        darkbg: '#0D1117',
        blueprimary: '#3399FF',
        bluesec: '#1F6FEB',
        graysec: '#8B949E',
        blueaccent: '#0066CC',
      },
    },
  },
  plugins: [],
};
