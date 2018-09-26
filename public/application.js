webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var config = __webpack_require__(9);
var store = __webpack_require__(2);

// ~~~~~~~~~~~~~~~~~~~~
//  SIGN UP SIGN IN API
// ~~~~~~~~~~~~~~~~~~~~

var signUp = function signUp(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  });
};

var signIn = function signIn(data) {
  //  console.log('api sign in ran')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  });
};

var signOut = function signOut() {
  //  console.log('api sign out ran')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var changePassword = function changePassword(data) {
  // console.log('in changePassword and the data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};

// ~~~~~~~~~~~~~~~~~~~~
// CREATE GAME API
// ~~~~~~~~~~~~~~~~~~~~

var createGame = function createGame(data) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  });
};
// ~~~~~~~~~~~~~~~~~~~~~~
// NEW FORMS
// ~~~~~~~~~~~~~~~~~~~~~~

var updateGame = function updateGame(cellId, currentPlayer, gameOver) {
  // console.log(store.data)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cellId,
          'value': currentPlayer
        },
        'over': gameOver
      }
    }
  });
};

var getGames = function getGames() {
  // console.log('in getGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var getUnfinishedGames = function getUnfinishedGames() {
  // console.log('in getUnfinishedGames')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games?over=false',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var getSingleGame = function getSingleGame(data) {
  // console.log('in getSingleGame')
  // store.data = game.data
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  });
};

var updateSingleGame = function updateSingleGame(data) {
  //  console.log('inside api.editTasting and the data is', data)
  return $.ajax({
    url: config.apiUrl + 'games/' + data.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  });
};
// const index = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  getGames: getGames,
  updateGame: updateGame,
  createGame: createGame,
  getUnfinishedGames: getUnfinishedGames,
  getSingleGame: getSingleGame,
  updateSingleGame: updateSingleGame
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = {};

module.exports = store;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var api = __webpack_require__(1);
// do not require gameEvents -- circular dependency
var store = __webpack_require__(2);

// ~~~~~~~~~~~~~~~~~~~~~
// VARIABLES & CONSTANTS
// ~~~~~~~~~~~~~~~~~~~~~

var currentPlayer = 'x';
var emptyBoard = ['', '', '', '', '', '', '', '', ''];
var j = void 0;
var q = void 0;
var currentWin = void 0;
var won = void 0;
var draw = void 0;
var possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];

var gameLogic = {
  currentPlayer: currentPlayer,
  emptyBoard: emptyBoard

  // ~~~~~~~~~~~~~~~~~~~~~
  // ALTERNATE TURNS
  // ~~~~~~~~~~~~~~~~~~~~~
};var alternateTurns = function alternateTurns(current) {
  if (current === 'x') {
    current = 'o';
  } else {
    current = 'x';
  }
  return current;
};

// ~~~~~~~~~~~~~~~~~~~~~
// WIN FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~
var isGameOver = function isGameOver(current, board) {
  draw = true;
  for (q = 0; q < possibleWins.length; q++) {
    var testX = false;
    var testO = false;
    currentWin = possibleWins[q];
    // console.log('For ' + current + ' currentWin: ' + currentWin)
    won = true;
    for (j = 0; j < currentWin.length; j++) {
      if (board[currentWin[j]] !== current) {
        won = false;
      }
      if (board[currentWin[j]] === 'x') {
        testX = true;
        // console.log('found x in ' + currentWin[j])
      } else if (board[currentWin[j]] === 'o') {
        testO = true;
        // console.log('found o in ' + currentWin[j])
      }
    }
    // console.log('test = ' + testX + testO)
    // console.log('current win = ' + currentWin)
    // console.log('draw = ' + draw)
    if (won === true) {
      if (current === 'x') {
        $('#message').text('x has won!');
        $('#message').css('background-color', '#85ecfc');
        // console.log('x has won!')
        $('#playNav').addClass('hidden');
        $('#playAgainNav').removeClass('hidden');
      } else {
        $('#message').text('o has won!');
        $('#message').css('background-color', '#85ecfc');
        // console.log('o has won!')
        $('#playNav').addClass('hidden');
        $('#playAgainNav').removeClass('hidden');
      }
      // console.log(current + ' has won!')
      $('.square').addClass('unclickable');
      // api.updateGame()
      return true;
    } else if (!(testX && testO)) {
      draw = false;
    }
  }
  if (draw === true) {
    // console.log("It's a tie!")
    $('#playNav').addClass('hidden');
    $('#playAgainNav').removeClass('hidden');
    $('.square').addClass('unclickable');
    // api.updateGame()
    return true;
  } else {
    return false;
  }
};

