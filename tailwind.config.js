/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          primary: '#00f0ff', // Cyan/Blue
          secondary: '#7000ff', // Deep Purple
          dark: '#0a0a1f', // Dark Blue/Black
          accent: '#ff003c', // Pink/Red
          glass: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-fast': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
