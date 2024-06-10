const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', ...fontFamily.sans],
      },
      screens: {
        'non-touch-device': { raw: '(hover: hover) and (pointer: fine)' },
      },
    },
  },
  plugins: [],
};
