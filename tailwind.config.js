/** @type {import('tailwindcss').Config} */
const withAlpha = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Mozilla Text"', 'sans-serif'],
        body: ['"Mozilla Text"', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: withAlpha('accent'),
          dark: withAlpha('accent-dark'),
          light: withAlpha('accent-light'),
          // Button fill: darker than text accent in dark mode so white labels pass AA
          fill: withAlpha('accent-fill'),
        },
        ink: {
          DEFAULT: withAlpha('ink'),
          2: withAlpha('ink-2'),
          3: withAlpha('ink-3'),
        },
        paper: {
          DEFAULT: withAlpha('paper'),
          2: withAlpha('paper-2'),
        },
        // Projects section + footer: stay dark in both themes
        surface: {
          DEFAULT: withAlpha('surface'),
          2: withAlpha('surface-2'),
          3: withAlpha('surface-3'),
        },
        'on-surface': withAlpha('on-surface'),
      },
      letterSpacing: {
        widest2: '0.12em',
      },
    },
  },
  plugins: [],
}
