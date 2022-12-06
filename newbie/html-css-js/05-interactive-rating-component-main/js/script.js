const containerOptionsBtns = document.querySelector(".containerSelectBtn");
const containerSelect = document.querySelector(".containerThankYouMessage");
const btns = document.querySelectorAll(".btns button");
const btnSubmit = document.querySelector("#submit");

btns.forEach((btn) => {
  btn.addEventListener("click", handleButtonSelect);
});

btnSubmit.addEventListener("click", handleButtonSubmit);

function handleButtonSelect(e) {
  e.target.classList.toggle("select");

  alternativeClasse(e.target);
}

function alternativeClasse(target) {
  btns.forEach((btn) => {
    if (btn !== target) {
      btn.classList.remove("select");
    }
  });
}

function handleButtonSubmit() {
  const optionSelected = document.querySelector("button.select");
  const optionValue = document.querySelector(".option");

  if (optionSelected) {
    optionValue.textContent = optionSelected.textContent;

    containerOptionsBtns.style.display = "none";
    containerSelect.style.display = "block";
  }
}
