const path = require('path');
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        brand: '#EA364A',
        citrus: '#8EB307',
        p: '#EA364A',
        s: '#EA364A',
        bgp: '#EA364A',
        bgs: '#EA364A',
        tp: '#EA364A',
        ts: '#EA364A',
        dodgerblue: {
          50: '#f5fafc',
          100: '#e5f6fc',
          200: '#c2e7f9',
          300: '#99d2f8',
          400: '#5facf6',
          500: '#3081f4',
          600: '#225eeb',
          700: '#2149ce',
          800: '#1c399c',
          900: '#182e78',
        },
      },
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
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus', 'first'],
  },
  plugins: [],
  purge: {
    enabled: true,
    layers: ['utilities'],
    content: [
      path.join(__dirname, 'src/**/!(*.d).{ts,js,jsx,tsx}'),
      path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}'),
    ],
  },
};
