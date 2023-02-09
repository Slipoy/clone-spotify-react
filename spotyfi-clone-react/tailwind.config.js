/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'sm': '500px',
      'md': '700px',
      'lg': '900px',
      'xl': '1100px',
      '2xl': '1300px',
      '3xl': '1500px',
      '4xl': '1700px',
      '5xl': '1900px',
      '6xl': '2100px',
    },
    extend: {
      gridTemplateColumns:{
        "main": "repeat(auto-fill, minmax(208px, 1fr))"
      },
      boxShadow: {
        '3xl': '0 4px 60px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
  ],
}
