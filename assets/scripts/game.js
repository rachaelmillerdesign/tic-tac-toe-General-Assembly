const api = require('./auth/api')
// const store = require('./store.js')
// do not require gameEvents -- circular dependency
// const gameEvents = require('./auth/events')
// const modals = require('./modals.js')

// ~~~~~~~~~~~~~~~~~~~~~
// VARIABLES & CONSTANTS
// ~~~~~~~~~~~~~~~~~~~~~

const currentPlayer = 'x'
const emptyBoard = ['', '', '', '', '', '', '', '', '']
let j
let q
let currentWin
let won
let draw
const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const gameLogic = {
  currentPlayer,
  emptyBoard
}

// ~~~~~~~~~~~~~~~~~~~~~
// ALTERNATE TURNS
// ~~~~~~~~~~~~~~~~~~~~~
const alternateTurns = function (current) {
  if (current === 'x') {
    current = 'o'
  } else {
    current = 'x'
  }
  return current
}

// ~~~~~~~~~~~~~~~~~~~~~
// WIN FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~
const isGameOver = function (current, board) {
  draw = true
  for (q = 0; q < possibleWins.length; q++) {
    let testX = false
    let testO = false
    currentWin = possibleWins[q]
    // console.log('For ' + current + ' currentWin: ' + currentWin)
    won = true
    for (j = 0; j < currentWin.length; j++) {
      if (board[currentWin[j]] !== current) {
        won = false
      }
      if (board[currentWin[j]] === 'x') {
        testX = true
        // console.log('found x in ' + currentWin[j])
      } else if (board[currentWin[j]] === 'o') {
        testO = true
        // console.log('found o in ' + currentWin[j])
      }
    }
    // console.log('test = ' + testX + testO)
    // console.log('current win = ' + currentWin)
    // console.log('draw = ' + draw)
    if (won === true) {
      if (current === 'x') {
        $('#message').text('x has won!')
        $('#message').css('background-color', '#85ecfc')
        console.log('x has won!')
        $('#playNav').addClass('hidden')
        $('#playAgainNav').removeClass('hidden')
      } else {
        $('#message').text('o has won!')
        $('#message').css('background-color', '#85ecfc')
        console.log('o has won!')
        $('#playNav').addClass('hidden')
        $('#playAgainNav').removeClass('hidden')
      }
      // console.log(current + ' has won!')
      // $('#gameOverModal').removeClass('hidden')
      // $('#hasWon').append(current + '  has won!')
      // setTimeout($('#gameOverModal').removeClass('hidden')), 2000)
      $('.square').addClass('unclickable')
      api.updateGame()
      return true
    } else if (!(testX && testO)) {
      draw = false
    }
  }
  if (draw === true) {
    console.log("It's a tie!")
    $('#playNav').addClass('hidden')
    $('#playAgainNav').removeClass('hidden')
    $('.square').addClass('unclickable')
    api.updateGame()
    return true
  } else {
    return false
  }
}

const playAgain = function () {

}

// const isGameOver = function (current, board) {
//   for (q = 0; q < possibleWins.length; q++) {
//     currentWin = possibleWins[q]
//     // console.log('For' + currentPlayer + 'currentWin: ' + currentWin)
//     won = true
//     for (j = 0; j < currentWin.length; j++) {
//       if (board[currentWin[j]] !== current) {
//         won = false
//       }
//     }
//     if (won === true) {
//       if (current === 'x') {
//         $('#message').text('x + has won!')
//         $('#message').css('background-color', '#85ecfc')
//       } else {
//         console.log('o + has won!')
//       }
//       console.log(current + ' has won!')
//       $('#gameOverModal').removeClass('hidden')
//       // $('#hasWon').append(current + '  has won!')
//       setTimeout(modals.gameOverModal, 2000)
//       $('.square').addClass('unclickable')
//       api.updateGame()
//       return true
//     }
//   }
//   if (won === false) {
//     draw = true
//     for (i = 0; i < board.length; i++) {
//       if (board[i] === '') {
//         draw = false
//       }
//     }
//     if (draw === true) {
//       console.log("It's a tie!")
//       $('#itsATieModal').removeClass('hidden')
//       setTimeout(modals.itsATieModal, 2000)
//       $('.square').addClass('unclickable')
//       return true
//     } else {
//       return false
//     }
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
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

function emptySquares () {
  $('.square').removeClass('unclickable')
}

// function emptySquares () {
//   const square = $('.square')
//   for (let m = 0; m < square.length; m++) {
//     square[m].innerHTML = ''
//   }
// }

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

function unlockBoard () {
  $('.square').removeClass('unclickable')
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  alternateTurns,
  gameLogic,
  isGameOver,
  unlockBoard,
  emptySquares
}
