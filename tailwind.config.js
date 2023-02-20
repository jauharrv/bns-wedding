/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, ts}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#7f1d1d',
          2: '#f59e0b',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
