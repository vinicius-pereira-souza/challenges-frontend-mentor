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
  btnMobile.classList.toggle('active')
}