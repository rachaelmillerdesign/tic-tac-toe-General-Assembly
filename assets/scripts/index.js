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

  /* const onClick = function (e) {
    // with e.target.id, find a way to strip out the letter
    // convert that string to an integer, and use it to
    // write to emptyBoard at that index with whoever
    // the current player is
    console.log(e.target.id)
    $(this).text(currentPlayer)
    alternateTurns()
  }
  */

  $('.square').on('click', function (e) {
    console.log(e.target.id)
  })

  $.each(['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'], function (i, l) {
    console.log('Index #' + i + ':' + l)
  })

let emptyBoard = ['', '', '', '', '', '', '', '', '']

let currentBoard = [''].map(x => 9)
  console.log(currentBoard)

// let currentBoard = emptyBoard.split(',').map(Number)

/* $('emptyBoard').on('click', 'square', function(event) {
    let $square = $(event.currentTarget)
    $square.addclass('square-' + currentPlayer)
    console.log(emptyBoard)

  $('emptyBoard').on('click', function () {
    console.log('Ive been clicked!')
  }) */
})
