const btn = document.querySelector('button')
const grid = document.querySelector('.gridPerfil')
btn.addEventListener('click', handleVisible)

function handleVisible(e) {
  const lista = document.querySelector('.share')
  e.target.classList.toggle('active')
  lista.classList.toggle('active')
  grid.classList.toggle('sumir')
}