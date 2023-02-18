/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js, ts}', './src/**/*'],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#b392ac',
          2: '#cdb4db',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
