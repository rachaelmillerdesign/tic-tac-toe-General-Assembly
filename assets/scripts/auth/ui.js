'use strict'

const store = require('../store')
// const events = require('./events')
// const game = require('../game')

const hideMessage = function () {
  $('#message').hide()
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 2000)
  $('#playNav').removeClass('unclickable')
  $('#signOutNav').removeClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  $('#sign-up')[0].reset()
  setTimeout(closeSignUpModal, 2000)
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 2000)
  setTimeout(closeSignUpModal, 2000)
  console.log('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 2000)
  $('#playNav').removeClass('unclickable')
  $('#signOutNav').removeClass('hidden')
  $('#signInNav').addClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  setTimeout(closeSignInModal, 2000)
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 2000)
  setTimeout(closeSignInModal, 2000)
  console.log('signInFailure ran. Error is :', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 2000)
  $('#signInNav').removeClass('hidden')
  $('#signUpNav').removeClass('hidden')
  $('#signOutNav').addClass('hidden')
  $('#changePasswordNav').addClass('hidden')
  $('#sign-up')[0].reset()
  setTimeout(closeSignOutModal, 2000)
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 2000)
  setTimeout(closeSignOutModal, 2000)
  console.log('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 2000)
  setTimeout(closeChangePasswordModal, 2000)
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 2000)
  setTimeout(closeChangePasswordModal, 2000)
  console.log('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (data) {
  $('#message').text('New game created successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 2000)
  setTimeout(closeChangePasswordModal, 2000)
  // console.log('newGameSuccess ran and nothing was returned!', data)
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#message').text('Error on create new game')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 2000)
  console.log('newGameFailure ran. Error is :', error)
}

const updateGameSuccess = function () {
  $('#message').text('New game created successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 2000)
  // console.log('newGameSuccess ran and nothing was returned!')
}

const updateGameFailure = function (error) {
  $('#message').text('Error on create new game')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 2000)
  console.log('updateGameFailure ran. Error is :', error)
}

const getGamesSuccess = function (data) {
  console.log('getGamesSuccess ran.', data)
  $('#getGamesModal').append(data.games.length)
  $('#getGamesModal').toggle('hidden')
  setTimeout(closeGetGamesModal, 2000)
}

const getGamesFailure = function () {
  console.log('getGamesFailure ran. Error is :')
}

const getUnfinishedGamesSuccess = function (data) {
  $('#getUnfinishedGamesModal').toggle('hidden')
  for (let i = 0; i < data.games.length; i++) {
    $('#getUnfinishedGamesModal').append('<p>ID: ' + data.games[i].id + ' </p> <p>Game Squares:' + data.games[i].cells + '</p>')
    // console.log(data.games[i])
  }
}
// setTimeout(closeGetUnfinishedGamesModal, 2000)

const getUnfinishedGamesFailure = function () {
  console.log('getUnfinishedGamesFailure ran. Error is :')
}
// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN UP MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const signUpModal = document.getElementById('signUpModal')
// Get modal button
const signUpNav = document.getElementById('signUpNav')
const closeSignUpBtn = document.getElementById('closeSignUpBtn')
// Listen for Click
$('#signUpNav').on('click', openSignUpModal)
$('#closesignUpBtn').on('click', closeSignUpModal)
// Listen for click outside of modal
$('window').on('click', clickOutsideSignUp)
// Functions that open and close modal
function openSignUpModal () {
  signUpModal.style.display = 'block'
}
function closeSignUpModal () {
  signUpModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideSignUp (e) {
  if (e.target === signUpModal) {
    signUpModal.style.display = 'none'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN IN MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const signInModal = document.getElementById('signInModal')
// Get modal button
const signInNav = document.getElementById('signInNav')
const closeSignInBtn = document.getElementById('closeSignInBtn')
// Listen for Click
$('#signInNav').on('click', openSignInModal)
$('#closeSignInBtn').on('click', closeSignInModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideSignIn)
// Functions that open and close modal
function openSignInModal () {
  signInModal.style.display = 'block'
}
function closeSignInModal () {
  signInModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideSignIn (e) {
  if (e.target === signInModal) {
    signInModal.style.display = 'none'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN OUT MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const signOutModal = document.getElementById('signOutModal')
// Get modal button
const signOutNav = document.getElementById('signOutNav')
const closeSignOutBtn = document.getElementById('closeSignOutBtn')
// Listen for Click
$('#signOutNav').on('click', openSignOutModal)
$('#closeSignOutBtn').on('click', closeSignOutModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideSignOut)
// Functions that open and close modal
function openSignOutModal () {
  signOutModal.style.display = 'block'
}
function closeSignOutModal () {
  signOutModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideSignOut (e) {
  if (e.target === signOutModal) {
    signOutModal.style.display = 'none'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// CHANGE PASSWORD MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const changePasswordModal = document.getElementById('changePasswordModal')
// Get modal button
const changePasswordNav = document.getElementById('changePasswordNav')
const closeChangePasswordBtn = document.getElementById('closeChangePasswordBtn')
// Listen for Click
$('#changePasswordNav').on('click', openChangePasswordModal)
$('#closeChangePasswordBtn').on('click', closeChangePasswordModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideChangePassword)
// Functions that open and close modal
function openChangePasswordModal () {
  changePasswordModal.style.display = 'block'
}
function closeChangePasswordModal () {
  changePasswordModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideChangePassword (e) {
  if (e.target === changePasswordModal) {
    changePasswordModal.style.display = 'none'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const getGamesModal = document.getElementById('getGamesModal')
// Get modal button
const getGamesNav = document.getElementById('getGamesNav')
const closeGetGamesBtn = document.getElementById('closeGetGamesBtn')
// Listen for Click
$('#getGamesNav').on('click', openGetGamesModal)
$('#closeGetGamesBtn').on('click', closeGetGamesModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideGetGames)
// Functions that open and close modal
function openGetGamesModal () {
  getGamesModal.style.display = 'block'
}
function closeGetGamesModal () {
  getGamesModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideGetGames (e) {
  if (e.target === getGamesModal) {
    getGamesModal.style.display = 'none'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET UNFINISHED GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const getUnfinishedGamesModal = document.getElementById('getUnfinishedGamesModal')
// Get modal button
const getUnfinishedGamesNav = document.getElementById('getUnfinishedGamesNav')
const closeGetUnfinishedGamesBtn = document.getElementById('closeUnfinishedGamesBtn')
// Listen for Click
$('#getUnfinishedGamesNav').on('click', openGetUnfinishedGamesModal)
$('#closeGetUnfinishedGamesBtn').on('click', closeGetUnfinishedGamesModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideGetUnfinishedGames)
// Functions that open and close modal
function openGetUnfinishedGamesModal () {
  getUnfinishedGamesModal.style.display = 'block'
}
function closeGetUnfinishedGamesModal () {
  getUnfinishedGamesModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideGetUnfinishedGames (e) {
  if (e.target === getUnfinishedGamesModal) {
    getUnfinishedGamesModal.style.display = 'none'
  }
}
// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signInNav,
  closeSignInBtn,
  openSignInModal,
  closeSignInModal,
  clickOutsideSignIn,
  signUpNav,
  closeSignUpBtn,
  openSignUpModal,
  closeSignUpModal,
  clickOutsideSignUp,
  signOutNav,
  openSignOutModal,
  closeSignOutBtn,
  closeSignOutModal,
  clickOutsideSignOut,
  openChangePasswordModal,
  changePasswordNav,
  closeChangePasswordBtn,
  closeChangePasswordModal,
  clickOutsideChangePassword,
  getGamesNav,
  closeGetGamesBtn,
  openGetGamesModal,
  closeGetGamesModal,
  clickOutsideGetGames,
  getUnfinishedGamesNav,
  closeGetUnfinishedGamesBtn,
  openGetUnfinishedGamesModal,
  closeGetUnfinishedGamesModal,
  clickOutsideGetUnfinishedGames,
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
  getUnfinishedGamesFailure
}
