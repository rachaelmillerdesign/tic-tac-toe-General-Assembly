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
  // console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
//  console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
//  console.log('events sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password ran!')

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
  // console.log('onCreateGame ran!')

  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const onUpdateGame = function (cellId, currentPlayer, gameOver) {
  event.preventDefault()
  api.updateGame(cellId, currentPlayer, gameOver)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()
  // console.log('onGetGames ran')

  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

const onGetUnfinishedGames = function (event) {
  event.preventDefault()
  // console.log('onGetUnfinishedGames ran')

  api.getUnfinishedGames()
    .then(ui.getUnfinishedGamesSuccess)
    .catch(ui.getUnfinishedGamesFailure)
}

// const getGameId = function (event) {
//   console.log(event)
//   console.log('in getGameId')
//   console.log(event.currentTarget.parentElement.parentElement.firstChild.innerHTML)
//   api.getSingleGame(event.currentTarget.parentElement.parentElement.firstChild.innerHTML)
// }

const onResumeGame = function (event) {
  console.log('in onResumeGame')
  event.preventDefault()
  // console.log('onResumeGame ran')

  api.getSingleGame()
    .then(ui.getSingleGameSuccess)
    .catch(ui.getSingleGameFailure)
}

// ~~~~~~~~~~~~~~~~~~~~~~
//  ADD HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~
const onClickCallback = function (e) {
  // console.log(e.target.id)
  const cellId = parseInt(e.target.id)
  game.gameLogic.emptyBoard[cellId] = game.gameLogic.currentPlayer
  const gameOver = game.isGameOver(game.gameLogic.currentPlayer, game.gameLogic.emptyBoard)
  // console.log(game.gameLogic.emptyBoard)
  // $(this).text(game.gameLogic.currentPlayer)
  $(this).addClass('unclickable')
  onUpdateGame(cellId, game.gameLogic.currentPlayer, gameOver)
  let targetImage
  // console.log(game.gameLogic.currentPlayer)
  if (game.gameLogic.currentPlayer === 'x') {
    targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg")'
  } else if (game.gameLogic.currentPlayer === 'o') {
    targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/O.jpg")'
  }
  game.gameLogic.currentPlayer = game.alternateTurns(game.gameLogic.currentPlayer)
//  console.log($(this))
  return $(this).css('background-image', targetImage)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#signOutNav').on('click', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#playNav').on('click', onCreateGame)
  $('.square').on('click', onClickCallback)
  $('#getGamesNav').on('click', onGetGames)
  $('#getUnfinishedGamesNav').on('click', onGetUnfinishedGames)
  $('#playAgainNav').on('click', onCreateGame)
}

// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  addHandlers,
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreateGame,
  onUpdateGame,
  onGetGames,
  onGetUnfinishedGames,
  onResumeGame
}
