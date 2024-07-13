/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class" , 
  theme: {
    extend: {
      colors: {
        'battercolor': 'var(--battercolor)',
        'bowlercolor': 'var(--bowlercolor)',
        'playercolor': 'var(--playercolor)',
        primary: "rgb(var(--color-primary) / <alpha-value> )",
        secondary: "rgb(var(--color-secondary) / <alpha-value> )",
        content: "rgb(var(--color-content) / <alpha-value> )",
        muted: "rgb(var(--color-muted) / <alpha-value> )",

      },
    },
  },
  plugins: [],
}

