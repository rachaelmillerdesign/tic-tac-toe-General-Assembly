'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  let currentPlayer = 'X'

  const alternateTurns = function () {
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
  }

  let emptyBoard = ['', '', '', '', '', '', '', '', '']

  const onClickCallBack = function (e) {
    // console.log(e.target.id)
    const cellid = parseInt(e.target.id)
    emptyBoard[cellid] = currentPlayer
    // console.log(emptyBoard)
    $(this).text(currentPlayer)
    alternateTurns()
    // console.log(currentPlayer)
  }

  $('.square').on('click', onClickCallBack)



  // console.log(gameBoard)
  //console.log(emptyBoard)
})
