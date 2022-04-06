const btn = document.querySelector('.btn')

btn.addEventListener("click", handleClick)

function handleClick(e) {
  e.preventDefault()
  const input = document.getElementById('email')
  const messageErro = document.querySelector('.mensage')
  if(!input.checkValidity()) {
    messageErro.classList.add('err')
  } else {
    messageErro.classList.remove('err')
    input.classList.add('valid')
  }
}