'use strict'
let apiUrl
const apiUrls = {
  // production: 'https://aqueous-atoll-85096.herokuapp.com',
  // development: 'http://localhost:4741'
  // development: 'http://tic-tac-toe.wdibos.com'
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}

// 'use strict'
//
// let apiUrls
// const apiUrlss = {
//   production: 'https://aqueous-atoll-85096.herokuapp.com/',
//   development: 'https://tic-tac-toe-wdi.herokuapp.com/'
// }
//
// if (window.location.hostname === 'localhost') {
//   apiUrls = apiUrlss.development
// } else {
//   apiUrls = apiUrlss.production
// }
//
// module.exports = {
//   apiUrls
// }
