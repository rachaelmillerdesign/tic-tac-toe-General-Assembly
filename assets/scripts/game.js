const api = require('./auth/api')
// do not require gameEvents -- circular dependency
const store = require('./store')

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
        // console.log('x has won!')
        $('#playNav').addClass('hidden')
        $('#playAgainNav').removeClass('hidden')
      } else {
        $('#message').text('o has won!')
        $('#message').css('background-color', '#85ecfc')
        // console.log('o has won!')
        $('#playNav').addClass('hidden')
        $('#playAgainNav').removeClass('hidden')
      }
      // console.log(current + ' has won!')
      $('.square').addClass('unclickable')
      // api.updateGame()
      return true
    } else if (!(testX && testO)) {
      draw = false
    }
  }
  if (draw === true) {
    // console.log("It's a tie!")
    $('#playNav').addClass('hidden')
    $('#playAgainNav').removeClass('hidden')
    $('.square').addClass('unclickable')
    // api.updateGame()
    return true
  } else {
    return false
  }
}

// ~~~~~~~~~~~~~~~~~~~~~
// RESUME GAME
// ~~~~~~~~~~~~~~~~~~~~~
function processGame (data) {
//  console.log(data)
  let image
  let count = 0
  store.game = data.game
  let gameArray = Array.from(data.game.cells)
  let gameArrayIterate = [...gameArray]
  document.getElementsByClassName('square')
  $('.square').removeClass('unclickable')
  // console.log(gameArrayIterate)
  // console.log(data.game.cells)
  for (let i = 0; i < gameArray.length; i++) {
    if (gameArrayIterate[i] === 'x') {
      image = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg")'
      $('#' + i).css('background-image', image)
      $('#' + i).addClass('unclickable')
      gameLogic.emptyBoard[i] = 'x'
      count++
    } else if (gameArrayIterate[i] === 'o') {
      image = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/O.jpg")'
      $('#' + i).css('background-image', image)
      $('#' + i).addClass('unclickable')
      gameLogic.emptyBoard[i] = 'o'
      count++
    }
  }
  if (count % 2 === 0) {
    gameLogic.currentPlayer = 'x'
  } else {
    gameLogic.currentPlayer = 'o'
  }
}

// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

function unlockBoard () {
  $('.square').removeClass('unclickable')
//  console.log('emptied squares')
}

const clearBoard = function () {
  gameLogic.emptyBoard = ['', '', '', '', '', '', '', '', '']
  document.getElementsByClassName('square')
  $('.square').removeClass('unclickable')
  for (let i = 0; i < emptyBoard.length; i++) {
    $('#' + i).css('background-image', 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/TTT-cell.jpg")')
  }
}

// 'url("../../public/images/TTT-cell.jpg")'
// background-image: url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg");
// const clearBoard = function () {
// //  console.log('in clearBoard')
//   document.getElementsByClassName('square')
//   let s
//   for (s = 0; s < 9; s++) {
//     ($('.square').attr.backgroundImage = '../../public/images/TTT-cell.jpg')
//   }
// //  console.log('cleared board')
// }

const playAgain = function () {
//  console.log('play again clicked')
  $('#playAgainNav').on('click', 'unlockBoard', 'clearBoard')
  api.createGame()
}
// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

const quitGame = function () {
//  console.log('in quitGame')
  if (won === false && draw === false) {
    api.updateGame()
    return true
  }
  $('.square').addClass('unclickable')
  clearBoard()
}

document.getElementById('quitNav')
$('#quitNav').on('click', quitGame)

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  alternateTurns,
  gameLogic,
  isGameOver,
  unlockBoard,
  clearBoard,
  playAgain,
  processGame
}
