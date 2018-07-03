/$('#myModal').modal(console.log('I am here!'))
// Get the modal
const modal = document.getElementById('id01')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
}
// let modal = document.getElementById('myModal')
// const btn = document.getElementById('myBtn')
//
// btn.onclick = function () {
//   modal.style.display = 'block'
// }

// $('#someIdOnYourPage').text('you won')

const getFormFields = require('../../../lib/get-form-fields')

const play = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  console.log(data.form)
  // $('#myModal').modal('show')
  $('#myModal').modal(console.log('I am here!'))
}

module.exports = {
  play
}
