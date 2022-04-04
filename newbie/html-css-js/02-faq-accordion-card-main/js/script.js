const listaPerguntas = document.querySelectorAll('h2')

listaPerguntas.forEach(pergunta => {
  pergunta.addEventListener('click', handleAbrir)
})

function handleAbrir(e) {
  const target = e.target
  target.classList.add('active')
  target.nextElementSibling.classList.add('active')
  handleFechar(e.target)
}

function handleFechar(e) {
  const ativo = document.querySelectorAll('h2')
  ativo.forEach(item => {
    if(item !== e) {
      item.classList.remove('active')
      item.nextElementSibling.classList.remove('active')
    }
  })
}
