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
        
"primary": "#65f7e1",
        
"secondary": "#f9b99a",
        
"accent": "#dbc92e",
        
"neutral": "#2F2B3B",
        
"base-100": "#352654",
        
"info": "#8FA3E5",
        
"success": "#18D888",
        
"warning": "#A4850A",
        
"error": "#E87D86",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
