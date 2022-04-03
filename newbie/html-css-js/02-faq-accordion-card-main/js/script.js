const perguntas = document.querySelectorAll('h2')

perguntas.forEach(pergunta => {
  pergunta.addEventListener('click', handleOpen)
})

function handleOpen(e) {
  const proximoElemento = e.target.nextElementSibling
  e.target.classList.toggle('active')
  proximoElemento.classList.toggle('active')
  
}


// contains