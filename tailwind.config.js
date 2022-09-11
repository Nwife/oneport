/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        lightGrey: '#6B7280',
        lighterGrey: '#E5E7EB',
        lightGreen: '#3AB44A'
      }
    },
    fontFamily: {
      'inter' : ['Inter']
    }
  },
  plugins: [],
}
