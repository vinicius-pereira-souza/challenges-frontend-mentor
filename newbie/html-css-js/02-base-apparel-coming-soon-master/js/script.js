const btn = document.querySelector('.btn')
const input = document.querySelector('#email')

btn.addEventListener('click', handleClick)

function handleClick(e) {
  e.preventDefault()
  const err = document.querySelector('.err')
  const cll = err.classList
 if(!input.checkValidity()) {
   cll.add('errActive')
   cll.remove('valid')
 } else {
   cll.add('valid')
   cll.remove('errActive')
   err.innerText = 'Email valid'
 }
}

