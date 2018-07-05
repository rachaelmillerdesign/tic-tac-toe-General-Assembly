'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

// ~~~~~~~~~~~~~~~~~~~~
//  BOARD AND NEW GAME BUTTON LOCKED / unlocked BEFORE SIGN IN / UP
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const boardLockedAtStart = $('.square').addClass('unclickable')
console.log('boardLockedAtStart')

function unlockBoard () {
  const squares1 = document.getElementsByClassName('square')
  for (let m = 0; m < squares1.length; m++) {
    squares1[m].classList.remove('unclickable')
  }
  console.log('start new game!')
}

const newGameButtonLockedAtStart = $('#new').addClass('unclickable')
console.log('newGameButtonLockedAtStart')

// function unlockNewGameButton () {
//   // if signInSuccess then
//   $('#new').classList.remove('unclickable')
// }

module.exports = {
  addHandlers,
  unlockBoard
}
