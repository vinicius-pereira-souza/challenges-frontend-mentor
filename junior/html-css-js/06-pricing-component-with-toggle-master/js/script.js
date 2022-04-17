const btnToggle = document.querySelector('.toggle')
btnToggle.addEventListener("click", handleToggle)

function handleToggle(e) {
  e.preventDefault()
  const valorPlanos = document.querySelectorAll('.valorPlanos')
  btnToggle.classList.toggle("active")
  if(btnToggle.classList.contains("active")) {
    valorPlanos.forEach(plano => {
      let planoMensal = plano.textContent.replace('9.99', '').replace('$','')
      plano.innerHTML = `<span>&dollar;</span>${planoMensal}.99`
    })
  } else {
    valorPlanos[0].innerHTML = `<span>&dollar;</span>199.99`
    valorPlanos[1].innerHTML = `<span>&dollar;</span>249.99`
    valorPlanos[2].innerHTML = `<span>&dollar;</span>399.99`
  }
}
