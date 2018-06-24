'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
//require('./example')
/*
$(() => {
  }
})

let currentPlayer = [i]
for (let i=0; i <emptyBoard.length; i++) {
when player clicks, record location and toggle to player2
}

/*
const changePlayer = function (click) {
    event.preventDefault()
//need to create class square-x and square-o
    if (currentPlayer === 'x') {
      $(this).toggleClass('square-x')
    } else {
      $(this).toggleClass('square-o')
    }
  }
}) */



$('#one').click(function () {
  $('#one').text('x')
})

const onClick = function () {
  console.log('!')
}
$('.square').on('click', onClick)

/*
function makeMove(square, player) {
  var marker = document.createElement('div');
  /* set the class name on the new div to X-marker or O-marker, depending on the current player
  marker.className = player + "-marker";
  square.appendChild(marker) */
 /*
let squareId = ['square one', 'square two', 'square three',
  'square four', 'square five', 'square six' ,
  'square seven' , 'square eight', 'square nine' ]

const emptyBoard = [ [ 'square one', 'square two', 'square three' ],
  [ 'square four', 'square five', 'square six' ],
  [ 'square seven', 'square eight', 'square nine' ]
]
*/
//any square class needs to equal squareId
