const api = require('./auth/api')
// const store = require('./store.js')
// do not require gameEvents -- circular dependency
// const gameEvents = require('./auth/events')
// const modals = require('./modals.js')
const events = require('./auth/events')

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
    // console.log("It's a tie!")
    $('#playNav').addClass('hidden')
    $('#playAgainNav').removeClass('hidden')
    $('.square').addClass('unclickable')
    api.updateGame()
    return true
  } else {
    return false
  }
}

// ~~~~~~~~~~~~~~~~~~~~~
// RESUME GAME
// ~~~~~~~~~~~~~~~~~~~~~
function processGame (data) {
  console.log(data)
  // console.log(data.game)
  let targetImage
  let count = 0
  console.log(data.game)
  const cellId = parseInt(data.game)
  console.log(data.game.cells)
  for (let i = 0; i < data.game.length; i++) {
    emptyBoard[cellId] = data.game[cellId]
    console.log(emptyBoard[cellId])
    if (emptyBoard[cellId] === 'x') {
      targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg")'
      for (let i = 0; i < data.newGameSuccess.cells.length; ++i) {
        count++
      } if (emptyBoard.cells[i] === 'o') {
        targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/O.jpg")'
        count++
        console.log(count)
      }
    }
    if (count % 2 === 0) {
      const currentPlayer = 'x'
      console.log(currentPlayer)
    }
  }
  resumeGame()
}

const addMoves = function (event) {
  console.log(event)
  document.getElementsByClassName('square')
  $('this.square').addClass('unclickable')
}

function resumeGame (data) {
  console.log(gameLogic.emptyBoard)
  addMoves()
  const cellId = parseInt(data.game)
  gameLogic.emptyBoard[cellId] = gameLogic.currentPlayer
  const gameOver = isGameOver(gameLogic.currentPlayer, gameLogic.emptyBoard)
  console.log(data.game)
  emptyBoard[cellId] = data.game[cellId]
  console.log(emptyBoard[cellId])
  events.onUpdateGame(cellId, gameLogic.currentPlayer, gameOver)
  let targetImage
  // console.log(game.gameLogic.currentPlayer)
  if (gameLogic.currentPlayer === 'x') {
    targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg")'
  } else if (gameLogic.currentPlayer === 'o') {
    targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/O.jpg")'
  }
  gameLogic.currentPlayer = alternateTurns(gameLogic.currentPlayer)
  console.log($(this))
  return $(this).css('background-image', targetImage)
}

// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

function unlockBoard () {
  $('.square').removeClass('unclickable')
//  console.log('emptied squares')
}

const clearBoard = function () {
  console.log('in clearBoard')
  document.getElementsByClassName('square')
  let s
  for (s = 0; s < 9; s++) {
    if ($('.square').attr.backgroundImage !== '../../public/images/TTT-cell.jpg') {
      ($('.square').attr.backgroundImage = '../../public/images/TTT-cell.jpg')
    }
//  console.log('cleared board')
  }
}

const playAgain = function () {
//  console.log('play again clicked')
  $('#playAgainNav').on('click', 'unlockBoard', 'clearBoard')
  api.createGame()
}
// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

const quitGame = function () {
  console.log('in quitGame')
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
  resumeGame,
  processGame
}
