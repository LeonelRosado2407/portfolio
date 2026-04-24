/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#c8501a',
          dark: '#a83d10',
          light: '#f0e6df',
        },
        ink: {
          DEFAULT: '#111010',
          2: '#3a3836',
          3: '#7a756f',
        },
        paper: {
          DEFAULT: '#f5f3ef',
          2: '#eceae4',
        },
      },
      letterSpacing: {
        widest2: '0.12em',
      },
    },
  },
  plugins: [],
}
