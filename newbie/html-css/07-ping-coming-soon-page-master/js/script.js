const btn = document.getElementById('enviar')
const input = document.getElementById('email')

btn.addEventListener('click', handleClick)

function handleClick (event) {
  event.preventDefault()
  if(!input.checkValidity()) {
    input.style.borderColor = '#ff5263'
    input.nextElementSibling.classList.add('invalido')
  } else {
    input.style.borderColor = 'green'
    input.nextElementSibling.classList.remove('invalido')
    input.borderColor = '#c2d3ff'
  }
}
