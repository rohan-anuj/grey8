module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      'curs':['Corinthia', 'cursive'],
      'ubuntu':['Ubuntu','san-serif'],
      'roboto':['Roboto'],
      'karla':['Karla', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      
    },
  },
  variants: {
    extend: {
      backgroundColor:['active'],
      boxShadow:["active"],
      textColor:['active','visited'],
      
    },
  },
  plugins: [],
}
