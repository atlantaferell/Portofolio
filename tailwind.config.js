/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    }
    ,extend: {
      colors:{
        primary:'#C140E2',
        secondary:'#A686AC',
        dark:'#221824',
        bg1:'#FFF7FF',
        footer:'#500076'
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

