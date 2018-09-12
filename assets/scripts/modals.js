'use strict'

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
  $('#signUpModal').removeClass('hidden')
}
function closeSignUpModal () {
  $('#signUpModal').addClass('hidden')
}
// Function that closes modal if outside click
function clickOutsideSignUp (e) {
  if (e.target === signUpModal) {
    $('#signUpModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN IN MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
const signInModal = document.getElementById('signInModal')
const signInNav = document.getElementById('signInNav')
const closeSignInBtn = document.getElementById('closeSignInBtn')

$('#signInNav').on('click', openSignInModal)
$('#closeSignInBtn').on('click', closeSignInModal)
$('#window').on('click', clickOutsideSignIn)

function openSignInModal () {
  $('#signInModal').removeClass('hidden')
}
function closeSignInModal () {
  $('#signInModal').addClass('hidden')
}
function clickOutsideSignIn (e) {
  if (e.target === signInModal) {
    $('#signUpModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// SIGN OUT MODAL
// ~~~~~~~~~~~~~~~~~~~~~~

const signOutModal = document.getElementById('signOutModal')
const signOutNav = document.getElementById('signOutNav')
const closeSignOutBtn = document.getElementById('closeSignOutBtn')

$('#signOutNav').on('click', openSignOutModal)
$('#closeSignOutBtn').on('click', closeSignOutModal)
$('#window').on('click', clickOutsideSignOut)

function openSignOutModal () {
  $('#signOutModal').removeClass('hidden')
}
function closeSignOutModal () {
  $('#signOutModal').addClass('hidden')
}
function clickOutsideSignOut (e) {
  if (e.target === signOutModal) {
    $('#signOutModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// CHANGE PASSWORD MODAL
// ~~~~~~~~~~~~~~~~~~~~~~

const changePasswordModal = document.getElementById('changePasswordModal')
const changePasswordNav = document.getElementById('changePasswordNav')
const closeChangePasswordBtn = document.getElementById('closeChangePasswordBtn')

$('#changePasswordNav').on('click', openChangePasswordModal)
$('#closeChangePasswordBtn').on('click', closeChangePasswordModal)
$('#window').on('click', clickOutsideChangePassword)

function openChangePasswordModal () {
  $('#changePasswordModal').removeClass('hidden')
}
function closeChangePasswordModal () {
  $('#changePasswordModal').addClass('hidden')
}
function clickOutsideChangePassword (e) {
  if (e.target === changePasswordModal) {
    $('#changePasswordModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~

const getGamesModal = document.getElementById('getGamesModal')
const getGamesNav = document.getElementById('getGamesNav')
const closeGetGamesBtn = document.getElementById('closeGetGamesBtn')

$('#getGamesNav').on('click', openGetGamesModal)
$('#closeGetGamesBtn').on('click', closeGetGamesModal)
$('#window').on('click', clickOutsideGetGames)

function openGetGamesModal () {
  $('#getGamesModal').removeClass('hidden')
}
function closeGetGamesModal () {
  $('#getGamesModal').addClass('hidden')
}
function clickOutsideGetGames (e) {
  if (e.target === getGamesModal) {
    $('#getGamesModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// GET UNFINISHED GAMES MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
const getUnfinishedGamesModal = document.getElementById('getUnfinishedGamesModal')
const getUnfinishedGamesNav = document.getElementById('getUnfinishedGamesNav')
const closeGetUnfinishedGamesBtn = document.getElementById('closeUnfinishedGamesBtn')

$('#getUnfinishedGamesNav').on('click', openGetUnfinishedGamesModal)
$('#closeGetUnfinishedGamesBtn').on('click', closeGetUnfinishedGamesModal)
$('#window').on('click', clickOutsideGetUnfinishedGames)

function openGetUnfinishedGamesModal () {
  $('#getUnfinishedGamesModal').removeClass('hidden')
}
function closeGetUnfinishedGamesModal () {
  $('#getUnfinishedGamesModal').addClass('hidden')
}
function clickOutsideGetUnfinishedGames (e) {
  if (e.target === getUnfinishedGamesModal) {
    $('#getUnfinishedGamesModal').addClass('hidden')
  }
}

// ~~~~~~~~~~~~~~~~~~~~~~
// PLAY AGAIN? MODAL
// ~~~~~~~~~~~~~~~~~~~~~~
const playAgainModal = document.getElementById('playAgainModal')
const closePlayAgainBtn = document.getElementById('closePlayAgainBtn')

$('#closePlayAgainBtn').on('click', closePlayAgainModal)
$('#window').on('click', clickOutsidePlayAgain)

function openPlayAgainModal () {
  $('#playAgainModal').removeClass('hidden')
}
function closePlayAgainModal () {
  $('#playAgainModal').addClass('hidden')
}
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
