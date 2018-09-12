'use strict'

const store = require('../store')
const api = require('./api')
const game = require('../game')
const modals = require('../modals.js')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', '#ceff5e')
  // setTimeout(hideMessage, 2000)
  $('#playNav').removeClass('unclickable')
  $('#signOutNav').removeClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  $('#sign-up')[0].reset()
  setTimeout(modals.closeSignUpModal, 2000)
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', '#ff9226')
  $('#sign-up')[0].reset()
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeSignUpModal, 2000)
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', '#ceff5e')
  // setTimeout(hideMessage, 2000)
  $('#playNav').removeClass('unclickable')
  $('#signOutNav').removeClass('hidden')
  $('#signInNav').addClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  $('#sign-in')[0].reset()
  setTimeout(modals.closeSignInModal, 2000)
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', '#ff9226')
  $('#sign-in')[0].reset()
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeSignInModal, 2000)
  console.log('signInFailure ran. Error is :', error)
}

const signOutSuccess = function (data) {
//  console.log('ui signoutsuccess ran')
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', '#ceff5e')
  // setTimeout(hideMessage, 2000)
  game.clearBoard()
  $('#playNav').addClass('unclickable')
  $('#signInNav').removeClass('hidden')
  $('#signUpNav').removeClass('hidden')
  $('#signOutNav').addClass('hidden')
  $('#changePasswordNav').addClass('hidden')
  setTimeout(modals.closeSignOutModal, 2000)
//  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', '#ff9226')
  $('#sign-out')[0].reset()
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeSignOutModal, 2000)
  console.log('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', '#ceff5e')
  $('#change-password')[0].reset()
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeChangePasswordModal, 2000)
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', '#ff9226')
  $('#change-password')[0].reset()
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeChangePasswordModal, 2000)
  console.log('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (data) {
  $('#message').text('New game created successfully')
  $('#message').css('background-color', '#ceff5e')
  game.clearBoard()
  game.unlockBoard()
  // setTimeout(hideMessage, 2000)
  // setTimeout(modals.closeChangePasswordModal, 2000)
  // console.log('newGameSuccess ran and nothing was returned!', data)
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#message').text('Error on create new game')
  $('#message').css('background-color', '#ff9226')
  // setTimeout(hideMessage, 2000)
  console.log('newGameFailure ran. Error is :', error)
}

const updateGameSuccess = function (data) {
  // $('#message').text('New game created successfully')
  // $('#message').css('background-color', '#ceff5e')
  // setTimeout(hideMessage, 2000)
  // console.log('newGameSuccess ran and nothing was returned!')
  store.game = data.game
}

const updateGameFailure = function (error) {
  $('#message').text('Error on create new game')
  $('#message').css('background-color', '#ff9226')
  // setTimeout(hideMessage, 2000)
  console.log('updateGameFailure ran. Error is :', error)
}

const getGamesSuccess = function (data) {
  // console.log('getGamesSuccess ran.', data)
  $('#getGamesModal').append(data.games.length)
  $('#getGamesModal').removeClass('hidden')
  setTimeout(modals.closeGetGamesModal, 2000)
  store.game = data.game
}

const getGamesFailure = function () {
  $('#message').text('Error on get games.')
  $('#message').css('background-color', '#ff9226')
  console.log('getGamesFailure ran. Error is :')
}

const getSingleGameSuccess = function (data) {
  console.log('getGamesSuccess ran.', data)
  $('#getGamesModal').removeClass('hidden')
  setTimeout(modals.closeGetGamesModal, 2000)
  game.processGame()
  store.game = data.game
}

const getSingleGameFailure = function () {
  $('#message').text('Error on get single game')
  $('#message').css('background-color', '#ff9226')
  console.log('getSingleGameFailure ran. Error is :')
}

const getUnfinishedGamesFailure = function () {
  $('#message').text('Error on get unfinished games.')
  $('#message').css('background-color', '#ff9226')
  console.log('getUnfinishedGamesFailure ran. Error is :')
}

function errorReadingGame (data) {
  console.log('Error Reading Game')
}

const getGameId = function (event) {
  console.log(event)
  console.log('in getGameId')
  console.log(event.currentTarget.parentElement.parentElement.firstChild.innerHTML)

  api.getSingleGame(event.currentTarget.parentElement.parentElement.firstChild.innerHTML)
    .then(game.processGame)
    .catch(errorReadingGame)
}

const getUnfinishedGamesSuccess = function (data) {
  // const unfinishedGamesData = ['game', 'cell', 'index', 'over']
  const table = document.createElement('table')
  let tableRow = document.createElement('tr')
  let tableData = document.createElement('th')
  $('#getUnfinishedGamesModal').removeClass('hidden')
  tableData.innerHTML = 'GAME ID'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = 'MOVES'
  tableRow.appendChild(tableData)
  tableData = document.createElement('th')
  tableData.innerHTML = ''
  // tableData.appendChild(tableData)
  // tableData = document.createElement('th')
  tableRow.appendChild(tableData)
  table.appendChild(tableRow)
  for (let row = 0; row < data.games.length; row++) {
    let tableRow = document.createElement('tr')
    let tableData = document.createElement('td')
    tableData.innerHTML = data.games[row]['id']
    tableRow.appendChild(tableData)
    tableData = document.createElement('td')
    tableData.innerHTML = data.games[row]['cells']
    tableRow.appendChild(tableData)
    tableData = document.createElement('button')
    tableData.innerHTML = "<button type ='button' class ='resume'>RESUME GAME</button>"
    tableRow.appendChild(tableData)
    table.appendChild(tableRow)
    // $('#getUnfinishedGamesModal').append('<p>ID: ' + data.games[i].id + ' </p> <p>Game Squares:' + data.games[i].cells + '</p>')
    store.game = data.game
  }
  document.getElementById('getUnfinishedGamesModal').appendChild(table)
  $('.resume').on('click', getGameId)
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getGamesSuccess,
  getGamesFailure,
  getUnfinishedGamesSuccess,
  getUnfinishedGamesFailure,
  getSingleGameSuccess,
  getSingleGameFailure,
  getGameId
}
