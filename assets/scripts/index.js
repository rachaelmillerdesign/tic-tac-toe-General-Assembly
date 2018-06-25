'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/* necessary code:?
$(() => {
  }
}) */

// create Player
const currentPlayer = 'X'

// create alternate turns
function alternateTurns () {
  if (currentPlayer === 'X') {
    $(this).toggleClass('square-x')
  } else {
    $(this).toggleClass('square-o')
  }
}

// are these (above+below) the same?
$(document.querySelectorAll)'#one, #two, #three, #four, #five, #six, #seven, #eight, #nine').on('click', function() {
  $(this).toggleClass('square-' + currentPlayer);
})
