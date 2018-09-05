// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN UP MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const signUpModal = document.getElementById('signUpModal')
// Get modal button
const signUpNav = document.getElementById('signUpNav')
const closeSignUpBtn = document.getElementById('closeSignUpBtn')
// Listen for Click
$('#signUpNav').on('click', openSignUpModal)
$('#closesignUpBtn').on('click', closeSignUpModal)
// Listen for click outside of modal
$('window').on('click', clickOutsideSignUp)
// Functions that open and close modal
function openSignUpModal () {
  $('#openSignUpModal').removeClass('hidden')
}
function closeSignUpModal () {
  $('#openSignUpModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideSignUp (e) {
  if (e.target === signUpModal) {
    $('#openSignUpModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN IN MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const signInModal = document.getElementById('signInModal')
// Get modal button
const signInNav = document.getElementById('signInNav')
const closeSignInBtn = document.getElementById('closeSignInBtn')
// Listen for Click
$('#signInNav').on('click', openSignInModal)
$('#closeSignInBtn').on('click', closeSignInModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideSignIn)
// Functions that open and close modal
function openSignInModal () {
  $('#signInModal').removeClass('hidden')
}
function closeSignInModal () {
  $('#signInModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideSignIn (e) {
  if (e.target === signInModal) {
    $('#signUpModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN OUT MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const signOutModal = document.getElementById('signOutModal')
// Get modal button
const signOutNav = document.getElementById('signOutNav')
const closeSignOutBtn = document.getElementById('closeSignOutBtn')
// Listen for Click
$('#signOutNav').on('click', openSignOutModal)
$('#closeSignOutBtn').on('click', closeSignOutModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideSignOut)
// Functions that open and close modal
function openSignOutModal () {
  $('#signOutModal').removeClass('hidden')
}
function closeSignOutModal () {
  $('#signOutModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideSignOut (e) {
  if (e.target === signOutModal) {
    $('#signOutModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// CHANGE PASSWORD MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const changePasswordModal = document.getElementById('changePasswordModal')
// Get modal button
const changePasswordNav = document.getElementById('changePasswordNav')
const closeChangePasswordBtn = document.getElementById('closeChangePasswordBtn')
// Listen for Click
$('#changePasswordNav').on('click', openChangePasswordModal)
$('#closeChangePasswordBtn').on('click', closeChangePasswordModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideChangePassword)
// Functions that open and close modal
function openChangePasswordModal () {
  $('#changePasswordModal').removeClass('hidden')
}
function closeChangePasswordModal () {
  $('#changePasswordModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideChangePassword (e) {
  if (e.target === changePasswordModal) {
    $('#changePasswordModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const getGamesModal = document.getElementById('getGamesModal')
// Get modal button
const getGamesNav = document.getElementById('getGamesNav')
const closeGetGamesBtn = document.getElementById('closeGetGamesBtn')
// Listen for Click
$('#getGamesNav').on('click', openGetGamesModal)
$('#closeGetGamesBtn').on('click', closeGetGamesModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideGetGames)
// Functions that open and close modal
function openGetGamesModal () {
  $('#getGamesModal').removeClass('hidden')
}
function closeGetGamesModal () {
  $('#getGamesModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideGetGames (e) {
  if (e.target === getGamesModal) {
    $('#getGamesModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET UNFINISHED GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const getUnfinishedGamesModal = document.getElementById('getUnfinishedGamesModal')
// Get modal button
const getUnfinishedGamesNav = document.getElementById('getUnfinishedGamesNav')
const closeGetUnfinishedGamesBtn = document.getElementById('closeUnfinishedGamesBtn')
// Listen for Click
$('#getUnfinishedGamesNav').on('click', openGetUnfinishedGamesModal)
$('#closeGetUnfinishedGamesBtn').on('click', closeGetUnfinishedGamesModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsideGetUnfinishedGames)
// Functions that open and close modal
function openGetUnfinishedGamesModal () {
  $('#getUnfinishedGamesModal').addClass('hidden')
}
function closeGetUnfinishedGamesModal () {
  $('#getUnfinishedGamesModal').removeClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideGetUnfinishedGames (e) {
  if (e.target === getUnfinishedGamesModal) {
    $('#getUnfinishedGamesModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// PLAY AGAIN? MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
// Get modal element
const playAgainModal = document.getElementById('playAgainModal')
const closePlayAgainBtn = document.getElementById('closePlayAgainBtn')
// Listen for Click
$('#closePlayAgainBtn').on('click', closePlayAgainModal)
// Listen for click outside of modal
$('#window').on('click', clickOutsidePlayAgain)
// Functions that open and close modal
function openPlayAgainModal () {
  $('#playAgainModal').removeClass('hidden')
}
function closePlayAgainModal () {
  $('#playAgainModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsidePlayAgain (e) {
  if (e.target === playAgainModal) {
    $('#playAgainModal').addClass('hidden')
  }
}
// ~~~~~~~~~~~~~~~~~~~~~~
// ITS A TIE! MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
const itsATieModal = document.getElementById('itsATieModal')
const closeItsATieBtn = document.getElementById('closeItsATieBtn')
$('#closeItsATieBtn').on('click', closeItsATieModal)
$('#window').on('click', clickOutsideItsATie)
function openItsATieModal () {
  $('#itsATieModal').removeClass('hidden')
}
function closeItsATieModal () {
  $('#itsATieModal').addClass('hidden')
}
function clickOutsideItsATie (e) {
  if (e.target === itsATieModal) {
    $('#itsATieModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// MODULE EXPORTS
// ~~~~~~~~~~~~~~~~~~~~~~

module.exports = {
  signInNav,
  closeSignInBtn,
  openSignInModal,
  closeSignInModal,
  clickOutsideSignIn,
  signUpNav,
  closeSignUpBtn,
  openSignUpModal,
  closeSignUpModal,
  clickOutsideSignUp,
  signOutNav,
  openSignOutModal,
  closeSignOutBtn,
  closeSignOutModal,
  clickOutsideSignOut,
  openChangePasswordModal,
  changePasswordNav,
  closeChangePasswordBtn,
  closeChangePasswordModal,
  clickOutsideChangePassword,
  getGamesNav,
  closeGetGamesBtn,
  openGetGamesModal,
  closeGetGamesModal,
  clickOutsideGetGames,
  getUnfinishedGamesNav,
  closeGetUnfinishedGamesBtn,
  openGetUnfinishedGamesModal,
  closeGetUnfinishedGamesModal,
  clickOutsideGetUnfinishedGames,
  closePlayAgainBtn,
  openPlayAgainModal,
  closePlayAgainModal,
  clickOutsidePlayAgain,
  closeItsATieBtn,
  openItsATieModal,
  closeItsATieModal,
  clickOutsideItsATie
}
