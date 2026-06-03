/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#111111',
          light: '#1c1c1c',
          dark: '#0a0a0a',
        },
        ivory: {
          DEFAULT: '#FAF6F0',
          dark: '#F3EDE2',
        },
        beige: {
          DEFAULT: '#F4EFEA',
          dark: '#E7DFD5',
        },
        gold: {
          DEFAULT: '#C5A880',
          light: '#D3BEA2',
          dark: '#B08E60',
        },
        grey: {
          light: '#F9F9F9',
          medium: '#8E8E8E',
          dark: '#555555',
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #111111 0%, #1e1e1e 100%)',
      }
    },
  },
  plugins: [],
}
