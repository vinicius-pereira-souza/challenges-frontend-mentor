const btnMobile = document.querySelector("#btnMobile");
const containerNavMobile = document.querySelector(".navContainer");
const header = document.querySelector(".headerContainer");

// adiciona a classe que vai abrir e fechar a barra de navegação
btnMobile.addEventListener("click", handleActiveMobile);

function handleActiveMobile() {
  btnMobile.classList.toggle("btnMobileClose");

  if (btnMobile.classList.contains("btnMobileClose")) {
    containerNavMobile.classList.add("navMobileActive");
  } else {
    containerNavMobile.classList.remove("navMobileActive");
  }
}

// adiciona a classe que vai permiter que o header fique no topo
document.addEventListener("scroll", handlePositionHeader);

function handlePositionHeader(e) {
  const positionScroll = window.window.scrollY;

  if (positionScroll > 0) {
    header.classList.add("positionTop");
  } else {
    header.classList.remove("positionTop");
  }
}
