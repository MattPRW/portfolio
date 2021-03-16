document.addEventListener('DOMContentLoaded', () => {
  
  function showProject(project) {
    document.getElementById('overlay').classList.remove('hidden')
    document.getElementById(project).classList.remove('hidden')
  }

  function hide() {
    document.getElementById('overlay').classList.add('hidden')
    document.getElementById('whatify-modal').classList.add('hidden')
    document.getElementById('rekordr-modal').classList.add('hidden')
    document.getElementById('scran-modal').classList.add('hidden')
    document.getElementById('pacman-modal').classList.add('hidden')
  }

  document.getElementById('overlay').addEventListener('click', (hide))

  document.getElementById('pacman').addEventListener('click', () => showProject('pacman-modal'))
  document.getElementById('scran').addEventListener('click', () => showProject('scran-modal'))
  document.getElementById('rekordr').addEventListener('click', () => showProject('rekordr-modal'))
  document.getElementById('whatify').addEventListener('click', () => showProject('whatify-modal'))

})