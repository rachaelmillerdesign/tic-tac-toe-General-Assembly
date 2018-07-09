const api = require('./auth/api')
const store = require('./store.js')
const gameEvents = require('./auth/events')

// ~~~~~~~~~~~~~~~~~~~~~
// VARIABLES & CONSTANTS
// ~~~~~~~~~~~~~~~~~~~~~

let currentPlayer = 'x'
let emptyBoard = ['', '', '', '', '', '', '', '', '']
let i
let j
let q
let currentWin
let won
let draw
const possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]]

// ~~~~~~~~~~~~~~~~~~~~~
// ALTERNATE TURNS
// ~~~~~~~~~~~~~~~~~~~~~
const alternateTurns = function () {
  if (currentPlayer === 'x') {
    currentPlayer = 'o'
  } else {
    currentPlayer = 'x'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~
// WIN FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~

const isGameOver = function () {
  for (q = 0; q < possibleWins.length; q++) {
    currentWin = possibleWins[q]
    // console.log('For' + currentPlayer + 'currentWin: ' + currentWin)
    won = true
    for (j = 0; j < currentWin.length; j++) {
      if (emptyBoard[currentWin[j]] !== currentPlayer) {
        won = false
      }
    }
    if (won === true) {
      console.log(currentPlayer + ' has won!')
      // $('.square').addClass('unclickable')
      return true
    }
  }
  if (won === false) {
    draw = true
    for (i = 0; i < emptyBoard.length; i++) {
      if (emptyBoard[i] === '') {
        draw = false
      }
    }
    if (draw === true) {
      console.log("It's a tie!")
      // $('.square').addClass('unclickable')
      return true
    }
    else {
      return false
    }
  }
}
// const delayMessage = function () {
//   setTimeout(3000)
//   if (won === true || draw === true) {
//     console.log('Play again?')
//   }
// }
// ~~~~~~~~~~~~~~~~~~~~~
// CALL BACK / ADD CURRENT PLAYER X OR O
// ~~~~~~~~~~~~~~~~~~~~~
// let value
// let index
// const currentBoard = (api.game)
// const over = $(this).win
//
// const startGame = function (event) {
//   $('.square').on('click', startGame)
//   // console.log($(this).id)
//   $(this).onclick = (api.index, api.value)
//   $(this).index = parseInt
//   $(this).text(currentPlayer)
//   $(this).currentPlayer = api.value
//   $(this).emptyBoard = $(this).currentBoard
//   console.log('this works')
//   // $(this).addClass('unclickable')
//   win()
//   alternateTurns()
//   console.log(currentPlayer)
//   api.updateGame(index, value)
// }

// parseInt($(this).id)
// ~~~~~~~~~~~~~~~~~~~~~
// EQUATE VALUES TO API REQUIRED
// ~~~~~~~~~~~~~~~~~~~~~

const onClickCallback = function (e) {
  console.log(e.target.id)
  const cellid = parseInt(e.target.id)
  emptyBoard[cellid] = currentPlayer
  const gameOver = isGameOver()
  console.log(emptyBoard)
  $(this).text(currentPlayer)
  $(this).addClass('unclickable')
  gameEvents.onUpdateGame(cellid, currentPlayer, gameOver)
  alternateTurns()
  console.log(currentPlayer)
}
// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

function emptySquares () {
  const square = $('.square')
  for (let m = 0; m < square.length; m++) {
    square[m].innerHTML = ''
    // square[m].classList.remove('unclickable')
  }
}

// ~~~~~~~~~~~~~~~~~~~~
//  CLEAR BOARD AFTER WIN/DRAW
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function clearBoard () {
//   const squares1 = document.getElementsByClassName('square')
//   for (let p = 0; p < squares1.length; p++) {
//     squares1[p].innerHTML = ''
//     squares1[p].classList.remove('unclickable')
//   }
//   console.log('play again?')
// }
// onWinOrDraw = function () {
//   if (won === true || draw === true)
//   'emptyBoard' = 'clearBoard'
// }

// ~~~~~~~~~~~~~~~~~~~~
//  BOARD AND NEW GAME BUTTON LOCKED / unlocked BEFORE SIGN IN / UP
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const boardLockedAtStart = $('.square').addClass('unclickable')
console.log('boardLockedAtStart')

// function unlockBoard () {
//   const squares1 = document.getElementsByClassName('square')
//   for (let m = 0; m < squares1.length; m++) {
//     squares1[m].classList.remove('unclickable')
//   }
//   console.log('start new game!')
// }

const newGameButtonLockedAtStart = $('#game-new').addClass('unclickable')
console.log('newGameButtonLockedAtStart')

function unlockNewGameButton () {
  $('#game-new').classList.remove('unclickable')
}

function unlockBoard () {
  $('.square').removeClass('unclickable')
}

const startGamebutton = function (event) {
  // document.getElementById('game-new')
  $('#game-new').on('click', function () {
    emptySquares()
    // startGame()
    unlockBoard()
  }
  )
}
// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  // clearBoard,
  // boardLockedAtStart,
  newGameButtonLockedAtStart,
  unlockNewGameButton,
  onClickCallback,
  startGamebutton,
  unlockBoard,
  emptySquares
}
