const btn = document.querySelector('.btnNav')
btn.addEventListener('click', handleNav)

function handleNav(e) {
  e.preventDefault()
  const navMobile = document.querySelector('.navMobile')
  navMobile.classList.toggle('active')
}