'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
// const gamesApi = require('./api.js')
// const gamesUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

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
// ~~~~~~~~~~~~~~~~~~~~~~`
//  ADD HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~`
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

const onGetGames = function (event) {
  event.preventDefault()
  gamesApi.index()
    .then(gamesUi.onSuccess)
    .catch(gamesUi.onError)
}

const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  if (game.id.length !== 0) {
    gamesApi.show(game.id)
      .then(gamesUi.onSuccess)
      .catch(gamesUi.onError)
  } else {
    console.log('Please provide a game id!')
  }
}

// const onDeletegame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const game = data.game
//   if (game.id.length !== 0) {
//     gamesApi.destroy(game.id)
//       .then(gamesUi.onDeleteSuccess)
//       .catch(gamesUi.onError)
//   } else {
//     console.log('Please provide a game id!')
//   }
// }

const onUpdategame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const game = data.game
  if (game.title === '') {
    // alert('title required')
    $('#content').html('<p>Title is required</p>')
    $('#content').css('background-color', 'red')
    return false
  }
  if (game.id.length !== 0) {
    gamesApi.update(data)
      .then(gamesUi.onUpdateSuccess)
      .catch(gamesUi.onError)
  } else {
    console.log('Please provide a game id!')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  addHandlers,
  unlockBoard,
  onGetGames,
  onGetGame,
  // onDeleteGame,
  // onUpdateGame
}
