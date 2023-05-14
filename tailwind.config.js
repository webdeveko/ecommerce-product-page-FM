/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orangeish': '#ff7d1a',
        'pale-orange': '#ffede0',
        'very-dark-blue': '#1d2025',
        'dark-grayish-blue': '#68707d',
        'grayish-blue': '#b6bcc8',
        'light-grayish-blue': '#f7f8fd',
        'grayFont': '#69707D',

      },
    },
  },
  plugins: [],
}

