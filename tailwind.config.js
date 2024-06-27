/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'user-icon': "url('/public/images/user-icon.svg')",
        'bell-icon': "url('/public/images/bell-icon.svg')",
        'pause-icon': "url('/public/images/pause-icon.svg')",
        'fire-icon': "url('/public/images/fire-icon.svg')",
        'document-icon': "url('/public/images/document-icon.svg')",
        'check-icon': "url('/public/images/double-check.svg')",
      }
    },
  },
  plugins: [],
}

