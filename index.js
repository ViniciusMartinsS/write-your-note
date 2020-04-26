'use strict'

function createWorkspace() {
  const workspace = document.getElementById("workspace")
    .value

  if (!workspace.trim()) {
    window.alert('Invalid Workspace Name! Try again :)')
    return
  }

  const redirect = `${document.URL}notes/index.html?workspace=${workspace}`
  window.location.href = redirect;
}
