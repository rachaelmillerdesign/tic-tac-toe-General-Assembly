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

  const onClick = function () {
    $(this).text(currentPlayer)
    alternateTurns()
  }
  $('.square').on('click', onClick)

  // are these (above+below) the same?
  //$("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").on('click', function() {
    //$(this).toggleClass("square-" + currentPlayer)
  //})


  /* $('#one').click(function () {
    $('#one').text('x')
  })

  const onClick = function () {
    console.log('!')
  }
  $('.square').on('click', onClick) */
})
