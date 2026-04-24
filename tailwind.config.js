/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        body: ['Trebuchet MS', 'Arial', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#D94F2B',
          dark: '#A83D1F',
          light: '#EDE8E0',
        },
        ink: {
          DEFAULT: '#1C1917',
          2: '#3D2B1F',
          3: '#8C7B6E',
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
