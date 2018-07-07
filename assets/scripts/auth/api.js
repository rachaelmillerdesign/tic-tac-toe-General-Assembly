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
    // data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
    // data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassword = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
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
    url: config.apiOrigin + '/games',
    method: 'GET'
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'GET'
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + id,
    method: 'DELETE'
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    data
  })
}

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    data
  })
}
// ~~~~~~~~~~~~~~~~~~~~~~
// NEW FORMS
// ~~~~~~~~~~~~~~~~~~~~~~

const createGame = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateGame = function (index, value, over) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'x'
        },
        'over': false
      }
    }
  })
}

const getGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
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
  destroy,
  update,
  create,
  updateGame,
  createGame,
  getGames
}
