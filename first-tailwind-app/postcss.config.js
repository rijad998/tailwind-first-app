const tailwindcss = require('tailwindcss.js')

module.exports = {
  "plugins": [
    require('tailwindcss.js')('tailwind.config.js'),
    require('autoprefixer')(),
  ]
}