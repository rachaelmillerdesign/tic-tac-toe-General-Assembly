'use strict'

const config = require('../config')
const store = require('../store')

// ~~~~~~~~~~~~~~~~~~~~
//  SIGN UP SIGN IN API
// ~~~~~~~~~~~~~~~~~~~~

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
//  console.log('api sign in ran')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
//  console.log('api sign out ran')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  // console.log('in changePassword and the data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// ~~~~~~~~~~~~~~~~~~~~
// CREATE GAME API
// ~~~~~~~~~~~~~~~~~~~~

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~
// NEW FORMS
// ~~~~~~~~~~~~~~~~~~~~~~

const updateGame = function (cellid, currentPlayer, gameOver) {
  // console.log(store.data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cellid,
          'value': currentPlayer
        },
        'over': gameOver
      }
    }
  })
}

const getGames = function () {
  // console.log('in getGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getUnfinishedGames = function () {
  // console.log('in getUnfinishedGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games?over=false',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getSingleGame = function (data) {
  console.log('in getSingleGame')
// store.data = game.data
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateSingleGame = function (data) {
//  console.log('inside api.editTasting and the data is', data)
  return $.ajax({
    url: config.apiUrl + 'games/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// const index = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  // index,
  getGames,
  updateGame,
  createGame,
  getUnfinishedGames,
  getSingleGame,
  updateSingleGame
}
