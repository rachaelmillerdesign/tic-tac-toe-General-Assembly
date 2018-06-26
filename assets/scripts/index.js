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
    console.log(e.target.id)
    $(this).text(currentPlayer)
    alternateTurns()
    console.log(currentPlayer)
  }

  $('.square').on('click', onClickCallBack)

let emptyBoard = ['', '', '', '', '', '', '', '', '']

  $('.emptyBoard').on('click', function () {
    console.log('I am here!')
  })
})
