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
  signUpModal.style.display = 'block'
}
function closeSignUpModal () {
  signUpModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideSignUp (e) {
  if (e.target === signUpModal) {
    signUpModal.style.display = 'none'
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
  signInModal.style.display = 'block'
}
function closeSignInModal () {
  signInModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideSignIn (e) {
  if (e.target === signInModal) {
    signInModal.style.display = 'none'
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
  signOutModal.style.display = 'block'
}
function closeSignOutModal () {
  signOutModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideSignOut (e) {
  if (e.target === signOutModal) {
    signOutModal.style.display = 'none'
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
  changePasswordModal.style.display = 'block'
}
function closeChangePasswordModal () {
  changePasswordModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideChangePassword (e) {
  if (e.target === changePasswordModal) {
    changePasswordModal.style.display = 'none'
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
  getGamesModal.style.display = 'block'
}
function closeGetGamesModal () {
  getGamesModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideGetGames (e) {
  if (e.target === getGamesModal) {
    getGamesModal.style.display = 'none'
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
  getUnfinishedGamesModal.style.display = 'block'
}
function closeGetUnfinishedGamesModal () {
  getUnfinishedGamesModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsideGetUnfinishedGames (e) {
  if (e.target === getUnfinishedGamesModal) {
    getUnfinishedGamesModal.style.display = 'none'
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
  playAgainModal.style.display = 'block'
}
function closePlayAgainModal () {
  playAgainModal.style.display = 'none'
}
// Function that closes modal if outside click
function clickOutsidePlayAgain (e) {
  if (e.target === playAgainModal) {
    playAgainModal.style.display = 'none'
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
  itsATieModal.style.display = 'block'
}
function closeItsATieModal () {
  itsATieModal.style.display = 'none'
}
function clickOutsideItsATie (e) {
  if (e.target === itsATieModal) {
    itsATieModal.style.display = 'none'
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
