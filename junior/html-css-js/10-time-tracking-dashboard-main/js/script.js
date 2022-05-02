const btns = document.querySelectorAll('.btnsData li')
const arrH3 = document.querySelectorAll(".content h3 span")
const arrP = document.querySelectorAll(".content p")

btns.forEach(btn => {
  btn.addEventListener('click', handleClick)
})

function handleClick(e) {
  const btnActive = document.querySelector('li.active')
  const target = e.target
  if(target !== btnActive) {
    target.classList.add('active')
    btnActive.classList.remove('active')
  } 
  fetchGetEAlterarConteudo(target)
}

function fetchGetEAlterarConteudo(btnClicado) {
  fetch('data.json')
  .then(transform => transform.json())
  .then(arr => {
    arr.forEach((obj, i) => {
      const {daily, weekly, monthly} = obj.timeframes
      if(btnClicado.textContent == 'Daily') {
        arrH3[i].innerHTML = `<span>${daily.current}</span>`
        arrP[i].innerText = `Last Week - ${daily.previous}hrs`

      } else if (btnClicado.textContent == 'Weekly') {
        arrH3[i].innerHTML = `<span>${weekly.current}</span>`
        arrP[i].innerText = `Last Week - ${weekly.previous}hrs`

      } else if(btnClicado.textContent == 'Monthly') {
        arrH3[i].innerHTML = `<span>${monthly.current}</span>`
        arrP[i].innerText = `Last Week - ${monthly.previous}hrs`
        
      }
    })
  })
}
