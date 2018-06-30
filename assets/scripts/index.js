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
    console.log(emptyBoard)
    $(this).text(currentPlayer)
    alternateTurns()
    console.log(currentPlayer)
  }

  $('.square').on('click', onClickCallBack)

  let gameBoard = function {

  }

  this.emptyBoard = this.gameBoard

  const possibleWins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]

  let win = function () {
    possibleWins.innerHTML === cellid[x, x, x] || [o, o, o]
    console.log("WIN!")
  }

  // any ooo or xxx that matches the sub arrays
  // let i

  // for (i = 0; i < gameBoard.length; i++) {
  // let possibleWins === 'x,x,x' || 'o,o,o'
  // console.log(gameBoard)
  // console.log(emptyBoard) */
})
