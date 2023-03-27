/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e84efc",
        
"secondary": "#d0d863",
        
"accent": "#215996",
        
"neutral": "#141320",
        
"base-100": "#E8E5F0",
        
"info": "#5375D5",
        
"success": "#4FE8BA",
        
"warning": "#F4BC4E",
        
"error": "#E44956",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
