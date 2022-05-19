const btnBook = document.querySelector('.bookMark')
const btnSelected = document.querySelectorAll('.dataBtn button')
const closeBtnModal = document.querySelector('.containerModalBack button')
const optionSelected = document.querySelectorAll('.optionModal')
console.log(optionSelected)

btnBook.addEventListener('click', handleBtnBookMark)
btnSelected.forEach((btn, i) => {
  if(i < 2) {
    btn.addEventListener('click', handelBtnModal)
  }
})

function handleBtnBookMark(e) {
  const svgIcon = `<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                      <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                    </g>
                  </svg>`
  btnBook.classList.toggle('bookMarkActive')
  if(btnBook.classList.contains('bookMarkActive')) {
    btnBook.innerHTML = svgIcon + 'Bookmarked'
  } else {
    btnBook.innerHTML = svgIcon + 'Bookmark'
  }
}
function handelBtnModal(e) {
  const modalBack = document.querySelector('.modalBackThisProject')
  modalBack.classList.add('modalActive')
}

