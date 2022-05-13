const btnsDropList = document.querySelectorAll('.navList > li')

btnsDropList.forEach(btn => {
  btn.addEventListener('click', handleDropList)
})

function handleDropList(e) {
  const target = e.target
  target.classList.toggle('active')
  target.firstElementChild.classList.toggle('active')
  removeClassBtnActive(target)
}

function removeClassBtnActive(btnActive) {
  btnsDropList.forEach(btn => {
    if(btnActive !== btn) {
      btn.classList.remove('active')
      btn.firstElementChild.classList.remove('active')
    }
  })
}

const btnMobile = document.querySelector('.btnNavMobile')
const navMobile = document.querySelector('.nav')

btnMobile.addEventListener('click', handleNavMobile)

function handleNavMobile(e) {
  btnMobile.classList.toggle('btnMobileActive')
  navMobile.classList.toggle('navMobileActive')
}