// ~~~~~~~~~~~~~~~~~~~~~
// RESUME GAME
// ~~~~~~~~~~~~~~~~~~~~~
function processGame(data) {
  //  console.log(data)
  var image = void 0;
  var count = 0;
  store.game = data.game;
  var gameArray = Array.from(data.game.cells);
  var gameArrayIterate = [].concat(_toConsumableArray(gameArray));
  document.getElementsByClassName('square');
  $('.square').removeClass('unclickable');
  // console.log(gameArrayIterate)
  // console.log(data.game.cells)
  for (var i = 0; i < gameArray.length; i++) {
    if (gameArrayIterate[i] === 'x') {
      image = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg")';
      $('#' + i).css('background-image', image);
      $('#' + i).addClass('unclickable');
      gameLogic.emptyBoard[i] = 'x';
      count++;
    } else if (gameArrayIterate[i] === 'o') {
      image = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/O.jpg")';
      $('#' + i).css('background-image', image);
      $('#' + i).addClass('unclickable');
      gameLogic.emptyBoard[i] = 'o';
      count++;
    }
  }
  if (count % 2 === 0) {
    gameLogic.currentPlayer = 'x';
  } else {
    gameLogic.currentPlayer = 'o';
  }
}

// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

function unlockBoard() {
  $('.square').removeClass('unclickable');
  //  console.log('emptied squares')
}

