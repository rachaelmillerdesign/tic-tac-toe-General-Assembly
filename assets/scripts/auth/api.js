'use strict'

const config = require('../config')
const store = require('../store')

// ~~~~~~~~~~~~~~~~~~~~
//  SIGN UP SIGN IN API
// ~~~~~~~~~~~~~~~~~~~~

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrls + '/sign-up',
    method: 'POST',
    data
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrls + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrls + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrls + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
    // data: data
  })
}

// ~~~~~~~~~~~~~~~~~~~~
// CREATE GAME API
// ~~~~~~~~~~~~~~~~~~~~

const index = function () {
  return $.ajax({
    url: config.apiUrls + '/games',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiUrls + '/games/' + store.game.id,
    method: 'GET'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiUrls + '/games/' + store.game.id,
    method: 'PATCH',
    data
  })
}

const createGame = function (data) {
  return $.ajax({
    url: config.apiUrls + /games/,
    // ${config.apiUrls}/games/`
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~
// NEW FORMS
// ~~~~~~~~~~~~~~~~~~~~~~

const updateGame = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrls + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrls + '/games/:id',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  show,
  update,
  getGames,
  updateGame,
  createGame
}
