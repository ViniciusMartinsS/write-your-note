'use strict'

function createWorkspace() {
  const REGEX = /(index.html)/i

  const workspace = document.getElementById("workspace")
    .value

  if (!workspace.trim()) {
    window.alert('Invalid Workspace Name! Try again :)')
    return
  }

  const newRoute = `notes/index.html?workspace=${workspace}`
  const redirect = document.URL.replace(REGEX, newRoute)
  window.location.href = redirect;
}
