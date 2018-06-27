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

// const xoToBoard = function() {
//  if currentPlayer === 'X' then emptyBoard.arr = x
//  else emptyBoard.arr = o
//}


//.square = currentPlayer.text

  //const showMove = function () {
  //  console.log(currentPlayer())
  //}

  //const showMove = function () {
  //  console.log($(this).text(currentPlayer))
  //}
  //note: this below constructs the change player function
  const onClickCallBack = function (e) {
    // with e.target.id, find a way to strip out the letter
    // convert that string to an integer, and use it to
    // write to emptyBoard at that index with whoever
    // the current player is
    console.log(e.target.id)
    $(this).text(currentPlayer)
    alternateTurns()
    console.log(currentPlayer)
  }

  $('.square').on('click', onClickCallBack)

  //$.each(['s0', 's1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'], function (i, l) {
    //console.log('Index #' + i + ':' + l)
  //})

let emptyBoard = ['', '', '', '', '', '', '', '', '']

for ( i = 0; i < emptyBoard.length; i++ ) {
//if click = '' then add x or o
  onClickCallBack.id === null
  then null = currentPlayer
  //then e.target.id = currentPlayer

  this.emptyBoard = this.currentBoard

// (emptyBoard.splice(onClickCallBack.currentBoard.id,1, )
// $('.emptyBoard').on('click', function () {
// console.log('I am here!')
// })

})

//{
//  console.log(e.target.id)
//  console.log(currentPlayer)
//}
