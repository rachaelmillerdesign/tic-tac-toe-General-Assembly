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

  const onClickCallBack = function (e) {
    // console.log(e.target.id)
    $(this).text(currentPlayer)
    alternateTurns()
    // console.log(currentPlayer)
  }

  $('.square').on('click', onClickCallBack)

  let emptyBoard = ['', '', '', '', '', '', '', '', '']

  //const boardGameInProgress = function {

  //}

  //const pushMovesToBoard = function {
//    onClickCallBack('click')
  //  currentPlayer(event.target.id) =
  //}
  //const winningCombinations:
  //[[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]

  //const checkForWin = function() []
  // $('.emptyBoard').on('click', function () {
  //   console.log('I am here!')
  // })
})
