'use strict'

const store = require('../store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#message').css('background-color', 'green')
  $('#square').removeClass('unclickable')
  $('#new').removeClass('unclickable')
  console.log('signUpSuccess ran. Data is :', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').css('background-color', 'red')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#message').css('background-color', 'green')
  $('#square').removeClass('unclickable')
  $('#new').removeClass('unclickable')
  console.log('signInSuccess ran. Data is :', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').css('background-color', 'red')
  console.error('signInFailure ran. Error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  $('#message').css('background-color', 'green')
  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').css('background-color', 'red')
  console.error('signOutFailure ran. Error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  $('#message').css('background-color', 'green')
  console.log('changePasswordSuccess ran and nothing was returned!')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  $('#message').css('background-color', 'red')
  console.error('changePasswordFailure ran. Error is :', error)
}

// ~~~~~~~~~~~~~~~~~~~~~~~
//   GAME API
// ~~~~~~~~~~~~~~~~~~~~~~~

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    // console.warn('Either you deleted something, or something went wrong.')
  } else if (data.game) {
    console.log(data.game)
  } else {
    console.table(data.game)
  }
}

const onError = function (response) {
  console.error(response)
}

const onDeleteSuccess = function () {
  console.log('Game was successfully deleted.')
}

const onUpdateSuccess = function () {
  console.log('You successfully updated the game!')
  $('#content').html('')
}

// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  onSuccess,
  onError,
  onDeleteSuccess,
  onUpdateSuccess
}
