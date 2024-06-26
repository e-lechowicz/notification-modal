/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'user-icon': "url('/src/images/user-icon.svg')",
      }
    },
  },
  plugins: [],
}

