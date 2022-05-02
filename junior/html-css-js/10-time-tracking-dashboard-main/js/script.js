const btns = document.querySelectorAll('.btnsData li')

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
}

function fetchGet() {
  fetch('data.json')
  .then(transformJson => transformJson.json())
  .then(arr => {
    return console.log(arr)
  })
}
