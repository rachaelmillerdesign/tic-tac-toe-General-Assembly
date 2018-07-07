'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

// ~~~~~~~~~~~~~~~~~~~~~~`
//  FORM FIELD FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~`

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

// const onGetGames = function (event) {
//   event.preventDefault()
//   api.index()
//     .then(gamesUi.onSuccess)
//     .catch(gamesUi.onError)
// }
//
// const onGetGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   if (game.id.length !== 0) {
//     api.show(game.id)
//       .then(gamesUi.onSuccess)
//       .catch(gamesUi.onError)
//   } else {
//     console.log('Please provide a game id!')
//   }
// }
//
// const onUpdategame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   if (game.title === '') {
//     // alert('title required')
//     $('#content').html('<p>Title is required</p>')
//     $('#content').css('background-color', 'red')
//     return false
//   }
//   if (game.id.length !== 0) {
//     api.update(data)
//       .then(gamesUi.onUpdateSuccess)
//       .catch(gamesUi.onError)
//   } else {
//     console.log('Please provide a game id!')
//   }
// }
// ~~~~~~~~~~~~~~~~~~~~~~
//  ADD HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
}

// ~~~~~~~~~~~~~~~~~~~~~
// GET SCORES
// ~~~~~~~~~~~~~~~~~~~~~

const getScores = function (e) {
  document.getElementById('getGames')
  addEventListener('click', 'getGames')
  console.log('getting games')
}

// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  addHandlers
  // onGetGames,
  // onGetGame,
  // onUpdateGame
}
