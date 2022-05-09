const btnMobile = document.querySelector('.btnMobile')
const navMobile = document.querySelector('.navList')

btnMobile.addEventListener('click', handlleNavMobile)

function handlleNavMobile(e) {
  e.preventDefault()
  navMobile.classList.toggle('active')
  if(navMobile.classList.contains('active')) {
    btnMobile.classList.add('clicked')
  } else {
    btnMobile.classList.remove('clicked')
  }
}