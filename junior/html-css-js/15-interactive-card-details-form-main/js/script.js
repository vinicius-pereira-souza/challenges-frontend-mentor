// Cartão
const nome = document.querySelector(".nomeCard")
const numero = document.querySelector(".cardFrontNum")
const mes = document.querySelector(".mes")
const ano = document.querySelector(".ano")
const numeroBack = document.querySelector("numberBack")
// formulario
const inputs = document.querySelectorAll('input')
const btnSubmit = document.querySelector('.btnSubmit')

btnSubmit.addEventListener("click", handleSubmitForm)

function handleSubmitForm(e) {
  e.preventDefault()

  inputs.forEach(input => {
    if(!input.value) {
      input.classList.add('err')
      input.nextElementSibling.classList.add('active')
    } else {
      input.classList.remove('err')
      input.nextElementSibling.classList.remove('active')
    }
  }) 
}