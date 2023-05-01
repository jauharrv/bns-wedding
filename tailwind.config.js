/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, ts}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#fff7ed',
          2: '#a16207',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
