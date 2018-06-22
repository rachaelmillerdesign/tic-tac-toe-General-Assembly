/* const element = document.createElement('div')
element.id = 'myDiv'
element.innerHTML = 'Hello World!'
document.body.appendChild(element) */

function boardclick () {
  this.innerHTML = boardclick.token
  boardclick.token = boardclick.token === 'X' ? 'O' : 'X'
}
boardclick.token = 'X'

for (let i = 1; i < 10; ++i) {
  document.getElementById('cell' + i).onClick = boardclick
}