var clearBoard = function clearBoard() {
  //  console.log('in clear board')
  gameLogic.emptyBoard = ['', '', '', '', '', '', '', '', ''];
  var squares = document.getElementsByClassName('square');
  //  console.log(squares)
  $('.square').removeClass('unclickable');
  for (var i = 0; i < squares.length; i++) {
    $('#' + i).css('background-image', 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/TTT-cell.jpg")');
  }
};

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

var playAgain = function playAgain() {
  //  console.log('play again clicked')
  $('#playAgainNav').on('click', 'unlockBoard', 'clearBoard');
  api.createGame();
};
// ~~~~~~~~~~~~~~~~~~~~~
// CREATE NEW GAME
// ~~~~~~~~~~~~~~~~~~~~~

var quitGame = function quitGame() {
  //  console.log('in quitGame')
  if (won === false && draw === false) {
    api.updateGame();
  }
  $('.square').addClass('unclickable');
  clearBoard();
};

document.getElementById('quitNav');
$('#quitNav').on('click', quitGame);

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  alternateTurns: alternateTurns,
  gameLogic: gameLogic,
  isGameOver: isGameOver,
  unlockBoard: unlockBoard,
  clearBoard: clearBoard,
  playAgain: playAgain,
  processGame: processGame
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts

__webpack_require__(5);

// styles
__webpack_require__(12);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// ~~~~~~~~~~~~~~~~~~~~~
// ON DOCUMENT READY
// ~~~~~~~~~~~~~~~~~~~~~

var authEvents = __webpack_require__(6);

$(function () {
  authEvents.addHandlers();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var getFormFields = __webpack_require__(7);
var game = __webpack_require__(3);
var api = __webpack_require__(1);
var ui = __webpack_require__(10);

// ~~~~~~~~~~~~~~~~~~~~~~`
//  FORM FIELD FUNCTIONS
// ~~~~~~~~~~~~~~~~~~~~~~`

var onSignUp = function onSignUp(event) {
  event.preventDefault();
  // console.log('sign up ran!')

  var data = getFormFields(this);
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

var onSignIn = function onSignIn(event) {
  event.preventDefault();
  //  console.log('sign in ran!')

  var data = getFormFields(this);
  api.signIn(data).then(ui.signInSuccess).catch(ui.signInFailure);
};

var onSignOut = function onSignOut(event) {
  event.preventDefault();
  //  console.log('events sign out ran')

  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure);
};

var onChangePassword = function onChangePassword(event) {
  event.preventDefault();
  // console.log('change password ran!')

  var data = getFormFields(this);
  api.changePassword(data).then(ui.changePasswordSuccess).catch(ui.changePasswordFailure);
};
// ~~~~~~~~~~~~~~~~~~~~~~
//  NEW GAME, UPDATE GAME, GAME STATS
// ~~~~~~~~~~~~~~~~~~~~~~
var onCreateGame = function onCreateGame(event) {
  event.preventDefault();
  // console.log('onCreateGame ran!')

  api.createGame().then(ui.createGameSuccess).catch(ui.createGameFailure);
};

var onUpdateGame = function onUpdateGame(cellId, currentPlayer, gameOver) {
  event.preventDefault();

  api.updateGame(cellId, currentPlayer, gameOver).then(ui.updateGameSuccess).catch(ui.updateGameFailure);
};

var onGetGames = function onGetGames(event) {
  event.preventDefault();
  // console.log('onGetGames ran')

  api.getGames().then(ui.getGamesSuccess).catch(ui.getGamesFailure);
};

var onGetUnfinishedGames = function onGetUnfinishedGames(event) {
  event.preventDefault();
  // console.log('onGetUnfinishedGames ran')

  api.getUnfinishedGames().then(ui.getUnfinishedGamesSuccess).catch(ui.getUnfinishedGamesFailure);
};

var onResumeGame = function onResumeGame(event) {
  // console.log('in onResumeGame')
  event.preventDefault();
  // console.log('onResumeGame ran')

  api.getSingleGame().then(ui.getSingleGameSuccess).catch(ui.getSingleGameFailure);
};

// ~~~~~~~~~~~~~~~~~~~~~~
//  ADD HANDLERS
// ~~~~~~~~~~~~~~~~~~~~~~
var onClickCallback = function onClickCallback(e) {
  // console.log(e.target.id)
  var cellId = parseInt(e.target.id);
  //  console.log('cellId: ' + cellId)
  //  console.log(e.target.id)
  game.gameLogic.emptyBoard[cellId] = game.gameLogic.currentPlayer;
  var gameOver = game.isGameOver(game.gameLogic.currentPlayer, game.gameLogic.emptyBoard);
  //  console.log(game.gameLogic.emptyBoard)
  //  console.log('game over: ' + gameOver)
  // console.log(game.gameLogic.emptyBoard)
  // $(this).text(game.gameLogic.currentPlayer)
  $(this).addClass('unclickable');
  onUpdateGame(cellId, game.gameLogic.currentPlayer, gameOver);
  var targetImage = void 0;
  // console.log(game.gameLogic.currentPlayer)
  if (game.gameLogic.currentPlayer === 'x') {
    targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/X.jpg")';
  } else if (game.gameLogic.currentPlayer === 'o') {
    targetImage = 'url("https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/O.jpg")';
  }
  game.gameLogic.currentPlayer = game.alternateTurns(game.gameLogic.currentPlayer);
  //  console.log($(this))
  return $(this).css('background-image', targetImage);
};

var addHandlers = function addHandlers() {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#signOutNav').on('click', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#playNav').on('click', onCreateGame);
  $('.square').on('click', onClickCallback);
  $('#getGamesNav').on('click', onGetGames);
  $('#getUnfinishedGamesNav').on('click', onGetUnfinishedGames);
  $('#playAgainNav').on('click', onCreateGame);
};

// ~~~~~~~~~~~~~~~~~~~~~~`
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~`

module.exports = {
  addHandlers: addHandlers,
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword,
  onCreateGame: onCreateGame,
  onUpdateGame: onUpdateGame,
  onGetGames: onGetGames,
  onGetUnfinishedGames: onGetUnfinishedGames,
  onResumeGame: onResumeGame
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(8);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var apiUrl = void 0;

var apiUrls = {
  production: 'https://aqueous-atoll-85096.herokuapp.com',
  development: 'https://tic-tac-toe-wdi.herokuapp.com'
};

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

module.exports = {
  apiUrl: apiUrl,
  apiUrls: apiUrls
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var store = __webpack_require__(2);
var api = __webpack_require__(1);
var game = __webpack_require__(3);
var modals = __webpack_require__(11);

var signUpSuccess = function signUpSuccess(data) {
  $('#message').text('Signed up successfully');
  $('#message').css('background-color', '#ceff5e');
  // setTimeout(hideMessage, 2000)
  $('#playNav').removeClass('unclickable');
  $('#signOutNav').removeClass('hidden');
  $('#signUpNav').addClass('hidden');
  $('#changePasswordNav').removeClass('hidden');
  $('#sign-up')[0].reset();
  setTimeout(modals.closeSignUpModal, 2000);
  // console.log('signUpSuccess ran. Data is :', data)
};

var signUpFailure = function signUpFailure(error) {
  $('#message').text('Error on sign up');
  $('#message').css('background-color', '#ff9226');
  $('#sign-up')[0].reset();
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeSignUpModal, 2000);
  console.log('signUpFailure ran. Error is :', error);
};

var signInSuccess = function signInSuccess(data) {
  $('#message').text('Signed in successfully');
  $('#message').css('background-color', '#ceff5e');
  // setTimeout(hideMessage, 2000)
  $('#playNav').removeClass('unclickable');
  $('#signOutNav').removeClass('hidden');
  $('#signInNav').addClass('hidden');
  $('#signUpNav').addClass('hidden');
  $('#changePasswordNav').removeClass('hidden');
  $('#sign-in')[0].reset();
  setTimeout(modals.closeSignInModal, 2000);
  // console.log('signInSuccess ran. Data is :', data)
  store.user = data.user;
};

var signInFailure = function signInFailure(error) {
  $('#message').text('Error on sign in');
  $('#message').css('background-color', '#ff9226');
  $('#sign-in')[0].reset();
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeSignInModal, 2000);
  console.log('signInFailure ran. Error is :', error);
};

var signOutSuccess = function signOutSuccess(data) {
  //  console.log('ui signoutsuccess ran')
  $('#message').text('Signed out successfully');
  $('#message').css('background-color', '#ceff5e');
  // setTimeout(hideMessage, 2000)
  game.clearBoard();
  $('#playNav').addClass('unclickable');
  $('#signInNav').removeClass('hidden');
  $('#signUpNav').removeClass('hidden');
  $('#signOutNav').addClass('hidden');
  $('#changePasswordNav').addClass('hidden');
  setTimeout(modals.closeSignOutModal, 2000);
  //  console.log('signOutSuccess ran and nothing was returned!')
  store.user = null;
};

var signOutFailure = function signOutFailure(error) {
  $('#message').text('Error on sign out');
  $('#message').css('background-color', '#ff9226');
  $('#sign-out')[0].reset();
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeSignOutModal, 2000);
  console.log('signOutFailure ran. Error is :', error);
};

var changePasswordSuccess = function changePasswordSuccess(data) {
  $('#message').text('Changed password successfully');
  $('#message').css('background-color', '#ceff5e');
  $('#change-password')[0].reset();
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeChangePasswordModal, 2000);
  // console.log('changePasswordSuccess ran and nothing was returned!')
};

var changePasswordFailure = function changePasswordFailure(error) {
  $('#message').text('Error on change password');
  $('#message').css('background-color', '#ff9226');
  $('#change-password')[0].reset();
  // setTimeout(hideMessage, 2000)
  setTimeout(modals.closeChangePasswordModal, 2000);
  console.log('changePasswordFailure ran. Error is :', error);
};

var createGameSuccess = function createGameSuccess(data) {
  $('#message').text('New game created successfully');
  $('#message').css('background-color', '#ceff5e');
  game.clearBoard();
  game.unlockBoard();
  // setTimeout(hideMessage, 2000)
  // setTimeout(modals.closeChangePasswordModal, 2000)
  // console.log('newGameSuccess ran and nothing was returned!', data)
  store.game = data.game;
};

var createGameFailure = function createGameFailure(error) {
  $('#message').text('Error on create new game');
  $('#message').css('background-color', '#ff9226');
  // setTimeout(hideMessage, 2000)
  console.log('newGameFailure ran. Error is :', error);
};

var updateGameSuccess = function updateGameSuccess(data) {
  // $('#message').text('New game created successfully')
  // $('#message').css('background-color', '#ceff5e')
  // setTimeout(hideMessage, 2000)
  store.game = data.game;
};

var updateGameFailure = function updateGameFailure(error) {
  $('#message').text('Error on create new game');
  $('#message').css('background-color', '#ff9226');
  // setTimeout(hideMessage, 2000)
  console.log('updateGameFailure ran. Error is :', error);
};

var getGamesSuccess = function getGamesSuccess(data) {
  // console.log('getGamesSuccess ran.', data)
  $('#getGamesModal').append(data.games.length);
  $('#getGamesModal').removeClass('hidden');
  setTimeout(modals.closeGetGamesModal, 2000);
  store.game = data.game;
};

var getGamesFailure = function getGamesFailure() {
  $('#message').text('Error on get games.');
  $('#message').css('background-color', '#ff9226');
  console.log('getGamesFailure ran. Error is :');
};

var getSingleGameSuccess = function getSingleGameSuccess(data) {
  //  console.log('getGamesSuccess ran.', data)
  $('#getGamesModal').removeClass('hidden');
  setTimeout(modals.closeGetGamesModal, 2000);
  game.processGame();
  store.game = data.game;
};

var getSingleGameFailure = function getSingleGameFailure() {
  $('#message').text('Error on get single game');
  $('#message').css('background-color', '#ff9226');
  console.log('getSingleGameFailure ran. Error is :');
};

var getUnfinishedGamesFailure = function getUnfinishedGamesFailure() {
  $('#message').text('Error on get unfinished games.');
  $('#message').css('background-color', '#ff9226');
  console.log('getUnfinishedGamesFailure ran. Error is :');
};

function errorReadingGame(data) {
  console.log('Error Reading Game');
}

var getGameId = function getGameId(event) {
  //  console.log(event)
  //  console.log('in getGameId')
  //  console.log(event.currentTarget.parentElement.parentElement.firstChild.innerHTML)

  api.getSingleGame(event.currentTarget.parentElement.parentElement.firstChild.innerHTML).then(game.processGame).catch(errorReadingGame);
};

var getUnfinishedGamesSuccess = function getUnfinishedGamesSuccess(data) {
  // const unfinishedGamesData = ['game', 'cell', 'index', 'over']
  var table = document.createElement('table');
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('th');
  $('#getUnfinishedGamesModal').removeClass('hidden');
  tableData.innerHTML = 'GAME ID';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = 'MOVES';
  tableRow.appendChild(tableData);
  tableData = document.createElement('th');
  tableData.innerHTML = '';
  // tableData.appendChild(tableData)
  // tableData = document.createElement('th')
  tableRow.appendChild(tableData);
  table.appendChild(tableRow);
  for (var row = 0; row < data.games.length; row++) {
    var _tableRow = document.createElement('tr');
    var _tableData = document.createElement('td');
    _tableData.innerHTML = data.games[row]['id'];
    _tableRow.appendChild(_tableData);
    _tableData = document.createElement('td');
    _tableData.innerHTML = data.games[row]['cells'];
    _tableRow.appendChild(_tableData);
    _tableData = document.createElement('button');
    _tableData.innerHTML = "<button type ='button' class ='resume'>RESUME GAME</button>";
    _tableRow.appendChild(_tableData);
    table.appendChild(_tableRow);
    store.game = data.game;
  }
  document.getElementById('getUnfinishedGamesModal').appendChild(table);
  $('.resume').on('click', getGameId);
  $('.resume').on('click', modals.closeGetUnfinishedGamesModal);
};

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signUpSuccess: signUpSuccess,
  signUpFailure: signUpFailure,
  signInSuccess: signInSuccess,
  signInFailure: signInFailure,
  signOutSuccess: signOutSuccess,
  signOutFailure: signOutFailure,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFailure: changePasswordFailure,
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  updateGameSuccess: updateGameSuccess,
  updateGameFailure: updateGameFailure,
  getGamesSuccess: getGamesSuccess,
  getGamesFailure: getGamesFailure,
  getUnfinishedGamesSuccess: getUnfinishedGamesSuccess,
  getUnfinishedGamesFailure: getUnfinishedGamesFailure,
  getSingleGameSuccess: getSingleGameSuccess,
  getSingleGameFailure: getSingleGameFailure,
  getGameId: getGameId
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN UP MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element

var signUpModal = document.getElementById('signUpModal');
// Get modal button
var signUpNav = document.getElementById('signUpNav');
var closeSignUpBtn = document.getElementById('closeSignUpBtn');
// Listen for Click
$('#signUpNav').on('click', openSignUpModal);
$('#closesignUpBtn').on('click', closeSignUpModal);
// Listen for click outside of modal
$('window').on('click', clickOutsideSignUp);
// Functions that open and close modal
function openSignUpModal() {
  $('#signUpModal').removeClass('hidden');
}
function closeSignUpModal() {
  $('#signUpModal').addClass('hidden');
}
// Function that closes modal if outside click
function clickOutsideSignUp(e) {
  if (e.target === signUpModal) {
    $('#signUpModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN IN MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
var signInModal = document.getElementById('signInModal');
var signInNav = document.getElementById('signInNav');
var closeSignInBtn = document.getElementById('closeSignInBtn');

$('#signInNav').on('click', openSignInModal);
$('#closeSignInBtn').on('click', closeSignInModal);
$('#window').on('click', clickOutsideSignIn);

function openSignInModal() {
  $('#signInModal').removeClass('hidden');
}
function closeSignInModal() {
  $('#signInModal').addClass('hidden');
}
function clickOutsideSignIn(e) {
  if (e.target === signInModal) {
    $('#signUpModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN OUT MODAL
// ~~~~~~~~~~~~~~~~~~~~~~

var signOutModal = document.getElementById('signOutModal');
var signOutNav = document.getElementById('signOutNav');
var closeSignOutBtn = document.getElementById('closeSignOutBtn');

$('#signOutNav').on('click', openSignOutModal);
$('#closeSignOutBtn').on('click', closeSignOutModal);
$('#window').on('click', clickOutsideSignOut);

function openSignOutModal() {
  $('#signOutModal').removeClass('hidden');
}
function closeSignOutModal() {
  $('#signOutModal').addClass('hidden');
}
function clickOutsideSignOut(e) {
  if (e.target === signOutModal) {
    $('#signOutModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// CHANGE PASSWORD MODAL
// ~~~~~~~~~~~~~~~~~~~~~~

var changePasswordModal = document.getElementById('changePasswordModal');
var changePasswordNav = document.getElementById('changePasswordNav');
var closeChangePasswordBtn = document.getElementById('closeChangePasswordBtn');

$('#changePasswordNav').on('click', openChangePasswordModal);
$('#closeChangePasswordBtn').on('click', closeChangePasswordModal);
$('#window').on('click', clickOutsideChangePassword);

function openChangePasswordModal() {
  $('#changePasswordModal').removeClass('hidden');
}
function closeChangePasswordModal() {
  $('#changePasswordModal').addClass('hidden');
}
function clickOutsideChangePassword(e) {
  if (e.target === changePasswordModal) {
    $('#changePasswordModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~

var getGamesModal = document.getElementById('getGamesModal');
var getGamesNav = document.getElementById('getGamesNav');
var closeGetGamesBtn = document.getElementById('closeGetGamesBtn');

$('#getGamesNav').on('click', openGetGamesModal);
$('#closeGetGamesBtn').on('click', closeGetGamesModal);
$('#window').on('click', clickOutsideGetGames);

function openGetGamesModal() {
  $('#getGamesModal').removeClass('hidden');
}
function closeGetGamesModal() {
  $('#getGamesModal').addClass('hidden');
}
function clickOutsideGetGames(e) {
  if (e.target === getGamesModal) {
    $('#getGamesModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET UNFINISHED GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
var getUnfinishedGamesModal = document.getElementById('getUnfinishedGamesModal');
var getUnfinishedGamesNav = document.getElementById('getUnfinishedGamesNav');
var closeGetUnfinishedGamesBtn = document.getElementById('closeUnfinishedGamesBtn');

$('#getUnfinishedGamesNav').on('click', openGetUnfinishedGamesModal);
$('#closeGetUnfinishedGamesBtn').on('click', closeGetUnfinishedGamesModal);
$('#window').on('click', clickOutsideGetUnfinishedGames);

function openGetUnfinishedGamesModal() {
  $('#getUnfinishedGamesModal').removeClass('hidden');
}
function closeGetUnfinishedGamesModal() {
  $('#getUnfinishedGamesModal').addClass('hidden');
}
function clickOutsideGetUnfinishedGames(e) {
  if (e.target === getUnfinishedGamesModal) {
    $('#getUnfinishedGamesModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// PLAY AGAIN? MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
var playAgainModal = document.getElementById('playAgainModal');
var closePlayAgainBtn = document.getElementById('closePlayAgainBtn');

$('#closePlayAgainBtn').on('click', closePlayAgainModal);
$('#window').on('click', clickOutsidePlayAgain);

function openPlayAgainModal() {
  $('#playAgainModal').removeClass('hidden');
}
function closePlayAgainModal() {
  $('#playAgainModal').addClass('hidden');
}
function clickOutsidePlayAgain(e) {
  if (e.target === playAgainModal) {
    $('#playAgainModal').addClass('hidden');
  }
}
// ~~~~~~~~~~~~~~~~~~~~~~
// ITS A TIE! MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
var itsATieModal = document.getElementById('itsATieModal');
var closeItsATieBtn = document.getElementById('closeItsATieBtn');
$('#closeItsATieBtn').on('click', closeItsATieModal);
$('#window').on('click', clickOutsideItsATie);
function openItsATieModal() {
  $('#itsATieModal').removeClass('hidden');
}
function closeItsATieModal() {
  $('#itsATieModal').addClass('hidden');
}
function clickOutsideItsATie(e) {
  if (e.target === itsATieModal) {
    $('#itsATieModal').addClass('hidden');
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signInNav: signInNav,
  closeSignInBtn: closeSignInBtn,
  openSignInModal: openSignInModal,
  closeSignInModal: closeSignInModal,
  clickOutsideSignIn: clickOutsideSignIn,
  signUpNav: signUpNav,
  closeSignUpBtn: closeSignUpBtn,
  openSignUpModal: openSignUpModal,
  closeSignUpModal: closeSignUpModal,
  clickOutsideSignUp: clickOutsideSignUp,
  signOutNav: signOutNav,
  openSignOutModal: openSignOutModal,
  closeSignOutBtn: closeSignOutBtn,
  closeSignOutModal: closeSignOutModal,
  clickOutsideSignOut: clickOutsideSignOut,
  openChangePasswordModal: openChangePasswordModal,
  changePasswordNav: changePasswordNav,
  closeChangePasswordBtn: closeChangePasswordBtn,
  closeChangePasswordModal: closeChangePasswordModal,
  clickOutsideChangePassword: clickOutsideChangePassword,
  getGamesNav: getGamesNav,
  closeGetGamesBtn: closeGetGamesBtn,
  openGetGamesModal: openGetGamesModal,
  closeGetGamesModal: closeGetGamesModal,
  clickOutsideGetGames: clickOutsideGetGames,
  getUnfinishedGamesNav: getUnfinishedGamesNav,
  closeGetUnfinishedGamesBtn: closeGetUnfinishedGamesBtn,
  openGetUnfinishedGamesModal: openGetUnfinishedGamesModal,
  closeGetUnfinishedGamesModal: closeGetUnfinishedGamesModal,
  clickOutsideGetUnfinishedGames: clickOutsideGetUnfinishedGames,
  closePlayAgainBtn: closePlayAgainBtn,
  openPlayAgainModal: openPlayAgainModal,
  closePlayAgainModal: closePlayAgainModal,
  clickOutsidePlayAgain: clickOutsidePlayAgain,
  closeItsATieBtn: closeItsATieBtn,
  openItsATieModal: openItsATieModal,
  closeItsATieModal: closeItsATieModal,
  clickOutsideItsATie: clickOutsideItsATie
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js??ref--2-2!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Josefin+Sans);", ""]);

// module
exports.push([module.i, "body {\n  background: #faf0fa;\n  background: -moz-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #faf0fa), color-stop(87%, #f0f3ff), color-stop(100%, #f0f3ff));\n  background: -webkit-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: -o-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: -ms-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: linear-gradient(to bottom, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#faf0fa', endColorstr='#f0f3ff', GradientType=0 );\n  max-width: 500px;\n  margin: auto; }\n\n@keyframes glow {\n  from {\n    box-shadow: 0 0 6px -6px #e8ffba;\n    opacity: .5; }\n  to {\n    box-shadow: 0 0 6px 6px #e8ffba;\n    opacity: .8; } }\n\n.container {\n  display: grid;\n  grid-template: repeat(3, 1fr)/repeat(3, 1fr);\n  grid-gap: .65vw; }\n\n.maxWidth {\n  background: #faf0fa;\n  background: -moz-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, #faf0fa), color-stop(87%, #f0f3ff), color-stop(100%, #f0f3ff));\n  background: -webkit-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: -o-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: -ms-linear-gradient(top, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  background: linear-gradient(to bottom, #faf0fa 0%, #f0f3ff 87%, #f0f3ff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#faf0fa', endColorstr='#f0f3ff', GradientType=0 ); }\n\n.square {\n  background-image: url(\"https://rachaelmillerdesign.github.io/tic-tac-toe-General-Assembly/public/images/TTT-cell.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  object-fit: cover;\n  display: flex;\n  padding-bottom: 100%;\n  /* text-align: center; */\n  animation: glow 1s infinite alternate;\n  animation-duration: 2s; }\n\n.square:hover {\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer; }\n\n* {\n  font: 'Josefin', sans-serif; }\n\nh1 {\n  color: grey;\n  font-family: 'Helvetica', sans-serif;\n  font-weight: 325;\n  font-size: 16vw;\n  text-align: center;\n  -webkit-margin-before: 1.5vw;\n  -webkit-margin-after: 1.5vw; }\n\n@media screen and (min-width: 500px) {\n  h1 {\n    font-size: 80px; } }\n\np {\n  font-family: 'Josefin Sans', sans-serif;\n  -webkit-margin-before: 0px;\n  font-size: 3.8vw; }\n\n.unclickable {\n  pointer-events: none; }\n\n#topNav {\n  margin-top: 3vw; }\n\n@media screen and (min-width: 500px) {\n  #topNav {\n    height: 70px;\n    margin-top: 20px; } }\n\nul.nav {\n  margin-top: 6vw;\n  list-style: none;\n  height: 10vw;\n  line-height: 10vw;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 3.8vw;\n  font-weight: 300;\n  background: #f5ffde;\n  background-image: -webkit-linear-gradient(top, #f5ffde, #d1fff2);\n  background-image: -moz-linear-gradient(top, #f5ffde, #d1fff2);\n  background-image: -ms-linear-gradient(top, #f5ffde, #d1fff2);\n  background-image: -o-linear-gradient(top, #f5ffde, #d1fff2);\n  background-image: linear-gradient(to bottom, #f5ffde, #d1fff2);\n  -webkit-border-radius: 2;\n  -moz-border-radius: 2;\n  border-radius: 2px;\n  -webkit-box-shadow: 1px 1px 3px #9e9e9e;\n  -moz-box-shadow: 1px 1px 3px #9e9e9e;\n  box-shadow: 1px 1px 3px #9e9e9e;\n  border: solid #a6a6a6 1px;\n  text-decoration: none;\n  -webkit-padding-start: 14px;\n  -webkit-margin-after: 0px; }\n\n@media screen and (min-width: 500px) {\n  ul.nav {\n    margin-top: 36px;\n    height: 70px;\n    line-height: 70px;\n    font-size: 20px; } }\n\nul.nav li {\n  float: left; }\n\nul.nav a {\n  color: grey;\n  text-decoration: none;\n  padding: 2.5vw; }\n\n@media screen and (min-width: 500px) {\n  ul.nav a {\n    padding: 7.5px; } }\n\nul.nav li:hover {\n  background-color: #eaff70;\n  background-image: -webkit-linear-gradient(top, #f3ffa3, #bbffb0);\n  background-image: -moz-linear-gradient(top, #f3ffa3, #bbffb0);\n  background-image: -ms-linear-gradient(top, #f3ffa3, #bbffb0);\n  background-image: -o-linear-gradient(top, #f3ffa3, #bbffb0);\n  background-image: linear-gradient(to bottom, #f3ffa3, #bbffb0);\n  background-size: contain;\n  text-decoration: none; }\n\n#playNav {\n  font-size: 3vw;\n  font-weight: 500; }\n\n@media screen and (min-width: 500px) {\n  #playNav {\n    font-size: 20px; } }\n\n#getGamesNav {\n  font-size: 3vw;\n  font-weight: 400; }\n\n@media screen and (min-width: 500px) {\n  #getGamesNav {\n    font-size: 20px; } }\n\n#playAgainNav {\n  font-size: 3vw;\n  font-weight: 400; }\n\n@media screen and (min-width: 500px) {\n  #playAgainNav {\n    font-size: 20px; } }\n\n#getUnfinishedGamesNav {\n  font-size: 3vw;\n  font-weight: 400;\n  word-wrap: break-word; }\n\n@media screen and (min-width: 500px) {\n  #getUnfinishedGamesNav {\n    font-size: 20px; } }\n\n#quitNav {\n  font-size: 3vw;\n  font-weight: 400; }\n\n@media screen and (min-width: 500px) {\n  #quitNav {\n    font-size: 20px; } }\n\n.hidden {\n  display: none; }\n\n.modal {\n  background-color: white;\n  border: 1vw solid #68d8d1;\n  font-family: 'Josefin Sans', sans-serif;\n  outline: none;\n  position: fixed;\n  min-width: 60%;\n  max-width: 40%;\n  /* Could be more or less, depending on screen size */\n  height: auto;\n  z-index: 100;\n  left: 50%;\n  top: 25%;\n  /* Use this for centering if unknown width/height */\n  transform: translate(-50%, -50%); }\n\n.close {\n  border: none;\n  color: #f98900;\n  float: right;\n  font-size: 6vw;\n  font-weight: 650;\n  margin: 0 auto;\n  outline: none;\n  padding: 1vw; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\nbutton:active {\n  border-style: none;\n  border-color: none; }\n\n:focus {\n  outline: -webkit-focus-ring-color none;\n  outline-color: none;\n  outline-style: auto;\n  outline-width: 0; }\n\n.submit {\n  background-color: #c7f22e; }\n\n#getGamesModal {\n  font-size: 6vw;\n  font-weight: 500;\n  color: grey;\n  margin-left: 1vw;\n  padding: 1vw; }\n\n@media screen and (min-width: 500px) {\n  #getGamesModal {\n    font-size: 18px;\n    margin-left: 6px;\n    padding: 6px; } }\n\n#signOut {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 4vw;\n  font-weight: 200;\n  color: grey;\n  margin-top: 7vw;\n  margin-left: 5vw;\n  margin-right: 5vw; }\n\n@media screen and (min-width: 500px) {\n  #signOut {\n    font-size: 24px;\n    margin-top: 42p;\n    margin-left: 30px;\n    margin-right: 30px; } }\n\n#message {\n  padding: 1vw;\n  font-size: 2.5vw;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: grey;\n  text-align: center; }\n\n@media screen and (min-width: 500px) {\n  #message {\n    padding: 6px;\n    font-size: 15px; } }\n\n#hasWon {\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 2em;\n  font-weight: 300;\n  color: grey;\n  margin-top: 7vw;\n  margin-left: 5vw;\n  margin-right: 5vw; }\n\n@media screen and (min-width: 500px) {\n  #hasWon {\n    font-size: 2em;\n    margin-top: 42px;\n    margin-left: 30px;\n    margin-right: 30px; } }\n\nbutton {\n  padding: 2.5px;\n  border: 1.5px; }\n\n.resume {\n  color: grey;\n  padding: 2.5px;\n  float: right;\n  margin: 2px, 2px, 2px, 7px;\n  border: 1px solid grey;\n  background-color: #d1fbff; }\n\n#getUnfinishedGamesModal {\n  padding: 1.75vw;\n  margin-top: 20vw; }\n\n@media screen and (min-width: 500px) {\n  #getUnfinishedGamesModal {\n    padding: 10.5px;\n    margin-top: 120px; } }\n\nlegend {\n  color: grey;\n  padding-top: 1vw;\n  margin: 1vw;\n  display: table;\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 4vw;\n  font-weight: 300; }\n\n@media screen and (min-width: 500px) {\n  legend {\n    padding-top: 6px;\n    margin: 6px;\n    font-size: 24px; } }\n\nfieldset {\n  border-color: none;\n  border-image: none;\n  border-style: none;\n  border-width: 0;\n  font-family: 'Josefin Sans', sans-serif; }\n\nfieldset,\ninput,\ntextarea {\n  font-family: 'Josefin', sans-serif;\n  font-size: 2.7vw;\n  font-weight: 400;\n  text-transform: none;\n  padding: .6vw;\n  margin: .5vw;\n  box-sizing: border-box;\n  -webkit-padding-before: 5px;\n  -webkit-padding-start: 5px; }\n\n@media screen and (min-width: 500px) {\n  fieldset,\n  input,\n  textarea {\n    font-size: 16px;\n    padding: 3.5px;\n    margin: 3px; } }\n\ntable {\n  margin: auto;\n  color: grey; }\n\nth {\n  margin: 1vw, 2vw, 2.5vw, 0vw;\n  padding: 2vw;\n  word-wrap: normal; }\n\n@media screen and (min-width: 500px) {\n  th {\n    margin: 6px, 12px, 15px, 0px;\n    padding: 12px; } }\n\nbody:not(:-moz-handler-blocked) fieldset {\n  display: table-cell; }\n\n:focus {\n  outline: -webkit-focus-ring-color none; }\n", ""]);

// exports


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[4]);