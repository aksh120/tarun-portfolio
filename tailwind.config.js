/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '560px',
          md: '700px',
          lg: '860px',
          xl: '1000px',
          '2xl': '1100px',
        },
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '3rem',
        },
      },
      colors: {
        brand: {
          50: '#e6f6ef',
          100: '#cfeee0',
          200: '#a5e1c7',
          300: '#78d3ad',
          400: '#2fb67f',
          500: '#0f7f5b',
          600: '#0b654a',
          700: '#084c3a',
          800: '#063b2f',
          900: '#052e2b',
          950: '#03231f',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
