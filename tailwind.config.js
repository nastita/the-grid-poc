/** @type {import('tailwindcss').Config} */
import luksoTailwind from '@lukso/web-components/tailwind.config'

export default {
  presets: [luksoTailwind],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
}
