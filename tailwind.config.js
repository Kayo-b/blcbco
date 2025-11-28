/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  },
  theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
          mono: ['Fira Code', 'monospace'],
          // Add custom fonts
          display: ['Playfair Display', 'serif'],
          body: ['Open Sans', 'sans-serif'],
        },
      },
    },
}
