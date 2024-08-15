/** @type {import('tailwindcss').Config} */
import luksoTailwind from '@lukso/web-components/tailwind.config'

export default {
  presets: [luksoTailwind],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        content: '880px'
      },
      wordBreak: {
        word: 'break-word'
      },
      transitionProperty: {
        width: 'width'
      },
      animation: {
        'fade-in-20': 'fade-in-20 0.5s ease-in-out'
      },
      keyframes: {
        'fade-in-20': {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.2' }
        }
      }
    }
  },
  plugins: []
}
