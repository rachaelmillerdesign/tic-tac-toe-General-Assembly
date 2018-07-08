'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const game = require('../game.js')
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
// ~~~~~~~~~~~~~~~~~~~~~~
//  NEW GAME, UPDATE GAME, GAME STATS
// ~~~~~~~~~~~~~~~~~~~~~~
const onCreateGame = function (event) {
  event.preventDefault()
  game.onClickCallBack()
  console.log('onCreateGame ran!')

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onupdateGame = function (event) {
  event.preventDefault()
  const data = game.gameValues
  api.updateGame(data.i, data.v, data.isOver)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameSuccess)
}

// ~~~~~~~~~~~~~~~~~~~~~~
//  ADD HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#game-new').on('click', onCreateGame)
  $('#game-progress').on('submit', onupdateGame)
}

// // ~~~~~~~~~~~~~~~~~~~~~
// // GET SCORES
// // ~~~~~~~~~~~~~~~~~~~~~
//
// const getScores = function (e) {
//   document.getElementById('getGames')
//   addEventListener('click', 'getGames')
//   console.log('getting games')
// }

// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  addHandlers
}
