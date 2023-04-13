const btnToggle = document.querySelector(".container_btn_taggle button");
const cardPrices = document.querySelectorAll(".card .number > span");

btnToggle.addEventListener("click", handleToggleClick);

function handleToggleClick(e) {
  btnToggle.classList.toggle("active");

  if (btnToggle.classList.contains("active")) {
    cardPrices[0].textContent = "199.99";
    cardPrices[1].textContent = "249.99";
    cardPrices[2].textContent = "399.99";
  } else {
    addPrices();
  }
}

function addPrices() {
  cardPrices[0].textContent = "19.99";
  cardPrices[1].textContent = "24.99";
  cardPrices[2].textContent = "39.99";
}

addPrices();
