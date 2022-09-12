/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        grey: '#D1D5DB',
        lightGrey: '#6B7280',
        lighterGrey: '#E5E7EB',
        lightestGrey: '#F9FAFB',
        lightGreen: '#3AB44A'
      }
    },
    fontFamily: {
      'inter' : ['Inter']
    }
  },
  plugins: [],
}
