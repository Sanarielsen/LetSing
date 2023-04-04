/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pachi-gray': '#A7A8A5',
        'pachi-green': '#00FF00',
        'pachi-red': '#dc2626',
        'pachi-yellow': '#f59e0b',
      },
      borderRadius: {

        'table': '50%',
      },
    },
  },
  plugins: [],
}
