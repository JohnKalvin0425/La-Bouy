/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js", 
    "./node_modules/tw-elements-react/dist/js/**/*.js"

   
  ],
  theme: {
    extend: {},
  },

  
  plugins: [
    
    require('flowbite/plugin'),
    require('daisyui'),
    
],





}
    
