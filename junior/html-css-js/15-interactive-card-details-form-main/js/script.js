const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
  input.addEventListener('change', handleChange)
})

function handleChange (e) {
  e.preventDefault()

  const nameCard = document.querySelector('.cardName')
  const numberCardFront = document.querySelector('.cardNumber')
  const [ dia, mes ] = document.querySelectorAll('.flexDataCard span')
  const numberCardBack = document.querySelector('.back span')
  
  if(e.target.id == 'nameCard') {
    handleCleanName(e.target, nameCard)

  } else if(e.target.id == 'numberCard') {
    handleCardNumber(e.target, numberCardFront)
  }

}

function handleCleanName(input, item) {
  if(input.value.search(/\d/g)) {
    const cleanName = input.value.replaceAll(/\d/g, '')
    item.innerText = cleanName

  } else {
    item.innerText = input.value
  }

  if(input.value == '') {
    item.innerText = 'Jane Appleseed'
  }
}

function handleCardNumber(input, item) {
  const arr = input.value.split(/(\d{4})/g)
  const newArr = arr.map((item) => item.replace("", " "))
  const cleanStr = newArr.toString().replaceAll(",", '')

  item.innerText = cleanStr
}