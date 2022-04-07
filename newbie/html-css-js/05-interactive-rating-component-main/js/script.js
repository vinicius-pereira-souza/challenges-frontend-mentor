const btn = document.querySelector('.btn')
const listBtn = document.querySelectorAll('li')

listBtn.forEach(item => {
  item.addEventListener('click', handleActive)
})

function handleActive(e) {
  e.target.classList.add('active')
  removerClasse(e.target)
}

function removerClasse(itenClick) {
  listBtn.forEach(item => {
    if(item != itenClick) {
      item.classList.remove('active')
    }
  })
} 

btn.addEventListener('click', aparecerModal)

function aparecerModal(e) {
  const itemAtivo = document.querySelector('li.active')
  const modal = document.querySelector('.content')
  const valorSelecionado = document.querySelector('.numeroSelecionado')

  modal.classList.add('aparecer')
  valorSelecionado.innerText = itemAtivo.textContent
}