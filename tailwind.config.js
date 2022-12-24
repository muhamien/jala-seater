/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./node_modules/flowbite-react/**/*.js",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {},
    },
    plugins: [
      require("flowbite/plugin")
    ],
}