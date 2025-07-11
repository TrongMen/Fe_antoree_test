  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      lobster: ['Lobster', 'sans-serif'],
      sofia: ['Sofia', 'sans-serif'],
      
    }
  }
},
    plugins: [],
  }
