const btn = document.querySelector('.btnMobile')
const navMobile = document.querySelector('.navMobile')

btn.addEventListener('click', activeNavMobile)

function activeNavMobile(e) {
  e.preventDefault()
  navMobile.classList.toggle('active')
}