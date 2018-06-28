
<div onclick="$(this).toggleClass("newclass")">click me</div>

$(function() {
     $(document).on("click",".myclass",function(e){}
     $(document).on("click",".mynewclass",function(e){}
});

const onClick = function () {
	console.log('onClick ran')
}
$('.square').on('click', onClick)

const onClick = function () {
  console.log('!')
  }

event.target try $(this)

let turn = 'X'
const onClickBoard = function (event) {
  console.log('onClickBoard ran', event.target.id)
  const boxId = event.target.id
  console.log(boxId)
  if (turn === 'X') {
    $(this).toggleClass('square-x')
  } else {
    $(this).toggleClass('square-o')
  }
}
$('.emptyBoard').on('click', 'square', function(event) {
    let $square = $(event.currentTarget)
    $square.addclass('square-' + currentPlayer)
    console.log(emptyBoard)
})

//arjun code from square one: data-move="O" data-random="hello"
//for ( i = 0; i < emptyBoard.length; i++ ) {
//cons ole.log(emptyBoard[i]);
// }

//  are these (above+below) the same?
//  $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").on('click', function() {
//  $(this).toggleClass("square-" + currentPlayer)
//  })

/* $('#one').click(function () {
$('#one').text('x')
})

const onClick = function () {
console.log('!')
}
$('.square').on('click', onClick) */
