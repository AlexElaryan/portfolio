/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
    screens: {
      'tablet': {'max':'767px'},
      'mobile': {'max':'480px'},
    }
  },
  plugins: [],
}

