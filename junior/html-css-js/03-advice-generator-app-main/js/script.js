const btn = document.querySelector('.btn')
const citeId = document.querySelector('.numberId')
const citeContent = document.querySelector('.cite')

btn.addEventListener('click', handleCite)

function handleCite(e) {
  e.preventDefault()
  const randomNumber = Math.floor(Math.random() * (200 - 1 + 1)) + 1;
  fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
  .then(r => r.json())
  .then(obj => {
    citeId.innerText = obj.slip.id
    citeContent.innerText = obj.slip.advice
  })
}
