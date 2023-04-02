/** @type {(size: string) => string} */
const rem2px = (size) => `${Number.parseFloat(size) * 16}px`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      none: '0px',
      sm: rem2px('0.125rem'),
      DEFAULT: rem2px('0.25rem'),
      md: rem2px('0.375rem'),
      lg: rem2px('0.5rem'),
      xl: rem2px('0.75rem'),
      '2xl': rem2px('1rem'),
      '3xl': rem2px('1.5rem'),
      full: '9999px',
    },
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': rem2px('16rem'),
      '2xs': rem2px('18rem'),
      xs: rem2px('20rem'),
      sm: rem2px('24rem'),
      md: rem2px('28rem'),
      lg: rem2px('32rem'),
      xl: rem2px('36rem'),
      '2xl': rem2px('42rem'),
      '3xl': rem2px('48rem'),
      '4xl': rem2px('56rem'),
      '5xl': rem2px('64rem'),
      '6xl': rem2px('72rem'),
      '7xl': rem2px('80rem'),
    },
    fontSize: {
      xs: [rem2px('0.75rem'), { lineHeight: rem2px('1rem') }],
      sm: [rem2px('0.875rem'), { lineHeight: rem2px('1.25rem') }],
      base: [rem2px('1rem'), { lineHeight: rem2px('1.5rem') }],
      lg: [rem2px('1.125rem'), { lineHeight: rem2px('1.75rem') }],
      xl: [rem2px('1.25rem'), { lineHeight: rem2px('1.75rem') }],
      '2xl': [rem2px('1.5rem'), { lineHeight: rem2px('2rem') }],
      '3xl': [rem2px('1.875rem'), { lineHeight: rem2px('2.25rem') }],
      '4xl': [rem2px('2.25rem'), { lineHeight: rem2px('2.5rem') }],
      '5xl': [rem2px('3rem'), { lineHeight: '1' }],
      '6xl': [rem2px('3.75rem'), { lineHeight: '1' }],
      '7xl': [rem2px('4.5rem'), { lineHeight: '1' }],
      '8xl': [rem2px('6rem'), { lineHeight: '1' }],
      '9xl': [rem2px('8rem'), { lineHeight: '1' }],
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: rem2px('.75rem'),
      4: rem2px('1rem'),
      5: rem2px('1.25rem'),
      6: rem2px('1.5rem'),
      7: rem2px('1.75rem'),
      8: rem2px('2rem'),
      9: rem2px('2.25rem'),
      10: rem2px('2.5rem'),
    },
    maxWidth: ({ theme, breakpoints }) => ({
      none: 'none',
      0: rem2px('0rem'),
      xs: rem2px('20rem'),
      sm: rem2px('24rem'),
      md: rem2px('28rem'),
      lg: rem2px('32rem'),
      xl: rem2px('36rem'),
      '2xl': rem2px('42rem'),
      '3xl': rem2px('48rem'),
      '4xl': rem2px('56rem'),
      '5xl': rem2px('64rem'),
      '6xl': rem2px('72rem'),
      '7xl': rem2px('80rem'),
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
      prose: '65ch',
      ...breakpoints(theme('screens')),
    }),
    spacing: {
      px: '1px',
      0: '0px',
      0.5: rem2px('0.125rem'),
      1: rem2px('0.25rem'),
      1.5: rem2px('0.375rem'),
      2: rem2px('0.5rem'),
      2.5: rem2px('0.625rem'),
      3: rem2px('0.75rem'),
      3.5: rem2px('0.875rem'),
      4: rem2px('1rem'),
      5: rem2px('1.25rem'),
      6: rem2px('1.5rem'),
      7: rem2px('1.75rem'),
      8: rem2px('2rem'),
      9: rem2px('2.25rem'),
      10: rem2px('2.5rem'),
      11: rem2px('2.75rem'),
      12: rem2px('3rem'),
      14: rem2px('3.5rem'),
      16: rem2px('4rem'),
      20: rem2px('5rem'),
      24: rem2px('6rem'),
      28: rem2px('7rem'),
      32: rem2px('8rem'),
      36: rem2px('9rem'),
      40: rem2px('10rem'),
      44: rem2px('11rem'),
      48: rem2px('12rem'),
      52: rem2px('13rem'),
      56: rem2px('14rem'),
      60: rem2px('15rem'),
      64: rem2px('16rem'),
      72: rem2px('18rem'),
      80: rem2px('20rem'),
      96: rem2px('24rem'),
    },
    extend: {
      screens: {
        'non-touch-device': { raw: '(hover: hover) and (pointer: fine)' },
      },
    },
  },
  plugins: [],
};
