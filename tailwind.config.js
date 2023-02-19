/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, ts}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#991b1b',
          2: '#f59e0b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
