const btnMobile = document.querySelector('.btnMobile')
const lis = document.querySelectorAll('.subUl')

lis.forEach(li => {
  li.addEventListener('click', handleDropDown)
})

function handleDropDown(e) {
  const subList = e.target.querySelector('.subList')
  const target = e.target
  target.classList.toggle('up')
  subList.classList.toggle('dropDownOpened')
}


btnMobile.addEventListener('click', handleClick)
function handleClick(e) {
  const navMobile = document.querySelector(".navMobile")
  btnMobile.classList.toggle('active')
  if(btnMobile.classList.contains('active')) {
    navMobile.classList.add('active')
  } else {
    navMobile.classList.remove('active')
  }
}