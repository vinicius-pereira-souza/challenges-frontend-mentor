const btnBook = document.querySelector('.bookMark')

btnBook.addEventListener('click', handleBtnBookMark)

function handleBtnBookMark(e) {
  btnBook.classList.toggle('bookMarkActive')
  if(btnBook.classList.contains('bookMarkActive')){
    btnBook.innerText =  'Bookmarked'
  } else {
    btnBook.innerText =  'Bookmark'
  }
}