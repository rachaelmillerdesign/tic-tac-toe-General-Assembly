'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const examplesEvents = require('./examples/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
  examplesEvents.addHandlers()
})

// $(() => {
//   $('#name-form').on('submit', events.onSubmitForm)
// })

$(() => {
  let currentPlayer = 'x'

  const alternateTurns = function () {
    if (currentPlayer === 'x') {
      currentPlayer = 'o'
    } else {
      currentPlayer = 'x'
    }
  }

  let emptyBoard = ['', '', '', '', '', '', '', '', '']

  const onClickCallBack = function (e) {
    console.log(e.target.id)
    const cellid = parseInt(e.target.id)
    emptyBoard[cellid] = currentPlayer
    win()
    console.log(emptyBoard)
    // $('click', onClickCallBack).addClass('unclickable')
    $(this).text(currentPlayer)
    $(this).addClass('unclickable')
    alternateTurns()
    console.log(currentPlayer)
  }

  $('.square').on('click', onClickCallBack)

  let i
  let j
  let currentWin
  let won
  let draw

  const possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

  let win = function () {
    for (i = 0; i < possibleWins.length; i++) {
      currentWin = possibleWins[i]
      won = true
      for (j = 0; j < currentWin.length; j++) {
        if (emptyBoard[currentWin[j]] !== currentPlayer) {
          won = false
        }
      }
      if (won === true) {
        console.log(currentPlayer + ' has won!')
      } else {
        draw = true
        for (i = 0; i < emptyBoard.length; i++) {
          if (emptyBoard[i] === '') {
            draw = false
          }
        }
        if (draw === true) {
          console.log("It's a draw!")
        }
      }
    }
  }

  // for (i = 0; i < gameBoard.length; i++) {
})
