'use strict'

// let apiUrl
// const apiUrls = {
//   production: 'https://wdi-library-api.herokuapp.com',
//   development: 'https://wdi-library-api.herokuapp.com'
// }

let apiUrl
const apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com/',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
}

// const config = {
//   apiOrigins: {
//     development: 'https://wdi-library-api.herokuapp.com',
//     production: 'https://wdi-library-api.herokuapp.com'
//   }
// }

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
