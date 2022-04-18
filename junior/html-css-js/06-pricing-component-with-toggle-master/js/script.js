const btnToggle = document.querySelector('.toggle')
btnToggle.addEventListener("click", handleToggle)

function handleToggle(e) {
  e.preventDefault()
  btnToggle.classList.toggle("active")
  const valorPlanos = document.querySelectorAll('.valorPlanos')
  valorPlanos.forEach(plano => {
    let limparCifra = /\$/
    if(btnToggle.classList.contains("active")) {
      let limpar = plano.textContent.replace(limparCifra, '').replace(/9.99/, '')
      plano.innerHTML = `<span>&dollar;</span>${limpar}.99`
    } else {
      let limpar = plano.textContent.replace(limparCifra, '').replace(/.99/, '')
      plano.innerHTML = `<span>&dollar;</span>${limpar}9.99`
    }
  })
}

