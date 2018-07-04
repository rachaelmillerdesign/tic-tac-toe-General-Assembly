'use strict'

// const play = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log(data)
//   console.log(data.form)
// $('#myModal').modal('show')
// $('#myModal').modal(console.log('I am here!'))
// }

// const userSignedIn = function (e) {
//   event.preventDefault()
//   ui.signUpSuccess
//   then(/../index.toggleBoardLocked)
// }
// signUp.addEventListener('click', function() {
//   $toggle.square.unclickable
// })

// const boardLockedAtStart = $('.square').addClass('unclickable')
// console.log('boardLockedAtStart')

// ~~~~~~~~~~~~~~~~~~~~~
// UNLOCK BOARD IF SIGN UP / SIGN IN
// ~~~~~~~~~~~~~~~~~~~~~
// const toggleBoardLocked = function () {
//   const element = document.getElementsByClassName('unclickable')
//   element.classList.toggle('unclickable')
// }

// function eventHandler(e) {
//   if (ui.signInSuccess = true)
//     (('.unclickable').toggle())
// }

// signUp.addEventListener('click', 'signUpSuccess'[, useCapture])
// toggleBoardLocked

// $(document).ready(function () {
//   $('#signInSuccess').click(function () {
//     $('.unclickable').toggle()
//   })
// })

// let unlockBoard = function (e) {
//   if ( (.signInSuccess) || (.signUpSuccess) == true) {
//     toggleBoardLocked('unclickable')
//   }
//   console.log('unlocked')
// }

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

module.exports = {
  addHandlers
}
