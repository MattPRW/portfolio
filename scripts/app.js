document.addEventListener('DOMContentLoaded', () => {
  
  function showPacman() {
    document.getElementById("overlay").classList.remove("hidden")
    document.getElementById('pacman-modal').classList.remove("hidden")
  }

  function showScran() {
    document.getElementById("overlay").classList.remove("hidden")
    document.getElementById('scran-modal').classList.remove("hidden")
  }

  function showRekordr() {
    document.getElementById("overlay").classList.remove("hidden")
    document.getElementById('rekordr-modal').classList.remove("hidden")
  }

  function showWhatify() {
    document.getElementById("overlay").classList.remove("hidden")
    document.getElementById('whatify-modal').classList.remove("hidden")
  }

  function hide() {
    document.getElementById("overlay").classList.add("hidden")
    document.getElementById("whatify-modal").classList.add("hidden")
    document.getElementById("rekordr-modal").classList.add("hidden")
    document.getElementById("scran-modal").classList.add("hidden")
    document.getElementById("pacman-modal").classList.add("hidden")
  }

  document.getElementById("overlay").addEventListener('click', hide)
  document.getElementById("pacman").addEventListener('click', showPacman)
  document.getElementById("scran").addEventListener('click', showScran)
  document.getElementById("rekordr").addEventListener('click', showRekordr)
  document.getElementById("whatify").addEventListener('click', showWhatify)
})