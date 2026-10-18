/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1280px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#355C4A',
          hover: '#24372D',
        },
        secondary: '#C77B4A',
        background: '#FAF7F0',
        surface: '#E8E0D2',
        text: '#252A25',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '16px',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};