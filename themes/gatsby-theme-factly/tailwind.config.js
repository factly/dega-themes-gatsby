module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: [
          'Inter, Roboto, "Helvetica Neue", Arial, "Noto Sans", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        ],
        metropolis: 'Metropolis, Georgia, Cambria, "Times New Roman", Times, serif',
      },
      inset: {
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
      },
      colors: {
        citrus: '#8EB307',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus', 'first'],
  },
  plugins: [],
};
