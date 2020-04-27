'use strict'

const ROOT = 'https://writeyournote.herokuapp.com/'

function saveUserData () {
  const workspace = defineWorkspace()
  const text = document.getElementById("textarea")
    .value
  localStorage.setItem(workspace, text)
}

function retrieveUserData () {
  const workspace = defineWorkspace()
  const notes = localStorage.getItem(workspace)

  if (!notes) return

  document.getElementById("textarea")
    .value = localStorage.getItem(workspace)
}

function defineWorkspace () {
  const REGEX = /\?workspace=(.+)/i
  const workspace = document.URL.match(REGEX)

  if (!workspace) {
    window.alert('Invalid Workspace!')
    window.location.href = ROOT
    return
  }

  return workspace[1]
}
