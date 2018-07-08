'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// ~~~~~~~~~~~~~~~~~~~~~
// ON DOCUMENT READY
// ~~~~~~~~~~~~~~~~~~~~~

const authEvents = require('./auth/events.js')
const gameEvents = require('./auth/events.js')

$(() => {
  authEvents.addHandlers()
  // $('#games-search').on('submit', gameEvents.onGetGames)
  // $('#game-search').on('submit', gameEvents.onGetGame)
  // $('#game-update').on('submit', gameEvents.onUpdateGame)
  // $('#game-create').on('submit', gameEvents.onupdateGame)
  // $('#game-new').on('submit', gameEvents.onCreateGame)
})
