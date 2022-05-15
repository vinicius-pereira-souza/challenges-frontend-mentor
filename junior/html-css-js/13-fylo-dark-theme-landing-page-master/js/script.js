const btnForm = document.querySelector('#validEmail')
const input =  document.querySelector('#email')

btnForm.addEventListener("click", validInputValue)

function validInputValue(e) {
  e.preventDefault()
  if(!input.checkValidity()) {
    input.nextElementSibling.classList.add('err')
  } else {
    input.nextElementSibling.classList.remove('err')
    input.value = ''
  }
}