'use strict'

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
  return document.URL.match(REGEX)[1] || null
}
