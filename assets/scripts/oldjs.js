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

____________________


// construct empty board and current board.
  // let emptyBoard = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
  let emptyBoard = ['', '', '', '', '', '', '', '', '']
  let gameBoard = ['', '', '', '', '', '', '', '', '']

  // I have tried to follow the correct syntax:
  // onClickCallBack  emptyBoard.map(insert(currentValue[,index[,array]]))[]

  function addClickToGameBoard () {
    emptyBoard.splice(onClickCallBack(0, 1))
  }
  $('.emptyBoard').on(addClickToGameBoard)

  function currentGame (gameBoard) {
    this.gameBoard = emptyBoard.map.bind
    event.preventDefault()
  }
  // return element to new array
  console.log(gameBoard)
  // console.log(emptyBoard)

// const gameBoard = function () {
  // $(this).array(emptyBoard)
  // console.log(gameBoard)
  // }
  // var gameBoard = arr.map(function onClickBoard(currentValue[,index[,array]]))[]
  // const boardupdateGame = function {
  // }

  // (currentPlayer => gameBoard)
  // $.data($('gameBoard').get(0), 'e.target.id', 'currentPlayer')
  // const pushMovesToBoard = function {
  //  onClickCallBack('click')
  //  currentPlayer(event.target.id) =
  //

  // const winningCombinations:
  // [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]]

  // const checkForWin = function() []
  // $('.emptyBoard').on('click', function () {
  //   console.log('I am here!')
  // })
})
________________________
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

previously working:
let emptyBoard = ['', '', '', '', '', '', '', '', '']
  let gameBoard = []

  const onClickCallBack = function (e) {
    event.preventDefault()
    emptyBoard.splice(e.target.id, 1, 'currentPlayer')
    // console.log(e.target.id)
    $(this).text(currentPlayer)
    alternateTurns()
    // console.log(currentPlayer)
  }
  emptyBoard = this.gameBoard

  $('.square').on('click', onClickCallBack)

  console.log(gameBoard)
  console.log(emptyBoard)
