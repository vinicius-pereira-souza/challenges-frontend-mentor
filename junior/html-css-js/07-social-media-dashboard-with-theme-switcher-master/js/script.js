const btnToggle = document.querySelector('.btnToggle')
const lis = document.querySelectorAll('li')
btnToggle.addEventListener('click', HandledarkModo)

function HandledarkModo(e) {
  const colorBody = document.querySelector('[data-darkMode="colorDarkBlue"]')
  const colorBg = document.querySelector('[data-darkMode="colorBlue"]')
  const colorText = document.querySelectorAll('[data-darkMode="colorText"]')
  const colorbgLi = document.querySelectorAll('[data-darkMode="bgColorLi"]')
  btnToggle.classList.toggle('modeDarkActive')
  if(btnToggle.classList.contains('modeDarkActive')) {
    colorBody.style.backgroundColor = 'hsl(230, 17%, 14%)'
    colorBg.style.backgroundColor = 'hsl(232, 19%, 15%)'
    colorbgLi.forEach(li => {
      li.style.backgroundColor = 'hsl(228, 28%, 20%)'
    })
    colorText.forEach(item => {
      item.style.color = 'hsl(0, 0%, 100%)'
    })
  } else {
    colorBody.style.backgroundColor = 'hsl(0, 0%, 100%)'
    colorBg.style.backgroundColor = 'hsl(225, 100%, 98%)'
    colorbgLi.forEach(li => {
      li.style.backgroundColor = '#f0f3fa'
    })
    colorText.forEach(item => {
      item.style.color = 'hsl(230, 17%, 14%)'
    })
  }
  addClassHover()
}

function addClassHover() {
  lis.forEach(li => {
    if(btnToggle.classList.contains('modeDarkActive')) {
      li.classList.add('modeDarkHover')
      li.classList.remove('modeLightHover')
    } else {
      li.classList.add('modeLightHover')
      li.classList.remove('modeDarkHover')
    }
  })
}

addClassHover()