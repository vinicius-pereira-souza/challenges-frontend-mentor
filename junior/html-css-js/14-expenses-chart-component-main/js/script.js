async function getFetch (){
  const getData = await fetch('data.json')
  const jsonFormated = await getData.json()
  createAndInsert(jsonFormated)
}
// column
function createAndInsert(arrDatas) {
  const container = document.querySelectorAll('.columnContainer')
  const columns = document.querySelectorAll('.column')

  arrDatas.forEach((data, i) => {
    const createSpan = document.createElement('span')
    const createp = document.createElement('p')

    createSpan.classList.add('data')
    createp.classList.add('day')

    createSpan.innerText = `$${data.amount}`
    createp.innerText = data.day

    container[i].insertBefore(createSpan, columns[i])
    container[i].appendChild(createp)
  })
}
const columns = document.querySelectorAll('.column')
columns.forEach(column => {
  column.addEventListener('click', handleClick);
})

function handleClick(e) {
  const valueSpan = e.target.previousSibling
  const column = valueSpan.nextElementSibling

  valueSpan.classList.toggle('selected')
  column.classList.toggle('selectedColunm')

  handleSelected(valueSpan)
}

function handleSelected(selectedItem) {
  const spans = document.querySelectorAll('.selected')
  spans.forEach(span => {
    if(span !== selectedItem) {
      span.classList.remove('selected')
      span.nextElementSibling.classList.remove('selectedColunm')
    }
  })

}
getFetch()