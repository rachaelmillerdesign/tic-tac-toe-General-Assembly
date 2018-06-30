'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

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

/* let unclickable = function() {
    for (i=0; i=emptyBoard.length; i++) {
      if (emptyBoard[i] !== "") {
        $(i).addClass('.unclickable')
      }
    }
  } */

  let i
  let j
  let currentWin
  let won
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
      }
    }
  }

  // for (i = 0; i < gameBoard.length; i++) {
})
