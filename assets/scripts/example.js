'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateExample = function (event) {
  event.preventDefault()
  console.log('onCreateExample ran!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexExamples = function (event) {
  event.preventDefault()
  console.log('onIndexExamples ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowExample = function (event) {
  event.preventDefault()
  console.log('onShowExample ran!')

  const data = getFormFields(event.target)
  const example = data.example

  if (example.id.length !== 0) {
    api.show(example)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter an example id!')
  }
}

const onDeleteExample = function (event) {
  event.preventDefault()
  console.log('onDeleteExample ran!')

  const data = getFormFields(event.target)
  const example = data.example

  if (example.id.length !== 0) {
    api.destroy(example.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an example id!')
  }
}

const onUpdateExample = function (event) {
  event.preventDefault()
  console.log('onUpdateExample ran!')

  const data = getFormFields(event.target)
  const example = data.example

  if (example.text === '') {
    $('#message').html('<p>Text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Text is required!')
    return false
  }
  if (example.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide an example id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an example id!')
  }
}

const addHandlers = () => {
  $('#example-create').on('submit', onCreateExample)
  $('#example-index').on('submit', onIndexExamples)
  $('#example-show').on('submit', onShowExample)
  $('#example-delete').on('submit', onDeleteExample)
  $('#example-update').on('submit', onUpdateExample)
}

module.exports = {
  addHandlers
}
