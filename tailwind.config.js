const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant(
        'non-touchscreen',
        '@media (hover: hover) and (pointer: fine)',
      );
    }),
  ],
};
