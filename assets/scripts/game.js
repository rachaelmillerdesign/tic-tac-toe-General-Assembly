const events = require('./auth/events')

// ~~~~~~~~~~~~~~~~~~~~~
// VARIABLES & CONSTANTS
// ~~~~~~~~~~~~~~~~~~~~~
let currentPlayer = 'x'
let emptyBoard = ['', '', '', '', '', '', '', '', '']
let i
let j
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
// CALL BACK / ADD CURRENT PLAYER X OR O
// ~~~~~~~~~~~~~~~~~~~~~
const onClickCallBack = function (e) {
  // console.log(e.target.id)
  const cellid = parseInt(e.target.id)
  emptyBoard[cellid] = currentPlayer
  win()
  console.log(emptyBoard)
  $(this).text(currentPlayer)
  $(this).addClass('unclickable')
  alternateTurns()
  console.log(currentPlayer)
}

$('.square').on('click', onClickCallBack)

// ~~~~~~~~~~~~~~~~~~~~~
// WIN FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~

let win = function () {
  for (i = 0; i < possibleWins.length; i++) {
    currentWin = possibleWins[i]
    // console.log('For' + currentPlayer + 'currentWin: ' + currentWin)
    won = true
    for (j = 0; j < currentWin.length; j++) {
      if (emptyBoard[currentWin[j]] !== currentPlayer) {
        won = false
      }
    }
    if (won === true) {
      console.log(currentPlayer + ' has won!')
      $('.square').addClass('unclickable')
      break
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
      $('.square').addClass('unclickable')
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
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

const button = document.getElementById('game-new')
button.addEventListener('click', emptySquares, events.onCreateGame)

function emptySquares () {
  const squares1 = document.getElementsByClassName('square')
  for (let m = 0; m < squares1.length; m++) {
    squares1[m].innerHTML = ''
    squares1[m].classList.remove('unclickable')
  }
}

// ~~~~~~~~~~~~~~~~~~~~
//  CLEAR BOARD AFTER WIN/DRAW
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function clearBoard () {
  const squares1 = document.getElementsByClassName('square')
  for (let p = 0; p < squares1.length; p++) {
    squares1[p].innerHTML = ''
    squares1[p].classList.remove('unclickable')
  }
  console.log('play again?')
}
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
  // if signInSuccess then
  $('#game-new').classList.remove('unclickable')
}
// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  clearBoard,
  win,
  won,
  boardLockedAtStart,
  newGameButtonLockedAtStart,
  unlockNewGameButton
}
