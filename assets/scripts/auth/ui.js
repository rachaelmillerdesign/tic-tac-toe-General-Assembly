'use strict'

const store = require('../store')
// const events = require('./events')
const game = require('../game')

const hideMessage = function () {
  $('#message').hide()
}

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 3000)
  $('#game-new').removeClass('unclickable')
  $('#signOutNav').removeClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  $('#sign-up')[0].reset()
  // console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 3000)
  setTimeout(closeSignUpModal, 3000)
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 3000)
  $('#game-new').removeClass('unclickable')
  $('#signOutNav').removeClass('hidden')
  $('#signInNav').addClass('hidden')
  $('#signUpNav').addClass('hidden')
  $('#changePasswordNav').removeClass('hidden')
  game.startGamebutton()
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 3000)
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 3000)
  $('#signInNav').removeClass('hidden')
  $('#signUpNav').removeClass('hidden')
  $('#signOutNav').addClass('hidden')
  $('#changePasswordNav').addClass('hidden')
  $('#sign-up')[0].reset()
  // console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 3000)
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 3000)
  // console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 3000)
  console.error('changePasswordFailure ran. Error is :', error)
}

const createGameSuccess = function (data) {
  $('#message').text('New game created successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 3000)
  // console.log('newGameSuccess ran and nothing was returned!', data)
  store.game = data.game
}

const createGameFailure = function (error) {
  $('#message').text('Error on create new game')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 3000)
  console.error('newGameFailure ran. Error is :', error)
}

const updateGameSuccess = function () {
  $('#message').text('New game created successfully')
  $('#message').css('background-color', '#ceff5e')
  setTimeout(hideMessage, 3000)
  // console.log('newGameSuccess ran and nothing was returned!')
}

const updateGameFailure = function (error) {
  $('#message').text('Error on create new game')
  $('#message').css('background-color', '#ff9226')
  setTimeout(hideMessage, 3000)
  console.error('newGameFailure ran. Error is :', error)
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
  updateGameFailure
}
