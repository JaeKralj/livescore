/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#000000',
          100: '#222232',
          200: '#181829',
        },
        blue: { 100: '#246BFD', 200: '#0C0C69' },
        grey: {
          100: '#C4C4C4',
          200: '#65656B',
        },
        white: '#ffffff',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-138': 'linear-gradient(138deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
