$('#myModal').modal(console.log('I am here!'))

// let modal = document.getElementById('myModal')
// const btn = document.getElementById('myBtn')
//
// btn.onclick = function () {
//   modal.style.display = 'block'
// }

const getFormFields = require('../../../lib/get-form-fields')

const play = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  $('#myModal').modal('hide')
}

module.exports = {
  play
}
