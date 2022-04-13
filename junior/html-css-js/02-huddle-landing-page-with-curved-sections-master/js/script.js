const btn =  document.querySelector('#btn')
btn.addEventListener('click', handleInputValid)


function handleInputValid(e) {
  e.preventDefault()
  const input = document.querySelector('input')
  const label = document.querySelector('label')
  if(!input.checkValidity()) {
    label.classList.add('err')
  } else {
    label.classList.remove('err')
    input.value = ''
  }
}
