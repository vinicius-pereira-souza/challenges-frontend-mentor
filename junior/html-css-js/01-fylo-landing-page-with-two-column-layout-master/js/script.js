const btns = document.querySelectorAll('button')

btns.forEach(btn => {
  btn.addEventListener('click', handleClick) 
})

function handleClick(e) {
  e.preventDefault()
  const target = e.target
  const input = target.parentNode.querySelector('input')
  const label = target.parentNode.querySelector('label')
  if(!input.checkValidity()) {
    label.classList.add('err')
    input.classList.add('err')
  } else {
    label.classList.remove('err')
  }
}

// parentNode